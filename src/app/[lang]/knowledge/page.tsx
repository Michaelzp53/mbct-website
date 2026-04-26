import Link from 'next/link'
import { BookOpen, FileText, BarChart3, Newspaper, ArrowRight, Clock, User, Calendar } from 'lucide-react'

export default async function KnowledgePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const ui = {
    pageTitle: isZh ? '行业前沿' : 'Industry Insights',
    pageSubtitle: isZh
      ? '洞察行业趋势，分享实战经验，助力酒店数字化转型'
      : 'Insights into industry trends, sharing practical experience, empowering hotel digital transformation',
    academicTitle: isZh ? '学术文章' : 'Academic Research',
    academicDesc: isZh ? '学术研究论文，理论与实践结合' : 'Peer-reviewed research combining theory and practice',
    reportTitle: isZh ? '行业报告' : 'Industry Reports',
    reportDesc: isZh ? '行业深度报告，实战案例分析' : 'In-depth industry analysis with real cases',
    caseTitle: isZh ? '案例研究' : 'Case Studies',
    caseDesc: isZh ? '实战项目复盘，数据脱敏处理' : 'Real project retrospectives with anonymized data',
    blogTitle: isZh ? '博客文章' : 'Blog',
    blogDesc: isZh ? '最新趋势、方法论、实战经验' : 'Latest trends, methodologies, practical experience',
    searchPlaceholder: isZh ? '搜索文章...' : 'Search articles...',
    readMore: isZh ? '阅读全文' : 'Read More',
    minRead: isZh ? '分钟' : 'min read',
  }

  const articles = [
    {
      id: 0,
      type: 'article',
      title: '30年老酒店的逆袭之路：从濒临倒闭到一房难求的MBCT改造实录',
      slug: 'hotel-renovation',
      summary: '一家三十年历史酒店如何用1800万改造实现271% RevPAR提升？看MBCT如何用"微手术"激活沉睡资产。',
      firstLine: '2022年春天，一家位于历史文化街区、始建于1993年的三十年历史酒店，正面临着严峻的生存危机。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-19',
      readTime: '15分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 1,
      type: 'article',
      title: '酒店人房比：增效还是降本？',
      slug: 'hotel-staff-ratio',
      summary: '人房比越低越好吗？数据揭示行业真相：服务和情绪价值是通过人传递的，但成本控制又不得不做。',
      firstLine: '人房比，这个被无数酒店业主、投资人、运营者挂在嘴边的数字，真的越低越好吗？',
      author: 'MarvelBros - MBCT',
      date: '2026-04-19',
      readTime: '12分钟',
      tag: '学术文章',
    },
    {
      id: 2,
      type: 'article',
      title: '文化灵魂：为什么文旅产业正在经历一场静默革命？',
      slug: 'culture-soul',
      summary: '当"网红打卡地"成为标配，中国文旅行业正陷入前所未有的同质化困境。MBCT提出文化积淀理论。',
      firstLine: '你有没有发现，现在的文旅项目越来越像了？',
      author: 'MarvelBros - MBCT',
      date: '2026-04-19',
      readTime: '10分钟',
      tag: '学术文章',
    },
    {
      id: 3,
      type: 'article',
      title: '体验经济视域下酒店空间叙事的价值重构',
      slug: 'spatial-narrative',
      summary: '在体验经济时代，酒店业正经历着从功能导向向情感导向的深刻转型。本文以空间叙事理论为分析框架，探讨酒店空间如何从单纯的功能容器转变为承载情感记忆与品牌价值的叙事载体。',
      firstLine: '在体验经济时代，酒店业正经历着从功能导向向情感导向的深刻转型。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-16',
      readTime: '18分钟',
      tag: '学术文章',
    },
  ]

  const reports = [
    {
      id: 101,
      type: 'report',
      title: '2026年中国酒店业数字化转型深水区攻坚报告',
      slug: 'digital-transformation-2026',
      summary: '中国酒店业的数字化转型已进入深水区。本报告识别数字化转型的阶段性特征与核心瓶颈，提出数据中台建设的实践路径、AI赋能运营决策的场景化策略。',
      firstLine: '中国酒店业的数字化转型可以划分为三个明显阶段，每个阶段都有其特定的任务与挑战。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-16',
      readTime: '22分钟',
      tag: '行业报告',
      featured: true,
    },
    {
      id: 102,
      type: 'report',
      title: '中国高端酒店正在"变慢"：一场针对效率焦虑的反叛',
      slug: 'human-touch-service-revolution',
      summary: '凌晨两点，你落地一座陌生的城市。一切都很"高效"。但你睡不着。你想起上次出差住的那家酒店——前台递来的不是冰冷的房卡，而是一杯温热的茶和一张手写的纸条："欢迎回家。"这就是今天中国高端酒店业正在经历的"变慢"革命。',
      firstLine: '凌晨两点，你落地一座陌生的城市。机场到酒店的路上，你已经在手机上完成了无接触入住。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-20',
      readTime: '15分钟',
      tag: '行业报告',
    },
  ]

  const cases = [
    {
      id: 201,
      type: 'case',
      title: '从亏损到溢价：一家区域酒店的体验重塑之路',
      slug: 'hotel-turnaround-case',
      summary: '2024年初，我接到了一位老朋友的电话。他在西南地区经营着一家开业十二年的商务酒店，曾经是当地的地标，但近年来陷入了严重的经营困境。',
      firstLine: '2024年初，我接到了一位老朋友的电话。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-16',
      readTime: '20分钟',
      tag: '案例研究',
      featured: true,
    },
    {
      id: 202,
      type: 'case',
      title: '一家酒店如何用"人感管家"让你后悔只订一晚',
      slug: 'human-touch-butler-case',
      summary: '好的服务，是"看不见的服务"。从进门那一刻开始，这家酒店如何用东方待客之道，创造让人"后悔只订一晚"的体验？',
      firstLine: '三年后，你再次踏入那家酒店。还没等你走到门口，门童已经迎了上来："周先生，好久不见。"',
      author: 'MarvelBros - MBCT',
      date: '2026-04-20',
      readTime: '14分钟',
      tag: '案例研究',
      featured: true,
    },
  ]

  const blogs = [
    {
      id: 301,
      type: 'blog',
      title: '酒店业"内卷"困局：差异化竞争的三个破局点',
      slug: 'differentiation-strategy',
      summary: '最近和几位酒店老板聊天，发现大家都有一个共同的焦虑：生意越来越难做了。降价吧，利润薄得像纸；不降价吧，客人被隔壁抢走。',
      firstLine: '最近和几位酒店老板聊天，发现大家都有一个共同的焦虑。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-16',
      readTime: '3分钟',
      tag: '博客',
    },
  ]

  const featuredArticles = articles.filter(a => a.featured)
  const allItems = [
    ...articles.map(a => ({ ...a, section: 'article' })),
    ...reports.map(r => ({ ...r, section: 'report' })),
    ...cases.map(c => ({ ...c, section: 'case' })),
    ...blogs.map(b => ({ ...b, section: 'blog' })),
  ]

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/10 via-transparent to-[#3b82f6]/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            {isZh ? '思想领导力' : 'Thought Leadership'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {ui.pageTitle}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {ui.pageSubtitle}
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span>{articles.length} {ui.academicTitle}</span>
            <span>·</span>
            <span>{reports.length} {ui.reportTitle}</span>
            <span>·</span>
            <span>{cases.length} {ui.caseTitle}</span>
            <span>·</span>
            <span>{blogs.length} {ui.blogTitle}</span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticles.length > 0 && (
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#f59e0b] rounded-full" />
              {isZh ? '热门案例' : 'Featured'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.slice(0, 2).map((article) => (
                <Link
                  key={article.slug}
                  href={`/${lang}/knowledge/${article.slug}`}
                  className="group block bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#f59e0b]/50 transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] text-xs font-medium">
                        {article.tag}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                      <span className="text-[#f59e0b] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {ui.readMore} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Grid Section */}
      {articles.length > 0 && (
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#f59e0b]" />
                  {ui.academicTitle}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{ui.academicDesc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${lang}/knowledge/${article.slug}`}
                  className="group block bg-[#111827] rounded-xl border border-gray-800 p-5 hover:border-[#f59e0b]/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-600">{article.readTime}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-[#f59e0b] transition-colors text-sm mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{article.summary}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-600">{article.author}</span>
                    <span className="text-xs text-gray-600">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reports Grid Section */}
      {reports.length > 0 && (
        <section className="px-4 mb-12" id="industry-reports">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  {ui.reportTitle}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{ui.reportDesc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {reports.map((report) => (
                <Link
                  key={report.slug}
                  href={`/${lang}/knowledge/${report.slug}`}
                  className="group block bg-[#111827] rounded-xl border border-gray-800 p-5 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                      {report.tag}
                    </span>
                    <span className="text-xs text-gray-600">{report.readTime}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors mb-2">
                    {report.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{report.summary}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-600">{report.author}</span>
                    <span className="text-xs text-gray-600">{report.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cases Grid Section */}
      {cases.length > 0 && (
        <section className="px-4 mb-12" id="cases">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-400" />
                  {ui.caseTitle}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{ui.caseDesc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.slug}
                  href={`/${lang}/knowledge/${caseItem.slug}`}
                  className="group block bg-[#111827] rounded-xl border border-gray-800 p-5 hover:border-green-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                      {caseItem.tag}
                    </span>
                    <span className="text-xs text-gray-600">{caseItem.readTime}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-green-400 transition-colors mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{caseItem.summary}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-600">{caseItem.author}</span>
                    <span className="text-xs text-gray-600">{caseItem.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      {blogs.length > 0 && (
        <section className="px-4 mb-16" id="blogs">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-purple-400" />
                  {ui.blogTitle}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{ui.blogDesc}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/${lang}/knowledge/${blog.slug}`}
                  className="group block bg-[#111827] rounded-xl border border-gray-800 p-4 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                      {blog.tag}
                    </span>
                    <span className="text-xs text-gray-600">{blog.readTime}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors text-sm line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">{blog.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
