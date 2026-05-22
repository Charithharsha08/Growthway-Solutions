'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Clock, Star, Users } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

export function Hero() {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const levitateVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const levitateSlowVariants: Variants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background" id="home">
      {/* Dynamic Animated Mesh Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Pulsating glowing blobs */}
        <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse opacity-40" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse opacity-30 delay-1000" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Premium Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Glowing Tagline Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-xl shadow-xs"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 animate-spin text-accent" style={{ animationDuration: '3s' }} />
              <span>✨ Premium Financial Management & Advisory</span>
            </motion.div>

            {/* Headline with Glowing Gradient */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4.5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-emerald-950 dark:text-white">
                We Handle Your Books, <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-emerald-500/20 blur-lg rounded-xl" />
                  <span className="relative bg-gradient-to-r from-accent via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    So You Can Grow
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* High-Fidelity Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl font-medium"
              variants={itemVariants}
            >
              Expert virtual accounting, corporate bookkeeping, and controller growth strategies. We operate like an in-house team—dedicated, accountable, and available <span className="text-accent font-semibold underline decoration-accent/30 decoration-2">365 days a year</span> across BC, NL, and Canada.
            </motion.p>

            {/* Operational Metrics / Live Badge */}
            <motion.div
              className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-emerald-900/80 dark:text-emerald-200/80"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card border border-emerald-100 dark:border-emerald-900/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span>Active CRA Compliance Representation</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card border border-emerald-100 dark:border-emerald-900/20">
                <Clock className="w-4 h-4 text-accent" />
                <span>365 Days Support Network</span>
              </div>
            </motion.div>

            {/* Upgrade CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 h-14 text-base font-semibold cursor-pointer shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 hover:border-accent hover:bg-accent/5 dark:border-emerald-800 rounded-xl px-8 h-14 text-base font-semibold text-emerald-950 dark:text-emerald-50 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
                onClick={() => {
                  const element = document.getElementById('services')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Social Proof / Canadian Trust Indicators */}
            <motion.div className="flex items-center gap-4 pt-4 border-t border-emerald-100 dark:border-emerald-900/10 max-w-lg" variants={itemVariants}>
              <div className="flex -space-x-2.5">
                {[
                  { emoji: '👨‍💼', label: 'CPA Advisor' },
                  { emoji: '👩‍💼', label: 'Tax Specialist' },
                  { emoji: '👨‍💻', label: 'IT Lead' },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-lg shadow-sm hover:z-10 hover:scale-110 transition-transform cursor-pointer"
                    title={member.label}
                  >
                    {member.emoji}
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-xs font-bold text-emerald-950 dark:text-white ml-1">5.0 Star</span>
                </div>
                <p className="text-xs text-foreground/60">
                  Trusted by <span className="font-semibold text-accent">500+ Canadian Businesses</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Breathtaking Interactive Multi-Layer Mockup */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[500px] flex items-center justify-center">

            {/* Centerpiece Image Showcase Mockup */}
            <motion.div
              className="w-4/5 h-[340px] sm:h-[400px] rounded-3xl overflow-hidden border border-emerald-500/20 bg-card/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,47,30,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group p-3"
              initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{
                scale: 1.02,
                rotate: -0.5,
                boxShadow: '0 30px 60px rgba(51, 181, 46, 0.18)'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Professional financial planning team"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-2">
                  <div className="inline-flex px-2.5 py-1 rounded-md bg-accent/90 text-[10px] uppercase font-bold tracking-widest">Growthway Base</div>
                  <p className="text-sm font-bold">Comprehensive Bookkeeping & Advisory</p>
                </div>
              </div>
            </motion.div>

            {/* levitating Widget 1: Dynamic SVG Area Graph (Bottom Left) */}
            <motion.div
              className="absolute bottom-6 -left-2 sm:left-4 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 bg-card/90 backdrop-blur-xl shadow-lg w-52 text-left space-y-3"
              variants={levitateVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-wider">Client Revenue</p>
                    <p className="text-sm font-extrabold text-emerald-950 dark:text-white">+32.4% MoM</p>
                  </div>
                </div>
              </div>
              {/* Dynamic Micro SVG Graph */}
              <div className="w-full h-10">
                <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M0 25C15 20 20 8 35 12C50 16 65 3 80 5C90 6 95 1 100 1"
                    stroke="#33B52E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 25C15 20 20 8 35 12C50 16 65 3 80 5C90 6 95 1 100 1V30H0V25Z"
                    fill="url(#gradient-chart)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#33B52E" offset="0%" />
                      <stop stopColor="#33B52E" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* levitating Widget 2: Active Scale Counter (Top Right) */}
            <motion.div
              className="absolute top-10 -right-2 sm:right-6 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 bg-card/90 backdrop-blur-xl shadow-lg flex items-center gap-3"
              variants={levitateSlowVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-accent flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-widest">Active Clients</p>
                <p className="text-base font-extrabold text-emerald-950 dark:text-white">500+ Serviced</p>
              </div>
            </motion.div>

            {/* levitating Widget 3: Regional Trust Badge (Middle Right) */}
            <motion.div
              className="absolute bottom-24 -right-4 sm:right-0 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-card/90 backdrop-blur-xl shadow-lg flex items-center gap-2.5"
              variants={levitateVariants}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-foreground/50 font-bold uppercase tracking-wider">CRA Representation</p>
                <p className="text-xs font-bold text-emerald-950 dark:text-white">100% Secure & Compliant</p>
              </div>
            </motion.div>

            {/* Decorative Orbiting Border */}
            <motion.div
              className="absolute inset-4 border border-accent/20 rounded-[40px] -z-10 pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 25px rgba(51, 181, 46, 0.08)',
                  '0 0 50px rgba(51, 181, 46, 0.16)',
                  '0 0 25px rgba(51, 181, 46, 0.08)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Dynamic Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer z-10 hidden md:flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => {
            const element = document.getElementById('about')
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-[11px] uppercase tracking-widest text-foreground/45 font-bold">Scroll to explore</span>
          <div className="w-6 h-10 border border-foreground/20 rounded-full flex items-center justify-center bg-card/20 backdrop-blur-xs">
            <motion.div
              className="w-1.5 h-2.5 bg-accent rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
