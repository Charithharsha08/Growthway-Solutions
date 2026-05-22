'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { AlertCircle, FileSpreadsheet, Award, Code2 } from 'lucide-react'

export default function DisclaimerPage() {
  const sections = [
    {
      icon: FileSpreadsheet,
      title: 'Financial Controller & Accounting Advisory',
      content: 'Growthway Solutions Ltd. provides expert corporate bookkeeping, controller support, tax preparation, and operational financial analysis. While our senior accountants follow rigorous Canadian Accounting Standards (ASPE) and CRA regulations, our consulting advisory does not constitute legal or certified investment advice. Clients must consult qualified legal or wealth advisors for complex asset protection strategies.'
    },
    {
      icon: Award,
      title: 'Grants & Funding Outcomes',
      content: 'While we boast an exceptional success rate in drafting narrative business cases and preparing financial projection packets for grants, Growthway Solutions does not guarantee grant approvals or funding allocations. All funding programs are highly competitive, and final approvals rest solely and strictly at the discretion of the corresponding municipal, provincial, or federal government departments.'
    },
    {
      icon: Code2,
      title: 'IT Systems and Marketing Performance',
      content: 'Our IT and marketing support services involve advisory on digital presence, automated billing channels (such as Stripe/CRM setups), and website speed optimization. We are not liable for third-party hosting service outages, billing system API changes, local search engine algorithm fluctuations, or operational disruptions on SaaS platforms client systems rely on.'
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Background glowing decorations */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-20 pointer-events-none" />

      {/* Main Header */}
      <section className="pt-32 pb-12 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">Disclaimer</h1>
          <p className="text-emerald-900/70 dark:text-emerald-200/70 text-base md:text-lg">
            Last Updated: May 20, 2026. Review our operational constraints and service guidelines.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl border border-emerald-100 dark:border-emerald-900/20 bg-card shadow-xl space-y-12">
            <p className="text-foreground/80 leading-relaxed text-base">
              The information provided on this website and during our consultation deliverables is intended for operational business planning, corporate bookkeeping, and technology guidance purposes only. By using our website, billing portals, or consulting assets, you agree to the disclaimers set out below.
            </p>

            <div className="grid grid-cols-1 gap-8 pt-4">
              {sections.map((section) => {
                const SectionIcon = section.icon
                return (
                  <div key={section.title} className="p-6 md:p-8 rounded-2xl border border-emerald-100/50 dark:border-emerald-900/15 bg-background space-y-4 hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                        <SectionIcon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-emerald-950 dark:text-white">{section.title}</h2>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed pl-0 md:pl-14">
                      {section.content}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-emerald-100 dark:border-emerald-900/20 pt-8 space-y-4">
              <h3 className="text-lg font-bold text-emerald-950 dark:text-white">Regulatory or Compliance Clarifications?</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                If you seek direct clarification on our compliance representation metrics, SLA agreements, or regional consulting scopes, send an inquiry directly to <a href="mailto:info@growthwaysolutions.ca" className="text-accent hover:underline font-semibold">info@growthwaysolutions.ca</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
