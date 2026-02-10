import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ session })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

