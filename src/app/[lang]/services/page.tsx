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
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e8] mb-4">{dict.nav.services}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">{dict.services.subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.services.items.map((service, i) => {
              const Icon = iconMap[icons[i]] ?? Building2
              const iconGradients = [
                'linear-gradient(135deg, #4285f4, #34a853)',
                'linear-gradient(135deg, #34a853, #fbbc04)',
                'linear-gradient(135deg, #fbbc04, #ea4335)',
                'linear-gradient(135deg, #ea4335, #764ba2)',
                'linear-gradient(135deg, #764ba2, #4285f4)',
                'linear-gradient(135deg, #4285f4, #ea4335)',
                'linear-gradient(135deg, #34a853, #764ba2)',
                'linear-gradient(135deg, #fbbc04, #4285f4)',
              ]
              return (
                <Card key={service.title} className="border border-[rgba(255,255,255,0.05)] bg-[#16213e] rounded-xl overflow-hidden hover:shadow-xl hover:border-[rgba(102,126,234,0.3)] transition-all duration-300 card-gemini">
                  <div className="h-2" style={{ background: iconGradients[i % iconGradients.length] }} />
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: iconGradients[i % iconGradients.length] }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#e8e8e8]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-[#a0a0a0]">
                          <CheckCircle className="w-4 h-4 text-[#34a853] mr-2 flex-shrink-0" />
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
