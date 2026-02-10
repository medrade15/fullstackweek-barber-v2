import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"
import { z } from "zod"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const users = await db.user.findMany({
    select: { id: true, name: true, email: true, role: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 500,
  })
  return NextResponse.json(users)
}

const bodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  role: z.enum(["USER", "ADMIN"]).optional(),
})

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const body = await req.json()
    const data = bodySchema.parse(body)
    const exists = await db.user.findUnique({ where: { email: data.email } })
    if (exists) return NextResponse.json({ error: "User exists" }, { status: 400 })
    const user = await db.user.create({ data: { email: data.email, name: data.name ?? null, role: data.role ?? "USER" } })
    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Invalid" }, { status: 400 })
  }
}

