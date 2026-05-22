'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Compass, Sparkles, Star, CheckCircle2 } from 'lucide-react'

export default function ProfessionalsPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Accounting Lead',
      expertise: ['Cloud Bookkeeping', 'Tax Filings', 'CRA Compliance Representation'],
      avatar: '👩‍💼',
      badge: 'CPA Advisor'
    },
    {
      name: 'Michael Chen',
      role: 'Fractional Business Controller',
      expertise: ['Cash Flow Forecasting', 'Internal Auditing', 'Margin Optimization'],
      avatar: '👨‍💼',
      badge: 'Senior Consultant'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Grants & Funding Advisor',
      expertise: ['Government Subsidies', 'Narrative Business Writing', 'Compliance'],
      avatar: '👩‍💼',
      badge: 'Funding Lead'
    },
    {
      name: 'David Thompson',
      role: 'IT & Automation Specialist',
      expertise: ['CRM Automations', 'Billing Systems (Stripe)', 'Custom Web Apps'],
      avatar: '👨‍💼',
      badge: 'Technology Lead'
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
      
      {/* Background glow highlights */}
      <div className="absolute top-[600px] right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-40 animate-pulse" />

      <section 
        className="relative min-h-[650px] flex items-center justify-center pt-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/professionals_hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Layered high-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#07190f]/95 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6 p-6 sm:p-10 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md shadow-2xl"
          >
            {/* Sparkling Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 animate-spin text-accent" style={{ animationDuration: '3.5s' }} />
              <span>✨ Compliance Leadership & Consulting</span>
            </div>

            {/* Headline */}
            <h1 className="text-4.5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Our People. <br />
              <span className="bg-gradient-to-r from-accent via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Your Infinite Potential.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              We stand in your corner. Work alongside highly qualified CPA advisors, seasoned business analysts, and digital automation architects dedicated to your long-term success.
            </p>

            {/* CTA Button */}
            <Button 
              className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 h-14 text-base font-semibold group cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              onClick={() => {
                const element = document.getElementById('experts-list-view')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollBy({ top: 550, behavior: 'smooth' })
                }
              }}
            >
              Meet Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Team Showcase Grid */}
      <section className="py-24" id="experts-list-view">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-white">Meet Our Advisory Experts</h2>
            <p className="text-foreground/60 text-xs sm:text-sm">Accountable, experienced advisors operating across all key operations sectors.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/15 bg-card hover:border-accent/40 hover:shadow-xl transition-all duration-300 text-center relative flex flex-col justify-between"
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <div>
                  {/* Floating Role Capsule */}
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-accent/10 text-accent text-[9px] font-bold uppercase tracking-wider">
                    {member.badge}
                  </div>

                  {/* Avatar Badge container */}
                  <div className="w-24 h-24 rounded-full bg-accent/5 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner relative">
                    {member.avatar}
                    <div className="absolute bottom-0 right-1 w-5 h-5 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                      <Star className="w-2.5 h-2.5 fill-white text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-1.5">{member.name}</h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{member.role}</p>
                  
                  {/* Expertise list */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-emerald-100 dark:border-emerald-900/10 text-left">
                    {member.expertise.map((item, key) => (
                      <div key={key} className="flex gap-2 items-center text-xs text-foreground/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a href="mailto:info@growthwaysolutions.ca" className="block w-full">
                    <Button variant="outline" className="w-full border-emerald-200 hover:border-accent hover:bg-accent/5 rounded-xl text-xs font-semibold py-5 cursor-pointer">
                      Request Consultation Partner
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
