"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface CreateBookingParams {
  serviceId: string
  date: Date
  phone?: string
}

export const createBooking = async (params: CreateBookingParams) => {
  const session = await getServerSession(authOptions)
  if (!session || !(session.user as any)?.id) {
    throw new Error("Usuário não autenticado")
  }
  const userId = (session.user as any).id

  const booking = await db.booking.create({
    data: { serviceId: params.serviceId, date: params.date, userId, phone: params.phone ?? null },
    include: { user: true, service: true },
  })
  try {
    const { publish } = await import("../lib/sse")
    publish("booking:created", booking)
  } catch (e) {
    // ignore
  }
  try {
    revalidatePath("/barbershops/[id]")
    revalidatePath("/bookings")
    revalidatePath("/admin/bookings")
  } catch (e) {
    // ignore
  }
}
