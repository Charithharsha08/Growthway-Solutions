'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Code2,
  Zap,
  TrendingUp,
  Lightbulb,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Accounting & Bookkeeping',
      slug: 'accounting-bookkeeping',
      description: 'Comprehensive bookkeeping and accounting solutions to keep your business financial records accurate and compliant.',
      features: ['Daily Bookkeeping', 'Bank Reconciliations', 'Payroll Processing', 'CRA Representation', 'Financial Reporting'],
      image: '/images/accounting.png',
    },
    {
      icon: TrendingUp,
      title: 'Business Controller & Consulting',
      slug: 'business-consulting',
      description: 'Act as your in-house financial advisor with daily support for operations, controls, and strategic financial management.',
      features: ['Cash Flow Management', 'Financial Control Systems', 'Performance Analysis', 'Budgeting & Forecasting', 'Regular Site Visits'],
      image: '/images/consulting.png',
    },
    {
      icon: Award,
      title: 'Grants & Funding Guidance',
      slug: 'grants-funding',
      description: 'Expert support in identifying and securing grants and funding programs for business growth and expansion.',
      features: ['Grant Identification', 'Application Preparation', 'Business Plan Support', 'Financial Documentation'],
      image: '/images/grants.png',
    },
    {
      icon: Code2,
      title: 'IT & Marketing Support',
      slug: 'it-marketing',
      description: 'Technology solutions and marketing strategies to enhance your digital presence and business growth.',
      features: ['Business Technology Guidance', 'Website & Digital Presence', 'Marketing Process Support', 'Systems Improvement'],
      image: '/images/it-support.png',
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
    <section className="relative py-20 md:py-32 overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="max-w-3xl space-y-4" variants={cardVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Tailored Solutions for Your Business
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Whether you need accounting, consulting, grants support, or IT guidance—we provide separate services or an all-in-one package tailored to your needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group relative p-8 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-xl hover:border-accent/50 transition-all duration-300 overflow-hidden"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(82, 183, 136, 0.1)',
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                  {/* Service Image */}
                  {service.image && (
                    <div className="mb-6 h-48 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/60 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link href={`/services/${service.slug}`} className="inline-block mt-auto">
                    <Button
                      variant="ghost"
                      className="group/btn text-accent hover:text-white p-3 h-auto font-semibold cursor-pointer"
                    >
                      Learn More
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
