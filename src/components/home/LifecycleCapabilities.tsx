import {
  ChartNoAxesCombined,
  ClipboardCheck,
  Compass,
  Hotel,
  RefreshCw,
  Search,
} from 'lucide-react'

interface LifecycleCapabilitiesProps {
  lang: string
}

export default function LifecycleCapabilities({ lang }: LifecycleCapabilitiesProps) {
  const isZh = lang === 'zh'

  const capabilities = [
    {
      icon: ChartNoAxesCombined,
      title: isZh ? '投资研究与可行性判断' : 'Investment Research & Feasibility',
      description: isZh
        ? '基于市场环境、区域竞争、物业条件和投资模型，判断项目价值、风险与发展空间。'
        : 'Assess project value, risk, and development potential through market conditions, local competition, property fundamentals, and the investment model.',
    },
    {
      icon: Compass,
      title: isZh ? '品牌定位与产品规划' : 'Brand Positioning & Product Planning',
      description: isZh
        ? '明确酒店目标市场、产品定位和体验体系，让投资逻辑转化为市场竞争力。'
        : 'Define the target market, product positioning, and guest experience so the investment logic becomes market competitiveness.',
    },
    {
      icon: ClipboardCheck,
      title: isZh ? '筹建管理与开业准备' : 'Development & Pre-opening Management',
      description: isZh
        ? '围绕建设投入、工程管理、团队搭建和运营准备，降低筹建过程中的不确定性。'
        : 'Manage construction investment, project delivery, team formation, and operating readiness to reduce uncertainty during development.',
    },
    {
      icon: Hotel,
      title: isZh ? '经营诊断与效益提升' : 'Operational Diagnosis & Performance Improvement',
      description: isZh
        ? '通过经营数据分析和现场诊断，识别影响收入、利润和效率的关键因素。'
        : 'Use operating data and field diagnosis to identify the factors that materially affect revenue, profit, and efficiency.',
    },
    {
      icon: RefreshCw,
      title: isZh ? '产品升级与价值重塑' : 'Product Renewal & Value Enhancement',
      description: isZh
        ? '针对市场变化和经营阶段，通过产品优化和服务提升，重新释放酒店竞争价值。'
        : 'Respond to market change and the hotel\'s operating stage through product and service improvement that renews competitive value.',
    },
    {
      icon: Search,
      title: isZh ? '市场增长与AI智能获客' : 'Market Growth & AI-enabled Acquisition',
      description: isZh
        ? '结合市场渠道、新媒体和AI搜索环境，帮助酒店建立新的客户连接和增长方式。'
        : 'Combine market channels, new media, and AI search to build new customer connections and routes to growth.',
    },
  ]

  return (
    <section
      id="lifecycle-capabilities"
      className="scroll-mt-20 border-b border-slate-200 bg-[#f4f7f8] py-20 dark:border-slate-800 dark:bg-slate-900 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-[#0b4a6f] dark:text-sky-300">
            {isZh ? '六项全生命周期服务能力' : 'Six Lifecycle Consulting Capabilities'}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {isZh ? '覆盖酒店全生命周期的专业咨询能力' : 'Professional Consulting Across the Hotel Lifecycle'}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {isZh
              ? '从项目投资判断到持续经营优化，迈创兄弟C&T围绕酒店不同发展阶段，提供系统化咨询服务，帮助投资人和业主提升项目价值与经营效益。'
              : 'From investment judgment to sustained operational improvement, MarvelBros C&T provides systematic advisory across each stage of hotel development to help investors and owners improve project value and operating performance.'}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group min-h-64 border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0b4a6f]/35 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:hover:border-sky-300/40 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center bg-[#0b4a6f] text-white dark:bg-sky-900">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold text-[#d98b28]">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold leading-snug text-[#0b4a6f] dark:text-sky-200">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
