import { prisma } from '@/lib/prisma'
import { create } from 'zustand'

interface User {
  id: number
  createdAt: Date
  email: string
  name: string | null
}

type UserStore = {
  getAllUsers: () => Promise<User[]>
}

export const userStore = create<UserStore>(() => ({
  getAllUsers: async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
  },
}))
