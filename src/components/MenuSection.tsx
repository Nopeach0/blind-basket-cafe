import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { menuItems, menuCategories } from '../data/menu'

const badgeStyles: Record<string, string> = {
  "Chef's Favourite": 'bg-gold/15 text-gold-dark',
  "Customer Favourite": 'bg-warm-charcoal/8 text-mid-brown',
  "Popular": 'bg-oat text-mid-brown',
  "Signature": 'bg-gold/15 text-gold-dark',
  "Must Try": 'bg-deep-brown/10 text-deep-brown',
}

const dietaryStyles = 'bg-sage/15 text-olive-muted text-xs px-2 py-0.5 rounded-sm font-sans font-medium'

function MenuCard({ item, index }: { item: typeof menuItems[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      className="group border border-stone/40 bg-white/60 rounded-sm p-6 hover:bg-white hover:shadow-warm hover:border-stone/60 transition-all duration-400"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="font-serif text-warm-charcoal text-base font-medium leading-snug group-hover:text-gold transition-colors duration-300">
              {item.name}
            </h3>
            {item.badge && (
              <span className={`flex-shrink-0 text-xs font-sans font-medium px-2 py-0.5 rounded-sm ${badgeStyles[item.badge] || 'bg-oat text-mid-brown'}`}>
                {item.badge}
              </span>
            )}
          </div>
          <p className="font-sans text-light-brown text-sm leading-relaxed font-light mb-3">
            {item.description}
          </p>
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.dietary.map((tag) => (
                <span key={tag} className={dietaryStyles}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 text-right">
          <span className="font-serif text-warm-charcoal text-lg font-medium">
            ${item.price.toFixed(2)}
          </span>
          <span className="block font-sans text-light-brown text-xs mt-0.5">NZD</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Brunch')
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  const filtered = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="bg-off-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-4"
          >
            Fresh, seasonal, and made with care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-light-brown text-base max-w-lg mx-auto font-light"
          >
            From brunch classics to Asian-inspired fusion and handcrafted sushi — our menu is built around quality, freshness, and flavour.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-sans text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-warm-charcoal text-cream shadow-warm'
                  : 'bg-oat text-mid-brown hover:bg-stone/60 hover:text-warm-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-4 md:gap-5"
          >
            {filtered.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-sans text-light-brown/70 text-xs mt-10 tracking-wide"
        >
          Prices in NZD. Menu subject to seasonal changes. Please inform your server of any dietary requirements.
        </motion.p>
      </div>
    </section>
  )
}
