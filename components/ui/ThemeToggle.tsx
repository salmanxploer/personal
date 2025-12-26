'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Terminal } from 'lucide-react'
import { useTheme } from '@/lib/theme-provider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-dark-surface/50 backdrop-blur-sm p-1 rounded-full border border-dark-border">
        <div className="px-3 py-2 rounded-full">
          <Moon className="w-4 h-4" />
        </div>
      </div>
    )
  }

  const themes = [
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'hacker', icon: Terminal, label: 'Hacker' },
  ] as const

  return (
    <div className="flex items-center gap-2 bg-dark-surface/50 backdrop-blur-sm p-1 rounded-full border border-dark-border">
      {themes.map(({ name, icon: Icon, label }) => (
        <motion.button
          key={name}
          onClick={() => setTheme(name)}
          className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
            theme === name
              ? 'text-dark-accent'
              : 'text-dark-text/60 hover:text-dark-text'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Switch to ${label} mode`}
        >
          {theme === name && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-dark-accent/10 rounded-full border border-dark-accent/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Icon className="w-4 h-4 relative z-10" />
        </motion.button>
      ))}
    </div>
  )
}
