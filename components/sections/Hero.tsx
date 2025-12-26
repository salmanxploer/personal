'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dark-accent/5 rounded-full blur-3xl animate-pulse" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Glitch Effect Headline */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="inline-block text-dark-text">Hi, I'm </span>
            <span className="inline-block text-dark-accent glow-text animate-pulse">
              Salman Hafiz
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl text-dark-text/80 mb-8"
        >
          Professional Web Developer
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-dark-text/60 max-w-2xl mx-auto mb-12"
        >
          Crafting modern, performant, and scalable web applications with React, Next.js, and cutting-edge technologies
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-dark-accent text-dark-bg rounded-full font-semibold hover:bg-dark-accent/90 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-dark-accent/50"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-dark-accent text-dark-accent rounded-full font-semibold hover:bg-dark-accent/10 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/salmanxploer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-text/60 hover:text-dark-accent transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/salmanxploer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-text/60 hover:text-dark-accent transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@salmanhafiz.com"
            className="text-dark-text/60 hover:text-dark-accent transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-accent/50 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-dark-accent rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}
