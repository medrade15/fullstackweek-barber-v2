import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname
        // protect admin routes: require role ADMIN, but allow /admin/login
        if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
          return !!token && (token as any).role === "ADMIN"
        }
        // protect client bookings page: require authenticated user
        if (pathname.startsWith("/bookings")) {
          return !!token
        }
        return true
      },
    },
  },
)

export const config = { matcher: ["/admin/:path*", "/bookings/:path*"] }

