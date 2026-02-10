"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/app/_components/ui/button"

export default function LoginGoogle() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-500">Conecte-se usando sua conta do Google.</p>
      <Button variant="outline" onClick={() => signIn("google")} className="gap-2">
        <img src="/google.svg" alt="Google" width={18} height={18} />
        Entrar com Google
      </Button>
    </div>
  )
}

