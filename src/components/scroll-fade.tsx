"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ScrollFade({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionClass = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={isVisible ? "" : directionClass}>
        {children}
      </div>
    </div>
  )
}
