import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function DetalleOrdenVtaPage() {
  const detalles = await prisma.detalleOrdenVta.findMany({
    include: {
      medicamento: true,
      ordenVenta: true,
    },
    orderBy: {
      NroOrdenVta: 'desc',
    }
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">✍️ Detalles de Órdenes de Venta</h1>
      <Link
        href="/detalleordenvta/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nuevo Detalle
      </Link>
      <ul className="space-y-3">
        {detalles.map(d => (
          <li
            key={d.id}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/detalleordenvta/${d.id}`}
              className="text-lg text-amber-900 hover:underline"
            >
              Orden #{d.NroOrdenVta} - {d.medicamento.descripcionMed} x {d.cantidadRequerida}
            </Link>
            <p className="italic text-sm text-amber-700">{d.descripcionMed}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
