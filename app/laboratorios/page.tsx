import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function LaboratoriosPage() {
  const labs = await prisma.laboratorio.findMany({
    orderBy: { razonSocial: 'asc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">🏺 Laboratorios</h1>
      <Link
        href="/laboratorios/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nuevo Laboratorio
      </Link>
      <ul className="space-y-3">
        {labs.map(l => (
          <li
            key={l.CodLab}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/laboratorios/${l.CodLab}`}
              className="text-lg text-amber-900 hover:underline"
            >
              {l.razonSocial}
            </Link>
            <p className="italic text-sm text-amber-700">
              {l.direccion} | 📞 {l.telefono} | 📧 {l.email}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
