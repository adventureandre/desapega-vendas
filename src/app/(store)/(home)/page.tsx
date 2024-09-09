import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'

import carrinhoDeBb from '@/images/carinho-de-bb.png'
import logo from '@/images/logo.png'

export default async function Home() {
  return (
    <>
      <header className="flex justify-between flex-col gap-2">
        <div className="py-8 px-20 flex items-center">
          <h1 className="text-zero">Desapega Vendas</h1>
          <Image src={logo} alt="Logo" width={100} />
          <div className="bg-desapegaFundoHover flex gap-1 items-center ml-6 py-2 px-4 rounded-lg">
            <input
              className="w-[320px] bg-desapegaFundoHover outline-none text-base "
              type="text"
              placeholder="buscar itens"
            />
            <LuSearch className=" text-2xl" />
          </div>
        </div>
      </header>
      <main className="space-y-6 flex justify-center">
        <section className="max-w-[1100px] space-y-6 min-w-[400px]">
          <div className="py-4 border-b border-gray-400">
            <div className="flex justify-between items-center ">
              <h2 className="text-3xl text-zinc-400">Novos</h2>
              <div className="flex gap-2 ">
                <button
                  className="bg-zinc-300 text-gray-900 rounded-sm p-2 hover:bg-gray-500 hover:text-gray-200"
                  aria-label="Previous"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  className="bg-zinc-400 text-gray-900 rounded-sm p-2 hover:bg-gray-600 hover:text-gray-200"
                  aria-label="Next"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <article
                key={i}
                className="p-2 rounded-md bg-desapegaWhite min-h-[350px] min-w-[270px]"
              >
                <Image
                  className="w-[250px] h-[300px] rounded-md"
                  src={carrinhoDeBb}
                  alt=""
                  width={450}
                />
                <span className="text-zinc-900">R$2.500,00</span>
                <h3 className="text-md text-zinc-900 text-left">
                  Carrinho de Bebê
                </h3>
                <p className="text-zinc-600">sem marca</p>
                <p className="text-zinc-600">Wakter Johson - Unico</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
