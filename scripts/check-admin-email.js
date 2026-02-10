const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error("Usage: node scripts/check-admin-email.js <email>");
    process.exit(1);
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.error("User not found:", email);
      process.exit(1);
    }
    console.log(JSON.stringify(user, null, 2));
  } catch (e) {
    console.error("Error:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

