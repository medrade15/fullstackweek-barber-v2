import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const bodySchema = z.object({
  action: z.enum(["confirm", "cancel", "reschedule", "setStatus"]),
  date: z.string().optional(),
  notes: z.string().optional(),
  status: z.string().optional(),
})

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: any
  try {
    body = await request.json()
    bodySchema.parse(body)
  } catch (e) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  try {
    // fetch current booking to capture previous status
    const oldBooking = await db.booking.findUnique({ where: { id: params.id } })
    if (!oldBooking) return NextResponse.json({ error: "Not found" }, { status: 404 })

    let data: any = {}
    if (body.action === "confirm") {
      data.status = "CONFIRMADO"
    } else if (body.action === "cancel") {
      data.status = "CANCELADO"
      data.notes = body.notes
    } else if (body.action === "reschedule") {
      data.date = new Date(body.date as string)
      data.status = "CONFIRMADO"
    } else if (body.action === "setStatus") {
      data.status = body.status
    }

    data.updatedBy = (session.user as any).id

    // perform update and insert history atomically
    const [booking] = await db.$transaction([
      db.booking.update({
        where: { id: params.id },
        data,
        include: { user: true, service: true },
      }),
      db.bookingHistory.create({
        data: {
          bookingId: params.id,
          previousStatus: oldBooking.status,
          newStatus: data.status ?? oldBooking.status,
          byUserId: (session.user as any).id,
          notes: body.notes ?? oldBooking.notes ?? undefined,
        },
      }),
    ])

    // publish SSE event with booking and previousStatus
    try {
      const { publish } = await import("@/app/lib/sse")
      publish("booking:updated", { booking, previousStatus: oldBooking.status })
    } catch (e) {
      console.error("SSE publish failed", e)
    }
    // revalidate admin bookings page so server components update
    try {
      revalidatePath("/admin/bookings")
    } catch (e) {
      console.error("revalidatePath failed", e)
    }

    return NextResponse.json({ data: booking })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Update failed" }, { status: 500 })
  }
}

