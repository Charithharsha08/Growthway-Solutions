'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Process() {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We listen to understand your business challenges, current situation, goals, and growth vision.',
      icon: '📞',
    },
    {
      number: 2,
      title: 'Assessment & Analysis',
      description: 'Deep dive into your financial records, operations, and identify areas for improvement.',
      icon: '📊',
    },
    {
      number: 3,
      title: 'Custom Strategy',
      description: 'Develop a tailored plan with clear objectives, timelines, and success metrics.',
      icon: '🎯',
    },
    {
      number: 4,
      title: 'Implementation',
      description: 'Execute the strategy with our expert team providing daily support and guidance.',
      icon: '⚙️',
    },
    {
      number: 5,
      title: 'Monitoring & Optimization',
      description: 'Track progress, measure results, and continuously optimize for better outcomes.',
      icon: '📈',
    },
    {
      number: 6,
      title: 'Ongoing Support',
      description: 'Available 365 days a year for ongoing strategic guidance and growth support.',
      icon: '🤝',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="process">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-40"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="max-w-3xl mx-auto text-center space-y-4" variants={cardVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Path to Business Growth
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A proven 6-step process designed to transform your business and create sustainable growth.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative h-full"
                variants={cardVariants}
              >
                {/* Card background with border */}
                <motion.div
                  className="relative p-8 h-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-xl hover:border-accent/60 transition-all duration-300 hover:bg-card/60 hover:shadow-xl"
                  whileHover={{ y: -8 }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent/50 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Step number badge */}
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white font-bold text-lg mb-6 shadow-lg"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed text-sm mb-6">
                    {step.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-accent font-semibold text-sm"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-8 p-10 rounded-3xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 text-center shadow-2xl"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-3xl font-bold  mb-3">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="font-bold mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how our proven process can help transform your business and drive sustainable growth.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-base font-semibold rounded-xl group cursor-pointer"
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
