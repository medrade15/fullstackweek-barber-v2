const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const targetName = "mb digital barber";

  // Try to find an existing shop with the target name
  let shop = await prisma.barbershop.findFirst({
    where: { name: targetName },
    include: { services: true },
  });

  // If not found, pick the first existing shop and rename it, or create a new one
  if (!shop) {
    const first = await prisma.barbershop.findFirst({ include: { services: true } });
    if (first) {
      shop = await prisma.barbershop.update({
        where: { id: first.id },
        data: { name: targetName },
        include: { services: true },
      });
      console.log(`Renamed existing shop ${first.name} -> ${targetName}`);
    } else {
      shop = await prisma.barbershop.create({
        data: {
          name: targetName,
          address: "Avenida Principal, 100",
          phones: ["(61) 99999-9999"],
          description: "mb digital barber - qualidade e estilo.",
          imageUrl: "https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png",
          services: {
            create: [
              {
                name: "Corte de Cabelo",
                description: "Corte clássico e moderno.",
                price: 45.0,
                imageUrl: "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
              },
            ],
          },
        },
      });
      console.log("Created new shop:", shop.name);
    }
  } else {
    console.log("Found target shop:", shop.name);
  }

  // Delete all other shops (and their services/bookings via cascade)
  const others = await prisma.barbershop.findMany({
    where: { id: { not: shop.id } },
    select: { id: true, name: true },
  });

  for (const o of others) {
    // delete bookings for services of this shop
    const services = await prisma.barbershopService.findMany({
      where: { barbershopId: o.id },
      select: { id: true },
    });
    for (const s of services) {
      await prisma.booking.deleteMany({ where: { serviceId: s.id } });
    }
    // delete services
    await prisma.barbershopService.deleteMany({ where: { barbershopId: o.id } });
    // now delete the shop
    await prisma.barbershop.delete({ where: { id: o.id } });
    console.log("Deleted shop:", o.name);
  }

  console.log("Final shop:", shop.name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

