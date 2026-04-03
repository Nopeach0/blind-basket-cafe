import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            {/* Main image placeholder */}
            <div className="relative rounded-sm overflow-hidden bg-gradient-to-br from-oat to-stone aspect-[4/5]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="text-7xl opacity-20">☕</div>
                <div>
                  <p className="font-sans text-light-brown/50 text-xs tracking-widest uppercase">
                    Photography coming soon
                  </p>
                  <p className="font-serif text-mid-brown/60 text-sm italic mt-1">
                    Café interior & atmosphere
                  </p>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:-right-8 bg-white rounded-sm shadow-warm-lg p-6 max-w-[200px]"
            >
              <div className="text-3xl mb-2">🌿</div>
              <p className="font-serif text-warm-charcoal text-sm font-medium leading-snug">
                Thoughtful food. Genuine hospitality.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Story */}
          <div ref={ref} className="order-1 md:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading mb-8"
            >
              Built around good food,
              <br />
              <em className="italic font-normal text-gold">great coffee,</em>
              <br />
              and real warmth.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-5 font-sans text-mid-brown text-base leading-relaxed font-light"
            >
              <p>
                Blind Basket Cafe was born from a simple belief: that a great café should feel like a second home. A place where the coffee is always worth ordering, the food is always made with care, and the people serving you genuinely want you to enjoy yourself.
              </p>
              <p>
                We've built our menu around two things we love — the warmth of a classic brunch experience and the depth of flavour that comes from Asian-inspired cooking. The result is something genuinely distinctive: multicultural fusion dishes that feel comfortable and exciting at the same time.
              </p>
              <p>
                From our miso salmon bowl to our spicy tuna rolls, our fresh-pressed flat whites to our thick, indulgent smoothies — every item on our menu reflects the same standard. Honest ingredients. Careful preparation. Real flavour.
              </p>
              <p>
                We're proud to have built something that people return to. Not just for the food, but for the feeling of being here.
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-gold/50 to-transparent origin-left my-10"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#visit" className="btn-primary text-xs px-8 py-3.5">
                Visit Us
              </a>
              <a href="#menu" className="btn-outline text-xs px-8 py-3.5">
                Explore the Menu
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
