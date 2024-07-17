'use client'
import Image from 'next/image'
import logo from '@/images/logo.png'
import carrinhoDeBb from '@/images/carinho-de-bb.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const carousel = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [valueItemRef, setValueItemRef] = useState(0)

  const controls = useAnimation()

  const handlePrev = () => {
    setCurrentX((prev) => Math.min(prev + valueItemRef, 0))
  }

  const handleNext = () => {
    setCurrentX((prev) => Math.max(prev - valueItemRef, -width))
  }

  useEffect(() => {
    controls.start({ x: currentX, transition: { duration: 0.8 } })
  }, [currentX, controls])

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }

    if (itemRef.current) {
      setValueItemRef(itemRef.current?.offsetWidth)
    }
  }, [])

  return (
    <>
      <header className="flex justify-between flex-col gap-2">
        <div className="py-8 px-20">
          <h1 className="text-zero">Desapega Vendas</h1>
          <Image src={logo} alt="Logo" width={200} />
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
                  onClick={handlePrev}
                  className="bg-zinc-300 text-gray-900 rounded-sm p-2 hover:bg-gray-500 hover:text-gray-200"
                  aria-label="Previous"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-zinc-400 text-gray-900 rounded-sm p-2 hover:bg-gray-600 hover:text-gray-200"
                  aria-label="Next"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>

          <div className="  flex flex-wrap justify-center">
            <motion.div
              ref={carousel}
              className="carousel  overflow-hidden"
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                className=" inner flex gap-3"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 0 }}
                animate={controls}
                transition={{ duration: 0.8 }}
              >
                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>

                <article
                  ref={itemRef}
                  className="p-2 rounded-md bg-zinc-200 min-h-[350px] min-w-[270px]"
                >
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
                  <p className="text-zinc-600">Wakter Johson - Unico</p>
                </article>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
