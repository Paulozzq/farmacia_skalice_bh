'use client'
import { useState } from 'react'

export function TipoMedicForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({ descripcion: '' })
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(formData) }} className="space-y-4 font-serif text-green-100">
      <input type="text" placeholder="Descripción" value={formData.descripcion}
        onChange={e => setFormData({ descripcion: e.target.value })}
        className="w-full p-2 bg-zinc-800 border border-green-700" />
      <button className="bg-green-800 px-4 py-2">💾 Guardar</button>
    </form>
  )
}