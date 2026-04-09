'use client'

import { useEffect, useRef } from 'react'

interface ArticleCommentsProps {
  slug: string
}

export default function ArticleComments({ slug }: ArticleCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 动态加载 Commentbox 脚本
    const script = document.createElement('script')
    script.src = 'https://cdn.commentbox.io_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // 清理
      document.body.removeChild(script)
    }
  }, [slug])

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#f59e0b]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        评论交流
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        欢迎分享您的观点和经验，与其他酒店从业者交流
      </p>
      <div 
        ref={containerRef}
        className="commentbox" 
        data-page-id={slug}
        data-page-url={`https://marvelbros.com/zh/knowledge/${slug}`}
        data-box-id="5634563627810816-proj"
      />
    </div>
  )
}
