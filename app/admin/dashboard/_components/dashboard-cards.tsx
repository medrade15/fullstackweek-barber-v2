import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card"

interface DashboardCardsProps {
  bookingsToday: number
  bookingsMonth: number
  estimatedRevenue: number
}

export const DashboardCards = ({
  bookingsToday,
  bookingsMonth,
  estimatedRevenue,
}: DashboardCardsProps) => {
  const formattedRevenue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(estimatedRevenue)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Agendamentos Hoje
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{bookingsToday}</div>
          <p className="text-xs text-muted-foreground">
            Total de agendamentos confirmados do dia
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Agendamentos do Mês
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{bookingsMonth}</div>
          <p className="text-xs text-muted-foreground">
            Total de agendamentos do mês atual
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Faturamento Estimado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formattedRevenue}</div>
          <p className="text-xs text-muted-foreground">
            Faturamento do mês (apenas concluídos)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
