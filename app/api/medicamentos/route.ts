import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const medicamentos = await prisma.medicamento.findMany()
  return NextResponse.json(medicamentos)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nuevo = await prisma.medicamento.create({ data })
  return NextResponse.json(nuevo)
}
