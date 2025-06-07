import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const labs = await prisma.laboratorio.findMany()
  return NextResponse.json(labs)
}

export async function POST(request: Request) {
  const data = await request.json()
  const nuevo = await prisma.laboratorio.create({ data })
  return NextResponse.json(nuevo)
}
