"use client"

import React, { useState } from "react"
import { Button } from "@/app/_components/ui/button"

type User = {
  id: string
  name?: string | null
  email: string
  role: string
  createdAt: string
}

export default function UsersTable({ users }: { users: User[] }) {
  const [items, setItems] = useState<User[]>(users || [])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState<User | null>(null)

  const reload = async () => {
    const res = await fetch("/api/admin/users")
    if (res.ok) {
      const data = await res.json()
      setItems(data)
    }
  }

  const createUser = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const role = String(form.get("role") || "USER")
    setLoading(true)
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    })
    setLoading(false)
    if (res.ok) {
      e.target.reset()
      await reload()
      alert("Usuário criado")
    } else {
      const err = await res.json()
      alert("Erro: " + (err?.error || "unknown"))
    }
  }

  const removeUser = async (id: string) => {
    if (!confirm("Confirmar remoção do usuário?")) return
    setLoading(true)
    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" })
    setLoading(false)
    if (res.ok) {
      await reload()
      alert("Removido")
    } else {
      const err = await res.json()
      alert("Erro: " + (err?.error || "unknown"))
    }
  }

  const saveEdit = async (e: any) => {
    e.preventDefault()
    if (!editing) return
    const form = new FormData(e.target)
    const name = String(form.get("name") || "")
    const role = String(form.get("role") || "USER")
    setLoading(true)
    const res = await fetch(`/api/admin/users/${editing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role }),
    })
    setLoading(false)
    if (res.ok) {
      setEditing(null)
      await reload()
      alert("Atualizado")
    } else {
      const err = await res.json()
      alert("Erro: " + (err?.error || "unknown"))
    }
  }

  return (
    <div>
      <form onSubmit={createUser} className="mb-4 flex flex-col md:flex-row gap-2 items-end">
        <div className="flex-1">
          <label className="text-xs">Nome</label>
          <input
            name="name"
            className="block w-full rounded px-3 py-2 border border-input bg-card text-card-foreground"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs">Email</label>
          <input
            name="email"
            className="block w-full rounded px-3 py-2 border border-input bg-card text-card-foreground"
          />
        </div>
        <div>
          <label className="text-xs">Role</label>
          <select
            name="role"
            className="block rounded px-3 py-2 border border-input bg-card text-card-foreground"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <div>
          <Button type="submit" disabled={loading}>Criar</Button>
        </div>
      </form>

      <div className="overflow-auto bg-card rounded shadow">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="px-3 py-2">Nome</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Role</th>
              <th className="px-3 py-2">Criado</th>
              <th className="px-3 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-3 py-2">{u.name}</td>
                <td className="px-3 py-2">{u.email}</td>
                <td className="px-3 py-2">{u.role}</td>
                <td className="px-3 py-2">{new Date(u.createdAt).toLocaleString()}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <Button variant="ghost" onClick={() => setEditing(u)}>Editar</Button>
                    <Button variant="destructive" onClick={() => removeUser(u.id)}>Remover</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <form onSubmit={saveEdit} className="bg-card p-6 rounded shadow w-[90%] max-w-md">
            <h3 className="text-lg font-bold mb-3">Editar usuário</h3>
            <label className="block mb-2">
              <span className="text-sm">Nome</span>
              <input
                name="name"
                defaultValue={editing.name || ""}
                className="w-full rounded px-3 py-2 border border-input bg-transparent text-card-foreground"
              />
            </label>
            <label className="block mb-4">
              <span className="text-sm">Role</span>
              <select
                name="role"
                defaultValue={editing.role}
                className="w-full rounded px-3 py-2 border border-input bg-transparent text-card-foreground"
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </label>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" onClick={() => setEditing(null)}>Cancelar</Button>
              <Button type="submit" disabled={loading}>Salvar</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

