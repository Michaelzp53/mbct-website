'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  PROPERTY_FILTERS,
  STAGE_FILTERS,
  publishedCases,
  propertyLabel,
  stageLabel,
  type CaseStage,
  type PropertyType,
} from '@/lib/case-studies'
import { LIFECYCLE_STAGES } from '@/lib/lifecycle-stages'

const EMPTY_IMAGE = '/images/home-named/solutions-dining.jpg'

export default function CasesFilter({ lang }: { lang: string }) {
  const isZh = lang === 'zh'
  const [stage, setStage] = useState<CaseStage | ''>('')
  const [property, setProperty] = useState<PropertyType | ''>('')
  const items = useMemo(
    () => publishedCases.filter((item) => (!stage || item.stage === stage) && (!property || item.property === property)),
    [stage, property],
  )

  const activeStage = LIFECYCLE_STAGES.find((item) => item.caseStage === stage)
  const activeProperty = PROPERTY_FILTERS.find((item) => item.id === property && item.id !== '')
  const detailHref = activeStage
    ? `/${lang}/${activeStage.slug}`
    : activeProperty
      ? `/${lang}/cases/property/${activeProperty.id}`
      : `/${lang}/contact?type=diagnosis`

  const detailLabel = activeStage
    ? isZh
      ? `查看「${activeStage.shortZh}（${activeStage.fullZh}）」详情`
      : `Open ${activeStage.navEn} details`
    : activeProperty
      ? isZh
        ? `查看「${activeProperty.zh}」物业类型说明`
        : `Open ${activeProperty.en} property notes`
      : isZh
        ? '预约项目诊断'
        : 'Book a diagnosis'

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{isZh ? '按阶段' : 'By stage'}</legend>
          <div className="flex flex-wrap gap-2">
            {STAGE_FILTERS.map((item) => {
              const stageMeta = LIFECYCLE_STAGES.find((row) => row.caseStage === item.id)
              return (
                <div key={item.id || 'all-stage'} className="inline-flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setStage(item.id)}
                    className={`rounded-full border px-3 py-1.5 text-sm ${stage === item.id ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}
                  >
                    {isZh ? item.zh : item.en}
                  </button>
                  {stageMeta && (
                    <Link
                      href={`/${lang}/${stageMeta.slug}`}
                      className="rounded-full border border-transparent px-2 py-1.5 text-xs font-semibold text-primary hover:border-primary/30"
                    >
                      {isZh ? '详情' : 'Detail'}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{isZh ? '按物业类型' : 'By property type'}</legend>
          <div className="flex flex-wrap gap-2">
            {PROPERTY_FILTERS.map((item) => (
              <div key={item.id || 'all-property'} className="inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setProperty(item.id)}
                  className={`rounded-full border px-3 py-1.5 text-sm ${property === item.id ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}
                >
                  {isZh ? item.zh : item.en}
                </button>
                {item.id && (
                  <Link
                    href={`/${lang}/cases/property/${item.id}`}
                    className="rounded-full border border-transparent px-2 py-1.5 text-xs font-semibold text-primary hover:border-primary/30"
                  >
                    {isZh ? '详情' : 'Detail'}
                  </Link>
                )}
              </div>
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
        <div className="relative mt-10 min-h-[280px] overflow-hidden border border-border">
          <Image src={EMPTY_IMAGE} alt="" fill sizes="100vw" className="object-cover" priority={false} />
          <div className="pointer-events-none absolute inset-0 bg-[#163044]/75 dark:bg-[#0e1c2c]/80" />
          <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-12 text-center text-white">
            <p className="max-w-xl text-lg font-semibold leading-8">
              {isZh
                ? '该组合下的量化案例仍在整理中。可先查看对应阶段或物业类型说明。'
                : 'Quantified cases for this combination are still being prepared. Review the matching stage or property notes first.'}
            </p>
            {(stage || property) && (
              <p className="text-sm text-white/85">
                {stage ? `${isZh ? '阶段' : 'Stage'}: ${stageLabel(stage, lang)}` : ''}
                {stage && property ? ' · ' : ''}
                {property ? `${isZh ? '物业' : 'Property'}: ${propertyLabel(property, lang)}` : ''}
              </p>
            )}
            <Link href={detailHref} className="inline-flex min-h-11 items-center bg-[#d98b28] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400">
              {detailLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
