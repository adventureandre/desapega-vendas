import Image from 'next/image'
import { LuSearch } from 'react-icons/lu'

export const Header = () => {
  return (
    <header className="flex justify-between flex-col gap-2 ">
      <div className="py-8 px-20 flex items-center">
        <h1 className="text-zero">Desapega Vendas</h1>
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
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
  )
}
