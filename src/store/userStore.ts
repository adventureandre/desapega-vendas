import { prisma } from '@/lib/prisma'
import { create } from 'zustand'

interface User {
  id: string
  createdAt: Date
  email: string
  name: string | null
  password: string
}

type UserStore = {
  getAllUsers: () => Promise<User[]>
  findbyEmail: (email: string) => Promise<User | null>
}

export const userStore = create<UserStore>(() => ({
  getAllUsers: async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
  },

  findbyEmail: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (user) {
      return user
    }
    return null
  },
}))
