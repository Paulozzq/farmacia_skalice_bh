'use client'
import { useRouter } from 'next/navigation'
import { OrdenVentaForm }  from '@/components/OrdenVentaForm'

export default function CrearOrdenVenta() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/ordenventas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/ordenventas')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Orden Venta</h1>
      <OrdenVentaForm onSubmit={handleCreate} />
    </div>
  )
}
