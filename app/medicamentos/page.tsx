import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function MedicamentosPage() {
  const meds = await prisma.medicamento.findMany({
    include: {
      tipoMedic: true,
      especialidad: true,
    },
    orderBy: { descripcionMed: 'asc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">⚗️ Remedios Ancestrales</h1>
      <Link
        href="/medicamentos/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nuevo Remedio
      </Link>
      <ul className="space-y-3">
        {meds.map(m => (
          <li
            key={m.CodMedicamento}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/medicamentos/${m.CodMedicamento}`}
              className="text-lg text-amber-900 hover:underline"
            >
              {m.descripcionMed} — Marca: {m.Marca}
            </Link>
            <p className="italic text-sm text-amber-700">
              Tipo: {m.tipoMedic.descripcion} | Especialidad: {m.especialidad.descripcionEsp}
            </p>
            <p className="italic text-sm text-amber-700">
              Stock: {m.stock} unidades | Precio unitario: {m.precioVentaUni.toFixed(2)}$
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
