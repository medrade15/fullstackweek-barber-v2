"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { redirect } from "next/navigation"

export const requireAdmin = async () => {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect("/")
  }

  const userRole = (session.user as any).role

  if (userRole !== "ADMIN" && userRole !== "OWNER") {
    redirect("/")
  }

  return session
}
