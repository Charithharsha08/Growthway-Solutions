'use client'

import React, { useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import {
    BarChart3,
    TrendingUp,
    Award,
    Code2,
    CheckCircle2,
    ArrowLeft,
    Mail,
    Phone,
    ShieldCheck,
    Zap,
    Users,
} from 'lucide-react'
import Link from 'next/link'

const servicesData = {
    'accounting-bookkeeping': {
        title: 'Accounting & Bookkeeping',
        icon: BarChart3,
        tagline: 'Audit-ready financial record-keeping and live reports.',
        description: 'Comprehensive, cloud-integrated bookkeeping and accounting designed to keep your records precise, CRA-compliant, and optimized for business scaling.',
        fullDescription: 'Managing finances shouldn\'t keep you away from growing your business. At Growthway Solutions, we serve as your virtual back office. We handle everything from daily transaction logs to complex tax filings, corporate payroll, and balance sheets. Using state-of-the-art cloud software like QuickBooks and Xero, we provide complete, transparent oversight into your cash flow with 365-day availability.',
        image: '/images/accounting.jpg',
        accentColor: '#33B52E',
        features: [
            { title: 'Daily Bookkeeping & General Ledger', desc: 'Accurate logging of all sales, operating expenses, vendor bills, and bank transactions.' },
            { title: 'CRA Compliance & Government Filings', desc: 'Preparation and filing of corporate income tax, GST/HST, PST, and payroll source deductions.' },
            { title: 'End-to-End Corporate Payroll', desc: 'Direct deposits, ROE preparation, salary schedules, and year-end T4/T5 filings.' },
            { title: 'Monthly Reconciliations & Reporting', desc: 'Matching bank statements, finding transaction discrepancies, and delivering dynamic P&L reports.' },
            { title: 'CRA Audit Representation', desc: 'Acting as your authorized representative to communicate with the CRA and manage inquiries.' },
        ],
        whyUs: [
            { icon: ShieldCheck, title: 'CRA Compliance Guaranteed', desc: 'Pragmatic record keeping strictly adhering to Canadian accounting standards.' },
            { icon: Zap, title: 'Live Digital Dashboards', desc: 'No more waiting for month-end reports; view your financial health in real-time.' },
            { icon: Users, title: 'Dedicated Senior Accountant', desc: 'Direct access to your accounting lead, available 365 days a year.' },
        ],
    },
    'business-consulting': {
        title: 'Business Controller & Consulting',
        icon: TrendingUp,
        tagline: 'Your outsourced corporate advisor for operational excellence.',
        description: 'Act as your virtual controller with daily support for operations, financial controls, budgeting, margin optimization, and strategic market expansion.',
        fullDescription: 'Hiring a full-time Corporate Controller or CFO can cost upwards of $150,000 annually. Growthway Solutions offers the perfect solution: fractional corporate control and business consulting. We step in to audit your operational workflows, identify cost leaks, design realistic budgets, and help you allocate capital strategically. We do not just hand you a slideshow; we sit at your table to implement the growth strategies.',
        image: '/images/consulting.jpg',
        accentColor: '#33B52E',
        features: [
            { title: 'Fractional Controller Support', desc: 'Senior financial oversight, workflow auditing, and internal controls implementation.' },
            { title: 'Operational Cost Auditing', desc: 'Identifying cash leaks, optimizing payroll allocations, and reviewing software stack expenses.' },
            { title: 'Strategic Budgeting & Modelling', desc: 'Designing 1-year and 5-year financial projections to steer business decisions.' },
            { title: 'Margin & Profit Optimization', desc: 'Detailed analysis of service rates, pricing models, and product profit margins.' },
            { title: 'Merger & Acquisition Support', desc: 'Preparing clear financial portfolios for fundraising, valuation, or sale preparation.' },
        ],
        whyUs: [
            { icon: ShieldCheck, title: 'Operational Cost Reduction', desc: 'We routinely find operational savings that easily cover our consulting fees.' },
            { icon: Zap, title: 'Practical Action Plans', desc: 'We deliver clear, visual milestones and help your staff implement them.' },
            { icon: Users, title: 'Strategic Industry Network', desc: 'We connect our clients with valuable business opportunities and funding bodies.' },
        ],
    },
    'grants-funding': {
        title: 'Grants & Funding Guidance',
        icon: Award,
        tagline: 'Secure non-dilutive government capital to fuel your expansion.',
        description: 'End-to-end grant writing and funding application management, matching your business goals with municipal, provincial, and federal incentives.',
        fullDescription: 'Millions of dollars in government grants go unclaimed every single year in Canada. Securing these funds requires hours of application writing, complex financial forecasting, and strict compliance reporting. Growthway Solutions does the heavy lifting. We identify the programs you qualify for, compile audit-proof applications, build the required business cases, and handle submission compliance from start to finish.',
        image: '/images/grants.jpg',
        accentColor: '#33B52E',
        features: [
            { title: 'Grant Matching Matrix', desc: 'Regularly scanning municipal, provincial (BC/NL), and federal funding programs.' },
            { title: 'Professional Grant Writing', desc: 'Drafting high-converting business cases, narrative applications, and milestones.' },
            { title: 'Funding Compliance Audits', desc: 'Verifying financial logs to ensure grant spending complies with program rules.' },
            { title: 'Business Case Preparation', desc: 'Structuring detailed presentations for private equity, bank loans, or government grants.' },
            { title: 'Provincial Subsidy Optimization', desc: 'Leveraging regional hiring incentives, technology grants, and training programs.' },
        ],
        whyUs: [
            { icon: ShieldCheck, title: 'Exceptional Success Rate', desc: 'Highly experienced grant writers with deep knowledge of government grading metrics.' },
            { icon: Zap, title: 'Audit-Safe Applications', desc: 'We verify all numbers so they easily pass validation from program officers.' },
            { icon: Users, title: '360-Degree Support', desc: 'We write, file, follow up, and manage progress reports on your behalf.' },
        ],
    },
    'it-marketing': {
        title: 'IT & Marketing Support',
        icon: Code2,
        tagline: 'Scale operations and acquire customers with digital excellence.',
        description: 'Enhance your brand visibility and digitize operational workflows through custom websites, SEO management, CRM setups, and automated invoicing tools.',
        fullDescription: 'A premium brand requires both efficient operations and high-performing marketing channels. Growthway Solutions provides targeted IT & marketing advisory to optimize how your customers buy and how your team operates. From building high-speed, SEO-optimized business websites to deploying automated CRM pipelines and billing configurations, we merge technical infrastructure with customer acquisition.',
        image: '/images/it-support.jpg',
        accentColor: '#33B52E',
        features: [
            { title: 'Custom High-Speed Websites', desc: 'Stunning, fast, and conversion-optimized websites built on modern frameworks.' },
            { title: 'Local SEO & Brand Visibility', desc: 'Elevating your ranking on Google Maps and search results across your target cities.' },
            { title: 'CRM & Billing Digital Pipelines', desc: 'Setting up automated invoicing, payment portals (Stripe), and client databases.' },
            { title: 'Software Audits & Optimization', desc: 'Consolidating duplicate SaaS subscriptions and streamlining file sharing security.' },
            { title: 'Marketing ROI Auditing', desc: 'Analyzing your ad campaigns to make sure your customer acquisition cost is profitable.' },
        ],
        whyUs: [
            { icon: ShieldCheck, title: 'Security-First Setup', desc: 'We follow robust guidelines to keep client databases and transaction data secure.' },
            { icon: Zap, title: 'Frictionless Automations', desc: 'Save hours every week by automating invoicing, calendar scheduling, and emails.' },
            { icon: Users, title: 'Conversion-Focused Strategy', desc: 'We focus on concrete business metrics: lead generation, sales calls, and revenue.' },
        ],
    },
}

export default function ServiceDetailsPage() {
    const params = useParams()
    const slug = params.slug as string
    const service = servicesData[slug as keyof typeof servicesData]

    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setStatus('sending')

        const formData = new FormData(formRef.current)

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID!,
                {
                    from_name:  formData.get('from_name'),
                    from_email: formData.get('from_email'),
                    phone:      formData.get('phone'),
                    company:    formData.get('company'),
                    message:    formData.get('message'),
                    time: new Date().toLocaleString('en-US', {
                        weekday: 'short', year: 'numeric',
                        month: 'short',   day: 'numeric',
                        hour: '2-digit',  minute: '2-digit',
                    }),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            setStatus('sent')
            formRef.current.reset()
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    if (!service) {
        return (
            <main className="min-h-screen bg-background flex flex-col justify-between">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-6">
                    <h1 className="text-4xl font-bold text-emerald-950 dark:text-white">Service Not Found</h1>
                    <p className="text-foreground/60">The service page you are looking for does not exist or has been relocated.</p>
                    <Link href="/services">
                        <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                        </Button>
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    const IconComponent = service.icon

    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
            <Navbar />

            {/* Decorative background glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -z-10 opacity-20 pointer-events-none" />

            {/* Page Hero */}
            <section className="pt-32 pb-16 md:py-40 border-b border-emerald-100 dark:border-emerald-900/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#services" className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex p-3.5 rounded-2xl bg-accent/10 text-accent">
                                <IconComponent className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 dark:text-white leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl font-medium text-accent">{service.tagline}</p>
                            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">{service.description}</p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-accent hover:bg-accent/90 text-white rounded-xl px-8 h-14 font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact-form')
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' })
                                        } else {
                                            window.location.href = '/#contact'
                                        }
                                    }}
                                >
                                    Request Call / Consultation
                                </Button>
                                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-emerald-200 hover:border-accent hover:bg-accent/5 rounded-xl px-8 h-14 font-semibold text-emerald-950 dark:text-emerald-50 cursor-pointer"
                                    >
                                        💬 WhatsApp Support
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="relative">
                            <motion.div
                                className="rounded-3xl overflow-hidden border border-emerald-100 dark:border-emerald-900/30 bg-card p-4 shadow-xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="h-64 md:h-80 rounded-2xl overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">Growthway Solutions</p>
                                        <p className="text-lg font-bold">100% CPA Compliant Service</p>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-3xl -z-10 blur-xl" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full -z-10 blur-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-[#f4faf6]/30 dark:bg-[#07190f]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 dark:text-white">Service Overview</h2>
                        <p className="text-lg text-foreground/75 leading-relaxed">{service.fullDescription}</p>
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scope of Work</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 dark:text-white">What We Handle For You</h2>
                        <p className="text-foreground/60 text-sm md:text-base">A transparent, reliable breakdown of operational milestones we deliver with absolute commitment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                className="p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/20 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-emerald-950 dark:text-white">{feature.title}</h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.desc}</p>
                                </div>
                                <div className="flex items-center gap-2 pt-6 text-xs text-accent font-semibold">
                                    <CheckCircle2 className="w-4 h-4 text-accent" /> Active Operational Deliverable
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Growthway */}
            <section className="py-20 bg-[#f4faf6] dark:bg-[#07190f] border-y border-emerald-100 dark:border-emerald-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-4 pr-0 lg:pr-8">
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Growthway Difference</span>
                            <h2 className="text-3xl font-bold text-emerald-950 dark:text-white">Why Outsource to Growthway?</h2>
                            <p className="text-sm text-emerald-900/70 dark:text-emerald-200/70 leading-relaxed">
                                We operate like an in-house employee with complete accountability, dedication, and local understanding, but without the high overhead expenses.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.whyUs.map((item) => {
                                const ItemIcon = item.icon
                                return (
                                    <div key={item.title} className="p-6 rounded-2xl bg-white dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                                            <ItemIcon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-emerald-950 dark:text-white text-base">{item.title}</h3>
                                        <p className="text-xs text-emerald-900/70 dark:text-emerald-200/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Form */}
            <section className="py-20" id="contact-form">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="p-8 md:p-12 rounded-3xl border border-emerald-100 dark:border-emerald-900/20 bg-card shadow-2xl relative overflow-hidden space-y-8">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <h3 className="text-3xl font-bold text-emerald-950 dark:text-white">Let&apos;s Set Up a Consultation</h3>
                            <p className="text-foreground/60 text-sm">
                                Discuss your {service.title.toLowerCase()} requirements with our senior team. We will review your current workflows and identify immediate opportunities for optimization.
                            </p>
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold mb-2 uppercase text-emerald-950 dark:text-emerald-300">Your Name</label>
                                    <input
                                        name="from_name"
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 h-12 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-2 uppercase text-emerald-950 dark:text-emerald-300">Company Name</label>
                                    <input
                                        name="company"
                                        required
                                        type="text"
                                        placeholder="Growthway Solutions Ltd"
                                        className="w-full px-4 h-12 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold mb-2 uppercase text-emerald-950 dark:text-emerald-300">Email Address</label>
                                    <input
                                        name="from_email"
                                        required
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 h-12 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-2 uppercase text-emerald-950 dark:text-emerald-300">Phone Number</label>
                                    <input
                                        name="phone"
                                        required
                                        type="tel"
                                        placeholder="+1 (604) 555-0199"
                                        className="w-full px-4 h-12 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-2 uppercase text-emerald-950 dark:text-emerald-300">Specific Requirements (Optional)</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder={`Tell us a bit about your business goals and what you seek in ${service.title}...`}
                                    className="w-full p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-all resize-none"
                                />
                            </div>

                            {/* Status feedback */}
                            {status === 'sent' && (
                                <p className="text-sm text-green-600 dark:text-green-400 font-medium text-center">
                                    ✓ Request received! Our consultation lead will contact you within 24 hours.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-500 font-medium text-center">
                                    Something went wrong. Please try again or reach us directly via email.
                                </p>
                            )}

                            <Button
                                type="submit"
                                disabled={status === 'sending' || status === 'sent'}
                                className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-14 font-semibold cursor-pointer text-base disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...'
                                    : status === 'sent' ? '✓ Request Sent!'
                                        : 'Submit Consultation Request'}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppWidget />
        </main>
    )
}