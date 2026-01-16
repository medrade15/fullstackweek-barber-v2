"use server"

import { db } from "../_lib/prisma"

export const getAllServices = async () => {
  return db.barbershopService.findMany({
    select: {
      id: true,
      name: true,
      barbershop: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  })
}
