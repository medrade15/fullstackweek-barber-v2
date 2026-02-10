"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Settings, LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

export default function AdminSidebar() {
  const { data } = useSession()

  return (
    <aside className="w-64 bg-card border-r border-solid p-4 hidden md:flex md:flex-col">
      <div className="mb-6">
        <a href="/admin/bookings" className="inline-flex items-center gap-2">
          <img src="/logo.png" alt="mb digital barber" width={160} height={36} />
        </a>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        <Link href="/admin/bookings" className="text-sm hover:underline">Agendamentos</Link>
        <Link href="/admin/users" className="text-sm hover:underline">Usuários</Link>
      </nav>

      <div className="mt-6">
        <div className="text-xs text-gray-400 mb-2">Conectado como</div>
        <div className="mb-4 text-sm font-medium">{data?.user?.name ?? data?.user?.email}</div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center gap-2">
            <LogOut size={14}/> Sair
          </Button>
        </div>
      </div>
    </aside>
  )
}

