'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ArticleContentProps {
  content: string[]
  articleTitle: string
}

export default function ArticleContent({ content, articleTitle }: ArticleContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // 如果内容少于等于6段，不需要折叠
  if (content.length <= 6) {
    return (
      <div className="space-y-6">
        {content.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed text-lg dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }
  
  // 前3段作为预览
  const previewContent = content.slice(0, 3)
  const fullContent = content.slice(3)
  
  const handleReadMore = () => {
    setIsExpanded(true)
  }
  
  return (
    <div>
      {/* 预览内容 */}
      <div className="space-y-6">
        {previewContent.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed text-lg dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* 折叠的完整内容 */}
      {!isExpanded && (
        <div className="relative mt-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card dark:to-[#111827] pointer-events-none h-32" />
          <div className="pt-16">
            <button
              onClick={handleReadMore}
              className="w-full py-4 bg-muted dark:bg-[#1e293b] hover:bg-muted/80 dark:hover:bg-[#334155] rounded-xl text-[#f59e0b] font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>阅读全文</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      
      {/* 展开后的完整内容 */}
      {isExpanded && (
        <div className="space-y-6 mt-6">
          {fullContent.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed text-lg dark:text-gray-300">
              {paragraph}
            </p>
          ))}
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full py-3 bg-muted dark:bg-[#1e293b] hover:bg-muted/80 dark:hover:bg-[#334155] rounded-xl text-muted-foreground dark:text-gray-400 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <ChevronUp className="w-4 h-4" />
            <span>收起</span>
          </button>
        </div>
      )}
    </div>
  )
}
