"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { signOut, useSession } from "next-auth/react"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function AdminHeader() {
  const { data } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-card border-b">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded border border-input"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu />
          </button>
        </div>
        <div className="flex items-center gap-3">
          {/* Small screen logout (sidebar hidden) */}
          <Button variant="ghost" className="md:hidden" onClick={() => signOut({ callbackUrl: "/" })}>
            Sair
          </Button>
        </div>
        {open && (
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <aside className="absolute left-0 top-0 h-full w-72 bg-card p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <Link href="/admin/bookings" className="inline-flex items-center gap-2">
                  <img src="/logo.png" alt="mb digital barber" width={140} height={32} />
                </Link>
                <button className="px-2 py-1" onClick={() => setOpen(false)}>Fechar</button>
              </div>
              <nav className="flex flex-col gap-3">
                <Link href="/admin/bookings" onClick={() => setOpen(false)} className="text-sm">Agendamentos</Link>
                <Link href="/admin/users" onClick={() => setOpen(false)} className="text-sm">Usuários</Link>
                <Link href="/admin/settings" onClick={() => setOpen(false)} className="text-sm">Configurações</Link>
              </nav>
              <div className="mt-6">
                <div className="text-xs text-gray-400 mb-2">Conectado como</div>
                <div className="mb-4 text-sm font-medium">{data?.user?.name ?? data?.user?.email}</div>
                <div>
                  <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })}>Sair</Button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

