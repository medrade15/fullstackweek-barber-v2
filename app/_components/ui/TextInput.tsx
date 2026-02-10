"use client"

import React from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export default function TextInput({ label, className = "", ...rest }: Props) {
  return (
    <label className="block">
      {label && <span className="text-xs text-gray-400 block mb-1">{label}</span>}
      <input
        {...rest}
        className={`w-full rounded px-3 py-2 border border-input bg-transparent text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 ${className}`}
      />
    </label>
  )
}

