import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const purposes = [
  'Table Booking',
  'Group Booking (6+ guests)',
  'Special Occasion',
  'General Enquiry',
  'Feedback',
  'Other',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-oat border border-stone/50 rounded-sm px-4 py-3 font-sans text-sm text-warm-charcoal placeholder:text-light-brown/60 focus:outline-none focus:border-gold/60 focus:bg-white transition-all duration-200'

  return (
    <section id="contact" className="bg-oat py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Intro */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label"
            >
              Book a Table
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading mb-6"
            >
              We'd love to
              <br />
              <em className="italic font-normal text-gold">hear from you.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-mid-brown text-base leading-relaxed font-light mb-8"
            >
              Whether you're planning a brunch date, a family outing, or a group celebration — we're here to help make it a great one. Send us a message and we'll get back to you promptly.
            </motion.p>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 bg-white/70 border border-stone/30 rounded-sm"
            >
              <p className="font-sans text-mid-brown text-sm leading-relaxed font-light">
                <strong className="font-medium text-warm-charcoal">Group bookings or special requests?</strong>
                {' '}Send us a message using the form and we'll be in touch to discuss the details personally.
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 h-px bg-gradient-to-r from-gold/50 to-transparent origin-left"
            />

            {/* Quick details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-center gap-3 font-sans text-sm text-mid-brown font-light">
                <span className="text-gold">→</span>
                Typically respond within a few hours during business hours
              </div>
              <div className="flex items-center gap-3 font-sans text-sm text-mid-brown font-light">
                <span className="text-gold">→</span>
                Walk-ins welcome based on availability
              </div>
              <div className="flex items-center gap-3 font-sans text-sm text-mid-brown font-light">
                <span className="text-gold">→</span>
                Open 7 days — see our hours in the Visit section
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-sm shadow-warm p-10 text-center"
              >
                <div className="text-4xl mb-4">☕</div>
                <h3 className="font-serif text-warm-charcoal text-2xl font-medium mb-3">
                  Thank you for reaching out.
                </h3>
                <p className="font-sans text-mid-brown text-sm leading-relaxed font-light">
                  We've received your message and will be in touch shortly. We look forward to welcoming you to Blind Basket.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-sm shadow-warm p-8 md:p-10 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block font-sans text-xs text-mid-brown tracking-wider uppercase mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-xs text-mid-brown tracking-wider uppercase mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans text-xs text-mid-brown tracking-wider uppercase mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+64 21 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="block font-sans text-xs text-mid-brown tracking-wider uppercase mb-2 font-medium">
                    Purpose of Enquiry
                  </label>
                  <select
                    value={form.purpose}
                    onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select a reason</option>
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-xs text-mid-brown tracking-wider uppercase mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your booking or enquiry — date, time, number of guests, or any special requests..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-xs">
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
