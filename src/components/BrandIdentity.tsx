import Link from 'next/link'
import { brand, brandEmails, lifecycleServices } from '@/lib/brand'

export default function BrandIdentity({ lang }: { lang: string }) {
  const isZh = lang === 'zh'
  const identity = isZh ? brand.zh : brand.en
  return (
    <section aria-label={isZh ? '机构定位与服务交付' : 'Our identity and service deliverables'} className="border-b border-slate-200 px-5 py-12 dark:border-slate-800 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold">{identity.positioning}</h2>
        <p className="mt-4 max-w-4xl text-base leading-8">{identity.description}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {lifecycleServices.map(service => (
            <div key={service.slug}>
              <h3 className="text-lg font-semibold"><Link className="underline underline-offset-4" href={`/${lang}/${service.slug}`}>{isZh ? service.zh : service.en}</Link></h3>
              <p className="mt-3 leading-7">{isZh ? service.deliverableZh : service.deliverableEn}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7">{isZh ? '具体交付范围按项目阶段、资料条件与双方约定确定。' : 'The deliverables for each engagement depend on the project stage, available information and agreed scope.'}</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {brandEmails.map(email => <a className="break-all underline" key={email} href={`mailto:${email}`}>{email}</a>)}
        </div>
      </div>
    </section>
  )
}
