'use client'

import { useState, useEffect } from 'react'
import { Heart, Share2, Eye, MessageCircle } from 'lucide-react'

interface ArticleInteractionsProps {
  articleId: string
  articleTitle: string
  articleUrl: string
}

export default function ArticleInteractions({ articleId, articleTitle, articleUrl }: ArticleInteractionsProps) {
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)
  const [showShareToast, setShowShareToast] = useState(false)

  // 加载数据
  useEffect(() => {
    // 从localStorage读取点赞状态
    const likedArticles = JSON.parse(localStorage.getItem('mbct_liked_articles') || '{}')
    setHasLiked(!!likedArticles[articleId])

    // 模拟阅读量（实际应从后端获取）
    const articleViews = JSON.parse(localStorage.getItem('mbct_article_views') || '{}')
    const currentViews = articleViews[articleId] || Math.floor(Math.random() * 500) + 100
    setViews(currentViews)

    // 模拟点赞数
    const articleLikes = JSON.parse(localStorage.getItem('mbct_article_likes') || '{}')
    setLikes(articleLikes[articleId] || Math.floor(Math.random() * 50) + 10)

    // 增加阅读量
    if (!articleViews[articleId]) {
      articleViews[articleId] = currentViews + 1
      localStorage.setItem('mbct_article_views', JSON.stringify(articleViews))
      setViews(currentViews + 1)
    }
  }, [articleId])

  // 点赞
  const handleLike = () => {
    const likedArticles = JSON.parse(localStorage.getItem('mbct_liked_articles') || '{}')
    const articleLikes = JSON.parse(localStorage.getItem('mbct_article_likes') || '{}')

    if (hasLiked) {
      // 取消点赞
      delete likedArticles[articleId]
      articleLikes[articleId] = (articleLikes[articleId] || 0) - 1
      setLikes(prev => prev - 1)
    } else {
      // 点赞
      likedArticles[articleId] = true
      articleLikes[articleId] = (articleLikes[articleId] || 0) + 1
      setLikes(prev => prev + 1)
    }

    localStorage.setItem('mbct_liked_articles', JSON.stringify(likedArticles))
    localStorage.setItem('mbct_article_likes', JSON.stringify(articleLikes))
    setHasLiked(!hasLiked)
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
        // 复制链接
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
    <div className="flex items-center gap-6 py-4 border-y border-gray-800 mb-8">
      {/* 阅读量 */}
      <div className="flex items-center gap-2 text-gray-400">
        <Eye className="w-5 h-5" />
        <span className="text-sm">{views.toLocaleString()}</span>
      </div>

      {/* 点赞 */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 transition-colors ${
          hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
      >
        <Heart className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
        <span className="text-sm">{likes}</span>
      </button>

      {/* 评论 */}
      <button
        onClick={scrollToComments}
        className="flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm">评论</span>
      </button>

      {/* 分享 */}
      <button
        onClick={handleShare}
        className="flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors ml-auto"
      >
        <Share2 className="w-5 h-5" />
        <span className="text-sm">分享</span>
      </button>

      {/* 分享成功提示 */}
      {showShareToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#f59e0b] text-[#0f172a] rounded-lg text-sm font-medium z-50">
          链接已复制到剪贴板
        </div>
      )}
    </div>
  )
}
