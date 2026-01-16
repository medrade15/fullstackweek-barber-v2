"use server"

import { db } from "../_lib/prisma"
import { BookingStatus } from "@prisma/client"

interface GetAllBookingsParams {
  date?: Date
  serviceId?: string
  status?: BookingStatus
}

export const getAllBookings = async (params?: GetAllBookingsParams) => {
  const where: any = {}

  if (params?.date) {
    const startOfDay = new Date(params.date)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(params.date)
    endOfDay.setHours(23, 59, 59, 999)

    where.date = {
      gte: startOfDay,
      lte: endOfDay,
    }
  }

  if (params?.serviceId) {
    where.serviceId = params.serviceId
  }

  if (params?.status) {
    where.status = params.status
  }

  return db.booking.findMany({
    where,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      service: {
        include: {
          barbershop: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  })
}
