import { prisma } from '@/lib/prisma'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://desapegavendas.com.br',
  ]

  const origin = headers().get('origin') || ''

  console.log(origin)

  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: 'CORS: Origin not allowed' },
      {
        status: 403, // Forbidden
      },
    )
  }

  try {
    const allUsers = await prisma.user.findMany()
    return NextResponse.json(allUsers, {
      status: 215,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      {
        status: 500,
      },
    )
  }
}
