'use client'

import { useState, useEffect } from 'react'
import { Heart, Share2, Eye, MessageCircle } from 'lucide-react'

interface ArticleInteractionsProps {
  articleId: string
  articleTitle: string
  articleUrl: string
}

// 生成固定值的辅助函数（基于articleId）
function generateFixedValues(articleId: string) {
  // 使用articleId的字符码来生成固定值，确保SSR和CSR一致
  let hash = 0
  for (let i = 0; i < articleId.length; i++) {
    hash = ((hash << 5) - hash) + articleId.charCodeAt(i)
    hash = hash & hash // 转换为32位整数
  }
  const absHash = Math.abs(hash)
  return {
    views: 200 + (absHash % 400),
    likes: 20 + (absHash % 40)
  }
}

export default function ArticleInteractions({ articleId, articleTitle, articleUrl }: ArticleInteractionsProps) {
  const fixedValues = generateFixedValues(articleId)
  const [likes, setLikes] = useState(fixedValues.likes)
  const [views, setViews] = useState(fixedValues.views)
  const [hasLiked, setHasLiked] = useState(false)
  const [showShareToast, setShowShareToast] = useState(false)

  // 客户端加载时检查localStorage
  useEffect(() => {
    try {
      // 从localStorage读取点赞状态
      const likedArticles = JSON.parse(localStorage.getItem('mbct_liked_articles') || '{}')
      setHasLiked(!!likedArticles[articleId])

      // 读取实际的点赞数
      const articleLikes = JSON.parse(localStorage.getItem('mbct_article_likes') || '{}')
      if (articleLikes[articleId]) {
        setLikes(articleLikes[articleId])
      }

      // 增加阅读量
      const articleViews = JSON.parse(localStorage.getItem('mbct_article_views') || '{}')
      if (!articleViews[articleId]) {
        articleViews[articleId] = fixedValues.views + 1
        localStorage.setItem('mbct_article_views', JSON.stringify(articleViews))
        setViews(fixedValues.views + 1)
      } else {
        setViews(articleViews[articleId])
      }
    } catch (e) {
      console.error('加载互动数据失败:', e)
    }
  }, [articleId, fixedValues.views, fixedValues.likes])

  // 点赞
  const handleLike = () => {
    try {
      const likedArticles = JSON.parse(localStorage.getItem('mbct_liked_articles') || '{}')
      const articleLikes = JSON.parse(localStorage.getItem('mbct_article_likes') || '{}')

      if (hasLiked) {
        delete likedArticles[articleId]
        articleLikes[articleId] = (articleLikes[articleId] || likes) - 1
        setLikes(prev => prev - 1)
      } else {
        likedArticles[articleId] = true
        articleLikes[articleId] = (articleLikes[articleId] || likes) + 1
        setLikes(prev => prev + 1)
      }

      localStorage.setItem('mbct_liked_articles', JSON.stringify(likedArticles))
      localStorage.setItem('mbct_article_likes', JSON.stringify(articleLikes))
      setHasLiked(!hasLiked)
    } catch (e) {
      console.error('点赞操作失败:', e)
    }
  }

  // 分享
  const handleShare = async () => {
    const shareData = {
      title: articleTitle,
      text: `推荐阅读：${articleTitle}`,
      url: articleUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(articleUrl)
        setShowShareToast(true)
        setTimeout(() => setShowShareToast(false), 2000)
      }
    } catch (err) {
      console.log('分享失败:', err)
    }
  }

  // 滚动到评论区
  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments')
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center gap-6 py-4 border-y border-gray-800 mb-8 bg-[#1e293b]/30 rounded-lg px-4 hover:bg-[#1e293b]/40 transition-colors">
      {/* 阅读量 */}
      <div className="flex items-center gap-2 text-gray-400" title="阅读量">
        <Eye className="w-5 h-5 text-blue-400" />
        <span className="text-sm font-medium">{views.toLocaleString()}</span>
      </div>

      {/* 点赞 */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 transition-colors ${
          hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
        title={hasLiked ? '取消点赞' : '点赞'}
      >
        <Heart className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
        <span className="text-sm font-medium">{likes}</span>
      </button>

      {/* 评论 */}
      <button
        onClick={scrollToComments}
        className="flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors"
        title="查看评论"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">评论</span>
      </button>

      {/* 分享 */}
      <button
        onClick={handleShare}
        className="flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors ml-auto"
        title="分享文章"
      >
        <Share2 className="w-5 h-5" />
        <span className="text-sm font-medium">分享</span>
      </button>

      {/* 分享成功提示 */}
      {showShareToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#f59e0b] text-[#0f172a] rounded-lg text-sm font-medium z-50 shadow-lg">
          链接已复制到剪贴板
        </div>
      )}
    </div>
  )
}
