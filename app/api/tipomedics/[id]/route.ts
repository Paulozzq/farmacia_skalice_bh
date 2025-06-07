import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const tipo = await prisma.tipoMedic.findUnique({
    where: { CodTipoMed: Number(params.id) }
  })
  if (!tipo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(tipo)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const actualizado = await prisma.tipoMedic.update({
    where: { CodTipoMed: Number(params.id) },
    data,
  })
  return NextResponse.json(actualizado)
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.tipoMedic.delete({
    where: { CodTipoMed: Number(params.id) },
  })
  return NextResponse.json({ message: 'Eliminado correctamente' })
}
