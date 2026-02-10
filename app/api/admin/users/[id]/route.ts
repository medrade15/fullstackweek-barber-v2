import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const patchSchema = z.object({
  name: z.string().optional(),
  role: z.enum(["USER", "ADMIN"]).optional(),
})

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    const body = await req.json()
    const data = patchSchema.parse(body)
    const user = await db.user.update({
      where: { id: params.id },
      data: { name: data.name ?? undefined, role: data.role ?? undefined },
    })
    try { revalidatePath("/admin/users") } catch {}
    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Invalid" }, { status: 400 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  try {
    await db.user.delete({ where: { id: params.id } })
    try { revalidatePath("/admin/users") } catch {}
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Delete failed" }, { status: 400 })
  }
}

