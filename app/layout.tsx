import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

export const metadata: Metadata = {
  title: 'Salman Hafiz - Professional Web Developer',
  description: 'Professional web developer specializing in React, Next.js, WordPress, and modern web technologies. Building high-performance, scalable applications.',
  keywords: ['web developer', 'react', 'next.js', 'wordpress', 'laravel', 'javascript', 'typescript'],
  authors: [{ name: 'Salman Hafiz' }],
  creator: 'Salman Hafiz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salmanhafiz.com',
    title: 'Salman Hafiz - Professional Web Developer',
    description: 'Professional web developer specializing in React, Next.js, WordPress, and modern web technologies.',
    siteName: 'Salman Hafiz Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salman Hafiz - Professional Web Developer',
    description: 'Professional web developer specializing in React, Next.js, WordPress, and modern web technologies.',
    creator: '@salmanxploer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-dark">
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
