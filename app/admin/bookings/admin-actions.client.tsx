"use client"
import React, { useState } from "react"

export default function AdminActions({
  bookingId,
  currentStatus,
}: {
  bookingId: string
  currentStatus: string
}) {
  const [loading, setLoading] = useState(false)

  const doAction = async (action: string) => {
    const payload: any = { action }
    if (action === "reschedule") {
      const date = prompt("Insira nova data/hora (YYYY-MM-DD HH:mm):")
      if (!date) return
      payload.date = new Date(date).toISOString()
    }
    if (action === "cancel") {
      const notes = prompt("Motivo do cancelamento (opcional):")
      if (notes) payload.notes = notes
    }
    try {
      setLoading(true)
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Erro")
      alert("Operação concluída com sucesso.")
      window.location.reload()
    } catch (e: any) {
      alert("Falha: " + (e.message || e))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => doAction("confirm")}
        disabled={loading || currentStatus === "CONFIRMADO"}
        className="px-3 py-1 rounded bg-green-600 text-white text-sm disabled:opacity-50"
      >
        Confirmar
      </button>
      <button
        onClick={() => doAction("cancel")}
        disabled={loading || currentStatus === "CANCELADO"}
        className="px-3 py-1 rounded bg-red-600 text-white text-sm disabled:opacity-50"
      >
        Cancelar
      </button>
      <button
        onClick={() => doAction("reschedule")}
        disabled={loading}
        className="px-3 py-1 rounded bg-primary text-primary-foreground text-sm disabled:opacity-50"
      >
        Remarcar
      </button>
    </div>
  )
}

