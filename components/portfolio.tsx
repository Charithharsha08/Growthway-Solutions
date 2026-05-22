'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Manufacturing Business - Cost Control',
      category: 'accounting',
      description: 'Implemented financial control systems for mid-size manufacturer',
      tech: ['Bookkeeping', 'Cash Flow Analysis', 'Cost Control'],
      image: '/images/consulting.jpg',
    },
    {
      id: 2,
      title: 'Service Business - Growth Planning',
      category: 'consulting',
      description: 'Strategic planning and financial forecasting for service provider',
      tech: ['Budgeting', 'Strategic Planning', 'Performance Analysis'],
      image: '/images/business-growth.png',
    },
    {
      id: 3,
      title: 'Contractor - Grant Funding Success',
      category: 'funding',
      description: 'Secured federal grants for business expansion and equipment',
      tech: ['Grant Writing', 'Application Support', 'Financial Documentation'],
      image: '/images/grants.jpg',
    },
    {
      id: 4,
      title: 'Retail Business - Digital Transformation',
      category: 'it',
      description: 'Website development and digital marketing strategy implementation',
      tech: ['Website Development', 'Marketing Strategy', 'Systems Setup'],
      image: '/images/it-support.jpg',
    },
    {
      id: 5,
      title: 'Agricultural Business - Financial Management',
      category: 'accounting',
      description: 'Customized accounting system for seasonal farming operations',
      tech: ['Bookkeeping', 'Payroll', 'Seasonal Accounting'],
      image: '/images/accounting.jpg',
    },
    {
      id: 6,
      title: 'SME Network - Growth Connections',
      category: 'consulting',
      description: 'Facilitated network connections that led to partnership opportunities',
      tech: ['Networking', 'Business Connections', 'Growth Support'],
      image: '/images/network.jpg',
    },
  ]

  const categories = ['all', 'accounting', 'consulting', 'funding', 'it']

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="portfolio">
      {/* Background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-20"></div>

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
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Explore how we&apos;ve helped businesses across different industries achieve growth and financial success.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${activeCategory === category
                    ? 'bg-accent text-primary'
                    : 'border border-border/20 text-foreground/70 hover:border-accent/50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card/50 backdrop-blur-xl hover:border-accent/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(82, 183, 136, 0.1)',
                  }}
                >
                  {/* Success story image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      className="w-full py-2 px-4 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-colors flex items-center justify-center gap-2 group/btn"
                      whileHover={{ x: 4 }}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
