"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function PhoneLoginPage() {
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function signInByPhone() {
    setLoading(true)
    setMessage(null)
    const res = await signIn("phone", { redirect: false, phone, callbackUrl: "/" })
    setLoading(false)
    if ((res as any)?.ok) {
      window.location.href = "/"
    } else {
      setMessage("Não foi possível entrar. Verifique o número e tente novamente.")
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Entrar com celular</h2>
      <label className="block mb-2">Número do celular</label>
      <input
        className="w-full p-2 border rounded mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+55 (11) 9 9999-9999"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={signInByPhone} disabled={loading}>
        {loading ? "Entrando..." : "Entrar com número"}
      </button>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  )
}

