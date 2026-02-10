"use client"
import React, { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/app/_components/ui/button"

type Booking = {
  id: string
  date: string
  status: string
  notes?: string | null
  updatedBy?: string | null
  phone?: string | null
  user?: { name?: string | null; email?: string | null }
  service?: { name?: string | null; price?: number | null }
}

export default function BookingTable({ bookings }: { bookings: Booking[] }) {
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("")
  const [fromDate, setFromDate] = useState<string>("")
  const [toDate, setToDate] = useState<string>("")
  const [items, setItems] = useState<Booking[]>(bookings || [])
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [selected, setSelected] = useState<Booking | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const filtered = useMemo(() => {
    return items.filter((b) => {
      // date range filter
      if (fromDate) {
        const fromD = new Date(fromDate)
        if (new Date(b.date) < fromD) return false
      }
      if (toDate) {
        const toD = new Date(toDate)
        toD.setHours(23, 59, 59, 999)
        if (new Date(b.date) > toD) return false
      }
      const q = query.toLowerCase()
      if (statusFilter && b.status !== statusFilter) return false
      if (!q) return true
      return (
        (b.user?.name || "")?.toLowerCase().includes(q) ||
        (b.user?.email || "")?.toLowerCase().includes(q) ||
        (b.service?.name || "")?.toLowerCase().includes(q)
      )
    })
  }, [items, query, statusFilter])

  const doAction = async (id: string, action: string) => {
    if (!confirm(`Confirma ação "${action}" no agendamento ${id}?`)) return
    try {
      setLoadingId(id)
      const body: any = { action }
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Erro")
      // update local item
      setItems((prev) => prev.map((p) => (p.id === id ? { ...p, ...(data.data || {}) } : p)))
      alert("Operação realizada")
    } catch (e: any) {
      alert("Erro: " + (e.message || e))
    } finally {
      setLoadingId(null)
    }
  }

  // SSE updates: listen for booking-event and update table accordingly
  React.useEffect(() => {
    const handler = (e: any) => {
      const payload = e.detail
      if (!payload || !payload.event) return
      const ev = payload.event
      const data = payload.payload ?? payload
      if (ev === "booking:created") {
        setItems((prev) => [data, ...prev])
      } else if (ev === "booking:deleted") {
        setItems((prev) => prev.filter((i) => i.id !== data.id))
      } else if (ev === "booking:updated") {
        const booking = data.booking ?? data
        setItems((prev) => prev.map((i) => (i.id === booking.id ? booking : i)))
      }
    }
    window.addEventListener("booking-event", handler)
    return () => window.removeEventListener("booking-event", handler)
  }, [])

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => {
            const today = new Date()
            const yyyy = today.getFullYear()
            const mm = String(today.getMonth() + 1).padStart(2, "0")
            const dd = String(today.getDate()).padStart(2, "0")
            setFromDate(`${yyyy}-${mm}-${dd}`)
            setToDate(`${yyyy}-${mm}-${dd}`)
            setPage(1)
          }}
          className="px-3 py-1 rounded text-sm border border-input bg-card text-card-foreground hover:bg-primary/5"
          aria-label="Filtrar hoje"
        >
          Hoje
        </button>
        <button
          onClick={() => { setFromDate(""); setToDate(""); setPage(1) }}
          className="px-3 py-1 rounded text-sm border border-input bg-card text-card-foreground hover:bg-primary/5"
          aria-label="Limpar filtros"
        >
          Limpar
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-500">De</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value); setPage(1);
              }}
              className="w-40 rounded px-3 py-2 border border-input bg-card text-card-foreground"
            />
            <label className="text-xs text-gray-500">Até</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value); setPage(1);
              }}
              className="w-40 rounded px-3 py-2 border border-input bg-card text-card-foreground"
            />
          </div>
          <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar cliente, email ou serviço..."
            className="border border-input rounded px-3 py-2 w-full md:w-[360px] bg-card text-card-foreground"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-input rounded px-3 py-2 bg-card text-card-foreground"
          >
            <option value="">Todos</option>
            <option value="CONFIRMADO">Confirmado</option>
            <option value="CANCELADO">Cancelado</option>
            <option value="CONCLUIDO">Concluído</option>
          </select>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1) }}
            className="border border-input rounded px-3 py-2 bg-card text-card-foreground"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          </div>
          <div className="flex items-center gap-2">
            <button
            onClick={() => {
                // export filtered to CSV (improved formatting)
                const rows = filtered.map((b) => ({
                  id: b.id,
                  client: b.user?.name || b.user?.email || "",
                  email: b.user?.email || "",
                  phone: b.phone || "",
                  service: b.service?.name || "",
                  date: new Date(b.date).toLocaleString("pt-BR"),
                  status: b.status,
                  price: typeof b.service?.price === "number" ? Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(b.service?.price)) : "",
                  notes: b.notes ?? "",
                }))
                const headers = ["id","client","email","phone","service","date","status","price","notes"]
                const csvRows = [headers.join(",")]
                for (const r of rows) {
                  csvRows.push(headers.map(h => {
                    const v = (r as any)[h] ?? ""
                    const s = String(v).replace(/"/g, '""')
                    return `"${s}"`
                  }).join(","))
                }
                // add BOM for Excel compatibility
                const csvContent = "\uFEFF" + csvRows.join("\n")
                const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
                const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0,19)
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = `bookings_export_${timestamp}.csv`
                document.body.appendChild(a)
                a.click()
                a.remove()
                URL.revokeObjectURL(url)
              }}
              className="px-3 py-2 bg-primary text-white rounded"
            >
              Exportar CSV
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-500">{filtered.length} agendamentos</div>
      </div>

      <div className="overflow-auto bg-card rounded shadow">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="px-3 py-2">Cliente</th>
              <th className="px-3 py-2">Serviço</th>
              <th className="px-3 py-2">Data</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice((page-1)*pageSize, page*pageSize).map((b) => (
                <tr key={b.id} className="border-t">
                <td className="px-3 py-2">
                  <div className="font-medium">{b.user?.name || b.user?.email}</div>
                  <div className="text-xs text-gray-500">{b.user?.email}</div>
                </td>
                <td className="px-3 py-2">{b.phone || "—"}</td>
                <td className="px-3 py-2">{b.service?.name}</td>
                <td className="px-3 py-2">{new Date(b.date).toLocaleString()}</td>
                <td className="px-3 py-2">{b.status}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" onClick={() => setSelected(b)}>Ver</Button>
                    <Button
                      variant="default"
                      onClick={() => doAction(b.id, "confirm")}
                      disabled={loadingId === b.id || b.status === "CONFIRMADO"}
                    >
                      Confirmar
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => doAction(b.id, "cancel")}
                      disabled={loadingId === b.id || b.status === "CANCELADO"}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const date = prompt("Nova data (YYYY-MM-DD HH:mm):")
                        if (!date) return
                        // send reschedule with date
                        doAction(b.id, "reschedule")
                      }}
                    >
                      Remarcar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">Página {page} de {Math.max(1, Math.ceil(filtered.length / pageSize))}</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => setPage((p)=>Math.max(1,p-1))} disabled={page===1}>Anterior</Button>
          <Button variant="ghost" onClick={() => setPage((p)=>p+1)} disabled={page*pageSize >= filtered.length}>Próxima</Button>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-card text-card-foreground rounded p-6 w-[90%] max-w-2xl">
            <h3 className="text-lg font-bold mb-2">Detalhes do Agendamento</h3>
            <p><strong>Cliente:</strong> {selected.user?.name || selected.user?.email}</p>
            <p><strong>Telefone:</strong> {selected.phone || "—"}</p>
            <p><strong>Serviço:</strong> {selected.service?.name}</p>
            <p><strong>Data:</strong> {new Date(selected.date).toLocaleString()}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Notas:</strong> {selected.notes || "—"}</p>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setSelected(null)} className="px-3 py-1 rounded border">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

