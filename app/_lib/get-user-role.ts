"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

export const getUserRole = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return null
  }
  return (session.user as any).role || "USER"
}
