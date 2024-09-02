import { prisma } from '@/lib/prisma'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const origin = headers().get('origin') ?? 'null'
    const allowedOrigins = ['http://localhost:3000']

    if (!allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: 'Not allowed by CORS' },
        { status: 403 },
      )
    }

    const allUsers = await prisma.user.findMany()

    const response = NextResponse.json(allUsers)

    // Adiciona os headers de CORS na resposta
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    )
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization',
    )

    return response



  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      {
        status: 500,
      },
    )
  }
}
