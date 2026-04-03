import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { reviews } from '../data/reviews'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-sm shadow-warm p-8 flex flex-col gap-5 hover:shadow-warm-lg transition-shadow duration-400"
    >
      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Highlight quote */}
      {review.highlight && (
        <p className="font-serif text-warm-charcoal text-lg italic font-light leading-snug">
          "{review.highlight}"
        </p>
      )}

      {/* Full text */}
      <p className="font-sans text-mid-brown text-sm leading-relaxed font-light flex-1">
        {review.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-stone/30">
        <div className="w-9 h-9 rounded-full bg-oat flex items-center justify-center flex-shrink-0">
          <span className="font-serif text-light-brown text-sm font-medium">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-sans text-warm-charcoal text-sm font-medium">{review.name}</div>
          {review.location && (
            <div className="font-sans text-light-brown text-xs">{review.location} · {review.date}</div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })
  const [page, setPage] = useState(0)
  const perPage = 3
  const pages = Math.ceil(reviews.length / perPage)
  const visible = reviews.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="reviews" className="bg-oat py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label"
          >
            Guest Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading mb-4"
          >
            A place people are{' '}
            <em className="italic font-normal text-gold">delighted to discover.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-light-brown text-base max-w-lg mx-auto font-light leading-relaxed"
          >
            Fresh food, warm service, and the kind of atmosphere that makes you stay a little longer.
          </motion.p>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-serif text-warm-charcoal text-2xl font-medium">5.0</span>
            <span className="font-sans text-light-brown text-sm">from our guests</span>
          </motion.div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {visible.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="p-2.5 rounded-sm border border-stone/50 text-mid-brown hover:bg-white hover:text-warm-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-sans text-light-brown text-sm">
              {page + 1} / {pages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
              disabled={page === pages - 1}
              className="p-2.5 rounded-sm border border-stone/50 text-mid-brown hover:bg-white hover:text-warm-charcoal disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
