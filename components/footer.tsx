'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Professionals', href: '/professionals' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Insights', href: '/news' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping' },
        { label: 'Business Consulting', href: '/services/business-consulting' },
        { label: 'Grants & Funding', href: '/services/grants-funding' },
        { label: 'IT & Marketing Support', href: '/services/it-marketing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQs', href: '/#faq' },
        { label: 'Process', href: '/#process' },
        { label: 'Contact', href: '/#contact' },
        { label: 'WhatsApp Support', href: 'https://wa.me/1XXXXXXXXXX' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Disclaimer', href: '/disclaimer' },
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-[#f4faf6] dark:bg-[#07190f] text-emerald-950 dark:text-emerald-50 border-t border-emerald-100 dark:border-emerald-900/30 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="py-12 md:py-16 border-b border-emerald-100 dark:border-emerald-900/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="max-w-2xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-3 text-center" variants={itemVariants}>
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-emerald-900/70 dark:text-emerald-200/70">
                Subscribe to our newsletter for insights, updates, and exclusive offers.
              </p>
            </motion.div>

            <motion.form
              className="flex gap-3"
              variants={itemVariants}
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-white dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50 text-emerald-950 dark:text-emerald-100 placeholder:text-emerald-950/40 dark:placeholder:text-emerald-100/40 focus-visible:border-accent focus-visible:ring-accent/50 h-12"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 font-semibold group cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </Button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-bold"><span className="text-emerald-950 dark:text-white">Growthway</span> <span className="text-accent">Solutions</span></h3>
              <p className="text-sm text-emerald-900/70 dark:text-emerald-200/70 leading-relaxed">
                Your trusted partner in accounting, consulting, and sustainable business growth.
              </p>
              <div className="flex gap-4 pt-4">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com',
                    svg: (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Twitter',
                    href: 'https://twitter.com',
                    svg: (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://facebook.com',
                    svg: (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://instagram.com',
                    svg: (
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 hover:bg-accent dark:hover:bg-accent hover:text-white text-emerald-900 dark:text-emerald-100 transition-all flex items-center justify-center cursor-pointer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.svg}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <motion.div key={section.title} className="space-y-4" variants={itemVariants}>
                <h4 className="font-bold text-emerald-950 dark:text-emerald-50">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-sm text-emerald-900/70 dark:text-emerald-200/70 hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-emerald-100 dark:border-emerald-900/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-emerald-900/60 dark:text-emerald-200/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Growthway Solutions. All rights reserved. | Privacy Policy
            | Terms of Service
          </p>
          <motion.p
            whileHover={{ x: 4 }}
            className="cursor-pointer hover:text-accent dark:hover:text-accent transition-colors"
          >
            Made by Growthway Solutions
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
