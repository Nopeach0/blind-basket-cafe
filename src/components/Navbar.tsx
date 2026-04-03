import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-stone/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none group">
              <span className={`font-serif text-xl font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-warm-charcoal' : 'text-cream'}`}>
                Blind Basket
              </span>
              <span className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold-light'}`}>
                Café
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                    scrolled ? 'text-mid-brown' : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className={`hidden md:inline-flex items-center px-6 py-2.5 text-xs font-sans font-medium tracking-widest uppercase transition-all duration-300 rounded-sm ${
                  scrolled
                    ? 'bg-gold text-white hover:bg-gold-dark'
                    : 'bg-cream/10 border border-cream/50 text-cream hover:bg-cream hover:text-warm-charcoal'
                }`}
              >
                Book a Table
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-warm-charcoal' : 'text-cream'}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-cream/98 backdrop-blur-md shadow-warm-lg border-b border-stone/30"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-base text-warm-charcoal hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 text-center"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
