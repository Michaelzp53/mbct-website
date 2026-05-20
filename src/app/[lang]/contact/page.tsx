import type { Metadata } from 'next'
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { getDict } from '@/lib/dicts'
import PageHero from '@/components/PageHero'

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
  const isZh = lang === 'zh'

  const scenarios = [
    isZh ? '正在判断一个酒店项目该不该投。' : 'You are deciding whether a hotel project is worth investing in.',
    isZh ? '品牌、定位或客群策略需要重新梳理。' : 'Your brand, positioning, or target guest strategy needs to be reworked.',
    isZh ? '经营动作很多，但增长和利润改善并不稳定。' : 'There is a lot of activity, but growth and profit improvement remain unstable.',
    isZh ? 'OTA 依赖过高，直订和会员转化较弱。' : 'OTA dependency is too high, while direct bookings and member conversion are weak.',
    isZh ? '想推进 AI 或数字化，但不想做成表面工程。' : 'You want practical AI or digital implementation, not a surface-level rollout.',
    isZh ? '想找一个更懂项目判断与落地推进的长期合作方。' : 'You want a partner who understands both project judgment and execution follow-through.',
  ]

  const firstCallTopics = [
    isZh ? '你的项目现在处于什么阶段。' : 'What stage the project is currently in.',
    isZh ? '你最关心的目标是什么。' : 'What outcome matters most right now.',
    isZh ? '当前最难推进的问题在哪里。' : 'Where progress is hardest at the moment.',
    isZh ? '目前已经尝试过哪些动作。' : 'What actions have already been tried.',
    isZh ? '更适合先做判断、先做诊断，还是先做专项支持。' : 'Whether the right next step is judgment, diagnosis, or targeted support.',
  ]

  const responseNotes = [
    isZh ? '适合留下的资料：项目阶段、目标、关键问题、所在城市或物业类型。' : 'Useful information to leave with us: project stage, goals, key issues, city, or asset type.',
    isZh ? '响应方式：邮件、电话，或后续约定的沟通方式。' : 'Response channels: email, phone, or a follow-up conversation format we agree on.',
    isZh ? '建议参与人：投资方、业主方、项目负责人或经营管理者。' : 'Recommended participants: investors, owners, project leads, or operating managers.',
  ]

  const contactPoints = [
    {
      label: dict.contact.form.phone,
      value: dict.contact.info.phone,
      icon: Phone,
    },
    {
      label: dict.contact.form.email,
      value: dict.contact.info.email,
      icon: Mail,
    },
    {
      label: isZh ? '地址' : 'Address',
      value: dict.contact.info.address,
      icon: MapPin,
    },
  ]

  return (
    <>
      <PageHero
        title={isZh ? '先把项目现状讲清楚，再决定下一步怎么做' : 'Clarify the current project situation first, then decide what should happen next'}
        subtitle={isZh ? '你不需要一开始就准备得非常完整。只要把项目阶段、核心目标和目前最难推进的问题告诉我们，我们会先帮你判断，从哪里切入更合适。' : 'You do not need a perfect brief to start. Share the project stage, your main objective, and the hardest issue to move forward, and we will help you decide the most suitable point of entry.'}
        bgImage="/hero-rod-long-2P_ifaetDm0-unsplash.jpg"
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-start">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
                <p className="text-sm font-medium text-primary mb-4">
                  {isZh ? '适合直接联系 MBCT 的常见情况' : 'Typical situations where it makes sense to contact MBCT'}
                </p>
                <div className="space-y-4 text-sm md:text-base text-foreground">
                  {scenarios.map((item) => (
                    <div key={item} className="flex items-start gap-3 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
                <p className="text-sm font-medium text-primary mb-4">
                  {isZh ? '首次沟通通常会围绕这几件事展开' : 'The first conversation usually revolves around these points'}
                </p>
                <div className="space-y-4 text-sm md:text-base text-foreground">
                  {firstCallTopics.map((item) => (
                    <div key={item} className="flex items-start gap-3 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <Link
                    href={`/${lang}/services`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                  >
                    {isZh ? '先了解我们的服务结构' : 'See how our services are structured'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {isZh ? '你可以期待怎样的沟通方式' : 'What kind of communication you can expect'}
                </h3>
                <div className="space-y-4 mb-8 text-sm text-muted-foreground leading-relaxed">
                  {responseNotes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-border pt-6">
                  {contactPoints.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4285f4, #34a853)' }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{label}</p>
                        <p className="text-sm text-foreground font-medium leading-relaxed">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-6">
              <ContactForm dict={dict} />
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-7">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {isZh ? '如果你已经在思考下一步，就从一次清晰的沟通开始' : 'If you are already thinking about the next move, start with one clear conversation'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isZh ? '比起先讨论很多方案，更重要的是先把项目真正的问题说清楚。MBCT 会先帮你判断问题本质，再决定更合适的推进方式。' : 'Before discussing many solutions, it is more important to clarify the real issue in the project. MBCT will first help identify the problem clearly, then choose the most suitable path forward.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
