import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do you take bookings?',
    a: 'Yes — we recommend booking for groups of 4 or more, especially on weekends. You can reach us via the contact form or give us a call directly. Walk-ins are also welcome based on availability.',
  },
  {
    q: 'Do you offer vegetarian or family-friendly options?',
    a: 'Absolutely. We have a range of vegetarian and dietary-friendly options across our menu, and our kids section is designed specifically with younger guests in mind. Please let your server know of any specific dietary requirements.',
  },
  {
    q: 'Do you serve coffee and smoothies all day?',
    a: 'Yes — our full drinks menu, including coffee, smoothies, and cold beverages, is available throughout our entire opening hours.',
  },
  {
    q: 'Is parking available nearby?',
    a: 'Street parking is available in the surrounding area, though it can be limited during busy periods. We\'d recommend arriving a few minutes early on weekends. Blind Basket is absolutely worth the short walk if needed.',
  },
  {
    q: 'Do you offer dine-in and takeaway?',
    a: 'We offer both dine-in and takeaway. If you\'re grabbing coffee or a smoothie on the go, our team will have it ready for you quickly.',
  },
  {
    q: 'Can I visit for both brunch and lunch?',
    a: 'Yes — our menu is served throughout the day during opening hours. Whether you\'re coming in for a 8am flat white or a 1pm fusion brunch plate, we\'re here for it.',
  },
  {
    q: 'Is the menu suitable for kids?',
    a: 'Yes — we have a dedicated kids section on our menu with simple, nourishing dishes that children love. From scrambled eggs and toast to mini pancake stacks and kids sushi plates, there\'s something for every young guest.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-stone/40 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-serif text-warm-charcoal text-base md:text-lg font-medium leading-snug group-hover:text-gold transition-colors duration-300">
          {faq.q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-sm bg-oat flex items-center justify-center text-mid-brown group-hover:bg-gold/15 group-hover:text-gold transition-all duration-300">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-mid-brown text-sm leading-relaxed font-light pb-5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-4"
          >
            Questions we're often asked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-light-brown text-base font-light"
          >
            Can't find what you're looking for? Use the contact form and we'll be happy to help.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-sm shadow-warm px-6 md:px-10 py-2">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.q} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
