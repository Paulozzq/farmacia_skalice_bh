import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function OrdenCompraPage() {
  const compras = await prisma.ordenCompra.findMany({
    orderBy: { fechaEmision: 'desc' },
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">📦 Órdenes de Compra</h1>
      <Link
        href="/ordencompra/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nueva Orden de Compra
      </Link>
      <ul className="space-y-3">
        {compras.map(c => (
          <li
            key={c.NroOrdenC}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/ordencompra/${c.NroOrdenC}`}
              className="text-lg text-amber-900 hover:underline"
            >
              Orden #{c.NroOrdenC} - {new Date(c.fechaEmision).toLocaleDateString('es-ES')} - Total: {c.Total.toFixed(2)}$
            </Link>
            <p className="italic text-sm text-amber-700">Situación: {c.Situacion} | Factura: {c.NrofacturaProv}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
