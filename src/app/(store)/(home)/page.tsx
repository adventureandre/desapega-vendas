// Images
import ImgWhiteLogo from '@/images/white_logo.png'
import ImgNickKarvounis from '@/images/nick-karvounis-78711.jpg'
import ImgScience from '@/images/science-578x362.jpg'
import Image from 'next/image'

import Header from '@/components/Header'
import Navbar from '@/components/NavBar'

// Icons
import {
  FaClock,
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src={ImgNickKarvounis}
              alt="Imagem"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <time className="mb-2">
                <FaClock /> Dec 31,2017
              </time>
              <h2 className="text-xl">
                After all is said and done, more is said than done
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Repita este bloco para outros itens */}
            <div className="relative">
              <Image src={ImgScience} alt="Imagem" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <time className="mb-2">
                  <FaClock /> Oct 28,2017
                </time>
                <h2 className="text-lg">After all is said and done...</h2>
              </div>
            </div>
            {/* Fim do bloco repetido */}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Image src={ImgWhiteLogo} alt="Logo" className="w-32" />
            <div className="flex space-x-4">
              <FaLinkedin className="hover:text-gray-400" />
              <FaGooglePlus className="hover:text-gray-400" />
              <FaTwitter className="hover:text-gray-400" />
              <FaFacebook className="hover:text-gray-400" />
            </div>
          </div>
          <div className="mt-4">
            <form className="flex space-x-4">
              <input
                type="email"
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded"
                placeholder="Seu email"
              />
              <button className="bg-blue-600 px-4 py-2 rounded">
                Receber novidades
              </button>
            </form>
          </div>
          <div className="mt-4 text-center">
            <p>© Copyright 2020, All rights reserved. Design by Andre Luiz.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
              <a href="#" className="hover:text-gray-400">
                Latest News
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
