'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const achievements = [
    'We work like an in-house employee with dedication and commitment',
    'Available almost every day, 365 days a year',
    'Professional network for growth opportunities',
    'Strategic market insights and industry contacts',
    'Affordable compared to traditional in-house hiring',
    'Long-term success focused approach',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="space-y-4 max-w-2xl" variants={itemVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We Aren&apos;t Just Another Accounting Company
            </h2>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Left Column */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Approach</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  We work with our clients the same way an in-house employee would—with the same dedication, commitment, and attention to detail—but at an affordable cost. This philosophy guides everything we do.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Network</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  When you work with us, you become part of our professional network. We help connect businesses with growth opportunities, valuable industry contacts, and strategic market insights.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Achievements */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-card/50 border border-border/20 hover:border-accent/30 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 8, borderColor: 'rgb(82, 183, 136)' }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { label: 'Businesses Served', value: '500+' },
              { label: 'Days Available', value: '365' },
              { label: 'Provinces Covered', value: '2+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
