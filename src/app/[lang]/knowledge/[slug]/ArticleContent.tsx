'use client'

import { ArticleMarkdown } from '@/components/article-markdown'

export function isMarkdownTableRow(paragraph: string) {
  const line = paragraph.trim()
  return line.startsWith('|') && line.endsWith('|') && !line.includes('\n')
}

function isMarkdownSeparatorRow(line: string) {
  const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|')
  return cells.length > 0 && cells.every(cell => /^:?-{3,}:?$/.test(cell.trim()))
}

export function joinArticleParagraphs(paragraphs: string[]) {
  const blocks: string[] = []
  for (let index = 0; index < paragraphs.length;) {
    if (!isMarkdownTableRow(paragraphs[index])) {
      blocks.push(paragraphs[index])
      index += 1
      continue
    }
    const rows: string[] = []
    while (index < paragraphs.length && isMarkdownTableRow(paragraphs[index])) {
      rows.push(paragraphs[index].trim())
      index += 1
    }
    if (!rows.some(isMarkdownSeparatorRow)) {
      const columnCount = Math.max(rows[0].split('|').length - 2, 1)
      rows.splice(1, 0, `| ${Array.from({ length: columnCount }, () => '---').join(' | ')} |`)
    }
    blocks.push(rows.join('\n'))
  }
  return blocks.join('\n\n')
}

export default function ArticleContent({ content, articleTitle }: { content: string[]; articleTitle: string; lang?: string }) {
  const paragraphs = content
    .filter(paragraph => paragraph.trim() !== articleTitle.trim())
    .map(paragraph => {
      const clean = paragraph.replace(/^(?:\*\*)?副标?题(?:\*\*)?[：:]\s*/u, '')
      return /^[一二三四五六七八九十]+、/u.test(clean) && clean.length < 100 ? `## ${clean}` : clean
    })
  return <div data-article-body className="[overflow-wrap:anywhere]"><ArticleMarkdown content={joinArticleParagraphs(paragraphs)} /></div>
}
