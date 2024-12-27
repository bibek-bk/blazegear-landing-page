import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">BlazeGear</h3>
            <p className="text-gray-300">Powering Your Tech Needs</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Products</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">FAQs</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Legal</h3>
            <ul>
              <li><a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BlazeGear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

