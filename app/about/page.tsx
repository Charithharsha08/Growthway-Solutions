'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { motion } from 'framer-motion'
import { Users, Award, Zap, Compass, CheckCircle2, Shield } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'People-First Approach',
      description: 'We work like an in-house employee with dedication, accountability, and complete transparency. Every operational decision centers on delivering long-term value to your team.',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'With over 50 years of combined professional expertise across Canada, we deliver exceptional accuracy, CRA compliance, and rigorous attention to detail.',
    },
    {
      icon: Zap,
      title: 'Innovation & Growth',
      description: 'We continuously digitize and automate manual workflows—helping SMEs leverage high-speed billing, automated invoicing, and live financial insights.',
    },
  ]

  const metrics = [
    { value: '500+', label: 'Canadian SMEs Serviced' },
    { value: '365 Days', label: 'Availability Matrix' },
    { value: '50+ Years', label: 'Combined Professional Expertise' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Decorative animated mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse opacity-45" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse opacity-30 delay-1000" />
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-[550px] flex items-center justify-center pt-32 pb-16 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center overflow-hidden"
        // style={{
        //   backgroundImage: 'url(/images/about_hero_bg.png)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
         <div
    className="absolute inset-0 bg-cover bg-center opacity-80"
    style={{
      backgroundImage: 'url(/images/about_hero_bg.png)',
    }}
  />
        {/* Layered high-contrast gradient overlay to make text highly legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-background -z-10 opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Compass className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '4s' }} />
            <span>✨ Who We Are — Committed Growth Partners</span>
          </motion.div>
          
          <motion.h1 
            className="text-4.5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses With <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-emerald-500/20 blur-lg rounded-xl" />
              <span className="relative bg-gradient-to-r from-accent via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Financial Clarity & Scale
              </span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Growthway Solutions acts as your virtual accounting department and operational controller. We don&apos;t just deliver reports—we sit at your table to help execute growth strategies.
          </motion.p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-[#f4faf6] dark:bg-[#07190f] border-b border-emerald-100 dark:border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={metric.label}
                className="space-y-2 p-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3.5xl sm:text-4.5xl font-extrabold text-accent">{metric.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-900/70 dark:text-emerald-200/70 uppercase tracking-widest">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-white">We Aren&apos;t Just Another Accounting Company</h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                Most accounting agencies operating in Canada act purely as historians—logging details months after transactions occur. Growthway Solutions acts as a dynamic growth engine.
              </p>
              <div className="space-y-4">
                {[
                  'CRAauthorized communication & secure representations.',
                  'Daily automated data syncing via secure cloud stacks.',
                  'Active budget variance auditing and cost leaking identification.',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-emerald-100 dark:border-emerald-900/30 p-4 bg-card shadow-xl">
                <div className="h-64 sm:h-80 rounded-2xl overflow-hidden">
                  <img src="/images/team.jpg" alt="Growthway Solutions team working collaboratively" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl -z-10 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#f4faf6]/30 dark:bg-[#07190f]/10 border-t border-emerald-100 dark:border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-white">What Anchors Our Team</h2>
            <p className="text-foreground/60 text-xs sm:text-sm">We strictly follow professional guidelines to deliver absolute accountability and excellence.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/15 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 space-y-5"
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 dark:text-white">{value.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
