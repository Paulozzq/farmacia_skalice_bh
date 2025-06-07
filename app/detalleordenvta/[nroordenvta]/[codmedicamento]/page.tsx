import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  context: { params: { nroordenvta: string; codmedicamento: string } }
) {
  const { nroordenvta, codmedicamento } = context.params

  try {
    const detalle = await prisma.detalleOrdenVta.findUnique({
      where: {
        NroOrdenVta_CodMedicamento: {
          NroOrdenVta: Number(nroordenvta),
          CodMedicamento: Number(codmedicamento),
        },
      },
    })

    if (!detalle) {
      return NextResponse.json({ error: 'Detalle no encontrado' }, { status: 404 })
    }

    return NextResponse.json(detalle)
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 })
  }
}
