'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Facebook, Twitter, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/salmanxploer',
    color: 'hover:text-[#333] hover:bg-[#333]/10',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/salmanxploer',
    color: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/salmanxploer',
    color: 'hover:text-[#1877f2] hover:bg-[#1877f2]/10',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/salmanxploer',
    color: 'hover:text-[#1da1f2] hover:bg-[#1da1f2]/10',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:contact@salmanhafiz.com',
    color: 'hover:text-dark-accent hover:bg-dark-accent/10',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-dark-accent mb-8"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-dark-text/80 max-w-2xl mx-auto mb-12"
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex flex-col items-center gap-3 p-6 bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-lg transition-all duration-300 hover:border-dark-accent/50 hover:shadow-lg hover:shadow-dark-accent/10 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8 text-dark-text/60 group-hover:text-current transition-colors" />
                <span className="text-sm font-medium text-dark-text/80 group-hover:text-current transition-colors">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
