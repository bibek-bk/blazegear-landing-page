import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-black via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Powering Your Tech Needs
          </h1>
          <p className="text-xl mb-8 text-gray-300">Discover the latest in cutting-edge technology at BlazeGear.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Shop Now
            </a>

            <a href="#products" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              Browse Products
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Tech products showcase"
            className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

