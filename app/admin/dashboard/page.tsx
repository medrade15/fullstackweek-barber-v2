import { requireAdmin } from "@/app/_lib/admin"
import { getDashboardStats } from "@/app/_data/get-dashboard-stats"
import { getAllBookings } from "@/app/_data/get-all-bookings"
import { getAllServices } from "@/app/_data/get-all-services"
import { DashboardCards } from "./_components/dashboard-cards"
import { BookingFilters } from "./_components/booking-filters"
import { BookingTable } from "./_components/booking-table"
import Header from "@/app/_components/header"
import { BookingStatus } from "@prisma/client"
import { Suspense } from "react"

interface DashboardPageProps {
  searchParams: Promise<{
    date?: string
    serviceId?: string
    status?: BookingStatus
  }> | {
    date?: string
    serviceId?: string
    status?: BookingStatus
  }
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  // Verifica se o usuário é admin/owner e redireciona se não for
  await requireAdmin()

  // Resolve searchParams se for Promise (Next.js 15+)
  const params = searchParams instanceof Promise ? await searchParams : searchParams

  // Busca estatísticas do dashboard
  const stats = await getDashboardStats()

  // Prepara parâmetros de filtro
  const filterParams: {
    date?: Date
    serviceId?: string
    status?: BookingStatus
  } = {}

  if (params.date) {
    filterParams.date = new Date(params.date)
  }

  if (params.serviceId) {
    filterParams.serviceId = params.serviceId
  }

  if (params.status) {
    filterParams.status = params.status
  }

  // Busca agendamentos e serviços
  const [bookings, services] = await Promise.all([
    getAllBookings(filterParams),
    getAllServices(),
  ])

  return (
    <>
      <Header />
      <div className="space-y-6 p-5">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <p className="text-muted-foreground">
            Gerencie todos os agendamentos da barbearia
          </p>
        </div>

        {/* Cards de Resumo */}
        <DashboardCards
          bookingsToday={stats.bookingsToday}
          bookingsMonth={stats.bookingsMonth}
          estimatedRevenue={stats.estimatedRevenue}
        />

        {/* Filtros */}
        <Suspense fallback={<div className="rounded-lg border bg-card p-4">Carregando filtros...</div>}>
          <BookingFilters services={services} />
        </Suspense>

        {/* Tabela de Agendamentos */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Agendamentos</h2>
          <BookingTable bookings={bookings} />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
