import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.cases }
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.nav.cases}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{dict.cases.subtitle}</p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.cases.items.map((c) => (
              <Card key={c.client} className="border border-slate-200 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-44 relative overflow-hidden">
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 left-4 bg-[#f59e0b]/90 text-[#0f172a] text-xs font-medium">
                    {c.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#0f172a]">{c.client}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{c.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                    <p className="text-green-800 font-medium text-sm">📈 {c.result}</p>
                  </div>
                  <p className="text-[#f59e0b] font-bold text-lg">{c.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              {dict.cases.testimonials.title}
            </h2>
            <p className="text-slate-500 text-lg">{dict.cases.testimonials.subtitle}</p>
          </div>
          
          <div className="space-y-6">
            {dict.cases.testimonials.items.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#ea580c] flex items-center justify-center text-2xl flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-[#0f172a]">{t.name}</span>
                      <span className="text-slate-400 text-sm">·</span>
                      <span className="text-slate-500 text-sm">{t.role}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{t.content}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{t.time}</span>
                      <span className="flex items-center gap-1">👍 {t.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} lang={lang} />
    </>
  )
}
