'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Scale, CheckCircle2, AlertTriangle, HelpCircle, DollarSign } from 'lucide-react'

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: CheckCircle2,
      title: '1. Engagement and Service Delivery',
      content: 'By scheduling a consultation or retaining Growthway Solutions Ltd. for accounting, bookkeeping, controller services, grant preparation, or IT marketing advisory, you agree to comply with these terms. We work with standard commitment and dedication comparable to an in-house employee, but the client remains the final signing authority for all filings.'
    },
    {
      icon: AlertTriangle,
      title: '2. Client Responsibility for Financial Accuracy',
      content: 'The reliability of our bookkeeping and CRA compliance relies entirely on the accuracy and completeness of the receipts, transaction logs, invoices, and bank access you provide. Clients are responsible for ensuring that all business submissions are truthful, and must perform final reviews of all annual corporate tax returns before filing.'
    },
    {
      icon: DollarSign,
      title: '3. Fees, Billing, and Retainers',
      content: 'Our service rates are calculated transparently and billed monthly. Payment terms are net 15 days unless defined in a separate Statement of Work (SOW). Late payments may result in the suspension of bookkeeping files, financial dashboard access, or active grant applications.'
    },
    {
      icon: Scale,
      title: '4. Limitation of Liability',
      content: 'Growthway Solutions provides fractional consulting and controller support. While we perform our accounting and IT operations with strict oversight, we are not liable for business decisions made by client management, capital losses, CRA penalties resulting from delayed receipt submissions, or IT system failures on third-party SaaS platforms.'
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-20 pointer-events-none" />

      {/* Main Header */}
      <section className="pt-32 pb-12 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">Terms of Service</h1>
          <p className="text-emerald-900/70 dark:text-emerald-200/70 text-base md:text-lg">
            Last Updated: May 20, 2026. Please read our operating agreements and consultation terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl border border-emerald-100 dark:border-emerald-900/20 bg-card shadow-xl space-y-12">
            <p className="text-foreground/80 leading-relaxed text-base">
              Welcome to the Growthway Solutions Terms of Service. These terms govern your engagement with Growthway Solutions Ltd. across all standard consultation workflows, corporate controller advisory, and digital support networks. By using our website or hiring our staff, you accept these terms in full.
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
              <h3 className="text-lg font-bold text-emerald-950 dark:text-white">Have Questions About These Terms?</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                If you have queries regarding standard Service Level Agreements (SLAs), fractional retainer scopes, or payment timelines, reach out directly to <a href="mailto:info@growthwaysolutions.ca" className="text-accent hover:underline font-semibold">info@growthwaysolutions.ca</a>.
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
