import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { LuSearch } from 'react-icons/lu'

import carrinhoDeBb from '@/images/carinho-de-bb.png'
import logo from '@/images/logo.png'

export default async function Home() {
  return (
    <>
      <header className="flex justify-between flex-col gap-2 ">
        <div className="py-8 px-20 flex items-center">
          <h1 className="text-zero">Desapega Vendas</h1>
          <Image src={logo} alt="Logo" width={100} />
          <div className="bg-desapegaFundoHover flex gap-1 items-center ml-6 py-3 px-6 rounded-2xl">
            <input
              className="w-[320px] bg-transparent outline-none text-base "
              type="text"
              placeholder="buscar itens"
            />
            <LuSearch className=" text-2xl" />
          </div>

          <div className="flex w-full justify-end gap-4">
            <button className="py-3 px-6 rounded-xl border border-gray-300 hover:border-gray-500 hover:text-gray-700 transition-colors duration-300">
              Entrar
            </button>
            <button className="bg-orange-600 text-gray-100 py-3 px-6 rounded-xl hover:bg-orange-700 transition-colors duration-300">
              Anunciar Grátis
            </button>
          </div>
        </div>
      </header>
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
              <article
                key={i}
                className="p-2 rounded-md bg-desapegaWhite min-h-[350px] min-w-[270px]"
              >
                <Image
                  className="w-[250px] h-[300px] rounded-md mb-1"
                  src={carrinhoDeBb}
                  alt=""
                  width={450}
                />
                <span className="text-zinc-900 font-bold">R$2.500,00</span>
                <h3 className="text-md text-zinc-900 text-left">
                  Carrinho de Bebê
                </h3>

                <p className="text-zinc-600">
                  sem marca <br /> Wakter Johson - Unico
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
