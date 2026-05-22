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
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                    <motion.button
                      key={social}
                      className="w-12 h-12 rounded-xl border border-border/20 bg-card/50 hover:border-accent/50 hover:bg-accent/10 transition-colors flex items-center justify-center text-sm font-semibold"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social[0]}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 hover:border-green-500/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl">💬</span>
                <div>
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