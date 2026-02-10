import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/_lib/auth"

const Header = async () => {
  const session = await getServerSession(authOptions)
  const isAdmin = !!session?.user && (session.user as any).role === "ADMIN"

  return (
    <Card className="shadow-sm">
      {/* Logo centered vertically and aligned left */}
      <CardContent className="flex items-center justify-between py-4 pl-2 pr-6 h-16">
        <div className="flex items-center h-full gap-4">
          <Link href="/" className="relative top-3">
            <Image alt="mb digital barber" src="/logo.png" height={36} width={240} />
          </Link>
          {isAdmin && (
            <Link href="/admin/bookings" className="text-sm font-medium text-primary underline">
              Painel Admin
            </Link>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="p-2">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
