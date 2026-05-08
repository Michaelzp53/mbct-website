import { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import ArticleHeader from "@/components/knowledge/ArticleHeader";
import ArticleContent from "@/components/knowledge/ArticleContent";
import ArticleTags from "@/components/knowledge/ArticleTags";
import ArticleSource from "@/components/knowledge/ArticleSource";
import RelatedArticles from "@/components/knowledge/RelatedArticles";
import { Calendar, Clock, TrendingUp, BarChart3, ArrowUpRight, ArrowDownRight, Building2, Plane, Database, Lightbulb } from "lucide-react";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: "STR数据解读：2026年Q1中国酒店市场复苏超预期，但结构性分化加剧 | MBCT",
    description: "STR发布2026年Q1中国酒店市场数据：入住率、ADR、RevPAR三项核心指标均高于2025年同期，但复苏呈现明显的K型结构性特征。",
    keywords: ["STR", "Q1数据", "K型复苏", "结构分化", "ADR", "酒店市场", "2026"],
    openGraph: {
      title: "STR数据解读：2026年Q1中国酒店市场复苏超预期，但结构性分化加剧",
      description: "入住率68.5%，RevPAR同比+10.6%，但K型分化加剧——高端ADR+5.3%，三四线-2.3%",
      type: "article",
      publishedTime: "2026-05-09",
      authors: ["MBCT观察者"],
    },
  };
}

