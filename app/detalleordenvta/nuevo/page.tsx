'use client'
import { useRouter } from 'next/navigation'
import { DetalleOrdenVtaForm } from '@/components/DetalleOrdenVtaForm'

export default function CrearDetalleOrdenVta() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/detalleordenvta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/detalleordenvta')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Detalle Orden Venta</h1>
      <DetalleOrdenVtaForm onSubmit={handleCreate} />
    </div>
  )
}
