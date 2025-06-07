import Link from 'next/link'
import { prisma }  from '@/lib/prisma'

export default async function EspecialidadesPage() {
  const esp = await prisma.especialidad.findMany({
    orderBy: { descripcionEsp: 'asc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">📚 Especialidades</h1>
      <Link
        href="/especialidades/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nueva Especialidad
      </Link>
      <ul className="space-y-3">
        {esp.map(e => (
          <li
            key={e.CodEspec}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/especialidades/${e.CodEspec}`}
              className="text-lg text-amber-900 hover:underline"
            >
              {e.descripcionEsp}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
