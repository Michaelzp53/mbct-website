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
  '/images/home-carousel/about-us-bg.png',
  '/images/home-carousel/home-carousel-01.jpg',
  '/images/home-carousel/home-carousel-02.jpg',
  '/images/home-carousel/home-carousel-03.jpg',
  '/images/home-carousel/home-carousel-04.jpg',
  '/images/home-carousel/home-carousel-05.jpg',
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

  const nextImage = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
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
      {/* Background Images - desktop carousel */}
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
                setTimeout(() => {
                  setCurrentIndex(index)
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
                {isZh ? '酒店项目判断 · 经营增长 · AI 落地' : 'Hotel judgment · Operating growth · AI implementation'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {isZh ? '帮助酒店投资人与经营团队' : 'Helping hotel investors and operators'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                {isZh ? '把判断、增长与 AI 落地做成结果' : 'turn judgment, growth, and AI into measurable results'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow">
              {isZh
                ? '从投前判断，到经营增长，再到 AI 落地，MBCT 聚焦的是客户最关心的三件事：项目值不值得做，增长该怎么推进，数字化如何真正落地。'
                : 'From pre-investment judgment to operating growth and AI implementation, MBCT focuses on three practical questions: whether the project is worth doing, how growth should be pushed forward, and how digital execution can truly land.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${lang}/contact?type=plan`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                {isZh ? '获取方案' : 'Get a Plan'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:border-amber-400 hover:text-amber-400 transition-all"
              >
                {isZh ? '查看解决方案' : 'View Solutions'}
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            {/* Stats Card */}
            <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-amber-400/20 via-transparent to-purple-500/20 opacity-50" />
              
              <div className="relative">
                <h3 className="text-lg font-medium text-slate-300 mb-6">{isZh ? '项目判断与经营结果' : 'Project Judgment & Outcomes'}</h3>
                
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
                    {isZh ? '基于 ' : 'Based on '} <span className="text-amber-400">300+</span> {isZh ? '家酒店与项目场景的持续观察' : 'hotel and project scenarios observed over time'}
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
