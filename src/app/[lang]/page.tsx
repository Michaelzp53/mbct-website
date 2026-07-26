import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BookOpen,
  Building2,
  ClipboardCheck,
  Coins,
  FileText,
  Hotel,
  Phone,
  Search,
  Users,
} from 'lucide-react'
import HeroWithStats from '@/components/HeroWithStats'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const problems = [
    {
      icon: Building2,
      title: isZh ? '准备投资一家酒店？' : 'Planning to invest in a hotel?',
      copy: isZh ? '先判断市场、定位、投资模型和未来回报。' : 'Test the market, positioning, investment model, and return assumptions first.',
      href: `/${lang}/knowledge/hotel-investor-pitfalls-guide`,
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '酒店正在筹备？' : 'Preparing a hotel to open?',
      copy: isZh ? '提前发现定位、设计、预算和开业准备中的风险。' : 'Find risks in positioning, design, budget, and opening readiness before they become expensive.',
      href: `/${lang}/services`,
    },
    {
      icon: Hotel,
      title: isZh ? '酒店入住率下降？' : 'Is occupancy falling?',
      copy: isZh ? '检查产品、价格、渠道和客户需求之间哪里断开了。' : 'Find where product, pricing, channels, and guest demand have stopped connecting.',
      href: `/${lang}/knowledge`,
    },
    {
      icon: Coins,
      title: isZh ? '收入增长，利润却在下降？' : 'Is revenue rising while profit falls?',
      copy: isZh ? '重新检查成本结构、渠道质量和经营效率。' : 'Re-examine the cost structure, channel quality, and operating efficiency.',
      href: `/${lang}/knowledge/revpar-recovery-three-tracks-2026-05-20`,
    },
    {
      icon: Users,
      title: isZh ? '团队很忙，但经营没有改善？' : 'Is the team busy without better results?',
      copy: isZh ? '分析管理机制、工作流程和执行效率。' : 'Review management mechanisms, workflows, and execution quality.',
      href: `/${lang}/lean`,
    },
    {
      icon: Search,
      title: isZh ? '客户越来越难获得？' : 'Are guests getting harder to acquire?',
      copy: isZh ? '重新判断产品表达、市场渠道和新的获客方式。' : 'Rethink product communication, market channels, and new routes to demand.',
      href: `/${lang}/services/ai-hotel-website`,
    },
  ]

  const methods = [
    isZh ? '看真实数据，也看酒店现场' : 'Read the data and the operating floor',
    isZh ? '先找原因，再判断行动' : 'Find the cause before prescribing action',
    isZh ? '把判断变成可执行的方法' : 'Turn judgment into practical action',
    isZh ? '跟踪结果，持续校准' : 'Track outcomes and keep adjusting',
  ]

  const latestArticles = [
    {
      title: isZh ? '加盟酒店品牌怎么选？别只看名气，要看它的持续创造价值能力' : "How to Choose a Hotel Franchise Brand: Look Beyond Fame to Long-Term Value",
      summary: isZh
        ? '品牌名气只能降低第一次选择成本，真正决定加盟价值的是它能否长期改善产品、价格、渠道、运营与收益。'
        : 'Recognition may lower the first-choice barrier. Long-term value depends on sustained improvements to product, pricing, channels, operations, and returns.',
      slug: 'how-to-choose-hotel-franchise-brand-long-term-value-2026-07-25',
      date: '2026.07.25',
    },
    {
      title: isZh ? '暑期客群变复杂，酒店行业的新机会藏在哪里？' : 'As Summer Guests Get More Diverse, Where Is the Real Opportunity for Hotels?',
      summary: isZh
        ? '真正的新机会，藏在客群结构变复杂以后，酒店能不能识别需求、调整服务承载和线上表达。'
        : 'The opportunity lies in reading a more diverse guest mix, adjusting service capacity, and expressing value clearly online.',
      slug: 'summer-guest-mix-opportunity-hotels-2026-07-24',
      date: '2026.07.24',
    },
    {
      title: isZh ? '酒店想被游客记住，不能只靠房价便宜' : 'Hotels Are Remembered for Value, Not Just Low Price',
      summary: isZh
        ? '决定一家酒店能不能被记住的，是它能不能让不同客群感到省心、独特、值得推荐。'
        : 'Memorable hotels make different guest groups feel understood, confident, and ready to recommend the stay.',
      slug: 'hotel-value-beyond-cheap-2026-07-21',
      date: '2026.07.21',
    },
  ]

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isZh ? '迈创兄弟C&T酒店经营知识平台' : 'MarvelBros C&T Hotel Knowledge Platform',
    url: `https://www.marvelbros.com/${lang}`,
    description: isZh
      ? '面向酒店投资人、业主和管理者的酒店投资咨询、酒店筹开管理、酒店经营诊断与酒店运营优化知识平台。'
      : 'A hospitality knowledge platform for hotel investors, owners, and leaders covering investment, pre-opening, operational diagnosis, and performance improvement.',
    inLanguage: isZh ? 'zh-CN' : 'en-US',
    about: problems.map((problem) => problem.title),
    isPartOf: { '@id': 'https://www.marvelbros.com/#website' },
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, '\\u003c') }} />
      <HeroWithStats lang={lang} />

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/home-modern/advisory-conversation.png"
                alt={isZh ? '酒店专业人员结合经营数据分析项目' : 'Hospitality specialists reviewing operating data'}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '为什么选择迈创兄弟C&T' : 'Why MarvelBros C&T'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {isZh ? '30多年酒店经验，真正的价值不是时间，而是判断' : 'The value of 30+ years in hotels is not time. It is judgment.'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {isZh
                  ? '同样是入住率下降，原因可能来自产品、价格、渠道、客群或市场变化。真正的经验，是知道什么时候不能急着给答案。'
                  : 'The same drop in occupancy may come from product, pricing, channels, guest mix, or a changing market. Real experience includes knowing when not to rush to an answer.'}
              </p>
              <p className="mt-5 border-l-4 border-[#d98b28] pl-5 text-xl font-semibold leading-8">
                {isZh ? '没有看过真实数据和现场，我们不会轻易下结论。' : 'Without real data and a view of the operation, we do not jump to conclusions.'}
              </p>
              <ol className="mt-9 border-t border-slate-300 dark:border-slate-700">
                {methods.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] items-center border-b border-slate-300 py-4 dark:border-slate-700">
                    <span className="text-sm font-bold text-[#d98b28]">0{index + 1}</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 grid border-y border-slate-300 dark:border-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {(isZh
              ? [
                  ['超过100个', '酒店项目实践'],
                  ['50多个', '城市项目经验'],
                  ['3000万元以上', '代表性筹开投资优化'],
                  ['25%', '代表性运营成本改善'],
                ]
              : [
                  ['100+', 'hotel projects'],
                  ['50+', 'cities of project experience'],
                  ['RMB 30m+', 'representative pre-opening investment optimization'],
                  ['25%', 'representative operating cost improvement'],
                ]
            ).map(([value, label]) => (
              <div key={label} className="border-b border-slate-300 py-7 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 dark:border-slate-700">
                <p className="text-3xl font-semibold text-[#0b4a6f] dark:text-sky-300">{value}</p>
                <p className="mt-2 pr-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
            {isZh ? '以上为核心专业人员职业项目经验；项目名称与客户信息按行业惯例脱敏。' : 'Figures reflect the career project experience of core specialists. Project and client identities are anonymized in line with industry practice.'}
          </p>
        </div>
      </section>

      <section id="hotel-problems" className="scroll-mt-20 bg-[#f4f7f8] py-20 dark:bg-slate-900 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '先从问题开始' : 'Start with the problem'}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '你的酒店，现在卡在哪里？' : 'Where is your hotel getting stuck?'}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {isZh ? '很多酒店问题，并不是缺少努力，而是没有找到真正原因。先从你正在面对的问题开始。' : 'Many hotel problems persist not for lack of effort, but because the real cause has not been found. Start with the issue in front of you.'}
            </p>
          </div>

          <div className="mt-12 grid border-t border-slate-300 dark:border-slate-700 lg:grid-cols-2 lg:gap-x-12">
            {problems.map(({ icon: Icon, title, copy, href }) => (
              <Link
                key={title}
                href={href}
                className="group grid min-h-36 grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-slate-300 py-6 transition-colors hover:bg-white/70 dark:border-slate-700 dark:hover:bg-slate-950/40 sm:grid-cols-[3.5rem_1fr_auto]"
              >
                <Icon className="h-6 w-6 text-[#d98b28]" />
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0b4a6f]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '持续更新的专业索引' : 'A practical reference, continuously updated'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{isZh ? '酒店经营知识库' : 'Hotel Knowledge Base'}</h2>
              <p className="mt-5 text-xl font-semibold leading-8">{isZh ? '把复杂的酒店问题，讲成可以判断、可以执行的方法。' : 'Turn complex hotel problems into methods leaders can judge and use.'}</p>
              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                {isZh ? '这里不只是行业资讯。我们持续回答三个问题：为什么发生、如何判断、下一步怎么做。' : 'This is more than an industry news feed. We keep answering three questions: why did it happen, how should it be judged, and what comes next?'}
              </p>
              <Link href={`/${lang}/knowledge`} className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#0b4a6f] px-6 py-3 font-semibold text-white hover:bg-[#073a58]">
                <BookOpen className="h-5 w-5" />
                {isZh ? '进入酒店经营知识库' : 'Enter the knowledge base'}
              </Link>
            </div>

            <div className="border-t border-slate-300 dark:border-slate-700">
              {latestArticles.map((article, index) => (
                <Link key={article.slug} href={`/${lang}/knowledge/${article.slug}`} className="group block border-b border-slate-300 py-7 dark:border-slate-700">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span>{article.date}</span>
                    <span aria-hidden="true">/</span>
                    <span>{index === 0 ? (isZh ? '今日热门话题' : "Today's Hot Topic") : (isZh ? '行业洞察' : 'Industry Insight')}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug transition-colors group-hover:text-[#0b4a6f] dark:group-hover:text-sky-300">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.summary}</p>
                  <ArrowRight className="mt-5 h-5 w-5 text-[#d98b28] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2d42] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
              <Image
                src="/images/home-modern/signature-lounge.jpeg"
                alt={isZh ? '酒店筹开投资优化项目场景' : 'Hotel pre-opening investment optimization'}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300">{isZh ? '案例与成果' : 'Cases and outcomes'}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                {isZh ? '真实项目经验，是专业判断的基础' : 'Professional judgment is built on real project experience'}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                {isZh ? '在某国有企业酒店筹开项目中，业主需要控制持续增加的建设、装修和筹开投入。' : 'In a state-owned hotel pre-opening project, the owner needed to control rising construction, fit-out, and opening expenditure.'}
              </p>
              <dl className="mt-8 border-t border-white/25">
                {[
                  [isZh ? '判断过程' : 'Judgment', isZh ? '从定位、建设方案、装修标准和筹开预算逐项复核投入必要性。' : 'Review the necessity of each investment across positioning, construction, fit-out standards, and the opening budget.'],
                  [isZh ? '解决方法' : 'Action', isZh ? '优化建设投资、装修方案和筹开费用，把预算控制落实到具体项目。' : 'Optimize construction investment, fit-out plans, and opening costs at line-item level.'],
                  [isZh ? '最终结果' : 'Outcome', isZh ? '为业主节省投资超过3000万元，结果由业主项目感谢信确认。' : 'More than RMB 30 million saved for the owner, confirmed in the owner’s project letter.'],
                ].map(([term, description]) => (
                  <div key={term} className="grid gap-2 border-b border-white/25 py-5 sm:grid-cols-[7rem_1fr]">
                    <dt className="font-semibold text-amber-300">{term}</dt>
                    <dd className="leading-7 text-slate-200">{description}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/${lang}/cases`} className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-amber-300">
                {isZh ? '查看案例与工作方法' : 'See cases and working methods'}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f4f7f8] py-16 dark:border-slate-800 dark:bg-slate-900 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">{isZh ? '先把问题谈清楚' : 'Clarify the issue first'}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
              {isZh ? '如果你的酒店遇到了问题，可以先和我们交流' : 'If your hotel is facing a problem, start with a conversation'}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
              {isZh ? '不需要准备完整方案，也不需要立即决定合作。告诉我们酒店所在城市、项目阶段、当前问题和已有数据，我们先一起判断下一步应该看什么。' : 'You do not need a finished plan or an immediate commitment. Share the city, project stage, current issue, and available data. We will first decide together what deserves a closer look.'}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={`/${lang}/contact?type=diagnosis`} className="inline-flex min-h-13 items-center justify-center gap-2 bg-[#0b4a6f] px-6 py-3.5 font-semibold text-white hover:bg-[#073a58]">
              <FileText className="h-5 w-5" />
              {isZh ? '和我们聊一个酒店问题' : 'Discuss a hotel challenge'}
            </Link>
            <a href="tel:18941579333" className="inline-flex min-h-13 items-center justify-center gap-2 border border-slate-400 px-6 py-3.5 font-semibold hover:border-[#0b4a6f] hover:text-[#0b4a6f] dark:border-slate-600 dark:hover:border-sky-300 dark:hover:text-sky-300">
              <Phone className="h-5 w-5" />
              18941579333
            </a>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400">{isZh ? '电话与微信同号' : 'Phone and WeChat use the same number'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
