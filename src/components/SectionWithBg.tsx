'use client'

import { ReactNode } from 'react'

interface SectionWithBgProps {
  children: ReactNode
  bgImage: string
  className?: string
  overlayOpacity?: number
  darkText?: boolean
}

export default function SectionWithBg({
  children,
  bgImage,
  className = '',
  overlayOpacity = 0.85,
  darkText = false,
}: SectionWithBgProps) {
  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(15, 23, 42, ${overlayOpacity})`,
        }}
      />
      {/* Content */}
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${darkText ? 'text-foreground' : ''}`}>
        {children}
      </div>
    </section>
  )
}
