"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { db } from "../_lib/prisma"
import { BookingStatus } from "@prisma/client"

export const getConfirmedBookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return []
  }
  return db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      status: BookingStatus.CONFIRMADO,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })
}
