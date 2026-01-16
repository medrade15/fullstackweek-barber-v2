import { Badge } from "@/app/_components/ui/badge"
import { BookingStatus } from "@prisma/client"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Prisma } from "@prisma/client"

type BookingWithRelations = Prisma.BookingGetPayload<{
  include: {
    user: {
      select: {
        id: true
        name: true
        email: true
      }
    }
    service: {
      include: {
        barbershop: {
          select: {
            id: true
            name: true
          }
        }
      }
    }
  }
}>

interface BookingTableProps {
  bookings: BookingWithRelations[]
}

const statusVariant = (status: BookingStatus) => {
  switch (status) {
    case BookingStatus.CONFIRMADO:
      return "default"
    case BookingStatus.CONCLUIDO:
      return "secondary"
    case BookingStatus.CANCELADO:
      return "destructive"
    default:
      return "outline"
  }
}

const statusLabel = (status: BookingStatus) => {
  switch (status) {
    case BookingStatus.CONFIRMADO:
      return "Confirmado"
    case BookingStatus.CONCLUIDO:
      return "Concluído"
    case BookingStatus.CANCELADO:
      return "Cancelado"
    default:
      return status
  }
}

export const BookingTable = ({ bookings }: BookingTableProps) => {
  if (bookings.length === 0) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Nenhum agendamento encontrado com os filtros selecionados.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Cliente
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Serviço
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Data e Horário
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b last:border-b-0">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">{booking.user.name || "Sem nome"}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.user.email}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">{booking.service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.service.barbershop.name}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">
                      {format(booking.date, "dd/MM/yyyy", { locale: ptBR })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(booking.date, "HH:mm", { locale: ptBR })}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={statusVariant(booking.status)}>
                    {statusLabel(booking.status)}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
