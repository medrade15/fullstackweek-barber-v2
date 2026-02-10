import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const url = new URL(request.url)
  const status = url.searchParams.get("status") || undefined
  const serviceId = url.searchParams.get("serviceId") || undefined
  const q = url.searchParams.get("q") || undefined
  const from = url.searchParams.get("from")
  const to = url.searchParams.get("to")
  const take = Number(url.searchParams.get("take") || 20)
  const skip = Number(url.searchParams.get("skip") || 0)

  try {
    const where: any = {}
    if (status) where.status = status
    if (serviceId) where.serviceId = serviceId
    if (from || to) {
      where.date = {}
      if (from) where.date.gte = new Date(from)
      if (to) where.date.lte = new Date(to)
    }
    if (q) {
      where.OR = [
        { user: { name: { contains: q, mode: "insensitive" } } },
        { user: { email: { contains: q, mode: "insensitive" } } },
        { service: { name: { contains: q, mode: "insensitive" } } },
      ]
    }

    const [totalCount, bookings] = await Promise.all([
      db.booking.count({ where }),
      db.booking.findMany({
        where,
        include: { user: true, service: true },
        orderBy: { date: "desc" },
        take,
        skip,
      }),
    ])

    // compute revenue for confirmed bookings (sum of service.price)
    const confirmed = await db.booking.findMany({
      where: { ...where, status: "CONFIRMADO" },
      include: { service: true },
    })
    const revenue = confirmed.reduce((sum, b) => sum + Number(b.service?.price ?? 0), 0)

    return NextResponse.json({ data: bookings, totalCount, revenue })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}

