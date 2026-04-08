'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  Cpu, 
  Users, 
  TrendingUp, 
  Building2, 
  Palette,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'strategy',
    title: '数字化战略咨询',
    desc: 'AI驱动的酒店数字化转型顶层设计，从诊断到落地的全链路服务',
    icon: BarChart3,
    color: '#f59e0b',
    size: 'large', // large or small
    stats: '300+酒店',
  },
  {
    id: 'saas',
    title: '酒店SaaS系统',
    desc: '智能收益管理、客户关系、运营分析一体化平台',
    icon: Cpu,
    color: '#3b82f6',
    size: 'small',
    stats: '效率提升40%',
  },
  {
    id: 'membership',
    title: '会员体系设计',
    desc: '从积分到生态，打造高粘性会员体系',
    icon: Users,
    color: '#22c55e',
    size: 'small',
    stats: '复购率70%',
  },
  {
    id: 'revenue',
    title: '收益管理优化',
    desc: '动态定价、库存优化、渠道管理',
    icon: TrendingUp,
    color: '#8b5cf6',
    size: 'small',
    stats: 'RevPAR+35%',
  },
  {
    id: 'feasibility',
    title: '可行性分析',
    desc: '选址评估、投资回报测算、风险评估',
    icon: Building2,
    color: '#ef4444',
    size: 'small',
    stats: '准确率95%',
  },
  {
    id: 'brand',
    title: '品牌策划',
    desc: '品牌定位、视觉设计、传播策略',
    icon: Palette,
    color: '#ec4899',
    size: 'small',
    stats: '品牌溢价30%',
  },
]

export default function BentoServices() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">核心业务</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            全方位酒店数字化解决方案
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            从战略咨询到技术落地，从会员运营到收益优化，MBCT陪跑式服务助力酒店业绩增长
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            const isLarge = service.size === 'large'
            const isHovered = hoveredId === service.id

            return (
              <Link
                key={service.id}
                href={`/zh/services#${service.id}`}
                className={`
                  group relative overflow-hidden rounded-2xl bg-[#111827] border border-gray-800
                  transition-all duration-300 ease-out
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isHovered ? 'border-[#f59e0b]/50 scale-[1.02]' : 'hover:border-gray-700'}
                `}
                style={{
                  boxShadow: isHovered ? `0 20px 40px ${service.color}15` : 'none',
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 60%)`,
                  }}
                />

                <div className={`relative p-6 ${isLarge ? 'h-full flex flex-col justify-between' : ''}`}>
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
                      {service.title}
                    </h3>
                    <p className={`text-gray-400 ${isLarge ? 'text-base mb-4' : 'text-sm line-clamp-2'}`}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between mt-4">
                    <span 
                      className="text-sm font-medium"
                      style={{ color: service.color }}
                    >
                      {service.stats}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 group-hover:text-[#f59e0b] transition-colors">
                      <span className="text-sm">了解详情</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/zh/contact?type=plan"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] text-[#0f172a] font-bold rounded-xl hover:bg-[#f59e0b]/90 transition-all hover:scale-105"
          >
            获取定制方案
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