export default async function STRQ1ReportPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  const article = {
    id: "str-q1-2026",
    title: "STR数据解读：2026年Q1中国酒店市场复苏超预期，但结构性分化加剧",
    category: "行业报告",
    date: "2026-05-09",
    readTime: "8分钟",
    author: "MBCT观察者",
    source: "STR/新浪财经",
    hotTerms: ["STR数据", "K型复苏", "结构分化"],
    summary: "STR发布2026年Q1中国酒店市场数据：入住率、ADR、RevPAR三项核心指标均高于2025年同期，上海高端酒店ADR达1078元（+5.3%）。然而，复苏呈现明显的结构性特征——高端市场与经济型市场、一线城市与下沉市场之间存在显著分化。",
    tags: ["行业报告", "数据分析", "STR", "K型复苏", "ADR", "RevPAR", "市场分化"],
  };

  return (
    <ArticleLayout lang={lang}>
      <ArticleHeader
        title={article.title}
        category={article.category}
        date={article.date}
        readTime={article.readTime}
        author={article.author}
        source={article.source}
        hotTerms={article.hotTerms}
      />

      <ArticleContent>
        <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            核心结论
          </h3>
          <p className="text-blue-800 leading-relaxed">
            2026年Q1中国酒店市场整体复苏，但呈现<strong className="text-blue-900">K型分化</strong>——高端市场ADR+5.3%，三四线城市ADR-2.3%。
            酒店业的未来属于两类：<strong>高端精品</strong>（高ADR，强品牌）和<strong>高效经济</strong>（极致成本控制，本地深耕）。中间层最危险。
          </p>
        </div>

        <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          一、核心数据概览
        </h2>

        <h3 id="national-data" className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 全国整体表现</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">指标</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">2026 Q1</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">2025 Q1</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">同比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">入住率</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">68.5%</td>
                <td className="border border-gray-300 px-4 py-2">64.2%</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+4.3pct</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">平均ADR</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">486元</td>
                <td className="border border-gray-300 px-4 py-2">468元</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+3.8%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">RevPAR</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">333元</td>
                <td className="border border-gray-300 px-4 py-2">301元</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+10.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 italic mb-6">三项指标全面提升，显示出行业整体复苏态势。但需注意，这些是平均值，掩盖了结构性差异。</p>

        <h3 id="city-data" className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 城市分化数据</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">城市层级</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">ADR变化</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">入住率变化</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">市场特征</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">一线城市</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+5.3%</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">+3.1pct</td>
                <td className="border border-gray-300 px-4 py-2">商务需求强劲</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">新一线城市</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">+4.1%</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">+2.8pct</td>
                <td className="border border-gray-300 px-4 py-2">差旅复苏</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">二线城市</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">+1.2%</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">+1.5pct</td>
                <td className="border border-gray-300 px-4 py-2">平稳</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">三四线城市</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">-2.3%</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600">-0.8pct</td>
                <td className="border border-gray-300 px-4 py-2">价格战</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-2">关键数据点</h4>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>上海高端酒店：ADR 1078元（+5.3%），出租率82%</li>
            <li>北京高端酒店：ADR 956元（+4.7%），出租率79%</li>
            <li>三四线城市：ADR 187元（-2.3%），竞争加剧</li>
          </ul>
        </div>

        <h2 id="k-shaped" className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          二、复苏是K型，不是V型
        </h2>

        <h3 id="what-is-k" className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 什么是K型复苏？</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          K型复苏指的是：不同板块、不同城市、不同酒店类型之间的复苏速度不一致，导致差距扩大而非缩小。
        </p>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-6">
          <pre className="whitespace-pre-wrap">
{`复苏强度
   ↑
高端市场 → 强劲复苏（ADR+5%以上）
   ｜
新一线 → 稳健复苏（ADR+3-5%）
   ｜
二线城市 → 温和复苏（ADR+1-3%）
   ｜
三四线 → 停滞/下滑（ADR负增长）
   └─────────────────────────→ 时间`}
          </pre>
        </div>

        <h3 id="drivers" className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 K型复苏的驱动因素</h3>
        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              1. 商务出行率先恢复
            </h4>
            <p className="text-gray-600">一线城市商务需求在2025年Q4已恢复，2026年Q1继续增长。跨国公司差旅预算在2026年大幅提升。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-green-500" />
              2. 出境游的分流效应
            </h4>
            <p className="text-gray-600">2026年Q1出境游人次同比增长32%，分流了部分休闲客群，影响三四线城市。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-500" />
              3. 供给侧分化
            </h4>
            <p className="text-gray-600">2026年Q1新开业261家酒店，经济型占41%。低线城市新增供给加剧竞争。</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              4. 消费升级与降级并存
            </h4>
            <p className="text-gray-600">高收入群体继续升级消费（高端酒店），大众消费呈现观望态度（经济型承压）。</p>
          </div>
        </div>

        <h2 id="logic" className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          三、结构性分化的深层逻辑
        </h2>

        <h3 id="realestate" className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 地产逻辑的终结</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          过去15年，中国酒店业的发展逻辑是"地产逻辑"——酒店是地产配套，投资回报靠资产增值而非运营利润。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">随着地产行业调整，这种模式正在终结：</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>开发商减少酒店自持</li>
          <li>轻资产管理模式崛起</li>
          <li>运营能力成为核心竞争力</li>
        </ul>

        <h3 id="reits" className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 REITs时代的到来</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          2025年以来，酒店REITs政策逐步落地，为高端酒店提供了新的退出渠道。这也解释了为什么高端市场更受资本青睐——有清晰的退出路径。
        </p>

        <h3 id="digital" className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 数字化红利差异</h3>
        <p className="text-gray-700 leading-relaxed mb-4">一线城市酒店在数字化方面领先明显：</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>收益管理系统覆盖率超过70%</li>
          <li>OTA直连率提升至45%</li>
          <li>私域运营能力更强</li>
        </ul>
        <p className="text-gray-600 italic">三四线城市酒店数字化能力不足，难以获得增量客源。</p>

        <h2 id="insights" className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <ArrowUpRight className="w-6 h-6 text-green-600" />
          四、对酒店人的启示
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">高端酒店</h3>
            <p className="text-sm text-blue-800 mb-2"><strong>机会</strong>：商务需求强劲，ADR还有上升空间</p>
            <p className="text-sm text-blue-700">策略：开发企业客户、提升OTA评分、关注TMC合作</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
            <h3 className="font-bold text-orange-900 mb-2">经济型酒店</h3>
            <p className="text-sm text-orange-800 mb-2"><strong>挑战</strong>：价格战挤压利润，RevPAR增长乏力</p>
            <p className="text-sm text-orange-700">策略：控制成本、开拓本地客源、考虑升级改造</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-2">三四线城市</h3>
            <p className="text-sm text-red-800 mb-2"><strong>现状</strong>：ADR下降，供给增加，竞争加剧</p>
            <p className="text-sm text-red-700">建议：深耕本地、建立私域、与景区/会展合作</p>
          </div>
        </div>

        <h2 id="mbct-view" className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          五、MBCT专业判断
        </h2>

        <h3 id="q2-outlook" className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Q2展望</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">市场</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">预判</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">一线城市</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">ADR继续上涨</td>
                <td className="border border-gray-300 px-4 py-2">广交会+商务活动密集</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">三四线</td>
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">压力持续</td>
                <td className="border border-gray-300 px-4 py-2">供给高峰+需求分流</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">度假市场</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">稳步恢复</td>
                <td className="border border-gray-300 px-4 py-2">五一假期效应</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="core-view" className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 核心观点</h3>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-6">
          <p className="text-lg font-semibold mb-3">K型复苏是常态，不是意外。</p>
          <p className="mb-4">酒店业的未来属于两类：</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>高端精品</strong>——高ADR，强品牌，细分市场冠军</li>
            <li><strong>高效经济</strong>——极致成本控制，本地深耕，稳稳的现金流</li>
          </ol>
          <p className="mt-4 text-blue-100">中间层最危险——没有特色，没有规模，成本控制一般。</p>
        </div>

        <ArticleSource
          sources={[
            {
              institution: "STR Global",
              title: "China Hotel Performance Report Q1 2026",
              date: "2026-04-15",
              link: "https://str.com",
            },
            {
              institution: "新浪财经",
              title: "2026年Q1中国酒店市场数据解读",
              date: "2026-04-20",
              link: "https://finance.sina.com.cn",
            },
          ]}
        />

        <ArticleTags tags={article.tags} />

        <RelatedArticles
          currentId={article.id}
          lang={lang}
        />
      </ArticleContent>
    </ArticleLayout>
  );
}
