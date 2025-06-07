import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const especialidades = await prisma.especialidad.findMany()
  return NextResponse.json(especialidades)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nueva = await prisma.especialidad.create({ data })
  return NextResponse.json(nueva)
}
