import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const orden = await prisma.ordenVenta.findUnique({
    where: { NroOrdenVta: Number(params.id) }
  })
  if (!orden) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(orden)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const actualizado = await prisma.ordenVenta.update({
    where: { NroOrdenVta: Number(params.id) },
    data,
  })
  return NextResponse.json(actualizado)
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.ordenVenta.delete({
    where: { NroOrdenVta: Number(params.id) },
  })
  return NextResponse.json({ message: 'Eliminado correctamente' })
}
