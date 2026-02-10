import AdminHeader from "@/app/_components/admin-header"
import AdminSubscriber from "@/app/admin/bookings/admin-subscriber.client"
import { db } from "@/app/_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"

const UsersTable = dynamic(() => import("./UsersTable.client"), { ssr: false })

const AdminUsersPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== "ADMIN") {
    return redirect("/admin/login")
  }

  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  })

  return (
    <div>
      <AdminSubscriber />
      <AdminHeader />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Gerenciamento de Usuários</h1>
        <div className="mb-4 text-sm text-gray-500">
          Aqui você pode criar, editar e remover usuários. Apenas admins têm acesso.
        </div>
        <UsersTable users={JSON.parse(JSON.stringify(users))} />
      </div>
    </div>
  )
}

export default AdminUsersPage

