"use client"
import { useEffect } from "react"

export default function AdminSubscriber() {
  useEffect(() => {
    const es = new EventSource("/api/events")
    es.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data)
        // dispatch a custom window event so booking table can update selectively
        window.dispatchEvent(new CustomEvent("booking-event", { detail: payload }))
      } catch (err) {
        console.error("SSE parse error", err)
      }
    }
    es.onerror = (err) => {
      console.error("SSE error", err)
      es.close()
    }
    return () => es.close()
  }, [])

  return null
}

