'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How long does development take?',
      answer:
        'Project timelines vary based on scope and complexity. Typically, small projects take 2-4 weeks, while larger enterprise solutions may take 2-6 months. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you provide accounting reports?',
      answer:
        'Yes, we provide comprehensive accounting reports including financial statements, tax reports, and custom reports tailored to your business needs. Reports are available monthly, quarterly, or annually.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer:
        'Absolutely! We provide 24/7 technical support, maintenance, and optimization services. We offer flexible support packages to match your business requirements.',
    },
    {
      question: 'Can startups get funding guidance?',
      answer:
        'Yes, our grants and funding specialists help startups navigate the funding landscape. We assist with grant applications, investor presentations, and funding strategy development.',
    },
    {
      question: 'Do you develop mobile applications?',
      answer:
        'Yes, we develop cross-platform mobile applications using React Native and Flutter. We create apps for iOS, Android, or both platforms depending on your target audience.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="space-y-4 text-center" variants={itemVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-border/20 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-xl hover:border-accent/30 transition-colors"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-6 md:px-8 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
                  whileHover={{ paddingLeft: 32 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-lg font-semibold text-left">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-accent" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 pt-2 text-foreground/70 leading-relaxed border-t border-border/20">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-foreground/70 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <motion.button
              className="px-8 py-3 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
