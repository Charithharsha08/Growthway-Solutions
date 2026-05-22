'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { motion, Variants } from 'framer-motion'
import { Briefcase, Users, Zap, Compass, CheckCircle2, MapPin, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Corporate Accountant',
      location: 'British Columbia (Remote)',
      type: 'Full-time / Fractional',
      description: 'Act as the lead senior accountant for a portfolio of growing Canadian SMEs. Responsible for audit-ready monthly files, tax filings, and CPA-compliant ledgers.',
      salary: '$75k - $95k CAD'
    },
    {
      title: 'Fractional Business Controller',
      location: 'Newfoundland & Labrador (Hybrid / Remote)',
      type: 'Full-time',
      description: 'Consult directly with corporate clients. Audit operational workflows, define budgets, identify cost leaks, and implement robust financial controller structures.',
      salary: '$90k - $115k CAD'
    },
    {
      title: 'IT & Digital Solutions Lead',
      location: 'Canada-wide Remote',
      type: 'Contract / Full-time',
      description: 'Design and deploy automated CRM, payment processing, and bookkeeping pipelines. Build custom high-speed web apps and manage SEO local visibility.',
      salary: '$80k - $105k CAD'
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Dedicated Collaboration',
      description: 'Work inside a highly collaborative, remote-first environment alongside seasoned CPAs, grant writers, and technology advisors.',
    },
    {
      icon: Zap,
      title: 'Professional Growth Retainers',
      description: 'We actively fund ongoing professional training, CPA certifications, digital solution courses, and conference fees.',
    },
    {
      icon: Briefcase,
      title: 'True Work-Life Flex',
      description: 'Enjoy remote operations, flexible hours, and absolute accountability. We track operational value delivered, not strict desk hours.',
    },
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

  const itemVariants: Variants = {
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

      {/* Background visual layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse opacity-45" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse opacity-30 delay-1000" />
      </div>

      {/* Page Hero */}
      <section 
        className="relative min-h-[550px] flex items-center justify-center pt-32 pb-16 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/careers_hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Layered high-contrast gradient overlay to make text highly legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-background -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Compass className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '4s' }} />
            <span>✨ Expand Your Career — Grow With Passion</span>
          </motion.div>
          
          <motion.h1 
            className="text-4.5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build the Future of <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-emerald-500/20 blur-lg rounded-xl" />
              <span className="relative bg-gradient-to-r from-accent via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Corporate Advisory & Technology
              </span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join an elite fractional firm focused on helping Canadian SMEs automate operations, optimize margins, and achieve audit-proof financial scaling.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f4faf6] dark:bg-[#07190f] border-b border-emerald-100 dark:border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Why Growthway?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-white">Why Join Our Elite Ranks?</h2>
            <p className="text-emerald-900/70 dark:text-emerald-200/70 text-xs sm:text-sm">We provide an environment where your financial and technology expertise translates directly into SME success.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  className="p-8 rounded-3xl border border-emerald-200/40 dark:border-emerald-900/35 bg-white dark:bg-emerald-950/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 space-y-4 text-left"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                    <BenefitIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 dark:text-white">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-emerald-900/75 dark:text-emerald-200/75 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Active Openings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-white">Careers Opportunities</h2>
            <p className="text-foreground/60 text-xs sm:text-sm">Ready to elevate your career? Apply to our active openings below.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">

            <div className="mt-12 text-center max-w-lg mx-auto p-6 rounded-2xl bg-[#f4faf6]/30 dark:bg-[#07190f]/10 border border-emerald-100 dark:border-emerald-900/10">
              <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-4">Sorry — No Active Openings Currently</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                We are currently not hiring for any full-time roles. However, we periodically seek fractional contractors for accounting, grant writing, and IT marketing advisory.
              </p>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                <strong>Want to stay updated?</strong> Join our Talent Community and we’ll notify you immediately when a new remote position opens.
              </p>
              <a
                href="https://www.linkedin.com/company/growthway-solutions-canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent text-white hover:bg-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-accent/40"
              >
                <Mail className="w-5 h-5" />
                Join Talent Community
              </a>
            </div>

            {/* {openings.map((opening, idx) => (
              <motion.div
                key={opening.title}
                className="p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/20 bg-card hover:border-accent/50 hover:shadow-xl transition-all duration-300 space-y-5 text-left relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 dark:text-white">{opening.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-bold uppercase">{opening.type}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-foreground/60">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-accent">$</span>
                        <span>{opening.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground/75 leading-relaxed max-w-2xl">{opening.description}</p>
                  </div>

                  <a href="mailto:careers@growthwaysolutions.ca?subject=Application for Senior Corporate Accountant" className="inline-block flex-shrink-0">
                    <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 h-12 font-semibold group cursor-pointer">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))} */}
          </div>

          {/*<div className="mt-12 text-center max-w-lg mx-auto p-6 rounded-2xl bg-[#f4faf6]/30 dark:bg-[#07190f]/10 border border-emerald-100 dark:border-emerald-900/10">*/}
          {/*  <h4 className="font-bold text-emerald-950 dark:text-white mb-2">Don&apos;t See Your Role?</h4>*/}
          {/*  <p className="text-xs text-foreground/70 leading-relaxed">*/}
          {/*    We are constantly seeking CPA leads, operational analysts, and software developers. Send your cover portfolio directly to <a href="mailto:careers@growthwaysolutions.ca" className="text-accent font-semibold hover:underline">careers@growthwaysolutions.ca</a>.*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
