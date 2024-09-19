'use client'

import { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import { itemStore } from '@/store/itemStore'

import { Item } from './items'

export function Main() {
  const { products, isLoading, load } = itemStore((store) => {
    return {
      products: store.product,
      isLoading: store.isLoading,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
  }, [])

  return (
    <main className="space-y-6 flex justify-center flex-wrap">
      <section className="max-w-[1100px] space-y-6 min-w-[400px] w-full">
        <div className="py-4 border-b border-gray-400">
          <div className="flex justify-between items-center ">
            <h2 className="text-3xl text-zinc-400">Novos</h2>
            <div className="flex gap-1 ">
              <button
                className=" flex items-center hover:text-orange-600 "
                aria-label="Next"
              >
                Mais
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {isLoading ? (
            <div>Carregando</div>
          ) : (
            products?.map((product) => <Item key={product.id} item={product} />)
          )}
        </div>
      </section>
    </main>
  )
}
