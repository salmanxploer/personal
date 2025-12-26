'use client'

import { motion } from 'framer-motion'

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'WordPress', icon: '📝' },
  { name: 'WooCommerce', icon: '🛒' },
  { name: 'Laravel', icon: '🔺' },
  { name: 'PHP', icon: '🐘' },
]

export default function TechStack() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTech = [...techStack, ...techStack]

  return (
    <section className="py-20 overflow-hidden bg-dark-surface/50">
      <div className="mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-dark-accent">
          Tech Stack
        </h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-surface/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-surface/50 to-transparent z-10" />

        {/* Infinite Scroll Container */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-48 h-48 bg-dark-bg/80 backdrop-blur-sm border border-dark-border rounded-lg flex flex-col items-center justify-center gap-4 group hover:border-dark-accent/50 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)',
              }}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-dark-text font-semibold group-hover:text-dark-accent transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
