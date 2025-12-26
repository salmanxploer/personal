'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const skills = [
  'React.js',
  'JavaScript & TypeScript',
  'WordPress & WooCommerce',
  'SEO',
  'Google GTM & GA4',
  'Laravel & PHP',
  'Node.js',
  'MongoDB',
  'Firebase',
  'GitHub',
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-dark-accent mb-8 text-center"
          >
            About Me
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-dark-text/80 leading-relaxed mb-6">
              I'm a passionate web developer specializing in building exceptional digital experiences. 
              With expertise in modern web technologies, I create high-performance, scalable applications 
              that deliver real value to users and businesses.
            </p>
            <p className="text-lg text-dark-text/80 leading-relaxed">
              My focus is on writing clean, maintainable code and staying up-to-date with the latest 
              industry trends and best practices. I believe in continuous learning and improvement.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-dark-text mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-dark-bg/50 border border-dark-border rounded-lg p-4 text-center hover:border-dark-accent/50 transition-all duration-300 group"
                >
                  <code className="text-dark-accent font-mono text-sm group-hover:glow-text transition-all duration-300">
                    {skill}
                  </code>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
