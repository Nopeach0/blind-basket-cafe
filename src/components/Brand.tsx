import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    number: '01',
    title: 'Morning Vibes Done Right',
    description:
      'Blind Basket was made for mornings. Whether you\'re after a quiet solo coffee or a slow brunch with someone you love, our space invites you to settle in and take your time.',
  },
  {
    number: '02',
    title: 'Fusion With Intention',
    description:
      'We blend the warmth of a classic brunch café with flavours from across Asia. Miso salmon, teriyaki chicken, fresh sushi, and Korean-inspired plates sit comfortably alongside eggs Benedict and avocado toast.',
  },
  {
    number: '03',
    title: 'Coffee You\'ll Come Back For',
    description:
      'Our espresso is sourced from a single-origin roast we\'re proud of. Every flat white, piccolo, and latte is crafted with care — and finished with the kind of latte art that makes you pause before you drink it.',
  },
  {
    number: '04',
    title: 'A Table for Everyone',
    description:
      'From brunch dates and family gatherings to solo mornings with a good book — Blind Basket was built to welcome everyone. Our menu carries something for every palate, including the little ones.',
  },
]

function Pillar({ item, index }: { item: typeof pillars[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex gap-6 md:gap-8"
    >
      <div className="flex-shrink-0 pt-1">
        <span className="font-serif text-gold text-2xl font-light opacity-70">{item.number}</span>
      </div>
      <div>
        <h3 className="font-serif text-warm-charcoal text-xl font-medium mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="font-sans text-light-brown text-base leading-relaxed font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Brand() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section id="about-intro" className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Heading */}
          <div ref={headingRef} className="md:sticky md:top-32">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              What makes us different
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading mb-6"
            >
              Not just a café.
              <br />
              <em className="font-serif italic text-gold font-normal">A favourite place.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-mid-brown text-base leading-relaxed font-light mb-10"
            >
              Blind Basket Cafe is where thoughtful food, great coffee, and genuine hospitality come together. We're a multicultural brunch destination with clean, calm surroundings and a kitchen that takes its craft seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <a href="#menu" className="btn-primary text-xs px-7 py-3">
                Explore the Menu
              </a>
            </motion.div>

            {/* Visual accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 h-px bg-gradient-to-r from-gold/50 to-transparent origin-left"
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex gap-10"
            >
              {[
                { number: '100+', label: 'Menu Items' },
                { number: '5★', label: 'Customer Rating' },
                { number: 'Daily', label: 'Fresh Brunch' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-warm-charcoal text-2xl font-medium">{stat.number}</div>
                  <div className="font-sans text-light-brown text-xs tracking-wider uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Pillars */}
          <div className="flex flex-col gap-10 md:gap-12">
            {pillars.map((item, index) => (
              <Pillar key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
