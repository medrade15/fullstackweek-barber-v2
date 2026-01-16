# 📋 Guia Completo - Painel Admin

## 🔧 Passo 1: Criar e Aplicar a Migration

Primeiro, precisamos atualizar o banco de dados para adicionar os campos `role` e `status`:

```bash
# 1. Criar a migration
npx prisma migrate dev --name add_role_and_status

# 2. Gerar o Prisma Client atualizado
npx prisma generate
```

**Importante:** Se você receber um erro dizendo que o banco já tem dados, você pode precisar fazer uma migration manual ou resetar o banco (apenas em desenvolvimento).

## 👤 Passo 2: Atualizar o Usuário para ADMIN

Execute o script para atualizar o email ` para ter role ADMIN:

```bash
npm run update-admin
```

Ou diretamente:

```bash
npx ts-node scripts/update-user-role.ts
```

**O que o script faz:**
- ✅ Busca o usuário pelo email ``
- ✅ Atualiza o role para `ADMIN`
- ✅ Confirma a atualização

**Se o usuário não for encontrado:**
1. Certifique-se de que você já fez login com este email pelo menos uma vez
2. Verifique se o email está correto no banco de dados
3. Você pode listar todos os usuários executando:

```bash
npx prisma studio
```

E então atualizar manualmente no Prisma Studio.

## 🚀 Passo 3: Rodar o Painel Admin

### Opção 1: Servidor de Desenvolvimento

```bash
# Iniciar o servidor Next.js
npm run dev
```

Depois acesse:
- **Painel Admin:** http://localhost:3000/admin/dashboard

### Opção 2: Verificar se está funcionando

1. Certifique-se de estar logado com o email `sdmedrade@gmail.com`
2. Se não estiver logado, faça login primeiro
3. Acesse `/admin/dashboard`

**⚠️ Importante:** Se você não tiver role ADMIN ou OWNER, será redirecionado para a página inicial.

## 🔍 Verificar se o usuário foi atualizado

Você pode verificar diretamente no banco de dados:

### Usando Prisma Studio (Interface Visual):

```bash
npx prisma studio
```

1. Abra o navegador em `http://localhost:5555`
2. Vá para a tabela `User`
3. Encontre o usuário com email `sdmedrade@gmail.com`
4. Verifique se o campo `role` está como `ADMIN`

### Usando SQL direto:

Se você estiver usando Docker Compose:

```bash
# Conectar ao banco PostgreSQL
docker exec -it fsw-barber-postgres psql -U postgres -d postgres

# Verificar o usuário
SELECT id, email, name, role FROM "User" WHERE email = 'sdmedrade@gmail.com';

# Atualizar manualmente se necessário (alternativa)
UPDATE "User" SET role = 'ADMIN' WHERE email = 'sdmedrade@gmail.com';

# Sair
\q
```

## 📝 Resumo dos Comandos

```bash
# 1. Criar migration (primeira vez)
npx prisma migrate dev --name add_role_and_status

# 2. Gerar Prisma Client
npx prisma generate

# 3. Atualizar usuário para ADMIN
npm run update-admin

# 4. Iniciar servidor
npm run dev

# 5. Acessar painel admin
# http://localhost:3000/admin/dashboard
```

## 🐛 Resolução de Problemas

### Erro: "User not found"
- Certifique-se de fazer login pelo menos uma vez com o email
- Verifique se o email está correto no banco

### Erro: "Permission denied" ao acessar /admin/dashboard
- Verifique se o role foi atualizado corretamente
- Faça logout e login novamente para atualizar a session
- Execute `npm run update-admin` novamente

### Erro na migration
- Se houver dados existentes, pode ser necessário fazer reset:
  ```bash
  npx prisma migrate reset
  ```
  ⚠️ Isso apagará todos os dados! Use apenas em desenvolvimento.

### Banco não conecta
- Verifique se o Docker está rodando:
  ```bash
  docker-compose up -d
  ```
- Verifique a variável `DATABASE_URL` no arquivo `.env`

## ✅ Checklist Final

- [ ] Migration criada e aplicada
- [ ] Prisma Client gerado
- [ ] Usuário atualizado para ADMIN
- [ ] Servidor rodando (`npm run dev`)
- [ ] Logado com `sdmedrade@gmail.com`
- [ ] Acessando `/admin/dashboard` com sucesso

---

**🎉 Pronto! Seu painel admin está funcionando!**
