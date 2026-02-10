const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];
  if (!email || !password) {
    console.error("Usage: node scripts/set-admin-password.js <email> <password>");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { hashedPassword: hash, role: "ADMIN" },
    });
    console.log("Updated admin password for:", user.email);
  } catch (e) {
    console.error("Error:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

