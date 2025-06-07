import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const especialidad = await prisma.especialidad.findUnique({
    where: { CodEspec: Number(params.id) }
  })
  if (!especialidad) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(especialidad)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const actualizado = await prisma.especialidad.update({
    where: { CodEspec: Number(params.id) },
    data,
  })
  return NextResponse.json(actualizado)
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.especialidad.delete({
    where: { CodEspec: Number(params.id) },
  })
  return NextResponse.json({ message: 'Eliminado correctamente' })
}
