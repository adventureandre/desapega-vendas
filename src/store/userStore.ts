import { User } from '@prisma/client'
import { create } from 'zustand'

import { api } from '@/lib/api'
import { prisma } from '@/lib/prisma'

// interface User {
//   id: string
//   createdAt: Date
//   email: string
//   name: string | null
//   password: string
// }

type UserStore = {
  users: User[] | null
  isLoading: boolean
  load: () => Promise<void>
  findbyEmail: (email: string) => Promise<User | null>
}

export const userStore = create<UserStore>((set, get) => ({
  // States
  users: null,
  isLoading: false,

  // functions
  load: async () => {
    set({ isLoading: true })
    try {
      const response = await api('/user')
      const allUsers: User[] = await response.json()

      set({
        users: allUsers,
        isLoading: false,
      })
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
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
