'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'WordPress' | 'Laravel' | 'React'>('All')

  const categories = ['All', 'WordPress', 'Laravel', 'React'] as const

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-dark-accent mb-8 text-center"
          >
            Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-dark-accent text-dark-bg shadow-lg shadow-dark-accent/30'
                    : 'bg-dark-surface/50 text-dark-text border border-dark-border hover:border-dark-accent/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-lg overflow-hidden hover:border-dark-accent/50 hover:shadow-lg hover:shadow-dark-accent/10 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-dark-accent/10 text-dark-accent text-xs rounded-full border border-dark-accent/30">
                      {project.category}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-text/60 hover:text-dark-accent transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-semibold text-dark-text mb-3 group-hover:text-dark-accent transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-text/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-bg/50 text-dark-text/70 text-xs rounded border border-dark-border group-hover:border-dark-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Border Effect */}
                <div className="h-1 bg-gradient-to-r from-transparent via-dark-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
