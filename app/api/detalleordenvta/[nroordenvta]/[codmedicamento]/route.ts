import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Obtener un detalle por clave compuesta
export async function GET({ params }: { params: { nroordenvta: string; codmedicamento: string } }) {
  const detalle = await prisma.detalleOrdenVta.findUnique({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(params.nroordenvta),
        CodMedicamento: Number(params.codmedicamento)
      }
    }
  })

  if (!detalle) {
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  }

  return NextResponse.json(detalle)
}

// Actualizar un detalle
export async function PUT({ params, request }: { params: { nroordenvta: string; codmedicamento: string }, request: Request }) {
  const data = await request.json()

  const actualizado = await prisma.detalleOrdenVta.update({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(params.nroordenvta),
        CodMedicamento: Number(params.codmedicamento)
      }
    },
    data
  })

  return NextResponse.json(actualizado)
}

// Eliminar un detalle
export async function DELETE({ params }: { params: { nroordenvta: string; codmedicamento: string } }) {
  const eliminado = await prisma.detalleOrdenVta.delete({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(params.nroordenvta),
        CodMedicamento: Number(params.codmedicamento)
      }
    }
  })

  return NextResponse.json(eliminado)
}
