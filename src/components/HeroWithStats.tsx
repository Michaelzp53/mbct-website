'use client'

import { useEffect, useState, useRef } from 'react'
import { ArrowRight, TrendingUp, Users, Building2, Award } from 'lucide-react'
import Link from 'next/link'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  duration?: number
}

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
            // Easing function: easeOutQuart
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

const stats = [
  { icon: TrendingUp, value: 35, suffix: '%', label: 'RevPAR提升', color: '#22c55e' },
  { icon: Users, value: 300, suffix: '+', label: '服务酒店', color: '#3b82f6' },
  { icon: Building2, value: 50, suffix: '+', label: '覆盖城市', color: '#f59e0b' },
  { icon: Award, value: 98, suffix: '%', label: '客户满意度', color: '#8b5cf6' },
]

export default function HeroWithStats() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className="text-[#f59e0b] text-sm font-medium">AI原生 · 数据驱动 · 陪跑式服务</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              让数据成为
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
                增长的灯塔
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              AI原生植入的文旅酒店全域
              <span className="text-[#f59e0b] font-medium">"数据精益化管理"终端</span>
              <br />
              陪跑式服务，风险共担
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/zh/contact?type=plan"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#f59e0b]/25"
              >
                获取定制方案
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/zh/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-medium rounded-xl hover:border-[#f59e0b] hover:text-[#f59e0b] transition-all"
              >
                了解服务
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative">
            {/* Stats Card */}
            <div className="relative bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-gray-800 p-8">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#f59e0b]/20 via-transparent to-[#3b82f6]/20 opacity-50" />
              
              <div className="relative">
                <h3 className="text-lg font-medium text-gray-400 mb-6">客户业绩提升</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div key={stat.label} className="text-center p-4 rounded-2xl bg-[#0f172a]/50">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: stat.color }} />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>

                {/* Bottom Note */}
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <p className="text-sm text-gray-500">
                    基于 <span className="text-[#f59e0b]">300+</span> 家酒店真实数据
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f59e0b]/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
