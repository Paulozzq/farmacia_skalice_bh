import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function OrdenVentaPage() {
  const ordenes = await prisma.ordenVenta.findMany({
    orderBy: { fechaEmision: 'desc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">📜 Órdenes de Venta</h1>
      <Link
        href="/ordenventas/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nueva Orden
      </Link>
      <ul className="space-y-3">
        {ordenes.map(o => (
          <li
            key={o.NroOrdenVta}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/ordenventa/${o.NroOrdenVta}`}
              className="text-lg text-amber-900 hover:underline"
            >
              Orden #{o.NroOrdenVta} - {new Date(o.fechaEmision).toLocaleDateString('es-ES')} - Motivo: {o.Motivo}
            </Link>
            <p className="italic text-sm text-amber-700">Estado: {o.Situacion}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
