import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions } from "next-auth"
import { db } from "./prisma"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

const providers = []

// add Google provider if env vars present (single auth method)
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  )
}

// Admin credentials provider (email + password)
providers.push(
  CredentialsProvider({
    name: "Admin Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null
      const user = await db.user.findUnique({ where: { email: credentials.email } })
      if (!user || !user.hashedPassword) return null
      const isValid = await bcrypt.compare(credentials.password, user.hashedPassword)
      if (!isValid) return null
      // ensure admin role
      return user
    },
  }),
)

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers,
  // Use JWT strategy so middleware (withAuth) can read token and role without extra fetches
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // include id and role in token at sign-in
      if (user) {
        try {
          // prefer explicit fields, but fall back to DB lookup for role
          if ((user as any).id) {
            (token as any).id = (user as any).id
          }
          // try to read simple role safely; if it fails, fetch from DB
          try {
            const maybeRole = (user as any).role
            if (maybeRole !== undefined) {
              (token as any).role = typeof maybeRole === "string" ? maybeRole : String(maybeRole)
            } else if ((user as any).email) {
              const dbUser = await (db as any).user.findUnique({ where: { email: (user as any).email } })
              if (dbUser) (token as any).role = (dbUser as any).role
            }
          } catch (inner) {
            // fallback to DB lookup by id
            if ((user as any).id) {
              const dbUser = await (db as any).user.findUnique({ where: { id: (user as any).id } })
              if (dbUser) (token as any).role = (dbUser as any).role
            }
          }
        } catch (e) {
          console.error("jwt callback: error resolving user/role", e, user)
        }
      }
      return token
    },
    async session({ session, token }) {
      // populate session from token (works on subsequent requests)
      try {
        session.user = {
          ...session.user,
          ...(token?.id ? { id: (token as any).id } : {}),
          ...(token?.role ? { role: (token as any).role } : {}),
        } as any
      } catch (e) {
        console.error("session callback error", e, token)
      }
      return session
    },
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      // log sign-in payload to help debug OAuth callback issues in dev
      try {
        console.log("NEXTAUTH event signIn:", { user, account: account?.provider, isNewUser })
      } catch (e) {
        console.error("signIn event log failed", e)
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
