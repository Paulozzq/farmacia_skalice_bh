'use client'
import { useState } from 'react'

export function LaboratorioForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({ razonSocial: '', direccion: '', telefono: '', email: '', contacto: '' })
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(formData) }} className="space-y-4 font-serif text-green-100">
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="text" placeholder={key} value={value}
          onChange={e => setFormData({ ...formData, [key]: e.target.value })}
          className="w-full p-2 bg-zinc-800 border border-green-700" />
      ))}
      <button className="bg-green-800 px-4 py-2">💾 Guardar</button>
    </form>
  )
}