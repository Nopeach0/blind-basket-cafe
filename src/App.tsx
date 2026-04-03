import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import MenuHighlights from './components/MenuHighlights'
import WhyLoveIt from './components/WhyLoveIt'
import MenuSection from './components/MenuSection'
import Reviews from './components/Reviews'
import About from './components/About'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Brand />
      <MenuHighlights />
      <WhyLoveIt />
      <MenuSection />
      <Reviews />
      <About />
      <Gallery />
      <Visit />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
