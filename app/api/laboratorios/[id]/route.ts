import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const lab = await prisma.laboratorio.findUnique({
    where: { CodLab: Number(params.id) }
  })
  if (!lab) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(lab)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const actualizado = await prisma.laboratorio.update({
    where: { CodLab: Number(params.id) },
    data,
  })
  return NextResponse.json(actualizado)
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.laboratorio.delete({
    where: { CodLab: Number(params.id) },
  })
  return NextResponse.json({ message: 'Eliminado correctamente' })
}
