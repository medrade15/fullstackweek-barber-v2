import { subscribe, unsubscribe } from "@/app/lib/sse"

export async function GET(req: Request) {
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  })

  const stream = new ReadableStream({
    start(controller) {
      const id = Date.now() + Math.random()
      const cb = (data: any) => {
        const payload = `data: ${JSON.stringify(data)}\n\n`
        controller.enqueue(new TextEncoder().encode(payload))
      }

      subscribe(id, cb)

      req.signal.addEventListener("abort", () => {
        try {
          unsubscribe(id)
        } catch (e) {}
        controller.close()
      })
    },
  })

  return new Response(stream, { headers })
}

