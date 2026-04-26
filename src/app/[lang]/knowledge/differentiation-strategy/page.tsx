import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: '酒店业"内卷"困局：差异化竞争的三个破局点',
    summary: '最近和几位酒店老板聊天，发现大家都有一个共同的焦虑：生意越来越难做了。降价吧，利润薄得像纸；不降价吧，客人被隔壁抢走。',
    author: '迈创兄弟',
    date: '2026-04-16',
    readTime: '3分钟',
    tag: '博客',
    content: `
最近和几位酒店老板聊天，发现大家都有一个共同的焦虑：生意越来越难做了。

降价吧，利润薄得像纸；不降价吧，客人被隔壁抢走。装修翻新吧，几百万砸进去不见水花；不翻新吧，客人嫌你老旧。上OTA吧，佣金高得心疼；不上吧，没流量没订单。

这就是酒店业的"内卷"困局——大家都在拼命努力，却陷入同质化的恶性竞争，最后谁都没讨着好。

**破局点一：细分客群的深度运营**

别再试图取悦所有人了。商务客和度假客的需求完全不同，95后和70后的偏好天差地别。找准你的核心客群，把他们的需求吃透、服务做透，比泛泛地服务所有人要有效得多。

就像我合作过的一家酒店，放弃了大众市场，专注服务"高频商务出差人群"，从快速入住到移动办公，从健康早餐到深度睡眠，每个细节都为这群人量身定制。结果？入住率稳定在85%，房价比周边高30%，客人忠诚度极高。

**破局点二：非房收入的生态构建**

房间收入有天花板，但酒店的空间价值远不止于此。大堂可以变成商务社交场所，餐厅可以对外开放，会议室可以分时租赁，甚至洗衣房、健身房都可以成为收入来源。

关键是转变思维——从"卖房间"转向"卖空间"，从"住宿服务商"转向"生活方式平台"。当你的酒店成为当地商务社群的聚集地，收入结构自然就多元化了。

**破局点三：情感价值的溢价能力**

现在的消费者不缺选择，缺的是"被理解"的感觉。记住客人的名字和偏好，在他生日时送上一份小惊喜，在他深夜入住时准备一杯热茶——这些细节成本不高，却能创造巨大的情感价值。

情感价值是最难被模仿的竞争力。别人可以复制你的装修、你的价格，但复制不了你和客人之间的情感连接。

---

说到这，不得不提一下我们MBCT在做的事。作为酒店业AI赋能的践行者，我们帮助酒店通过数据洞察精准识别客群需求，通过智能系统提升运营效率，通过数字化工具创造个性化体验。

如果你也在思考如何突破内卷、实现差异化，欢迎来聊聊。毕竟，在这个存量竞争的时代，找对方向比盲目努力更重要。

**从价格战到价值战，你准备好了吗？**
    `,
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-gray-400 hover:text-[#8b5cf6] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isZh ? '返回前沿导航' : 'Back to Industry Navigation'}
        </Link>

        <article className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium">{article.tag}</span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{article.summary}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#8b5cf6] transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#8b5cf6] transition-colors"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#8b5cf6]">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/^/, '<p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/$/, '</p>')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
