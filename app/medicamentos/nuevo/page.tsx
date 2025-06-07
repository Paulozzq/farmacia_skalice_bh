'use client'
import { useRouter } from 'next/navigation'
import { MedicamentoForm } from '@/components/MedicamentoForm'

export default function CrearMedicamento() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/medicamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/medicamentos')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Medicamento</h1>
      <MedicamentoForm onSubmit={handleCreate} />
    </div>
  )
}
