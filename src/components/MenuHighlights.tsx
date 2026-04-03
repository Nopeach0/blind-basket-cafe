import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { menuHighlights } from '../data/menu'

const badgeColors: Record<string, string> = {
  "Chef's Favourite": 'bg-gold/15 text-gold-dark border border-gold/30',
  "Customer Favourite": 'bg-warm-charcoal/8 text-mid-brown border border-stone/40',
  "Popular": 'bg-oat text-mid-brown border border-stone/40',
  "Signature": 'bg-gold/15 text-gold-dark border border-gold/30',
  "Must Try": 'bg-deep-brown/10 text-deep-brown border border-deep-brown/20',
}

function HighlightCard({ item, index }: { item: typeof menuHighlights[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-sm shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-oat to-stone overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
            {item.icon}
          </span>
        </div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-warm-charcoal/0 group-hover:bg-warm-charcoal/5 transition-colors duration-500" />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 text-xs font-sans font-medium tracking-wider rounded-sm ${badgeColors[item.badge] || 'bg-oat text-mid-brown border border-stone/40'}`}>
              {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-warm-charcoal text-xl font-medium mb-2 leading-snug group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <p className="font-sans text-light-brown text-sm leading-relaxed font-light mb-5">
          {item.description}
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 font-sans text-xs text-gold tracking-wider uppercase font-medium hover:gap-3 transition-all duration-300"
        >
          View Menu
          <span className="text-gold">→</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function MenuHighlights() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-oat py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Signature Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-4"
          >
            What people order again and again
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-light-brown text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            From our celebrated miso salmon bowl to the flat white that makes you stay a little longer — these are the dishes and drinks that define Blind Basket.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuHighlights.map((item, index) => (
            <HighlightCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a href="#menu" className="btn-outline text-xs px-10 py-3.5">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
