import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function DetalleOrdenCompraPage() {
  const detalles = await prisma.detalleOrdenCompra.findMany({
    include: {
      medicamento: true,
      ordenCompra: true,
    },
    orderBy: {
      NroOrdenC: 'desc',
    }
  })

  return (
    <main className="p-8 font-serif bg-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">🔍 Detalles de Órdenes de Compra</h1>
      <Link
        href="/detalleordencompra/nuevo"
        className="inline-block mb-4 bg-amber-700 text-amber-100 py-2 px-4 rounded hover:bg-amber-900"
      >
        ➕ Nuevo Detalle de Compra
      </Link>
      <ul className="space-y-3">
        {detalles.map(d => (
          <li
            key={d.id}
            className="border-b border-amber-300 pb-3"
          >
            <Link
              href={`/detalleordencompra/${d.id}`}
              className="text-lg text-amber-900 hover:underline"
            >
              Orden #{d.NroOrdenC} - {d.medicamento.descripcionMed} x {d.cantidad} - Precio: {d.precio.toFixed(2)}$
            </Link>
            <p className="italic text-sm text-amber-700">Monto unitario: {d.montouni.toFixed(2)}$</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
