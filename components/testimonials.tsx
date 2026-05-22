'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: 'Working with this team transformed our entire business operations. Their expertise and dedication exceeded all expectations.',
      author: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 2,
      text: 'The IT solutions provided were cutting-edge and perfectly aligned with our growth strategy. Outstanding service!',
      author: 'Michael Chen',
      company: 'Global Finance Corp',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      text: 'Their consulting services helped us streamline operations and increase efficiency by 40%. Highly recommended!',
      author: 'Emma Davis',
      company: 'Creative Studios',
      rating: 5,
      image: '👩‍🎨',
    },
    {
      id: 4,
      text: 'Professional, reliable, and innovative. They became an extension of our team and delivered exceptional results.',
      author: 'David Wilson',
      company: 'Enterprise Solutions',
      rating: 5,
      image: '👨‍💻',
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div
            className="max-w-3xl space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
            </p>
          </motion.div>

          {/* Slider */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === current && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-8 md:p-12 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-xl"
                    >
                      {/* Stars */}
                      <div className="flex gap-2 mb-6">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-accent text-accent" />
                            </motion.div>
                          )
                        )}
                      </div>

                      {/* Quote */}
                      <motion.p
                        className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-balance"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        &quot;{testimonial.text}&quot;
                      </motion.p>

                      {/* Author */}
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                          {testimonial.image}
                        </div>
                        <div>
                          <div className="font-bold">{testimonial.author}</div>
                          <div className="text-sm text-foreground/60">
                            {testimonial.company}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prev}
                className="p-3 rounded-full border border-border/20 hover:border-accent/50 hover:bg-accent/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? 'bg-accent w-8'
                        : 'bg-border/40 w-2'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                className="p-3 rounded-full border border-border/20 hover:border-accent/50 hover:bg-accent/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
