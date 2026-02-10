const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const service = await prisma.barbershopService.findFirst();
    if (!service) {
      console.error("No service found. Seed your DB first.");
      process.exit(1);
    }
    // pick any user (prefer non-admin), fallback to first user
    let user = await prisma.user.findFirst({ where: { role: "USER" } });
    if (!user) user = await prisma.user.findFirst();
    if (!user) {
      console.error("No user found.");
      process.exit(1);
    }

    const date = new Date();
    date.setHours(date.getHours() + 24); // tomorrow

    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        serviceId: service.id,
        date,
        status: "CONFIRMADO",
        phone: user.phone ?? null,
      },
      include: { user: true, service: true },
    });
    console.log("Created test booking:", booking);
  } catch (e) {
    console.error("Error creating booking", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();

