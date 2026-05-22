'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Compass, Sparkles } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      
      {/* Dynamic Background visual glows for transition */}
      <div className="absolute top-[600px] left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-40 animate-pulse" />

      {/* Hero Section */}
      <section 
        className="relative min-h-[650px] flex items-center justify-center pt-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/services_hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Layered Color Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#07190f]/90 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6 p-6 sm:p-10 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md shadow-2xl"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 animate-spin text-accent" style={{ animationDuration: '3.5s' }} />
              <span>✨ Strategic Solutions For Modern SMEs</span>
            </div>

            {/* Headline */}
            <h1 className="text-4.5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Our Professional <br />
              <span className="bg-gradient-to-r from-accent via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                SME Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore our core competencies in corporate accounting, strategic CFO controller consulting, grant research, and automated IT digital setups designed to scale your operations.
            </p>

            {/* CTA Button */}
            <Button 
              className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 h-14 text-base font-semibold group cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              onClick={() => {
                const element = document.getElementById('services-grid-list')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollBy({ top: 550, behavior: 'smooth' })
                }
              }}
            >
              Explore Digital Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Component Section */}
      <div id="services-grid-list" className="py-12 border-t border-emerald-100 dark:border-emerald-900/10">
        <Services />
      </div>
      
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
