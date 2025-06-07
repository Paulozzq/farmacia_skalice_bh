'use client'
import { useRouter } from 'next/navigation'
import { OrdenCompraForm } from '@/components/OrdenCompraForm'

export default function CrearOrdenCompra() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/ordencompras', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/ordencompras')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Orden Compra</h1>
      <OrdenCompraForm onSubmit={handleCreate} />
    </div>
  )
}
