import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const tipos = await prisma.tipoMedic.findMany()
  return NextResponse.json(tipos)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nuevo = await prisma.tipoMedic.create({ data })
  return NextResponse.json(nuevo)
}
