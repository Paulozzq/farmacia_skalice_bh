import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const medicamento = await prisma.medicamento.findUnique({
    where: { CodMedicamento: Number(params.id) }
  })
  if (!medicamento) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(medicamento)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  const actualizado = await prisma.medicamento.update({
    where: { CodMedicamento: Number(params.id) },
    data,
  })
  return NextResponse.json(actualizado)
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.medicamento.delete({
    where: { CodMedicamento: Number(params.id) },
  })
  return NextResponse.json({ message: 'Eliminado correctamente' })
}
