import Header from "./_components/header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./_components/ui/button"
import { StarIcon } from "lucide-react"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"

const Home = async () => {
  const session = await getServerSession(authOptions)
  // Use a single barbershop throughout the app (wrap in array for existing UI)
  const firstBarbershop = await db.barbershop.findFirst({
    orderBy: {
      name: "asc",
    },
  })
  const barbershops = firstBarbershop ? [firstBarbershop] : []
  const popularBarbershops = barbershops
  const shop = firstBarbershop
  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* Busca removida — apenas uma barbearia disponível */}

        {/* BUSCA RÁPIDA removida — apenas uma barbearia disponível */}

        {/* HERO */}
        {shop ? (
          <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                {shop.name}
              </h1>
              <p className="text-gray-600 max-w-xl">
                Na MB Digital Barber, você encontra cortes modernos e atendimento
                VIP que elevam sua imagem em minutos. Nossa equipe certificada
                usa técnicas exclusivas para entregar um acabamento preciso e
                duradouro — por isso centenas de clientes confiam em nós.
                Agende agora e aproveite atendimento prioritário: vagas
                limitadas para esta semana. Transforme seu visual hoje mesmo —
                reserve seu horário.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="text-yellow-500" />
                  <span className="font-semibold">5,0</span>
                  <span className="text-sm text-gray-500">• 499 avaliações</span>
                </div>
                <div className="hidden md:block border-l pl-4 text-sm text-gray-600">
                  {shop.address}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/barbershops/${shop.id}`}>
                  <Button variant="default" className="shadow">
                    Reservar agora
                  </Button>
                </Link>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    shop.address || "",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="ghost">Como chegar</Button>
                </a>
              </div>
            </div>

            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  alt={shop.name}
                  src={shop.imageUrl}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ) : (
          <div className="relative mt-6 h-[150px] w-full">
            <Image
              alt="Agende nos melhores com FSW Barber"
              src="/banner-01.png"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        )}

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>

            {/* AGENDAMENTO */}
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Nossa barbearia
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {shop ? <BarbershopItem key={shop.id} barbershop={shop} /> : null}
        </div>

        {/* Populares removido — apenas uma barbearia disponível */}
      </div>
    </div>
  )
}

export default Home
