"use client"

import { Select } from "@/app/_components/ui/select"
import { Input } from "@/app/_components/ui/input"
import { Button } from "@/app/_components/ui/button"
import { BookingStatus, BarbershopService } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

interface BookingFiltersProps {
  services: Array<{
    id: string
    name: string
    barbershop: {
      name: string
    }
  }>
}

export const BookingFilters = ({ services }: BookingFiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [date, setDate] = useState(searchParams.get("date") || "")
  const [serviceId, setServiceId] = useState(searchParams.get("serviceId") || "")
  const [status, setStatus] = useState<BookingStatus | "">(
    (searchParams.get("status") as BookingStatus) || ""
  )

  const handleFilter = () => {
    const params = new URLSearchParams()

    if (date) params.set("date", date)
    if (serviceId) params.set("serviceId", serviceId)
    if (status) params.set("status", status)

    router.push(`/admin/dashboard?${params.toString()}`)
  }

  const handleClear = () => {
    setDate("")
    setServiceId("")
    setStatus("")
    router.push("/admin/dashboard")
  }

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <h3 className="text-lg font-semibold">Filtros</h3>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Data</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Serviço</label>
          <Select
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
          >
            <option value="">Todos os serviços</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.barbershop.name}
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as BookingStatus | "")}
          >
            <option value="">Todos os status</option>
            <option value={BookingStatus.CONFIRMADO}>Confirmado</option>
            <option value={BookingStatus.CONCLUIDO}>Concluído</option>
            <option value={BookingStatus.CANCELADO}>Cancelado</option>
          </Select>
        </div>

        <div className="flex items-end gap-2">
          <Button onClick={handleFilter} className="flex-1">
            Filtrar
          </Button>
          <Button onClick={handleClear} variant="outline">
            Limpar
          </Button>
        </div>
      </div>
    </div>
  )
}
