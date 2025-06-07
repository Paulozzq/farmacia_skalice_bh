// app/api/detalleordencompra/route.ts

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Obtener todos los detalles
export async function GET() {
  const detalles = await prisma.detalleOrdenCompra.findMany()
  return NextResponse.json(detalles)
}

// Crear nuevo detalle
export async function POST(req: Request) {
  const data = await req.json()

  const nuevo = await prisma.detalleOrdenCompra.create({
    data,
  })

  return NextResponse.json(nuevo, { status: 201 })
}
