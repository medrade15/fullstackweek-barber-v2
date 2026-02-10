const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error("Usage: node scripts/set-admin-email.js <email>");
    process.exit(1);
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.error("User not found:", email);
      process.exit(1);
    }

    const updated = await prisma.user.update({
      where: { email },
      data: { role: "ADMIN" },
    });

    console.log("Updated user to ADMIN:", updated.email);
  } catch (e) {
    console.error("Error:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

