'use client'

interface ArticleContentProps {
  content: string[]
  articleTitle: string
}

/**
 * 全文直接渲染,不再折叠。
 * 改动背景(2026-06-16):
 * - 之前 >6 段才出现"阅读全文"按钮,首屏只显示前 3 段(约 120 字)
 * - 实测 visitors 跳出率 75%(24h),核心根因就是正文被付费墙挡住
 * - 老板决策:取消付费墙,文章完整展开,提升可读性和 SEO 收录
 *
 * 保留 props 兼容性以避免改动 page.tsx 调用点
 */
export default function ArticleContent({ content, articleTitle }: ArticleContentProps) {
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