import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function FeaturedProducts() {
  const products = useSelector((state: RootState) => state.products.featuredProducts)

  return (
    <section className="py-16 bg-gray-900" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-blue-400 mb-4">${product.price.toFixed(2)}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300 w-full transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

