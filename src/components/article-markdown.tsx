'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { usePathname } from 'next/navigation'
import { containsChineseBody } from '@/lib/article-labels'
import { Children, type ReactNode } from 'react'

function cleanText(children: ReactNode) {
  return Children.map(children, child => typeof child === 'string' ? child.replace(/\*\*/g, '') : child)
}

interface ArticleMarkdownProps {
  content: string
}

export function ArticleMarkdown({ content }: ArticleMarkdownProps) {
  const pathname = usePathname()
  const originalChinese = pathname.startsWith('/en/') && containsChineseBody(content)
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {originalChinese && <aside className="mb-6 rounded-lg border border-border bg-muted p-4 text-sm leading-7"><strong>Original Chinese article</strong><p>The full English translation of this archived article is not yet available. The original text is provided below; navigation and enquiry options are available in English.</p></aside>}
      <div lang={originalChinese ? 'zh-CN' : undefined}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">{children}</h2>,
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              {cleanText(children)}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
              {cleanText(children)}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-bold text-foreground mt-6 mb-2">
              {cleanText(children)}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-[17px] text-foreground/85 leading-8 mb-5">
              {cleanText(children)}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">
              {children}
            </strong>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 text-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 text-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1 text-foreground">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const isInline = !className
            return isInline ? (
              <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
                {children}
              </code>
            ) : (
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                <code className="text-sm font-mono text-foreground">
                  {children}
                </code>
              </pre>
            )
          },
          hr: () => <hr className="my-8 border-border" />,
          a: ({ children, href }) => (
            <a href={href} className="text-primary hover:underline">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-border px-4 py-2 text-left font-bold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2 text-foreground">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
      </div>
    </div>
  )
}
