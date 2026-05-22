'use client'

import { motion } from 'framer-motion'

export function WhatsAppWidget() {
  const whatsappNumber = '1XXXXXXXXXX' // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about Growthway Solutions services."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg cursor-pointer transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      aria-label="Contact on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.477 1.332 4.99L2 22l5.166-1.355c1.47.8 3.118 1.222 4.836 1.222h.01c5.506 0 9.99-4.482 9.99-9.988C22.002 6.482 17.518 2 12.012 2zm5.773 14.288c-.244.69-1.218 1.25-1.684 1.306-.465.056-.913.3-3.003-.526-2.518-.992-4.148-3.553-4.275-3.722-.126-.17-1.026-1.365-1.026-2.604 0-1.24.653-1.85.886-2.097.233-.246.508-.308.678-.308.17 0 .339.002.487.01.153.007.356-.057.556.425.204.493.698 1.7.761 1.828.064.127.106.276.021.446-.085.17-.127.276-.254.425-.127.15-.266.335-.38.45-.127.127-.26.265-.112.52.148.255.658 1.085 1.412 1.756.973.865 1.795 1.134 2.05 1.26.254.128.403.106.551-.064.15-.17.636-.743.805-1.00.17-.254.339-.212.572-.127.233.085 1.484.7 1.74.827.254.127.424.19.488.3.063.106.063.616-.182 1.306z" />
      </svg>
    </motion.a>
  )
}
