import Link from 'next/link'
import { BookOpen, FileText, BarChart3, Newspaper, ArrowRight, Clock, User, Calendar } from 'lucide-react'

export default function KnowledgePage() {
  const articles = [
    {
      id: 1,
      type: 'article',
      title: '技术范式转移视角下的酒店业创新路径研究',
      slug: '技术范式转移视角下的酒店业创新路径研究',
      summary: 'AI、物联网、大数据如何重塑酒店业？凯文·凯利《5000天后的世界》理念在酒店数字化转型中的应用。',
      firstLine: '作为一名在酒店行业摸爬滚打了十余年的研究者，我时常被问到一个问题：酒店的未来在哪里？',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '10分钟',
      tag: '学术文章',
    },
    {
      id: 2,
      type: 'article',
      title: '老龄化人口对酒店服务需求的弹性影响研究',
      slug: '老龄化人口对酒店服务需求的弹性影响研究',
      summary: '银发经济崛起，酒店如何服务银发客群？康养度假、候鸟旅居、代际旅行三大方向深度分析。',
      firstLine: '中国正在快速变老。根据第七次全国人口普查数据，60岁及以上人口已超过2.64亿。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '学术文章',
    },
    {
      id: 3,
      type: 'article',
      title: '代际消费价值观对住宿选择的影响机制',
      slug: '代际消费价值观对住宿选择的影响机制',
      summary: '60后、80后、00后消费差异深度剖析，满足多元客群需求的实战策略。',
      firstLine: '我做过一个有趣的实验：让60后、80后、00后三个人描述他们理想中的酒店。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '学术文章',
    },
    {
      id: 4,
      type: 'article',
      title: '人工智能对酒店运营决策的影响机制研究',
      slug: '人工智能对酒店运营决策的影响机制研究',
      summary: 'AI如何帮助酒店做更聪明的决策？智能收益管理、客户关系管理、运营优化三大应用场景详解。',
      firstLine: 'AI来了，酒店人该何去何从？会取代的，是那些重复性、机械性的工作。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '学术文章',
    },
    {
      id: 5,
      type: 'article',
      title: '物联网采纳对民宿绩效的影响',
      slug: '物联网采纳对民宿绩效的影响',
      summary: '智能门锁、能耗管理、安全监控如何提升民宿运营效率？成本效益分析与实操路径。',
      firstLine: '凌晨三点，民宿老板老李的手机突然响了。客人门锁出了问题，老李懊恼——要是当初装个智能门锁就好了。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '学术文章',
    },
    {
      id: 6,
      type: 'article',
      title: '组织变革理论视角下的酒店数字化转型',
      slug: '组织变革理论视角下的酒店数字化转型',
      summary: '数字化转型为何总是雷声大雨点小？一把手工程、试点策略、赋能文化三大破局关键。',
      firstLine: '每逢行业论坛，必谈数字化转型。但真正落地的时候，系统买了一堆，用起来的没几个。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '14分钟',
      tag: '学术文章',
    },
    {
      id: 7,
      type: 'article',
      title: '区块链技术对资产价值评估模型的优化研究',
      slug: '区块链技术对资产价值评估模型的优化研究',
      summary: '区块链如何解决酒店资产估值难题？数据可信、动态估值、资产证券化三大应用方向。',
      firstLine: '想象一下，你是一家精品酒店的投资人，想要准确评估手中这栋楼的真实价值。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '学术文章',
    },
    {
      id: 8,
      type: 'article',
      title: '虚拟体验经济视角下的目的地营销创新',
      slug: '虚拟体验经济视角下的目的地营销创新',
      summary: 'VR、AR、元宇宙如何改变旅游营销？从打卡到沉浸，目的地营销的下一站。',
      firstLine: '你有多久没有真正「到达」一个地方了？不是那种订好机票酒店、打卡签到就算完事的那种「到达」。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '学术文章',
    },
    {
      id: 9,
      type: 'article',
      title: '消费者体验层次模型的实证检验',
      slug: '消费者体验层次模型的实证检验',
      summary: '派恩与吉尔摩四层次模型在酒店场景中的验证，娱乐、教育、逃避、审美体验设计框架。',
      firstLine: '「您的酒店入住体验如何？」面对这个问题，大多数人的回答可能是「挺好的」或者「一般般」。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '14分钟',
      tag: '学术文章',
    },
    {
      id: 10,
      type: 'article',
      title: '可持续发展理论框架下的中国旅游实践',
      slug: '可持续发展理论框架下的中国旅游实践',
      summary: 'ESG时代酒店竞争力，能源管理、一次性用品减量、本地采购、绿色溢价四大实践路径。',
      firstLine: '当「碳达峰」「碳中和」成为全民议题，中国旅游业也站在了绿色转型的十字路口。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '11分钟',
      tag: '学术文章',
    },
    {
      id: 11,
      type: 'article',
      title: '服务接触中情绪劳动对溢价支付意愿的影响',
      slug: '服务接触中情绪劳动对溢价支付意愿的影响',
      summary: '情绪价值如何转化为商业价值？从满意到心动，创造惊喜时刻的四大原则。',
      firstLine: '「您的入住体验如何？」「挺好的，满意。」这是酒店业最常听到的评价，也是最让业者沮丧的评价。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '12分钟',
      tag: '学术文章',
    },
    {
      id: 12,
      type: 'article',
      title: '资源基础观视角下的酒店竞争优势研究',
      slug: '资源基础观视角下的酒店竞争优势研究',
      summary: '酒店四大核心资源：品牌、人才、技术、客户关系。从资源到动态能力，构建竞争护城河。',
      firstLine: '你有没有过这样的困惑：明明花了重金装修，客人却不买账？问题可能出在：你一直在模仿别人的「面子」，却没有建立自己的「里子」。',
      author: 'MarvelBros - MBCT',
      date: '2026-04-07',
      readTime: '13分钟',
      tag: '学术文章',
    },
  ]

  const categories = [
    {
      id: 'academic',
      icon: FileText,
      title: '学术文章',
      desc: '深度理论研究，发表在行业核心期刊',
      count: 12,
      color: '#f59e0b',
    },
    {
      id: 'report',
      icon: BarChart3,
      title: '行业报告',
      desc: '数据驱动的趋势分析与预测',
      count: 8,
      color: '#3b82f6',
    },
    {
      id: 'case',
      icon: BookOpen,
      title: '案例研究',
      desc: '真实项目复盘，数据脱敏处理',
      count: 15,
      color: '#22c55e',
    },
    {
      id: 'blog',
      icon: Newspaper,
      title: '博客文章',
      desc: '行业快讯、方法论、最佳实践',
      count: 36,
      color: '#8b5cf6',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <BookOpen className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">思想领导力</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            行业前沿
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            MBCT研究院出品，用数据说话，为酒店行业提供前瞻洞察与实战指南
          </p>
        </div>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[#f59e0b]/50 transition-all group text-center block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cat.title}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold" style={{ color: cat.color }}>
                    {cat.count}
                  </span>
                  <span className="text-gray-500 text-sm">篇</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        <section id="academic" className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-gray-800">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] text-sm font-medium mb-4">
                  最新发布
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-400 mb-6 text-lg">
                  {articles[0].summary}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {articles[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <Link
                  href={`/zh/knowledge/${encodeURIComponent(articles[0].slug)}`}
                  className="inline-flex items-center px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all"
                >
                  阅读全文
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="lg:w-1/3 flex items-center justify-center">
                <div className="w-full h-64 rounded-xl bg-[#111827] flex items-center justify-center border border-gray-800">
                  <FileText className="w-24 h-24 text-[#f59e0b]/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article List - Vertical with first line preview */}
        <section id="academic-list" className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#f59e0b]" />
            学术文章
          </h2>
          <div className="space-y-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/zh/knowledge/${encodeURIComponent(article.slug)}`}
                className="block p-5 rounded-xl bg-[#111827] border border-gray-800 hover:border-[#f59e0b]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium flex-shrink-0 mt-0.5">
                    {article.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#f59e0b] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {article.firstLine}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 text-xs text-gray-500">
                    <span>{article.author.split(' - ')[0]}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              订阅行业洞察
            </h2>
            <p className="text-gray-400 mb-6">
              每周获取最新研究报告与行业分析，领先一步洞察趋势
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="px-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
              />
              <button className="px-6 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all whitespace-nowrap">
                立即订阅
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
