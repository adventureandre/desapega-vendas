import ImgLogo from '@/images/logo.png'
import Image from 'next/image'
import {
  FaLinkedin,
  FaGooglePlus,
  FaTwitter,
  FaFacebook,
  FaSearch,
} from 'react-icons/fa'

const Header = () => (
  <div className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Image src={ImgLogo} alt="Logo" className="w-32" />
      <div className="flex space-x-4">
        <FaSearch className="hover:text-gray-400" />
        <FaLinkedin className="hover:text-gray-400" />
        <FaGooglePlus className="hover:text-gray-400" />
        <FaTwitter className="hover:text-gray-400" />
        <FaFacebook className="hover:text-gray-400" />
        <select className="bg-gray-700 text-white rounded px-2 py-1">
          <option>English</option>
          <option>French</option>
          <option>German</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  </div>
)

export default Header
