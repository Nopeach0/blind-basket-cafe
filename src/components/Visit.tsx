import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Car, Phone, Mail } from 'lucide-react'

const hours = [
  { day: 'Monday – Friday', time: '7:30 am – 3:30 pm' },
  { day: 'Saturday', time: '8:00 am – 4:00 pm' },
  { day: 'Sunday', time: '8:00 am – 3:00 pm' },
]

export default function Visit() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="visit" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-4"
          >
            Come and visit us.
            <br />
            <em className="italic font-normal text-gold">We'll have coffee ready.</em>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <div className="space-y-10">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-oat rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-warm-charcoal text-lg font-medium mb-1">Location</h3>
                <p className="font-sans text-mid-brown text-sm leading-relaxed font-light">
                  [Address Placeholder]<br />
                  Auckland, New Zealand
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-sans text-xs text-gold tracking-wider uppercase font-medium mt-3 hover:gap-3 transition-all duration-200"
                >
                  Get Directions →
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-oat rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-warm-charcoal text-lg font-medium mb-3">Opening Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8">
                      <span className="font-sans text-mid-brown text-sm font-light">{h.day}</span>
                      <span className="font-sans text-warm-charcoal text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Parking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-oat rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                <Car size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-warm-charcoal text-lg font-medium mb-1">Parking</h3>
                <p className="font-sans text-mid-brown text-sm leading-relaxed font-light">
                  Parking nearby can be limited during peak hours — but trust us, Blind Basket is well worth the extra minute to find a spot. Street parking is available in the surrounding area.
                </p>
              </div>
            </motion.div>

            {/* Contact quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-oat rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-warm-charcoal text-lg font-medium mb-1">Get in Touch</h3>
                <p className="font-sans text-mid-brown text-sm font-light mb-2">+64 [Phone Placeholder]</p>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-light-brown" />
                  <span className="font-sans text-mid-brown text-sm font-light">hello@blindbasketcafe.co.nz</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a href="#" className="btn-primary text-xs px-8 py-3.5">
                Get Directions
              </a>
              <a href="#contact" className="btn-outline text-xs px-8 py-3.5">
                Book a Table
              </a>
            </motion.div>
          </div>

          {/* Right — Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-sm overflow-hidden shadow-warm-lg"
          >
            <div className="bg-gradient-to-br from-oat to-stone aspect-[4/3] flex flex-col items-center justify-center gap-4 p-10 text-center relative">
              <div className="text-5xl opacity-20">📍</div>
              <div>
                <p className="font-serif text-warm-charcoal/60 text-lg mb-1">Google Maps</p>
                <p className="font-sans text-light-brown/50 text-xs tracking-wider uppercase">
                  Map embed will appear here
                </p>
              </div>
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(#6B5B4E 1px, transparent 1px), linear-gradient(90deg, #6B5B4E 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
            {/* Map bottom bar */}
            <div className="bg-white px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-serif text-warm-charcoal text-sm font-medium">Blind Basket Cafe</p>
                <p className="font-sans text-light-brown text-xs">Auckland, New Zealand</p>
              </div>
              <a
                href="#"
                className="font-sans text-xs text-gold tracking-wider uppercase font-medium hover:text-gold-dark transition-colors duration-200"
              >
                Open in Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
