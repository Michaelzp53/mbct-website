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

  const ui = {
    comments: isZh ? '评论交流' : 'Comments',
    commentsCount: isZh ? '条评论' : 'comments',
    writeComment: isZh ? '写下你的评论...' : 'Write your comment...',
    submit: isZh ? '发表' : 'Post',
    reply: isZh ? '回复' : 'Reply',
    like: isZh ? '点赞' : 'Like',
    loadMore: isZh ? '加载更多' : 'Load More',
    official: isZh ? '迈创兄弟官方' : 'Official',
  }

  // Load likes and comments from localStorage
  useEffect(() => {
    try {
      // Load like state
      const likedKey = `lean_article_liked_${slug}`
      const savedLiked = localStorage.getItem(likedKey)
      if (savedLiked === 'true') setLiked(true)

      // Load like count
      const likeCountKey = `lean_article_likes_${slug}`
      const savedLikeCount = localStorage.getItem(likeCountKey)
      if (savedLikeCount) setLikeCount(parseInt(savedLikeCount, 10))

      // Load comments
      const commentsKey = `lean_article_comments_${slug}`
      const savedComments = localStorage.getItem(commentsKey)
      if (savedComments) {
        setComments(JSON.parse(savedComments))
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoaded(true)
  }, [slug])

  const handleLike = () => {
    if (liked) return // Already liked

    const newLiked = true
    const newCount = likeCount + 1
    setLiked(newLiked)
    setLikeCount(newCount)

    try {
      localStorage.setItem(`lean_article_liked_${slug}`, String(newLiked))
      localStorage.setItem(`lean_article_likes_${slug}`, String(newCount))
    } catch {
      // Ignore
    }
  }

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return

    setIsSubmitting(true)

    const newComment: Comment = {
      id: `c-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      author: 'Guest',
      avatar: 'G',
      content: commentText.trim(),
      date: new Date().toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      likes: 0,
      replies: [],
      isOfficial: false,
    }

    // Save to localStorage
    try {
      const commentsKey = `lean_article_comments_${slug}`
      const existing = comments.map((c) => c)
      existing.unshift(newComment)
      localStorage.setItem(commentsKey, JSON.stringify(existing))
    } catch {
      // Ignore
    }

    setComments((prev) => [newComment, ...prev])
    setCommentText('')
    setIsSubmitting(false)
  }

  if (!isLoaded) {
    return null // Avoid flash of unstyled content
  }

  return (
    <>
      {/* Like Button */}
      <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
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
                <p>{isZh ? '还没有评论，来发表第一篇吧！' : 'No comments yet. Be the first to comment!'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}