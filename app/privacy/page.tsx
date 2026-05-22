'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Shield, Lock, Eye, FileText, Globe } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: 'We collect personal information that you voluntarily provide to us when you schedule a consultation, fill out inquiry forms, subscribe to our newsletter, or communicate with our CPA and consulting staff. This includes your full name, business email, telephone number, corporate entity name, and any operational details or financials shared during onboarding.'
    },
    {
      icon: Lock,
      title: 'How We Protect Your Financial Data',
      content: 'At Growthway Solutions, financial confidentiality is our core promise. We implement cutting-edge industrial firewalls, SSL/TLS database encryption, multi-factor authentication (MFA) across all client accounting portals, and strictly enforce restricted user permissions. Your bookkeeping, cash flow models, and payroll spreadsheets are shielded with maximum security.'
    },
    {
      icon: FileText,
      title: 'How We Use Your Information',
      content: 'We use the collected information exclusively to deliver professional accounting, corporate bookkeeping, fractional controller consulting, grant research applications, and customized IT support. We never sell, rent, or lease your business details or financial logs to any third-party marketing bodies.'
    },
    {
      icon: Globe,
      title: 'CRA and Canadian Regulatory Standards',
      content: 'As a professional corporate consultancy in Canada, we comply fully with the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial guidelines. We cooperate strictly with legally valid Canada Revenue Agency (CRA) inquiries, keeping your corporate disclosures pristine and audit-ready.'
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Background glow highlights */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-20 pointer-events-none" />

      {/* Main Header */}
      <section className="pt-32 pb-12 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-white">Privacy Policy</h1>
          <p className="text-emerald-900/70 dark:text-emerald-200/70 text-base md:text-lg">
            Last Updated: May 20, 2026. Learn how we handle and protect your corporate financial information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl border border-emerald-100 dark:border-emerald-900/20 bg-card shadow-xl space-y-12">
            <div className="prose dark:prose-invert max-w-none space-y-6">
              <p className="text-foreground/80 leading-relaxed text-base">
                Welcome to Growthway Solutions Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate from British Columbia and Newfoundland & Labrador, serving businesses throughout Canada. We recognize the profound responsibility that comes with managing your corporate bookkeeping, tax filings, and business insights. This Privacy Policy details our operational commitments to secure your sensitive personal and corporate data.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 pt-4">
              {sections.map((section, idx) => {
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
              <h3 className="text-lg font-bold text-emerald-950 dark:text-white">Contact Our Privacy Officer</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                If you have questions about data processing, security controls, or wish to exercise your rights under PIPEDA, please email us directly at <a href="mailto:info@growthwaysolutions.ca" className="text-accent hover:underline font-semibold">info@growthwaysolutions.ca</a> or call our team for dedicated support.
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
