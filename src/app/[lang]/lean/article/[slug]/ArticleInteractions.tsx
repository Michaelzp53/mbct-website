'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, ThumbsUp, Send, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Comment {
  id: string
  author: string
  avatar: string
  content: string
  date: string
  likes: number
  replies: Comment[]
  isOfficial: boolean
}

interface ApiComment {
  id: number
  article_slug: string
  nickname: string
  content: string
  created_at: string
}

interface ArticleInteractionsProps {
  slug: string
  initialLikes: number
  initialComments: number
  lang: string
  isZh: boolean
}

export default function ArticleInteractions({
  slug,
  initialLikes,
  initialComments,
  lang,
  isZh,
}: ArticleInteractionsProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialLikes)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [views, setViews] = useState(0)
  const [error, setError] = useState('')
  const [likeError, setLikeError] = useState('')

  const ui = {
    comments: isZh ? '评论交流' : 'Comments',
    commentsCount: isZh ? '条评论' : 'comments',
    writeComment: isZh ? '写下你的评论...' : 'Write your comment...',
    submit: isZh ? '发表' : 'Post',
    reply: isZh ? '回复' : 'Reply',
    like: isZh ? '点赞' : 'Like',
    loadMore: isZh ? '加载更多' : 'Load More',
    official: isZh ? '迈创兄弟官方' : 'Official',
    views: isZh ? '阅读' : 'Views',
    alreadyLiked: isZh ? '您已经点过赞了' : 'You already liked this',
    likeFailed: isZh ? '点赞失败，请重试' : 'Like failed, please retry',
    commentFailed: isZh ? '评论提交失败，请重试' : 'Failed to post comment',
    networkError: isZh ? '网络错误，请检查连接后重试' : 'Network error, please check connection',
    noComments: isZh ? '还没有评论，来发表第一篇吧！' : 'No comments yet. Be the first to comment!',
  }

  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`/api/lean/interactions?slug=${encodeURIComponent(slug)}`)
        if (res.ok) {
          const data = await res.json()
          setLikeCount(data.likes || initialLikes)
          setLiked(data.hasLiked || false)
          setViews(data.views || 0)
          
          // Convert API comments to Comment format
          if (data.comments && data.comments.length > 0) {
            const formattedComments: Comment[] = data.comments.map((c: ApiComment) => ({
              id: String(c.id),
              author: c.nickname || (isZh ? '匿名用户' : 'Anonymous'),
              avatar: (c.nickname || (isZh ? '匿' : 'A')).charAt(0).toUpperCase(),
              content: c.content,
              date: new Date(c.created_at).toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }),
              likes: 0,
              replies: [],
              isOfficial: false,
            }))
            setComments(formattedComments)
          }
        } else {
          // API error - use initial values
          setLikeCount(initialLikes)
          console.error('Failed to load interactions:', res.status)
        }
      } catch (err) {
        console.error('Failed to load interactions:', err)
        setLikeCount(initialLikes)
      }
      setIsLoaded(true)
    }
    
    loadData()
  }, [slug, initialLikes, isZh])

  const handleLike = async () => {
    if (liked) {
      setLikeError(ui.alreadyLiked)
      setTimeout(() => setLikeError(''), 3000)
      return
    }

    // Optimistic update
    setLiked(true)
    setLikeCount(prev => prev + 1)
    setLikeError('')

    try {
      const res = await fetch('/api/lean/interactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, action: 'like' }),
      })
      
      if (!res.ok) {
        const data = await res.json()
        if (data.error === 'Already liked') {
          setLiked(true)
          setLikeError(ui.alreadyLiked)
          setTimeout(() => setLikeError(''), 3000)
        } else {
          setLiked(false)
          setLikeCount(prev => prev - 1)
          setLikeError(ui.likeFailed)
          setTimeout(() => setLikeError(''), 3000)
        }
      }
    } catch (err) {
      console.error('Like failed:', err)
      setLiked(false)
      setLikeCount(prev => prev - 1)
      setLikeError(ui.networkError)
      setTimeout(() => setLikeError(''), 3000)
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
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
          likes: 0,
          replies: [],
          isOfficial: false,
        }
        setComments((prev) => [newComment, ...prev])
        setCommentText('')
      } else {
        const data = await res.json()
        setError(data.error || ui.commentFailed)
        setTimeout(() => setError(''), 5000)
      }
    } catch (err) {
      console.error('Comment failed:', err)
      setError(ui.networkError)
      setTimeout(() => setError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isLoaded) {
    return null // Avoid flash of unstyled content
  }

  return (
    <>
      {/* Like Button */}
      <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="outline"
            onClick={handleLike}
            disabled={liked}
            className={`flex items-center gap-2 px-6 py-3 border-[#f59e0b]/50 hover:bg-[#f59e0b]/10 transition-all ${
              liked ? 'text-red-500 border-red-500/50 bg-red-500/5' : 'text-[#f59e0b]'
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span>
              {likeCount} {ui.like}
            </span>
          </Button>
          {likeError && (
            <span className="text-xs text-red-500">{likeError}</span>
          )}
        </div>
        <Button variant="outline" className="flex items-center gap-2 px-6 py-3">
          <MessageSquare className="w-5 h-5" />
          <span>{comments.length} {ui.commentsCount}</span>
        </Button>
      </div>

      {/* Comments Section */}
      <div className="bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#f59e0b]" />
            {ui.comments}
            <span className="text-sm font-normal text-muted-foreground">
              ({comments.length})
            </span>
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Comment Input */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder={ui.writeComment}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#f59e0b] resize-none min-h-[100px]"
                />
                <div className="flex justify-end mt-3">
                  <Button
                    onClick={handleCommentSubmit}
                    disabled={!commentText.trim() || isSubmitting}
                    className="bg-[#f59e0b] text-[#0f172a] hover:bg-[#f59e0b]/90 font-bold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? '...' : ui.submit}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-card border border-border rounded-xl p-6">
                {/* Main Comment */}
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold ${
                    comment.isOfficial ? 'bg-[#f59e0b]' : 'bg-muted'
                  }`}>
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-foreground">{comment.author}</span>
                      {comment.isOfficial && (
                        <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">
                          {ui.official}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-foreground leading-relaxed mb-3">{comment.content}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-[#f59e0b] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {comments.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>{ui.noComments}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}