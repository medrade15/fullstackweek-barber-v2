"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { BookingStatus } from "@prisma/client"

export const deleteBooking = async (bookingId: string) => {
  await db.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status: BookingStatus.CANCELADO,
    },
  })
  revalidatePath("/bookings")
  revalidatePath("/admin/dashboard")
}
