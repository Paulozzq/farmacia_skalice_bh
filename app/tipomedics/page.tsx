import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function TipoMedicPage() {
  const tipos = await prisma.tipoMedic.findMany({
    orderBy: { descripcion: 'asc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">🛡️ Tipos de Medicamento</h1>
      <Link
        href="/tipomedics/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nuevo Tipo
      </Link>
      <ul className="space-y-3">
        {tipos.map(t => (
          <li
            key={t.CodTipoMed}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/tipomedics/${t.CodTipoMed}`}
              className="text-lg text-amber-900 hover:underline"
            >
              {t.descripcion}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
