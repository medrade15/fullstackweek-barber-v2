import LoginGoogle from "./LoginGoogle.client"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">Login Admin</h1>
        <div className="mt-4">
          <LoginGoogle />
        </div>
      </div>
    </div>
  )
}
