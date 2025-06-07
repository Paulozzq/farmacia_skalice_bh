'use client'
import { useRouter } from 'next/navigation'
import { EspecialidadForm } from '@/components/EspecialidadForm'

export default function CrearEspecialidad() {
  const router = useRouter()

  async function handleCreate(data: any) {
    await fetch('/api/especialidades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    router.push('/especialidades')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-serif">Crear Especialidad</h1>
      <EspecialidadForm onSubmit={handleCreate} />
    </div>
  )
}
