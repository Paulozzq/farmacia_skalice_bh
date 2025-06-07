'use client'

import Link from 'next/link'

export default function Home() {
  const entities = [
    {
      name: '📜 Órdenes de Venta',
      href: '/ordenventas',
      desc: 'Registra las transacciones que nutren la botica, con fechas y motivos claros.'
    },
    {
      name: '✍️ Detalles de Órdenes de Venta',
      href: '/detalleordenvta',
      desc: 'Desglosa cada pedido con precisión, mostrando remedios y cantidades.'
    },
    {
      name: '🏺 Laboratorios',
      href: '/laboratorios',
      desc: 'Las forjas de las fórmulas, donde los remedios toman forma y poder.'
    },
    {
      name: '📦 Órdenes de Compra',
      href: '/ordencompras',
      desc: 'Controla las adquisiciones y facturas que sostienen el inventario.'
    },
    {
      name: '🔍 Detalles de Órdenes de Compra',
      href: '/detalleordencompra',
      desc: 'Cada ingrediente y precio desglosado con noble precisión.'
    },
    {
      name: '⚗️ Remedios Ancestrales',
      href: '/medicamentos',
      desc: 'Consulta y administra los secretos de la herbolaria y sus pociones.'
    },
    {
      name: '📚 Especialidades',
      href: '/especialidades',
      desc: 'Campos de saber medicinal que guían el arte de curar.'
    },
    {
      name: '🛡️ Tipos de Medicamento',
      href: '/tipomedics',
      desc: 'Clasificación de fórmulas según su esencia y efecto en el cuerpo.'
    }
  ]

  return (
    <main className="min-h-screen bg-[url('/images/parchment-bg.jpg')] bg-cover bg-center text-amber-900 font-serif flex flex-col items-center justify-start px-8 py-16">
      {/* Presentación estilo KCD */}
      <section className="bg-amber-100 bg-opacity-90 p-12 rounded-lg shadow-lg max-w-5xl mb-16 border-4 border-amber-700 text-center">
        <h1 className="text-7xl font-black mb-8 tracking-wide drop-shadow-md">
          ⚗️ Herbolaria Skalice ⚗️
        </h1>
        <p className="italic text-2xl max-w-4xl mx-auto leading-relaxed mb-6">
          “Bienvenido, noble viajero, a esta botica ancestral, donde los antiguos secretos
          se mezclan con la sabiduría de tiempos olvidados. Aquí hallarás ungüentos, 
          pociones y fórmulas dignas de la nobleza y el campesino por igual.
        </p>
        <p className="italic text-xl max-w-4xl mx-auto leading-relaxed mb-2">
          Escoge con cuidado, que cada camino en este saber abre puertas a la salud, 
          y a veces a misterios aún por desvelar.”
        </p>
      </section>

      {/* Menú tipo "pergamino" con las 8 entidades */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {entities.map(({ name, href, desc }) => (
          <Link
            key={name}
            href={href}
            className="relative cursor-pointer rounded-md bg-amber-300 bg-gradient-to-t from-amber-400 via-amber-200 to-amber-300
                border-2 border-amber-700 text-amber-900 font-semibold py-5 px-6
                shadow-[3px_3px_0_0_rgba(133,94,0,1)] 
                hover:shadow-[6px_6px_0_0_rgba(133,94,0,1)]
                active:shadow-[1px_1px_0_0_rgba(133,94,0,1)]
                transition-shadow duration-200 select-none flex flex-col justify-between"
          >
            <span className="text-xl mb-2">{name}</span>
            <small className="text-sm font-normal italic text-amber-800">{desc}</small>
          </Link>
        ))}
      </nav>

      {/* Frase extra abajo, estilo antiguo */}
      <footer className="mt-24 max-w-4xl text-center text-amber-900 italic border-t border-amber-700 pt-6 font-semibold text-lg">
        “Que la salud sea vuestro escudo y la sabiduría, vuestra espada en esta travesía.”
      </footer>
    </main>
  )
}
