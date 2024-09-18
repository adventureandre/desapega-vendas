"use client"

import { IoIosArrowForward } from 'react-icons/io'

import { Item } from './items'
import { userStore } from '@/store/userStore'

export function Main() {

  const items = userStore((store)=>{
    return {
      items: store.users,
      
    }
  })

  return (
    <main className="space-y-6 flex justify-center flex-wrap">
      <section className="max-w-[1100px] space-y-6 min-w-[400px]">
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
          {Array.from({ length: 4 }).map((_, i) => (
            <Item key={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
