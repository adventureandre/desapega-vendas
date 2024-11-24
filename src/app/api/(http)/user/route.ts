import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/app/api/lib/prisma'

import { UserAlreadyExistsError } from '../../use-cases/errors/use-already-exists-error'
import { makeRegisterUseCase } from '../../use-cases/factories/make-resgister-use-case'

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany()
    return NextResponse.json(
      { allUsers },
      {
        status: 215,
      },
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      {
        status: 500,
      },
    )
  }
}

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json()

  try {
    const registerUserCase = makeRegisterUseCase()

    await registerUserCase.execute({
      name,
      email,
      password,
    })

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 },
    )
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return NextResponse.json({ message: err.message }, { status: 409 })
    }
    throw err
  }
}
