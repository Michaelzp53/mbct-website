import type { Metadata } from 'next'
import { Building2, TrendingUp, Shield, Sparkles, BarChart3, Users, Megaphone, GraduationCap, Landmark, BookOpen, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/CTASection'
import { getDict } from '@/lib/dicts'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, TrendingUp, Shield, Sparkles, BarChart3, Users, Megaphone, GraduationCap, Landmark, BookOpen,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.services }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const icons = ['Building2', 'Sparkles', 'TrendingUp', 'BarChart3', 'Users', 'Shield', 'Megaphone', 'Landmark', 'BookOpen']

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.nav.services}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{dict.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.services.items.map((service, i) => {
              const Icon = iconMap[icons[i]] ?? Building2
              return (
                <Card key={service.title} className="border border-slate-200 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-[#0f172a] to-[#f59e0b]" />
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-[#0f172a]/5 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#0f172a]" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#0f172a]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#f59e0b] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection dict={dict} lang={lang} />
    </>
  )
}
