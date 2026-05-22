'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Shield,
  Rocket,
  TrendingUp,
  Headphones,
  DollarSign,
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Users,
      title: 'In-House Dedication',
      description: 'We work like in-house employees with the same dedication and attention to detail, but at affordable cost.',
    },
    {
      icon: Shield,
      title: '365 Days Support',
      description: 'Connected with our clients almost every day of the year for consistent guidance and support.',
    },
    {
      icon: Rocket,
      title: 'Network Access',
      description: 'Become part of our professional network and access growth opportunities and industry connections.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Insights',
      description: 'Receive valuable market insights and strategic guidance to support long-term business success.',
    },
    {
      icon: Headphones,
      title: 'Quick Response',
      description: 'No more waiting for an accountant or consultant to respond about important business matters.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Solutions',
      description: 'Professional-grade services at affordable costs compared to hiring full-time in-house staff.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
          <motion.div className="max-w-3xl space-y-4" variants={itemVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Growthway Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              We aren&apos;t just another accounting or consulting company. We are your dedicated growth partners with proven expertise and genuine commitment.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="p-8 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-xl hover:border-accent/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    borderColor: 'rgb(82, 183, 136)',
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 mb-6"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <IconComponent className="w-8 h-8 text-accent" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
