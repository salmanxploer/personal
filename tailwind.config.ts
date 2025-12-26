import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'var(--dark-bg)',
          surface: 'var(--dark-surface)',
          border: 'var(--dark-border)',
          text: 'var(--dark-text)',
          accent: 'var(--dark-accent)',
        },
        light: {
          bg: 'var(--light-bg)',
          surface: 'var(--light-surface)',
          border: 'var(--light-border)',
          text: 'var(--light-text)',
          accent: 'var(--light-accent)',
        },
        hacker: {
          bg: 'var(--hacker-bg)',
          surface: 'var(--hacker-surface)',
          border: 'var(--hacker-border)',
          text: 'var(--hacker-text)',
          accent: 'var(--hacker-accent)',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-left': 'slide-left 30s linear infinite',
        'glitch': 'glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
