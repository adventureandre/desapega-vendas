import { Prisma } from '@prisma/client'

import { prisma } from '@/app/api/lib/prisma'

import { UsersRepository } from '../users-repository'

export class PrismaUserRepository implements UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) return user

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) return user

    return user
  }
}
