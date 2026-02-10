import AdminHeader from "@/app/_components/admin-header"
import AdminSidebar from "@/app/_components/admin-sidebar.client"

export const metadata = {
  title: "Admin - Painel",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main>{children}</main>
      </div>
    </div>
  )
}

