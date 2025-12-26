'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/data/education'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-dark-accent mb-16 text-center"
          >
            Education
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-border" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-accent rounded-full border-4 border-dark-bg shadow-lg shadow-dark-accent/50" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="ml-16 md:ml-0 bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-lg p-6 hover:border-dark-accent/50 transition-all duration-300 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-dark-accent/10 rounded-full flex items-center justify-center group-hover:bg-dark-accent/20 transition-colors ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                          <GraduationCap className="w-6 h-6 text-dark-accent" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-dark-accent/10 text-dark-accent text-sm rounded-full mb-2">
                            {edu.period}
                          </span>
                          <h3 className="text-xl font-semibold text-dark-text mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-dark-accent font-medium mb-3">
                            {edu.institution}
                          </p>
                          <p className="text-dark-text/70 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
