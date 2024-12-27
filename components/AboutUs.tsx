import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-16 bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="About BlazeGear"
              width={600}
              height={400}
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-white">About BlazeGear</h2>
            <p className="text-gray-300 mb-4">
              At BlazeGear, we're passionate about bringing you the latest and greatest in tech innovation. Our curated selection of cutting-edge products is designed to enhance your digital lifestyle and keep you ahead of the curve.
            </p>
            <p className="text-gray-300 mb-4">
              With a commitment to quality, security, and customer satisfaction, we've become a trusted name in the world of tech retail. Our team of experts is dedicated to providing you with not just products, but solutions that power your tech needs.
            </p>
            <p className="text-gray-300">
              Choose BlazeGear for unparalleled selection, secure transactions, and a shopping experience that's as cutting-edge as the products we offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

