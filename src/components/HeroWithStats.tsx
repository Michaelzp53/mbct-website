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
  '/images/home-named/home-1.jpeg',
  '/images/home-named/home-2.jpeg',
  '/images/home-named/home-3.jpeg',
  '/images/home-named/home-4.jpeg',
  '/images/home-named/about-us.png',
  '/images/home-named/industry-insights.jpg',
  '/images/home-named/solutions-lounge.jpeg',
  '/images/home-named/solutions-dining.jpg',
  '/images/home-named/contact-us.jpg',
]

function AnimatedNumber({ value, suffix = '', duration = 2000 }: AnimatedNumberProps) {
  // 关键修复：初始值改为 value 而非 0
  // 原 bug: useState(0) + IntersectionObserver 依赖可见性,SEO/SSR/无头浏览器/Vercel 分析
  // 抓取时 observer 不触发,导致所有统计数字显示 0("0+酒店"劝退所有访客)
  // 现在默认显示 value,SEO/SSR/无障碍/抓取工具立即看到正确数字
  // 真人用户进入视口时执行从 0 到 value 的视觉动画(体验更好)
  const [displayValue, setDisplayValue] = useState(value)
  const hasAnimated = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // 只在客户端 mount 后执行,不依赖 IntersectionObserver
    // 1. 先把值临时设为 0(动画起点)
    // 2. 立即启动 0 → value 的动画
    // 用户看到: 数字从 0 涨到 value(2秒动画)
    // SEO/SSR 看到: 始终是 value(默认 useState)
    if (hasAnimated.current) return
    hasAnimated.current = true
    let frameId = 0
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(eased * value))
      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }
    let startTime = 0
    frameId = requestAnimationFrame(() => {
      setDisplayValue(0)
      startTime = Date.now()
      frameId = requestAnimationFrame(animate)
    })
    return () => cancelAnimationFrame(frameId)
  }, [value, duration])

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
    { icon: TrendingUp, value: 35, suffix: '%', label: isZh ? 'RevPAR 提升' : 'RevPAR Growth', color: '#22c55e' },
    { icon: Users, value: 300, suffix: '+', label: isZh ? '服务酒店' : 'Hotels Served', color: '#38bdf8' },
    { icon: Building2, value: 50, suffix: '+', label: isZh ? '覆盖城市' : 'Cities Covered', color: '#8ab4f8' },
    { icon: Award, value: 98, suffix: '%', label: isZh ? '客户满意度' : 'Client Satisfaction', color: '#a78bfa' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#07111f]">
      {/* Background Images - desktop carousel */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            backgroundImage: `url('${img}')`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/72 via-[#002f5f]/38 to-[#050816]/8 dark:from-[#050816]/86 dark:via-[#0b1020]/62 dark:to-[#111827]/26" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07111f]/36 dark:to-[#050816]/68" />

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
                ? 'w-8 bg-sky-300'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-sky-300/30 mb-16 animate-fade-in backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
              <span className="text-sky-100 text-sm font-medium">
                {isZh ? '迈创兄弟C&T · 酒店增长与数字化赋能伙伴' : 'MarvelBros C&T · Hospitality Growth & Digital Enablement Partner'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {isZh ? '让酒店资产' : 'Turn hotel assets'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-100 to-violet-200 dark:from-sky-300 dark:via-blue-200 dark:to-violet-300">
                {isZh ? '变成可见、可理解、可转化的增长路径' : 'into visible, understandable, convertible growth paths'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow">
              {isZh
                ? '迈创兄弟C&T 面向酒店投资人与经营团队，围绕投前判断、经营诊断、数字化赋能和 AI 信息平台建设，帮助酒店把产品、服务、数据、内容和品牌重新组织成可执行的增长系统。'
                : 'MarvelBros C&T works with hotel investors and operating teams across investment judgment, operational diagnosis, digital enablement, and AI information platform development, helping hotels reorganize products, service, data, content, and brand expression into an executable growth system.'}
              <span className="mt-3 block">
                {isZh
                  ? '我们不做只写报告的咨询。我们和酒店一起把看得见和看不见的问题诊断清楚，把原本流失的客人沉淀为可持续经营的客户资产，把用不起来的数据盘活，让每一步改进都对应可追踪的经营指标。'
                  : 'We do not stop at advisory reports. We work with hotels to diagnose visible and hidden problems, turn lost demand into durable customer assets, activate unused data, and connect each improvement to a trackable operating indicator.'}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={`/${lang}/services`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#003b71] to-[#0072ce] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all"
              >
                {isZh ? '我们能解决什么？' : 'What Can We Solve?'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${lang}/services/ai-hotel-website`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sky-100/45 bg-white/10 text-white font-medium rounded-xl backdrop-blur-sm hover:border-sky-300 hover:text-sky-100 transition-all"
              >
                {isZh ? '了解 AI 信息平台建设方案' : 'Explore the AI Information Platform'}
              </Link>
              <Link
                href={`/${lang}/topics/ai-hotel-growth`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-amber-200/60 bg-amber-300/15 text-amber-100 font-medium rounded-xl backdrop-blur-sm hover:border-amber-200 hover:bg-amber-300/25 transition-all"
              >
                {isZh ? '进入 AI 搜索获客专题' : 'AI Search Growth Hub'}
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            {/* Stats Card */}
            <div className="relative bg-[#07111f]/44 backdrop-blur-xl rounded-3xl border border-sky-100/22 p-8 shadow-2xl shadow-[#07111f]/25 dark:bg-[#07111f]/68 dark:shadow-[#050816]/40">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-sky-300/18 via-white/5 to-violet-400/16 opacity-80" />
              
              <div className="relative">
                <h3 className="text-lg font-medium text-slate-300 mb-6">{isZh ? '项目判断与经营结果' : 'Project Judgment & Outcomes'}</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/10 ring-1 ring-white/10">
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
                    {isZh ? '基于 ' : 'Based on '} <span className="text-sky-300">300+</span> {isZh ? '家酒店与项目场景的持续观察' : 'hotel and project scenarios observed over time'}
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
