import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'zh' ? '隐私政策' : 'Privacy Policy'
  return { title }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href={`/${lang}/login`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '返回登录' : 'Back to Login'}
        </Link>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <h1 className="text-3xl font-bold text-white mb-2">
            {lang === 'zh' ? '隐私政策' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {lang === 'zh' ? '更新日期：2026年4月6日' : 'Last updated: April 6, 2026'}
          </p>

          <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '1. 信息收集' : '1. Information Collection'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '我们收集您在使用服务时主动提供的信息，包括但不限于：姓名、邮箱地址、联系电话、企业信息等。'
                  : 'We collect information you actively provide when using our services, including but not limited to: name, email address, phone number, business information, etc.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '2. 信息使用' : '2. Use of Information'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '我们使用收集的信息用于：提供和改进服务、响应您的请求、发送服务相关通知、进行数据分析。'
                  : 'We use collected information to: provide and improve services, respond to your requests, send service-related notifications, conduct data analysis.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '3. 信息保护' : '3. Information Protection'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '我们采用行业标准的安全措施保护您的个人信息，防止未经授权的访问、使用或泄露。'
                  : 'We employ industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '4. 信息共享' : '4. Information Sharing'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '未经您的同意，我们不会与第三方共享您的个人信息法律法规要求的情况除外。'
                  : 'We will not share your personal information with third parties without your consent, except as required by law.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '5. 您的权利' : '5. Your Rights'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '您有权访问、更正、删除您的个人信息。如有任何问题，请联系我们。'
                  : 'You have the right to access, correct, and delete your personal information. Please contact us if you have any questions.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '6. 联系我们' : '6. Contact Us'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '如对本隐私政策有任何疑问，请联系我们：contactme@marvelbros.com'
                  : 'If you have any questions about this Privacy Policy, please contact us: contactme@marvelbros.com'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
