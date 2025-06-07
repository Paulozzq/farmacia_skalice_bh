'use client'
import { useRouter } from 'next/navigation'
import { DetalleOrdenCompraForm } from '@/components/DetalleOrdenCompraForm'

export default function CrearDetalleOrdenCompra() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/detalleordencompra', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/detalleordencompra')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Detalle Orden Compra</h1>
      <DetalleOrdenCompraForm onSubmit={handleCreate} />
    </div>
  )
}
