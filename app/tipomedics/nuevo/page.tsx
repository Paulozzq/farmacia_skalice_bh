'use client'
import { useRouter } from 'next/navigation'
import { TipoMedicForm } from '@/components/TipoMedicForm'

export default function CrearTipoMedic() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/tipomedics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/tipomedics')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Tipo Medicamento</h1>
      <TipoMedicForm onSubmit={handleCreate} />
    </div>
  )
}
