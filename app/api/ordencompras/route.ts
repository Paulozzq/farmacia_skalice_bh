import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const ordenes = await prisma.ordenCompra.findMany()
  return NextResponse.json(ordenes)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nueva = await prisma.ordenCompra.create({ data })
  return NextResponse.json(nueva)
}
