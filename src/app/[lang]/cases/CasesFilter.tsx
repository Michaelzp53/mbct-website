'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PROPERTY_FILTERS, STAGE_FILTERS, publishedCases, propertyLabel, stageLabel, type CaseStage, type PropertyType } from '@/lib/case-studies'

export default function CasesFilter({ lang }: { lang: string }) {
  const isZh = lang === 'zh'
  const [stage, setStage] = useState<CaseStage | ''>('')
  const [property, setProperty] = useState<PropertyType | ''>('')
  const items = useMemo(
    () => publishedCases.filter((item) => (!stage || item.stage === stage) && (!property || item.property === property)),
    [stage, property],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{isZh ? '按阶段' : 'By stage'}</legend>
          <div className="flex flex-wrap gap-2">
            {STAGE_FILTERS.map((item) => (
              <button
                key={item.id || 'all-stage'}
                type="button"
                onClick={() => setStage(item.id)}
                className={`rounded-full border px-3 py-1.5 text-sm ${stage === item.id ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}
              >
                {isZh ? item.zh : item.en}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{isZh ? '按物业类型' : 'By property type'}</legend>
          <div className="flex flex-wrap gap-2">
            {PROPERTY_FILTERS.map((item) => (
              <button
                key={item.id || 'all-property'}
                type="button"
                onClick={() => setProperty(item.id)}
                className={`rounded-full border px-3 py-1.5 text-sm ${property === item.id ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}
              >
                {isZh ? item.zh : item.en}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const copy = isZh ? item.zh : item.en
          return (
            <Link key={item.slug} href={`/${lang}/cases/${item.slug}`} className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="relative h-44">
                <Image src={item.image} alt={copy.client} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{stageLabel(item.stage, lang)}</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">{copy.result}</span>
                </div>
                <h3 className="text-lg font-semibold">{copy.client}</h3>
                <p className="text-sm text-muted-foreground">{copy.projectType}</p>
              </div>
            </Link>
          )
        })}
      </div>
      {items.length === 0 && (
        <p className="mt-8 text-sm text-muted-foreground">{isZh ? '这个筛选组合下暂无已披露量化结果的案例。' : 'No disclosed quantified cases match this filter.'}</p>
      )}
    </div>
  )
}
