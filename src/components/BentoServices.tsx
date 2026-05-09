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
      title: isZh ? '① 酒店投资可行性研究' : '① Investment Feasibility Study',
      desc: isZh ? '数据驱动的投前决策分析，AI市场扫描+10年期财务建模+蒙特卡洛风险模拟' : 'Data-driven go/no-go analysis. AI market scanning + 10-year financial modeling + Monte Carlo risk simulation',
      icon: BarChart3,
      color: '#4285f4',
      gradient: 'linear-gradient(135deg, #4285f4, #34a853)',
      size: 'small',
      stats: isZh ? '避免3000万损失' : '¥30M Avoided',
    },
    {
      id: 'brand',
      title: isZh ? '② 酒店品牌创建与定位' : '② Brand Creation & Positioning',
      desc: isZh ? '从零打造差异化高端酒店品牌，品牌战略+VI手册+品牌故事体系' : 'Build distinctive premium hotel brand. Brand strategy + VI handbook + brand story system',
      icon: Palette,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #4285f4)',
      size: 'small',
      stats: isZh ? 'ADR溢价15-30%' : 'ADR +15-30%',
    },
    {
      id: 'ops',
      title: isZh ? '③ 酒店运营诊断与增长' : '③ Operations Diagnosis & Growth',
      desc: isZh ? '六模块全维度诊断，AI48小时出初步报告，风险共担效果保障' : 'Six-module comprehensive audit, AI 48hr preliminary report, results guarantee',
      icon: TrendingUp,
      color: '#ea4335',
      gradient: 'linear-gradient(135deg, #ea4335, #764ba2)',
      size: 'small',
      stats: isZh ? 'RevPAR+12.1%' : 'RevPAR +12.1%',
    },
    {
      id: 'saas',
      title: isZh ? '④ AI管理系统（SaaS）' : '④ AI Management System (SaaS)',
      desc: isZh ? '让AI处理重复性工作，插拔式部署2周上线，无需更换PMS' : 'Let AI handle repetitive tasks. Plug-and-play deploy in 2 weeks, no PMS replacement needed',
      icon: Cpu,
      color: '#34a853',
      gradient: 'linear-gradient(135deg, #34a853, #fbbc04)',
      size: 'small',
      stats: isZh ? '效率提升40%' : '+40% Efficiency',
    },
    {
      id: 'private',
      title: isZh ? '⑤ 私域流量运营' : '⑤ Private Domain Growth',
      desc: isZh ? '降低OTA依赖，企微+社群+小程序+内容矩阵建立自有渠道' : 'Reduce OTA dependency. WeChat ecosystem + community + mini-program + content matrix',
      icon: Users,
      color: '#fbbc04',
      gradient: 'linear-gradient(135deg, #fbbc04, #ea4335)',
      size: 'small',
      stats: isZh ? '直订提升15-25%' : '+15-25% Direct',
    },
    {
      id: 'partnership',
      title: isZh ? '⑥ 落地陪跑与效果保障' : '⑥ Execution Partnership',
      desc: isZh ? '目标导向，持续精进。透明数据看板+关键节点可控，效果未达预期共同复盘调整直到达成目标' : 'Goal-oriented, continuous improvement. Transparent dashboard + milestone control, joint review and adjustment until targets are met',
      icon: Building2,
      color: '#764ba2',
      gradient: 'linear-gradient(135deg, #764ba2, #4285f4)',
      size: 'small',
      stats: isZh ? '效果保障' : 'Results Guarantee',
    },
    {
      id: 'advisory',
      title: isZh ? '⑦ 轻量管理顾问' : '⑦ Light Management Advisory',
      desc: isZh ? 'AI月度诊断+战略咨询+1小时危机响应，7×24 AI助手' : 'Monthly AI diagnostics + strategic advisory + 1hr crisis response, 7×24 AI assistant',
      icon: Sparkles,
      color: '#4285f4',
      gradient: 'linear-gradient(135deg, #4285f4, #34a853)',
      size: 'small',
      stats: isZh ? '1小时响应' : '1hr Response',
    },
    {
      id: 'financing',
      title: isZh ? '⑧ 融资顾问' : '⑧ Financing Advisory',
      desc: isZh ? '投行级财务包装+精准对接投资方+全程谈判支持' : 'Investment-bank-grade financial packaging + precise investor matching + full negotiation support',
      icon: BarChart3,
      color: '#34a853',
      gradient: 'linear-gradient(135deg, #34a853, #fbbc04)',
      size: 'small',
      stats: isZh ? '节省5500万' : '¥55M Saved',
    },
    {
      id: 'research',
      title: isZh ? '⑨ 行业研究内容' : '⑨ Industry Research & Content',
      desc: isZh ? 'MBCT是酒店行业的知识伙伴，季度报告+案例研究+免费内容生态' : 'MBCT is your hospitality knowledge partner. Quarterly reports + case studies + free content ecosystem',
      icon: Sparkles,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #764ba2)',
      size: 'small',
      stats: isZh ? '免费内容生态' : 'Free Content',
    },
  ]
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">{isZh ? '核心业务' : 'Core Services'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isZh ? '全方位酒店数字化解决方案' : 'Comprehensive Hotel Digital Solutions'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  group relative overflow-hidden rounded-2xl bg-card border border-border
                  transition-all duration-300 ease-out
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isHovered ? 'border-primary/30 scale-[1.02]' : 'hover:border-border'}
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
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className={`text-muted-foreground ${isLarge ? 'text-base mb-4' : 'text-sm line-clamp-2'}`}>
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
                    <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors">
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
