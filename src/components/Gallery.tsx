import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  { icon: '☕', label: 'Coffee & Latte Art', span: 'col-span-1 row-span-2', gradient: 'from-[#3D2B1F] to-[#6B4C38]' },
  { icon: '🍱', label: 'Fusion Brunch Plates', span: 'col-span-1 row-span-1', gradient: 'from-oat to-stone' },
  { icon: '🎋', label: 'Fresh Sushi', span: 'col-span-1 row-span-1', gradient: 'from-[#E8F0E4] to-[#C8D8C0]' },
  { icon: '🌿', label: 'Café Interior', span: 'col-span-2 row-span-1', gradient: 'from-[#F0EBE3] to-[#D4C9BC]' },
  { icon: '🥤', label: 'Smoothies & Drinks', span: 'col-span-1 row-span-1', gradient: 'from-[#F5E6D3] to-[#E0C8A8]' },
  { icon: '🍳', label: 'Brunch Classics', span: 'col-span-1 row-span-1', gradient: 'from-[#EDE4D8] to-[#C9B898]' },
  { icon: '🌅', label: 'Morning Light', span: 'col-span-1 row-span-1', gradient: 'from-[#F7EDD8] to-[#E8D0A8]' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-warm-charcoal py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold font-sans text-xs font-medium tracking-widest uppercase mb-4 block"
          >
            The Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-cream text-4xl md:text-5xl font-medium leading-tight mb-4"
          >
            A morning worth{' '}
            <em className="italic font-normal text-gold-light">lingering in.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-cream/50 text-base max-w-md mx-auto font-light"
          >
            Beautiful coffee. Plated with intention. A space designed for calm mornings and unhurried brunch.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[500px] md:h-[600px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative group rounded-sm overflow-hidden bg-gradient-to-br ${item.gradient} ${item.span} cursor-pointer`}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <span className="text-4xl md:text-5xl opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </span>
                <span className="font-sans text-warm-charcoal/30 text-xs tracking-wider text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-warm-charcoal/0 group-hover:bg-warm-charcoal/10 transition-colors duration-400" />

              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-warm-charcoal/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-cream text-xs tracking-wide text-center">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center font-sans text-cream/25 text-xs mt-8 tracking-wide italic"
        >
          Professional photography coming soon. Placeholder gallery shown above.
        </motion.p>
      </div>
    </section>
  )
}
