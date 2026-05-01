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

interface BentoServicesProps {
  lang: string
}

export default function BentoServices({ lang }: BentoServicesProps) {
  const isZh = lang === 'zh'

  const services = [
    {
      id: 'strategy',
      title: isZh ? '数字化战略咨询' : 'Digital Strategy Consulting',
      desc: isZh ? 'AI 驱动的酒店数字化转型顶层设计，从诊断到落地的全链路服务' : 'AI-driven hotel digital transformation from diagnosis to implementation',
      icon: BarChart3,
      color: '#4285f4',
      gradient: 'linear-gradient(135deg, #4285f4, #34a853)',
      size: 'large',
      stats: isZh ? '300+ 酒店' : '300+ Hotels',
    },
    {
      id: 'saas',
      title: isZh ? '酒店 SaaS 系统' : 'Hotel SaaS System',
      desc: isZh ? '智能收益管理、客户关系、运营分析一体化平台' : 'Integrated platform for revenue management, CRM, and operations analytics',
      icon: Cpu,
      color: '#34a853',
      gradient: 'linear-gradient(135deg, #34a853, #fbbc04)',
      size: 'small',
      stats: isZh ? '效率提升 40%' : '+40% Efficiency',
    },
    {
      id: 'membership',
      title: isZh ? '会员体系设计' : 'Membership Design',
      desc: isZh ? '从积分到生态，打造高粘性会员体系' : 'Build high-engagement membership ecosystems beyond points',
      icon: Users,
      color: '#fbbc04',
      gradient: 'linear-gradient(135deg, #fbbc04, #ea4335)',
      size: 'small',
      stats: isZh ? '复购率 70%' : '70% Retention',
    },
    {
      id: 'revenue',
      title: isZh ? '收益管理优化' : 'Revenue Management',
      desc: isZh ? '动态定价、库存优化、渠道管理' : 'Dynamic pricing, inventory optimization, and channel management',
      icon: TrendingUp,
      color: '#ea4335',
      gradient: 'linear-gradient(135deg, #ea4335, #764ba2)',
      size: 'small',
      stats: isZh ? 'RevPAR+35%' : 'RevPAR +35%',
    },
    {
      id: 'feasibility',
      title: isZh ? '可行性分析' : 'Feasibility Analysis',
      desc: isZh ? '选址评估、投资回报测算、风险评估' : 'Site evaluation, ROI calculation, and risk assessment',
      icon: Building2,
      color: '#764ba2',
      gradient: 'linear-gradient(135deg, #764ba2, #4285f4)',
      size: 'small',
      stats: isZh ? '准确率 95%' : '95% Accuracy',
    },
    {
      id: 'brand',
      title: isZh ? '品牌策划' : 'Brand Strategy',
      desc: isZh ? '品牌定位、视觉设计、传播策略' : 'Brand positioning, visual design, and communication strategy',
      icon: Palette,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #4285f4)',
      size: 'small',
      stats: isZh ? '品牌溢价 30%' : '30% Premium',
    },
  ]
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-16 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285f4]/10 border border-[#4285f4]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#4285f4]" />
            <span className="text-[#4285f4] text-sm font-medium">{isZh ? '核心业务' : 'Core Services'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8e8] mb-4">
            {isZh ? '全方位酒店数字化解决方案' : 'Comprehensive Hotel Digital Solutions'}
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto">
            {isZh 
              ? '从战略咨询到技术落地，从会员运营到收益优化，迈创兄弟陪跑式服务助力酒店业绩增长'
              : 'From strategy consulting to tech implementation, from membership to revenue optimization—MBCT partnership services drive hotel growth'}
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
                  group relative overflow-hidden rounded-2xl bg-[#16213e] border border-[rgba(255,255,255,0.05)]
                  transition-all duration-300 ease-out
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isHovered ? 'border-[rgba(102,126,234,0.3)] scale-[1.02]' : 'hover:border-[rgba(255,255,255,0.1)]'}
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
                    style={{ background: service.gradient }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#e8e8e8] mb-2 group-hover:text-[#4285f4] transition-colors">
                      {service.title}
                    </h3>
                    <p className={`text-[#a0a0a0] ${isLarge ? 'text-base mb-4' : 'text-sm line-clamp-2'}`}>
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
                    <div className="flex items-center gap-1 text-[#a0a0a0] group-hover:text-[#4285f4] transition-colors">
                      <span className="text-sm">{isZh ? '了解详情' : 'Learn More'}</span>
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
            href={`/${lang}/contact?type=plan`}
            className="inline-flex items-center gap-2 px-8 py-4 btn-gradient-primary font-bold rounded-xl"
          >
            {isZh ? '获取定制方案' : 'Get Custom Plan'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
