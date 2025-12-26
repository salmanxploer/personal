'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#courses', label: 'Courses' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-bg border-t border-dark-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto"
      >
        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          {footerLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-dark-text/60 hover:text-dark-accent transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-dark-text/60 flex items-center justify-center gap-2">
            © {currentYear} Salman Hafiz. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> and{' '}
            <span className="text-dark-accent">Next.js</span>
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
