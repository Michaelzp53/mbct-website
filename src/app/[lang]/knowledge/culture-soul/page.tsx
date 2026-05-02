import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default function ArticlePage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const isZh = lang === 'zh'

  const article = {
    title: '文化灵魂：为什么文旅产业正在经历一场静默革命？',
    summary: '当"网红打卡地"成为标配，中国文旅行业正陷入前所未有的同质化困境。MBCT提出文化积淀理论。',
    author: 'MarvelBros - MBCT',
    date: '2026-04-19',
    readTime: '10分钟',
    tag: '学术文章',
    content: `
## 引言：你有没有发现，现在的文旅项目越来越像了？

玻璃栈道、网红秋千、天空之镜、粉色沙滩……

这些曾经的新鲜元素，如今成了每个景区的标配。游客从一个景区到另一个景区，看到的却是同样的"打卡点"、同样的"出片角度"、同样的"滤镜效果"。

中国文旅行业，正在陷入前所未有的同质化困境。

## 第一章：文旅产业的同质化困境

**困境一：项目复制化**

- **案例A**：某古城投资10亿打造"沉浸式体验街区"，开业半年后客流下降60%
- **案例B**：某景区引入"网红灯光秀"，第一个月火爆，第二个月无人问津

**困境二：体验浅表化**

"打卡式旅游"成为主流：
- 排队30分钟，拍照3分钟
- 滤镜比实景好看
- 来过，但没留下

**困境三：文化空心化**

没有文化积淀的文旅项目，就像没有灵魂的躯壳：
- 有建筑，没故事
- 有活动，没内涵
- 有客流，没留存

## 第二章：文化积淀：文旅发展的第一性原理

MBCT提出"文化积淀"理论：

**文化积淀 = 时间深度 × 在地浓度 × 表达精度**

**时间深度**：不是仿古建筑，而是真实的岁月痕迹
- ✗ 仿宋风情街（5年建成）
- ✓ 百年老街（真实历史积淀）

**在地浓度**：不是外来元素堆砌，而是本土文化提纯
- ✗ 江南水乡建蒙古包
- ✓ 江南园林中的本土植物

**表达精度**：不是粗放式展示，而是精致化演绎
- ✗ 贴满墙的历史照片
- ✓ 一个会讲故事的管家

## 第三章：文化挖掘的四步法

**第一步：在地文化扫描（2周）**

文化资源的系统盘点：
- **物质文化**：建筑、器物、景观
- **非物质文化**：技艺、习俗、节庆
- **精神文化**：价值观、审美、哲学

**第二步：文化价值提炼（1周）**

找到"唯一性"和"第一性"：
- 这个地方有什么是别的地儿没有的？
- 这个故事有什么是让人记住忘不了的？

**第三步：体验转化设计（3周）**

让文化可感知、可参与、可记忆：
- **可感知**：视觉、听觉、嗅觉、触觉、味觉
- **可参与**：动手做、亲口尝、亲自演
- **可记忆**：带走故事、带走手艺、带走情感

**第四步：持续运营激活（长期）**

文化不是一次性工程，而是持续生长：
- 季节性内容更新
- 社群运营与互动
- 本地居民的参与

## 第四章：文化积淀的商业价值

**案例：某江南古镇的文化重生**

**改造前**：
- 门票收入为主，人均消费80元
- 游客停留时间2小时
- 复购率15%

**改造后（MBCT文化挖掘方案）**：
- 体验收入占比70%，人均消费380元
- 游客停留时间延长至8小时（含住宿）
- 复购率提升至45%

**关键改变：**
- 从"看古镇"到"住古镇、学古镇、成为古镇故事的一部分"
- 引入非遗手作体验、传统美食工坊、本地居民故事分享

## 结语：文旅产业的未来是文化

当"网红打卡地"的热潮退去，什么能让一个文旅项目持续生长？

答案是：文化。

不是表面的文化符号，而是深入骨髓的文化积淀；不是复制的文化元素，而是独特的在地表达；不是一时的文化营销，而是持久的文化运营。

文旅产业的静默革命，正在从"流量驱动"转向"文化驱动"。

> "最好的文旅项目，不是让游客来看什么，而是让游客来感受什么、成为什么、带走什么。" —— MBCT文旅顾问
    `,
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-muted-foreground hover:text-[#22c55e] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isZh ? '返回行业前沿' : 'Back to Industry Insights'}
        </Link>

        <article className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">{article.tag}</span>
              <span className="text-gray-500 text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.summary}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{article.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{article.readTime}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-[#22c55e] transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-[#22c55e] transition-colors"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#22c55e]">$1</strong>')
                  .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/^/, '<p class="text-gray-300 mb-4 leading-relaxed">')
                  .replace(/$/, '</p>')
                  .replace(/&gt; (.*)/g, '<blockquote class="border-l-4 border-[#22c55e] pl-4 my-6 italic text-muted-foreground">$1</blockquote>')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
