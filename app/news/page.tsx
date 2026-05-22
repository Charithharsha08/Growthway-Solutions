'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { motion, Variants } from 'framer-motion'
import { Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react'

export default function NewsPage() {
  const articles = [
    {
      title: 'Five Key Strategies for SME Business Growth in Canada',
      date: 'May 15, 2026',
      category: 'Business Insights',
      excerpt: 'Discover proven methodologies that leading Canadian companies use to audit operational cost leakage, secure fractional controllers, and maximize active growth budgets.',
      avatar: '📈',
    },
    {
      title: 'Deciphering Canadian Cash Flow Management',
      date: 'May 10, 2026',
      category: 'Financial Advisory',
      excerpt: 'Managing cash flow is the difference between scale and closure. Read our checklist on bank reconciliation, tax timing, and optimizing operating accounts.',
      avatar: '💰',
    },
    {
      title: 'Federal and Provincial Grants: How to Prepare Your Application',
      date: 'May 05, 2026',
      category: 'Grants Guidance',
      excerpt: 'Canadian provincial and federal grants represent vital non-dilutive capital. Here is how to compile audit-proof projections and write application business cases.',
      avatar: '📊',
    },
    {
      title: 'Automated CRM & Billing Transitions for Modern Services',
      date: 'April 28, 2026',
      category: 'IT & Technology',
      excerpt: 'Ditch manual billing. Learn how automated invoice generators, Stripe integrations, and cloud databases save mid-sized enterprises up to 15 hours every week.',
      avatar: '💻',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Decorative animated mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse opacity-45" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse opacity-35 delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Compass className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '4s' }} />
            <span>✨ Growthway Intel — Stay Ahead</span>
          </motion.div>
          
          <motion.h1 
            className="text-4.5xl sm:text-6xl font-extrabold tracking-tight text-emerald-950 dark:text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            News & <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-emerald-500/20 blur-lg rounded-xl" />
              <span className="relative bg-gradient-to-r from-accent via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Strategic Insights
              </span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-foreground/75 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stay informed with the latest Canadian corporate tax updates, regional hiring incentives, and expert bookkeeping automations compiled by our senior partners.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {articles.map((article, idx) => (
              <motion.article
                key={article.title}
                className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/15 bg-card hover:border-accent/40 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Visual Badge Emoji */}
                    <div className="w-14 h-14 rounded-2xl bg-accent/5 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-3xl shadow-inner">
                      {article.avatar}
                    </div>
                    {/* Category Capsule Tag */}
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-accent bg-accent/10 border border-accent/20">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 dark:text-white mb-2.5 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-foreground/45 font-semibold mb-4">{article.date}</p>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-6 text-xs text-accent font-bold group-hover:underline">
                  Read Full Intel Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
