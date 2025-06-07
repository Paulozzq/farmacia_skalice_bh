import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { nroordenvta: string; codmedicamento: string } }
) {
  const { nroordenvta, codmedicamento } = params

  const detalle = await prisma.detalleOrdenVta.findUnique({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(nroordenvta),
        CodMedicamento: Number(codmedicamento)
      }
    }
  })

  if (!detalle) {
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  }

  return NextResponse.json(detalle)
}

export async function PUT(
  request: Request,
  { params }: { params: { nroordenvta: string; codmedicamento: string } }
) {
  const { nroordenvta, codmedicamento } = params
  const data = await request.json()

  const actualizado = await prisma.detalleOrdenVta.update({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(nroordenvta),
        CodMedicamento: Number(codmedicamento)
      }
    },
    data
  })

  return NextResponse.json(actualizado)
}

export async function DELETE(
  request: Request,
  { params }: { params: { nroordenvta: string; codmedicamento: string } }
) {
  const { nroordenvta, codmedicamento } = params

  const eliminado = await prisma.detalleOrdenVta.delete({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: Number(nroordenvta),
        CodMedicamento: Number(codmedicamento)
      }
    }
  })

  return NextResponse.json(eliminado)
}
