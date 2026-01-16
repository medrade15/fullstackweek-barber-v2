import { db } from "@/app/_lib/prisma"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"

export async function GET() {
  try {
    // Verifica autenticação
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Não autenticado" },
        { status: 401 }
      )
    }

    // Verifica se é admin
    const userRole = (session.user as any).role
    if (userRole !== "ADMIN" && userRole !== "OWNER") {
      return NextResponse.json(
        { error: "Acesso negado" },
        { status: 403 }
      )
    }

    // Busca todos os agendamentos incluindo os dados do cliente e do serviço
    const bookings = await db.booking.findMany({
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

    return NextResponse.json(bookings)
  } catch (error) {
    console.error("ERRO_AO_BUSCAR_AGENDAMENTOS:", error)
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}
