type ClientCallback = (data: any) => void

const clients = new Map<number, ClientCallback>()

export function subscribe(id: number, cb: ClientCallback) {
  clients.set(id, cb)
}

export function unsubscribe(id: number) {
  clients.delete(id)
}

export function publish(event: string, payload: any) {
  const message = { event, payload, ts: Date.now() }
  const callbacks = Array.from(clients.values())
  for (const cb of callbacks) {
    try {
      cb(message)
    } catch (e) {
      // ignore
    }
  }
}

