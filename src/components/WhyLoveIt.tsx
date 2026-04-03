import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Coffee, Globe, Leaf, Sun, Users, Baby } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Warm, Welcoming Service',
    description: 'Our team is genuinely friendly — the kind of service that makes you feel like a regular from your first visit.',
  },
  {
    icon: Leaf,
    title: 'Fresh, Well-Made Food',
    description: 'Everything is prepared fresh each day. Quality ingredients, thoughtful preparation, and honest flavour in every dish.',
  },
  {
    icon: Globe,
    title: 'Multicultural Fusion Menu',
    description: 'A menu that bridges cultures with care. Asian-inspired brunch, sushi, and fusion specials alongside beloved classics.',
  },
  {
    icon: Coffee,
    title: 'Exceptional Coffee',
    description: 'Single-origin espresso, carefully extracted, with beautiful latte art. Coffee you\'ll look forward to every morning.',
  },
  {
    icon: Sun,
    title: 'Clean, Calm Atmosphere',
    description: 'Refined and unhurried. A café that feels like a genuine escape — somewhere you actually want to spend your morning.',
  },
  {
    icon: Users,
    title: 'Perfect for Any Occasion',
    description: 'Whether it\'s a date brunch, a catch-up with friends, a solo morning, or a family lunch — Blind Basket fits every mood.',
  },
  {
    icon: Baby,
    title: 'Family-Friendly by Design',
    description: 'A menu that caters for kids and adults alike. Relaxed and welcoming for families without compromising the experience.',
  },
  {
    icon: Heart,
    title: 'A Place Worth Returning To',
    description: 'Guests who discover Blind Basket tend to come back. Again and again. It\'s that kind of place.',
  },
]

function ReasonCard({ item, index }: { item: typeof reasons[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex gap-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
          <Icon size={18} className="text-gold" />
        </div>
        <div>
          <h3 className="font-serif text-warm-charcoal text-lg font-medium mb-2 leading-snug">
            {item.title}
          </h3>
          <p className="font-sans text-light-brown text-sm leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyLoveIt() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="max-w-xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Why Guests Love Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-5"
          >
            A place people are{' '}
            <em className="italic font-normal text-gold">delighted to discover.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-mid-brown text-base leading-relaxed font-light"
          >
            Fresh food, warm service, and the kind of atmosphere that makes you stay a little longer. These are the things our guests tell us they love most.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {reasons.map((item, index) => (
            <ReasonCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
