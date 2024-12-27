import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300">
          BlazeGear
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</Link>
          <Link href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">FAQs</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
          <ShoppingCart className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
        </div>
      </div>
    </header>
  )
}

