'use client'
import { useRouter } from 'next/navigation'
import { LaboratorioForm } from '@/components/LaboratorioForm'

export default function CrearLaboratorio() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/laboratorios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/laboratorios')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Laboratorio</h1>
      <LaboratorioForm onSubmit={handleCreate} />
    </div>
  )
}
