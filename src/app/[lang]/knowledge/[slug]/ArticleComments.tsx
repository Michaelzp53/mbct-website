'use client'

import Giscus from '@giscus/react'

interface ArticleCommentsProps {
  slug: string
}

export default function ArticleComments({ slug }: ArticleCommentsProps) {
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
      <Giscus
        id="comments"
        repo="michaelzp53/mbct-website"
        repoId="R_kgDOON9bJg"
        category="文章评论"
        categoryId="DIC_kwDOON9bJs4Co8mS"
        mapping="specific"
        term={slug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}
