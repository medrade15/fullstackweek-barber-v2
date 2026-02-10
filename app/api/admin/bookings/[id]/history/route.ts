import { NextResponse } from "next/server"
import { db } from "@/app/_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const histories = await db.bookingHistory.findMany({
      where: { bookingId: params.id },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json({ data: histories })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 })
  }
}

