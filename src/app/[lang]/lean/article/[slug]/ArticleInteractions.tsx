'use client'

import { useState, useEffect } from 'react'
import { Heart, Share2, Eye, MessageSquare, Send, User, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ArticleInteractionsProps {
  slug: string
  initialLikes: number
  initialComments: any[] // array of comment objects from server
  isZh: boolean
}

interface Comment {
  id: string
  author: string
  avatar: string
  content: string
  date: string
  likes: number
  replies: any[]
  isOfficial: boolean
}

export default function ArticleInteractions({ slug, initialLikes, initialComments, isZh }: ArticleInteractionsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(false)
  const [views, setViews] = useState(0)
  const [comments, setComments] = useState<Comment[]>(initialComments as any)
  const [commentText, setCommentText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [likeError, setLikeError] = useState('')
  const [showShareToast, setShowShareToast] = useState(false)

  // Load interaction data on mount (views, like status)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/lean/interactions?slug=${encodeURIComponent(slug)}`)
        if (res.ok) {
          const data = await res.json()
          setViews(data.views)
          setLikes(data.likes)
          setHasLiked(data.hasLiked)
          // comments already passed as props; optionally refresh
        } else {
          console.error('Failed to fetch interactions')
        }
      } catch (e) {
        console.error('Error fetching interactions', e)
      }
    }
    fetchData()
  }, [slug])

  const handleLike = async () => {
    if (hasLiked) {
      setLikeError(isZh ? '已点赞，无法重复点赞' : 'Already liked')
      setTimeout(() => setLikeError(''), 3000)
      return
    }
    try {
      const res = await fetch('/api/lean/interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, action: 'like' }),
      })
      if (res.ok) {
        const data = await res.json()
        setLikes(data.likes)
        setHasLiked(true)
      } else {
        const err = await res.json()
        setLikeError(err.error || (isZh ? '点赞失败' : 'Like failed'))
        setTimeout(() => setLikeError(''), 3000)
      }
    } catch (e) {
      console.error('Like request error', e)
      setLikeError(isZh ? '网络错误' : 'Network error')
      setTimeout(() => setLikeError(''), 3000)
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: `推荐阅读：${document.title}`,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setShowShareToast(true)
        setTimeout(() => setShowShareToast(false), 2000)
      }
    } catch (err) {
      console.log('分享失败:', err)
    }
  }

  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments')
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/lean/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          content: commentText.trim(),
          nickname: isZh ? '访客' : 'Visitor',
        }),
      })
      if (res.ok) {
        const data = await res.json()
        const newComment: Comment = {
          id: String(data.comment.id),
          author: data.comment.nickname || (isZh ? '匿名用户' : 'Anonymous'),
          avatar: (data.comment.nickname || (isZh ? '匿' : 'A')).charAt(0).toUpperCase(),
          content: data.comment.content,
          date: new Date(data.comment.created_at).toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          }),
          likes: 0,
          replies: [],
          isOfficial: false,
        }
        setComments(prev => [newComment, ...prev])
        setCommentText('')
      } else {
        const data = await res.json()
        setError(data.error || (isZh ? '评论提交失败' : 'Comment failed'))
        setTimeout(() => setError(''), 5000)
      }
    } catch (err) {
      console.error('Comment failed:', err)
      setError(isZh ? '网络错误' : 'Network error')
      setTimeout(() => setError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Interaction Bar */}
      <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
        <Button variant="outline" onClick={handleLike} disabled={hasLiked} className={`flex items-center gap-2 ${hasLiked ? 'text-red-500 border-red-500' : 'text-[#f59e0b]'}`}>
          <Heart className="w-5 h-5" /> {likes} {isZh ? '点赞' : 'Like'}
        </Button>
        <Button variant="outline" onClick={scrollToComments} className="flex items-center gap-2 text-[#f59e0b]">
          <MessageSquare className="w-5 h-5" /> {comments.length} {isZh ? '评论' : 'Comments'}
        </Button>
        <Button variant="outline" onClick={handleShare} className="flex items-center gap-2 ml-auto">
          <Share2 className="w-5 h-5" /> {isZh ? '分享' : 'Share'}
        </Button>
      </div>
      {likeError && <div className="text-sm text-red-500 mt-2">{likeError}</div>}

      {/* Comments Section */}
      <div id="comments" className="mt-8">
        {error && <div className="mb-4 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-500">{error}</div>}
        <div className="bg-card border border-border rounded-xl p-4 mb-8">
          <textarea
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder={isZh ? '写下你的评论...' : 'Write your comment...'}
            className="w-full p-3 bg-background border border-border rounded resize-none min-h-[80px]"
          />
          <div className="flex justify-end mt-2">
            <Button onClick={handleCommentSubmit} disabled={isSubmitting || !commentText.trim()}>
              <Send className="w-4 h-4 mr-1" /> {isSubmitting ? (isZh ? '提交中...' : 'Submitting...') : (isZh ? '发表' : 'Post')}
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          {comments.map(c => (
            <div key={c.id} className="border-b pb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">{c.avatar}</div>
                <span className="font-medium">{c.author}</span>
                <span className="text-xs text-muted-foreground">{c.date}</span>
                {c.isOfficial && <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30">{isZh ? '官方' : 'Official'}</Badge>}
              </div>
              <p className="ml-10">{c.content}</p>
            </div>
          ))}
          {comments.length === 0 && <div className="text-center text-muted-foreground">{isZh ? '暂无评论' : 'No comments yet'}</div>}
        </div>
      </div>

      {/* Share toast */}
      {showShareToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-[#0f172a] px-4 py-2 rounded shadow-lg">
          链接已复制到剪贴板
        </div>
      )}
    </>
  )
}
