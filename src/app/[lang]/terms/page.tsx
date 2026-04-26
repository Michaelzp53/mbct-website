import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const title = lang === 'zh' ? '服务条款' : 'Terms of Service'
  return { title }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href={`/${lang}/login`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '返回登录' : 'Back to Login'}
        </Link>

        <div className="bg-[#111827] rounded-2xl p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-white mb-2">
            {lang === 'zh' ? '服务条款' : 'Terms of Service'}
          </h1>
          <p className="text-gray-400 mb-8">
            {lang === 'zh' ? '更新日期：2026年4月6日' : 'Last updated: April 6, 2026'}
          </p>

          <div className="prose prose-invert prose-sm max-w-none text-gray-300 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '1. 服务说明' : '1. Service Description'}
              </h2>
              <p>
                {lang === 'zh'
                  ? 'MBCT迈创兄弟致力于为酒店行业提供数字化转型解决方案，包括但不限于：酒店SaaS管理系统、可行性分析报告、运营诊断、收益管理优化等服务。'
                  : 'MBCT Commercial Technology is committed to providing digital transformation solutions for the hotel industry, including but not limited to: Hotel SaaS Management System, Feasibility Analysis Reports, Operations Diagnosis, Revenue Management Optimization, and other services.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '2. 账户注册' : '2. Account Registration'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '您需要提供真实、准确的信息进行账户注册。您有责任妥善保管账户信息，因账户被盗用造成的损失由您自行承担。'
                  : 'You need to provide true and accurate information for account registration. You are responsible for keeping your account information secure, and any losses caused by unauthorized use of your account shall be borne by you.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '3. 服务费用' : '3. Service Fees'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '具体服务费用根据所选服务方案确定。我们承诺透明定价，不收取任何隐性费用。'
                  : 'Specific service fees are determined based on the selected service plan. We promise transparent pricing with no hidden fees.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '4. 知识产权' : '4. Intellectual Property'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '网站内容、设计、代码等知识产权归迈创兄弟所有。未经授权，您不得复制、修改或传播我们的内容。'
                  : 'Website content, design, code, and other intellectual property belong to MBCT. Without authorization, you may not copy, modify, or disseminate our content.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '5. 保密义务' : '5. Confidentiality'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '我们对您在服务过程中提供的商业信息负有保密义务，未经您的许可，不会向第三方披露。'
                  : 'We have confidentiality obligations regarding business information you provide during service, and will not disclose it to third parties without your permission.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '6. 免责声明' : '6. Disclaimer'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '因不可抗力、政策调整等原因导致服务无法正常提供，我们不承担责任，但会尽力减少影响。'
                  : 'We are not responsible for service interruptions due to force majeure, policy adjustments, or other reasons, but will strive to minimize the impact.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '7. 协议变更' : '7. Agreement Changes'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '我们保留随时修改服务条款的权利。修改后的条款将在网站上公布，继续使用服务即表示您接受新条款。'
                  : 'We reserve the right to modify these terms at any time. Modified terms will be posted on the website, and continued use of services constitutes acceptance of the new terms.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                {lang === 'zh' ? '8. 联系我们' : '8. Contact Us'}
              </h2>
              <p>
                {lang === 'zh'
                  ? '如对本条款有任何疑问，请联系我们：contact@marvelbros.com'
                  : 'If you have any questions about these terms, please contact us: contact@marvelbros.com'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
