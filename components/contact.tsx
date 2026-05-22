'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'


export function Contact() {
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
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          from_name:  formData.get('from_name'),
          from_email: formData.get('from_email'),
          company:    formData.get('company'),
          message:    formData.get('message'),
          time: new Date().toLocaleString('en-US', {
            weekday: 'short', year: 'numeric',
            month: 'short',   day: 'numeric',
            hour: '2-digit',  minute: '2-digit',
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'consult@growthwaysolutions.ca',
      href: 'mailto:consult@growthwaysolutions.ca',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available 365 Days a Year',
      href: 'tel:+16043559445',
    },
    {
      icon: MapPin,
      label: 'Service Areas',
      value: 'British Columbia, Newfoundland & Labrador, Canada-wide Remote',
      href: '#',
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
    <section className="relative py-20 md:py-32 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="max-w-3xl space-y-4" variants={itemVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Grow Together
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Book your free consultation today. Available 365 days a year to discuss your business needs and growth opportunities.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        className="flex gap-4 p-4 rounded-xl border border-border/20 bg-card/50 hover:border-accent/50 transition-colors"
                        whileHover={{ x: 4, borderColor: 'rgb(82, 183, 136)' }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-foreground/60 font-medium">
                            {info.label}
                          </div>
                          <div className="text-lg font-semibold">
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <motion.div className="space-y-4" variants={itemVariants}>
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
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 hover:border-green-500/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.477 1.332 4.99L2 22l5.166-1.355c1.47.8 3.118 1.222 4.836 1.222h.01c5.506 0 9.99-4.482 9.99-9.988C22.002 6.482 17.518 2 12.012 2zm5.773 14.288c-.244.69-1.218 1.25-1.684 1.306-.465.056-.913.3-3.003-.526-2.518-.992-4.148-3.553-4.275-3.722-.126-.17-1.026-1.365-1.026-2.604 0-1.24.653-1.85.886-2.097.233-.246.508-.308.678-.308.17 0 .339.002.487.01.153.007.356-.057.556.425.204.493.698 1.7.761 1.828.064.127.106.276.021.446-.085.17-.127.276-.254.425-.127.15-.266.335-.38.45-.127.127-.26.265-.112.52.148.255.658 1.085 1.412 1.756.973.865 1.795 1.134 2.05 1.26.254.128.403.106.551-.064.15-.17.636-.743.805-1.00.17-.254.339-.212.572-.127.233.085 1.484.7 1.74.827.254.127.424.19.488.3.063.106.063.616-.182 1.306z" />
                  </svg>                <div>
                  <div className="text-sm text-foreground/60">Quick Chat</div>
                  <div className="font-semibold">Message us on WhatsApp</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-xl"
              variants={itemVariants}
            >
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="rounded-xl border-border/20 bg-primary/5 focus:bg-primary/10 transition-colors h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="rounded-xl border-border/20 bg-primary/5 focus:bg-primary/10 transition-colors h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="rounded-xl border-border/20 bg-primary/5 focus:bg-primary/10 transition-colors h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-xl border border-border/20 bg-primary/5 focus:bg-primary/10 transition-colors resize-none h-32 focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Status message */}
              {status === 'sent' && (
                <p className="text-sm text-green-600 dark:text-green-400 font-medium text-center">
                  ✓ Message sent! We&apos;ll get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 font-medium text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full bg-accent hover:bg-accent/90 text-primary rounded-xl h-12 font-semibold group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...'
                  : status === 'sent' ? '✓ Message Sent!'
                  : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )
                }
              </Button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}