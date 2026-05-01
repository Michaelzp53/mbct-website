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
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e8] mb-4">{dict.nav.cases}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">{dict.cases.subtitle}</p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.cases.items.map((c, i) => {
              const badgeGradients = [
                'linear-gradient(135deg, #4285f4, #34a853)',
                'linear-gradient(135deg, #34a853, #fbbc04)',
                'linear-gradient(135deg, #fbbc04, #ea4335)',
                'linear-gradient(135deg, #ea4335, #764ba2)',
                'linear-gradient(135deg, #764ba2, #4285f4)',
                'linear-gradient(135deg, #4285f4, #ea4335)',
              ]
              return (
                <Card key={c.client} className="border border-[rgba(255,255,255,0.05)] bg-[#16213e] rounded-xl overflow-hidden hover:shadow-xl hover:border-[rgba(102,126,234,0.3)] transition-all duration-300 card-gemini">
                  <div className="h-44 relative overflow-hidden">
                    <img src={c.image} alt={c.client} className="w-full h-full object-cover" />
                    <Badge className="absolute top-4 left-4 text-[#ffffff] text-xs font-bold border-0" style={{ background: badgeGradients[i % badgeGradients.length] }}>
                      {c.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#e8e8e8]">{c.client}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">{c.description}</p>
                    <div className="bg-[#34a853]/10 border border-[#34a853]/30 rounded-lg p-3 mb-3">
                      <p className="text-[#34a853] font-medium text-sm">📈 {c.result}</p>
                    </div>
                    <p className="text-[#4285f4] font-bold text-lg">{c.metric}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-[#16213e] to-[#1a1a2e]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e8e8e8] mb-3">
              {dict.cases.testimonials.title}
            </h2>
            <p className="text-[#a0a0a0]">{dict.cases.testimonials.subtitle}</p>
          </div>
          
          <div className="space-y-5">
            {dict.cases.testimonials.items.map((t, index) => (
              <div
                key={index}
                className="bg-[#16213e] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[rgba(255,255,255,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4285f4] to-[#764ba2] flex items-center justify-center text-xl flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-[#e8e8e8]">{t.name}</span>
                      <span className="text-[#a0a0a0] text-sm">·</span>
                      <span className="text-[#a0a0a0] text-sm">{t.role}</span>
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed mb-4">{t.content}</p>
                    <div className="flex items-center gap-4 text-sm text-[#a0a0a0]">
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
