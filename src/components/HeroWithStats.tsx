'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { ArrowRight, TrendingUp, Users, Building2, Award } from 'lucide-react'
import Link from 'next/link'

interface HeroWithStatsProps {
  lang: string
}

interface AnimatedNumberProps {
  value: number
  suffix?: string
  duration?: number
}

const heroImages = [
  '/hero-crew-szCvt1gP2d4-unsplash.jpg',
  '/hero-franck-morisset-UFhM8kMuQbo-unsplash.jpg',
  '/hero-hung-li-1HbWj9BDbjE-unsplash.jpg',
  '/hero-pexels-jimmy-liao.jpg',
  '/hero-roberto-nickson-MA82mPIZeGI-unsplash.jpg',
  '/hero-rod-long-2P_ifaetDm0-unsplash.jpg',
]

function AnimatedNumber({ value, suffix = '', duration = 2000 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setDisplayValue(Math.floor(eased * value))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function HeroWithStats({ lang }: HeroWithStatsProps) {
  const isZh = lang === 'zh'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextImage = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
      setIsTransitioning(false)
    }, 800)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 6000)
    return () => clearInterval(interval)
  }, [nextImage])

  const stats = [
    { icon: TrendingUp, value: 35, suffix: '%', label: isZh ? 'RevPAR 提升' : 'RevPAR Growth', color: '#34a853' },
    { icon: Users, value: 300, suffix: '+', label: isZh ? '服务酒店' : 'Hotels Served', color: '#4285f4' },
    { icon: Building2, value: 50, suffix: '+', label: isZh ? '覆盖城市' : 'Cities Covered', color: '#f59e0b' },
    { icon: Award, value: 98, suffix: '%', label: isZh ? '客户满意度' : 'Client Satisfaction', color: '#764ba2' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Images - 6张轮换 */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0.2) 100%), url('${img}')`,
          }}
        />
      ))}

      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsTransitioning(false)
                }, 800)
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-amber-400'
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`切换到第${index + 1}张图片`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">
                {isZh ? 'AI 原生 · 数据驱动 · 陪跑式服务' : 'AI-Native · Data-Driven · Partnership'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {isZh ? '让数据成为' : 'Let Data Be Your'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                {isZh ? '增长的灯塔' : 'Growth Beacon'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow">
              {isZh ? 'AI 原生植入的文旅酒店全域' : 'AI-native hospitality data'}
              <span className="text-amber-400 font-medium">{isZh ? '"数据精益化管理"终端' : ' "Lean Management" Terminal'}</span>
              <br />
              {isZh ? '陪跑式服务，风险共担' : 'Partnership service, shared risk'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${lang}/contact?type=plan`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                {isZh ? '获取定制方案' : 'Get Custom Plan'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:border-amber-400 hover:text-amber-400 transition-all"
              >
                {isZh ? '了解服务' : 'Our Services'}
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            {/* Stats Card */}
            <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-amber-400/20 via-transparent to-purple-500/20 opacity-50" />
              
              <div className="relative">
                <h3 className="text-lg font-medium text-slate-300 mb-6">{isZh ? '客户业绩提升' : 'Client Performance'}</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="text-center p-4 rounded-2xl bg-slate-800/50">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: stat.color }} />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-slate-300">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Bottom Note */}
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-slate-300">
                    {isZh ? '基于 ' : 'Based on '} <span className="text-amber-400">300+</span> {isZh ? '家酒店真实数据' : 'Real Hotels'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
