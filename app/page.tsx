import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutUs />
        <Features />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

