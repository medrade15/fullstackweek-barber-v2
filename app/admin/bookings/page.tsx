import Header from "@/app/_components/header"
import AdminHeader from "@/app/_components/admin-header"
import { db } from "@/app/_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { notFound, redirect } from "next/navigation"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import AdminActions from "./admin-actions.client"
import AdminSubscriber from "./admin-subscriber.client"
import dynamic from "next/dynamic"
const BookingTable = dynamic(() => import("./BookingTable.client"), { ssr: false })

const AdminBookingsPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    // if not admin redirect to home
    return redirect("/")
  }

  const bookings = await db.booking.findMany({
    include: { user: true, service: true },
    orderBy: { date: "desc" },
    take: 100,
  })

  return (
    <div>
      <AdminSubscriber />
      <AdminHeader />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Painel Administrativo — Agendamentos</h1>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          {(() => {
            const total = bookings.length
            const confirmed = bookings.filter((b) => b.status === "CONFIRMADO").length
            const cancelled = bookings.filter((b) => b.status === "CANCELADO").length
            const concluded = bookings.filter((b) => b.status === "CONCLUIDO").length
            const pending = Math.max(0, total - confirmed - cancelled - concluded)
            return (
              <>
                <div className="bg-card rounded p-4 shadow">
                  <p className="text-sm text-gray-400">Total de agendamentos</p>
                  <p className="text-2xl font-bold">{total}</p>
                </div>
                <div className="bg-card rounded p-4 shadow">
                  <p className="text-sm text-gray-400">Pendentes</p>
                  <p className="text-2xl font-bold">{pending}</p>
                </div>
                <div className="bg-card rounded p-4 shadow">
                  <p className="text-sm text-gray-400">Confirmados</p>
                  <p className="text-2xl font-bold text-green-500">{confirmed}</p>
                </div>
                <div className="bg-card rounded p-4 shadow">
                  <p className="text-sm text-gray-400">Cancelados</p>
                  <p className="text-2xl font-bold text-red-500">{cancelled}</p>
                </div>
              </>
            )
          })()}
        </div>

        {bookings.length === 0 ? (
          <p className="text-sm text-gray-500">Nenhum agendamento encontrado.</p>
        ) : (
          <div>
            {/* render client-side table for interactivity */}
            <BookingTable bookings={JSON.parse(JSON.stringify(bookings))} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminBookingsPage
