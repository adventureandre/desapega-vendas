import Image from 'next/image'
import logo from '@/images/logo.png'
import carrinhoDeBb from '@/images/carinho-de-bb.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Home() {
  return (
    <>
      <header className="flex justify-between flex-col gap-2">
        <div className="py-8 px-20">
          <h1 className="text-zero">Desapega Vendas</h1>
          <Image src={logo} alt="Logo" width={200} height={50} />
        </div>
        <nav className="w-full h-16 bg-zinc-300">
          <ul className="flex justify-around items-center h-full">
            <li>
              <a
                className="px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-zinc-100 transition duration-300"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-zinc-100 transition duration-300"
                href="#"
              >
                Stars
              </a>
            </li>
            <li>
              <a
                className="px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-zinc-100 transition duration-300"
                href="#"
              >
                Samples page
              </a>
            </li>
            <li>
              <a
                className="px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-zinc-100 transition duration-300"
                href="#"
              >
                Category
              </a>
            </li>
            <li>
              <a
                className="px-5 py-3 rounded-md hover:bg-yellow-500 hover:text-zinc-100 transition duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="space-y-6">
        <section className="mx-[250px] space-y-6">
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

          <div className="  flex gap-3 flex-wrap justify-center">
            <article className="p-2 rounded-md bg-zinc-200">
              <Image
                className="w-[250px] h-[326px]"
                src={carrinhoDeBb}
                alt=""
                width={450}
              />
              <span className="text-zinc-900">R$2.500,00</span>
              <h3 className="text-md text-zinc-900 text-left">
                Carrinho de Bebê
              </h3>
              <p className="text-zinc-600">sem marca</p>
              <p className="text-zinc-600">Unico</p>
            </article>

          </div>
        </section>
      </main>
    </>
  )
}
