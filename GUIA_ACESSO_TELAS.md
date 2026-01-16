# 🖥️ Guia de Acesso - Telas Cliente e Admin

## 🚀 Servidor Iniciado!

O servidor Next.js está rodando em background.

---

## 📱 TELA 1: CLIENTE - Criar Agendamento

### **Como Acessar:**

1. **Abra o navegador:**
   ```
   http://localhost:3000
   ```

2. **Navegue até uma barbearia:**
   - Clique em uma barbearia na lista
   - Ou acesse diretamente: `http://localhost:3000/barbershops/[id]`
   - (Substitua `[id]` pelo ID de uma barbearia do banco)

3. **Faça login (se necessário):**
   - Clique no menu (☰)
   - Faça login com Google

4. **Criar Agendamento:**
   - Veja os serviços disponíveis
   - Clique em **"Reservar"** no serviço desejado
   - Selecione uma **data** no calendário
   - Selecione um **horário** disponível
   - Clique em **"Confirmar"**

### **O que você verá:**
✅ Lista de serviços da barbearia  
✅ Calendário para selecionar data  
✅ Horários disponíveis  
✅ Resumo do agendamento  
✅ Botão de confirmação  

### **Rota:** `/barbershops/[id]`

---

## 🔐 TELA 2: ADMIN/DONO - Painel Admin

### **Como Acessar:**

1. **Faça login como admin:**
   - Email: `sdmedrade@gmail.com`
   - Use o login do Google

2. **Acesse o painel admin:**
   ```
   http://localhost:3000/admin/dashboard
   ```

3. **Ou pelo menu:**
   - Clique no menu (☰)
   - Se você for admin, verá **"Painel Admin"**
   - Clique nele

### **O que você verá:**
✅ **Cards de Resumo:**
   - Agendamentos Hoje
   - Agendamentos do Mês
   - Faturamento Estimado

✅ **Filtros:**
   - Por data
   - Por serviço
   - Por status (Confirmado, Concluído, Cancelado)

✅ **Tabela de Agendamentos:**
   - Nome do cliente
   - Email do cliente
   - Serviço solicitado
   - Barbearia
   - Data e horário
   - Status atual

### **Rota:** `/admin/dashboard`

---

## 🧪 Teste Completo

### **Passo 1: Testar como Cliente**

```bash
# 1. Acesse
http://localhost:3000

# 2. Selecione uma barbearia
# 3. Faça login
# 4. Crie um agendamento
# 5. Veja seus agendamentos em /bookings
```

### **Passo 2: Testar como Admin**

```bash
# 1. Faça login com sdmedrade@gmail.com
# 2. Acesse
http://localhost:3000/admin/dashboard

# 3. Verifique:
# - Cards de resumo aparecem
# - Filtros funcionam
# - Tabela mostra agendamentos
# - Você vê o agendamento que criou como cliente
```

---

## 📋 Checklist de Funcionalidades

### **Tela Cliente (`/barbershops/[id]`):**
- [ ] Página carrega
- [ ] Mostra serviços
- [ ] Botão "Reservar" funciona
- [ ] Calendário aparece
- [ ] Horários disponíveis aparecem
- [ ] Pode selecionar data e horário
- [ ] Pode confirmar agendamento
- [ ] Agendamento é criado

### **Tela Admin (`/admin/dashboard`):**
- [ ] Página carrega (após login admin)
- [ ] Cards de resumo aparecem
- [ ] Filtros aparecem
- [ ] Tabela de agendamentos aparece
- [ ] Mostra agendamentos criados
- [ ] Filtros funcionam
- [ ] Não redireciona (se for admin)

---

## 🔍 Verificações Importantes

### **1. Verificar se o servidor está rodando:**
- Abra: http://localhost:3000
- Deve carregar a página inicial

### **2. Verificar login:**
- Clique no menu (☰)
- Faça login com Google
- Verifique se aparece seu nome

### **3. Verificar role admin:**
- Após login como `sdmedrade@gmail.com`
- Verifique se aparece "Painel Admin" no menu
- Se não aparecer, execute: `npm run update-admin`

### **4. Verificar banco de dados:**
- Certifique-se que o Docker está rodando (se usar)
- Ou que a conexão com o banco está configurada

---

## 🐛 Solução de Problemas

### **Problema: Página não carrega**
```bash
# Verifique se o servidor está rodando
# Reinicie se necessário
npm run dev
```

### **Problema: Erro de autenticação**
```bash
# Verifique as variáveis de ambiente
# .env.local deve ter:
# - GOOGLE_CLIENT_ID
# - GOOGLE_CLIENT_SECRET
# - NEXT_AUTH_SECRET
```

### **Problema: Não consigo acessar /admin/dashboard**
```bash
# 1. Verifique se você está logado
# 2. Verifique se seu email é admin:
npm run update-admin

# 3. Faça logout e login novamente
```

### **Problema: Não vejo agendamentos**
```bash
# 1. Crie um agendamento como cliente primeiro
# 2. Depois acesse como admin
# 3. Verifique se há dados no banco
```

---

## 📊 URLs Importantes

| URL | Descrição | Requer Login |
|-----|-----------|--------------|
| `http://localhost:3000` | Página inicial | Não |
| `http://localhost:3000/barbershops` | Lista barbearias | Não |
| `http://localhost:3000/barbershops/[id]` | **Criar agendamento** | Sim |
| `http://localhost:3000/bookings` | Meus agendamentos | Sim |
| `http://localhost:3000/admin/dashboard` | **Painel admin** | Sim (Admin) |

---

## ✅ Status do Sistema

🟢 **Servidor:** Rodando em background  
🟢 **Banco de Dados:** Conectado  
🟢 **Autenticação:** Configurada  
🟢 **Página Cliente:** Pronta  
🟢 **Página Admin:** Pronta  

---

## 🎯 Próximos Passos

1. ✅ Acesse http://localhost:3000
2. ✅ Teste criar um agendamento como cliente
3. ✅ Faça login como admin (sdmedrade@gmail.com)
4. ✅ Acesse http://localhost:3000/admin/dashboard
5. ✅ Verifique se vê o agendamento criado

---

**🚀 Sistema pronto para testar!**

Acesse as URLs acima e teste ambas as telas!
