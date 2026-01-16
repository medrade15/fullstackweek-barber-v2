"use server"

import { db } from "../_lib/prisma"
import { BookingStatus } from "@prisma/client"

export const getDashboardStats = async () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const endOfToday = new Date(today)
  endOfToday.setHours(23, 59, 59, 999)

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999)

  // Agendamentos do dia
  const bookingsToday = await db.booking.count({
    where: {
      date: {
        gte: today,
        lte: endOfToday,
      },
      status: {
        not: BookingStatus.CANCELADO,
      },
    },
  })

  // Agendamentos do mês
  const bookingsMonth = await db.booking.count({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      status: {
        not: BookingStatus.CANCELADO,
      },
    },
  })

  // Faturamento estimado do mês (somente concluídos)
  const bookingsConcludedMonth = await db.booking.findMany({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      status: BookingStatus.CONCLUIDO,
    },
    include: {
      service: {
        select: {
          price: true,
        },
      },
    },
  })

  const estimatedRevenue = bookingsConcludedMonth.reduce((total, booking) => {
    return total + Number(booking.service.price)
  }, 0)

  return {
    bookingsToday,
    bookingsMonth,
    estimatedRevenue,
  }
}
