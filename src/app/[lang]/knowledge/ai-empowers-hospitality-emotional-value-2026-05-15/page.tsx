import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { ArticleMarkdown } from '@/components/article-markdown';

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isZh = lang === 'zh';

  const article = {
    title: isZh ? 'AI赋能酒店业：从"活人感"到"情绪价值"的创新路径' : 'AI Empowers Hospitality: From "Human Feel" to "Emotional Value" Innovation Path',
    summary: isZh ? '探索AI在酒店业中的应用，包括智能客服、AI预订推荐、客房环境感知等场景，以及情绪价值驱动的创新路径。' : 'Explore AI applications in hospitality, including smart customer service, AI booking recommendations, room environment sensing, and emotional value driven innovation.',
    author: 'MBCT内容团队',
    date: '2026-05-15',
    readTime: isZh ? '12分钟' : '12 min',
    tag: isZh ? '行业分析' : 'Industry Analysis',
    content: isZh ? `## 引言

AI技术正在重塑酒店业，从提升运营效率到深化客户情感连接。

## 场景一：智能客服

通过自然语言处理，提升客人问题响应速度。

## 场景二：AI预订推荐

基于历史数据和情绪标签，实现精准营销。

## 场景三：客房环境感知

利用传感器实时调节灯光、音乐、温度，提升情绪价值。

## 情绪价值转化KPI

将情绪满意度纳入业务指标，实现可量化管理。` : `## Introduction

AI is reshaping hospitality, from operational efficiency to deep emotional connections.

## Scenario 1: Intelligent Customer Service

NLP improves response times.

## Scenario 2: AI Booking Recommendations

Leverage historical data and emotion tags for precise marketing.

## Scenario 3: Room Environment Sensing

Sensors adjust lighting, music, temperature to boost emotional value.

## Emotional Value KPI

Integrate emotional satisfaction into business metrics for quantifiable management.`,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-4">
        <Link href={`/${lang}/knowledge`} className="flex items-center mb-4 text-primary hover:underline">
          <ArrowLeft className="mr-2" />
          {isZh ? '返回' : 'Back'}
        </Link>
        <h1 className="text-2xl font-bold mb-2 text-foreground">{article.title}</h1>
        <p className="text-muted-foreground mb-2">{article.summary}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <span>{article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
          <span>{article.tag}</span>
        </div>
        <ArticleMarkdown content={article.content} />
      </div>
    </div>
  );
}
