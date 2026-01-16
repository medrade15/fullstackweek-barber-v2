import { PrismaClient, Role } from "@prisma/client"

const prisma = new PrismaClient()

async function updateUserRole() {
  const email = "sdmedrade@gmail.com"
  
  try {
    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      console.error(`❌ Usuário com email ${email} não encontrado!`)
      console.log("\n💡 Dicas:")
      console.log("1. Verifique se você já fez login com este email")
      console.log("2. Certifique-se de que o email está correto")
      return
    }

    console.log(`✅ Usuário encontrado: ${user.name || "Sem nome"} (${user.email})`)
    console.log(`   Role atual: ${user.role}`)

    // Atualiza o role para ADMIN
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { role: Role.ADMIN },
    })

    console.log(`\n✅ Usuário atualizado com sucesso!`)
    console.log(`   Novo role: ${updatedUser.role}`)
    console.log(`\n🎉 Agora você pode acessar o painel admin em: http://localhost:3000/admin/dashboard`)
    
  } catch (error) {
    console.error("❌ Erro ao atualizar usuário:", error)
  } finally {
    await prisma.$disconnect()
  }
}

updateUserRole()
