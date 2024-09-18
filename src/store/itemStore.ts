import { Product } from '@prisma/client'
import { create } from 'zustand'

import { api } from '@/lib/api'

type ItemStore = {
  product: Product[] | null
  isLoading: boolean
  load: () => Promise<void>
}

export const itemStore = create<ItemStore>((set, get) => ({
  // States
  product: null,
  isLoading: false,

  // functions
  load: async () => {
    set({ isLoading: true })
    try {
      const response = await api('/products')
      const { products } = await response.json()

      set({
        product: products,
        isLoading: false,
      })
    } catch (err) {
      console.log('Failed to fetch items', err)
    }
  },
}))
