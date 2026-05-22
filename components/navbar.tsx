'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleBookConsultation = () => {
    setIsMobileOpen(false)
    if (pathname === '/') {
      const element = document.getElementById('contact')
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/#contact')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Professionals', href: '/professionals' },
    { label: 'Careers', href: '/careers' },
    // { label: 'News', href: '/news' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-md'
          : 'bg-background/80 dark:bg-background/40 backdrop-blur-lg border-b border-border/20 shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 font-bold text-2xl text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className='flex items-center'>
              <img src="/icon.png" alt="Growthway Solutions Logo" className="w-10 h-10 mr-2" />
              <span className="text-primary">Growthway</span> <span className="text-accent">Solutions</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                whileHover={{ color: '#33B52E' }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-xl px-6 cursor-pointer"
              size="sm"
              onClick={handleBookConsultation}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground/70 hover:text-accent transition-colors py-2"
                whileHover={{ x: 4 }}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl cursor-pointer"
              onClick={handleBookConsultation}
            >
              Book Consultation
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
