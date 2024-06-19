// Images
import ImgLogo from '@/images/logo.png'
import Image from 'next/image'

// Icons
import { FaBars } from 'react-icons/fa'

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#">
        <Image src={ImgLogo} alt="Logo" className="w-32" />
      </a>
      <div className="space-x-4 hidden md:flex">
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          Stars
        </a>
        <a href="#" className="hover:text-gray-700">
          Pagina Simples
        </a>
        <div className="relative">
          <button className="hover:text-gray-700">Categorias</button>
          <div className="absolute hidden bg-white shadow-lg mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              nova
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              mais
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              top
            </a>
          </div>
        </div>
        <div className="relative">
          <button className="hover:text-gray-700">Community</button>
          <div className="absolute hidden bg-white shadow-lg mt-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Action in
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Another action
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Something else here
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-gray-700">
          Contact
        </a>
      </div>
      <button className="md:hidden flex items-center">
        <FaBars className="text-gray-700" />
      </button>
    </div>
  </nav>
)

export default Navbar
