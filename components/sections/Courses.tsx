'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { courses } from '@/data/courses'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface/30">
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
            Courses & Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-lg p-6 hover:border-dark-accent/50 hover:shadow-lg hover:shadow-dark-accent/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-accent/10 rounded-full flex items-center justify-center group-hover:bg-dark-accent/20 transition-colors">
                    <Award className="w-6 h-6 text-dark-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-dark-accent/10 text-dark-accent text-xs rounded-full mb-2">
                      {course.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-dark-text mb-2 group-hover:text-dark-accent transition-colors">
                  {course.name}
                </h3>

                <p className="text-dark-accent/80 font-medium mb-4">
                  {course.platform}
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-dark-bg/50 text-dark-text/70 text-xs rounded border border-dark-border group-hover:border-dark-accent/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
