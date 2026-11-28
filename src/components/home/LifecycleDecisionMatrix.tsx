'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface DecisionCardItem {
  id: string
  index: number
  stageKey: string
  stageLabel: string
  title: string
  note: string
  href: string | null
}

interface LifecycleDecisionMatrixProps {
  lang: string
  items: DecisionCardItem[]
}

const FILTERS = [
  { id: 'all', zh: '全部阶段 (12)', en: 'All Stages (12)' },
  { id: 'hotel-investment', zh: '投 · 投资与选牌', en: 'Invest & Brand' },
  { id: 'hotel-opening', zh: '筹 · 筹开把关', en: 'Pre-Opening' },
  { id: 'hotel-revenue', zh: '管 · 经营与收益', en: 'Operations & GOP' },
  { id: 'hotel-renovation', zh: '改 · 存量改造', en: 'Renovation' },
  { id: 'hotel-exit', zh: '退 · 资产退出', en: 'Exit' },
] as const

export default function LifecycleDecisionMatrix({ lang, items }: LifecycleDecisionMatrixProps) {
  const isZh = lang !== 'en'
  const [activeStage, setActiveStage] = useState<string>('all')

  return (
    <div>
      <div
        role="tablist"
        aria-label={isZh ? '按酒店全生命周期阶段筛选核心问题' : 'Filter core decisions by hotel lifecycle stage'}
        className="mt-8 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const active = activeStage === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveStage(filter.id)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active
                  ? 'border-[#0f172a] bg-[#0f172a] text-[#f8f6f2] shadow-sm dark:border-[#c9a66b] dark:bg-[#c9a66b] dark:text-[#0b0f17]'
                  : 'border-[#e4ded4] bg-white text-slate-700 hover:border-[#b08d57] hover:text-[#0f172a] dark:border-white/15 dark:bg-[#131924] dark:text-slate-300 dark:hover:border-[#c9a66b] dark:hover:text-white'
              }`}
            >
              {isZh ? filter.zh : filter.en}
            </button>
          )
        })}
      </div>

      {/* All 12 items stay mounted in the DOM (toggled via hidden) so search engines and AI crawlers always index every link & diagnostic summary */}
      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const isVisible = activeStage === 'all' || item.stageKey === activeStage
          return (
            <article
              key={item.id}
              className={`group flex flex-col justify-between rounded-xl border border-[#e4ded4] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b08d57] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#131924] dark:hover:border-[#c9a66b] ${
                isVisible ? '' : 'hidden'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-xl font-semibold tracking-wide text-[#b08d57] dark:text-[#c9a66b]">
                    {String(item.index).padStart(2, '0')}
                  </span>
                  {item.stageLabel ? (
                    <span className="rounded-full bg-[#f1ede6] px-2.5 py-0.5 text-xs font-medium tracking-wide text-[#6b532e] dark:bg-[#c9a66b]/15 dark:text-[#e5c994]">
                      {item.stageLabel}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#0f172a] dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.note}
                </p>
              </div>
              {item.href ? (
                <p className="mt-5 border-t border-[#efeae2] pt-4 dark:border-white/10">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f172a] transition-colors group-hover:text-[#b08d57] dark:text-slate-200 dark:group-hover:text-[#c9a66b]"
                  >
                    <span>{isZh ? '查看诊断思路' : 'Explore Diagnostic Approach'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </p>
              ) : null}
            </article>
          )
        })}
      </div>
    </div>
  )
}
