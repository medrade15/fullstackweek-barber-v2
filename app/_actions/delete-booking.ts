"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteBooking = async (bookingId: string) => {
  const booking = await db.booking.delete({
    where: {
      id: bookingId,
    },
  })
  try {
    const { publish } = await import("../lib/sse")
    publish("booking:deleted", booking)
  } catch (e) {
    // ignore
  }
  revalidatePath("/bookings")
}
