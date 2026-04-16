import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: '体验经济视域下酒店空间叙事的价值重构',
    summary: '在体验经济时代，酒店业正经历着从功能导向向情感导向的深刻转型。本文以空间叙事理论为分析框架，探讨酒店空间如何从单纯的功能容器转变为承载情感记忆与品牌价值的叙事载体。',
    author: 'MarvelBros - MBCT',
    date: '2026-04-16',
    readTime: '18分钟',
    tag: '学术文章',
    content: `
## 摘要

在体验经济时代，酒店业正经历着从功能导向向情感导向的深刻转型。本文以空间叙事理论为分析框架，探讨酒店空间如何从单纯的功能容器转变为承载情感记忆与品牌价值的叙事载体。

**关键词：** 体验经济；空间叙事；酒店设计；品牌价值；差异化竞争

## 一、空间叙事理论的酒店场景适配

空间叙事理论源于文学叙事学向建筑与城市研究领域的拓展，其核心命题在于：空间不仅是物理容器，更是承载意义生产与情感传递的媒介。

空间叙事理论在酒店场景的适配体现为三个维度：首先是**时间维度**，酒店空间需要构建从入住到离店的完整叙事弧线；其次是**感官维度**，视觉、听觉、嗅觉、触觉等多通道信息共同编织空间故事；第三是**互动维度**，客人从被动的空间使用者转变为故事参与者。

## 二、从功能空间到情感空间的范式转移

酒店业正在经历一场静默而深刻的范式革命——从功能空间向情感空间的转移。

功能空间的核心逻辑是效率与标准化。情感空间的逻辑则截然不同。它关注的是"感受"而非"功能"，追求的是"记忆"而非"便利"。

## 三、沉浸式体验设计的叙事逻辑构建

沉浸式体验是空间叙事的当代形态，其核心在于打破"观看"与"被观看"的界限，让客人成为故事的参与者而非旁观者。

**叙事弧线的设计**是首要任务。优秀的酒店空间如同一部精心编排的戏剧，拥有完整的起承转合。

**多模态感官叙事**是沉浸体验的技术支撑。

**互动节点与参与机制**是沉浸体验的深化路径。

## 四、空间符号学视角下的品牌差异化路径

在空间符号学的视域中，酒店空间是一个复杂的符号系统，其每一个元素都承载着特定的意义与价值。

**符号的选择与编码**是品牌差异化的起点。

**符号的层级与结构**决定了空间叙事的深度。

**符号的解码与共鸣**是品牌差异化的最终检验。

## 五、实证研究：高端酒店空间叙事案例分析

**案例一：上海某精品酒店的文化叙事**

该酒店位于上海法租界历史建筑内，其空间叙事策略是"海派文化的当代诠释"。

**案例二：云南某度假酒店的生态叙事**

该酒店坐落于云南某自然保护区边缘，其空间叙事主题是"人与自然的和谐共生"。

**案例三：北京某商务酒店的效率叙事**

与前两个案例不同，该酒店面向商务客群，其空间叙事聚焦于"高效与品质"。

## 结语

体验经济时代，酒店业的竞争已从功能层面上升到意义层面。空间叙事理论为酒店业提供了一种全新的价值创造范式。
    `,
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}/knowledge`} className="inline-flex items-center text-gray-400 hover:text-[#f59e0b] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isZh ? '返回行业前沿' : 'Back to Industry Insights'}
        </Link>

        <article className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-medium">{article.tag}</span>
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
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#f59e0b] transition-colors"><Share2 className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-[#f59e0b] transition-colors"><Bookmark className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#f59e0b]">$1</strong>')
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
