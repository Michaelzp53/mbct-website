'use client'

import { ArticleMarkdown } from '@/components/article-markdown'

export default function ArticleContent({ content, articleTitle }: { content: string[]; articleTitle: string; lang?: string }) {
  const markdown = content
    .filter(paragraph => paragraph.trim() !== articleTitle.trim())
    .map(paragraph => {
      const clean = paragraph.replace(/^(?:\*\*)?副标?题(?:\*\*)?[：:]\s*/u, '')
      return /^[一二三四五六七八九十]+、/u.test(clean) && clean.length < 100 ? `## ${clean}` : clean
    })
    .join('\n\n')
  return <div data-article-body><ArticleMarkdown content={markdown} /></div>
}
