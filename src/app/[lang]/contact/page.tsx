import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { getDict } from '@/lib/dicts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDict(lang)
  return { title: dict.nav.contact }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)

  return (
    <>
      {/* Page Hero */}
      <section className="py-16 section-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{dict.contact.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">{dict.contact.title}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{dict.contact.form.phone}</p>
                    <p className="text-sm text-foreground font-medium">{dict.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{dict.contact.form.email}</p>
                    <p className="text-sm text-foreground font-medium">{dict.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-sm text-foreground font-medium">{dict.contact.info.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-foreground font-semibold mb-1">
                  {lang === 'zh' ? '免费增长诊断' : 'Free Growth Diagnosis'}
                </p>
                <p className="text-muted-foreground text-sm">
                  {lang === 'zh'
                    ? '我们提供30分钟免费咨询，帮您找到酒店的增长机会'
                    : '30-minute free consultation to identify growth opportunities for your hotel'}
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-2">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
