import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const detalles = await prisma.detalleOrdenVta.findMany()
  return NextResponse.json(detalles)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nuevo = await prisma.detalleOrdenVta.create({ data })
  return NextResponse.json(nuevo)
}
