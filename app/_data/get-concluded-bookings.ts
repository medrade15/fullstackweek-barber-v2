"use server"

import { getServerSession } from "next-auth"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"
import { BookingStatus } from "@prisma/client"

export const getConcludedBookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) return []
  return db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      status: BookingStatus.CONCLUIDO,
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  })
}
