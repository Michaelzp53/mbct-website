import Link from 'next/link'
import { ArrowRight, ArrowLeft, TrendingUp, FileText, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// 文章数据 - 新上传的文章放到最前面
const articles = [
  {
    slug: 'hotel-renovation',
    title: '30年老酒店的逆袭之路：从濒临倒闭到一房难求的MBCT改造实录',
    excerpt: '一家三十年历史酒店如何用1800万改造实现271% RevPAR提升？看MBCT如何用"微手术"激活沉睡资产。',
    category: '热门报道',
    categoryColor: 'bg-red-100 text-red-800 border-red-200',
    icon: TrendingUp,
    date: '2026-04-19',
    readTime: '15分钟',
    featured: true,
  },
  {
    slug: 'hotel-ratio',
    title: '酒店人房比：增效还是降本？',
    excerpt: '人房比越低越好吗？数据揭示行业真相：服务和情绪价值是通过人传递的，但成本控制又不得不做。',
    category: '行业报告',
    categoryColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: FileText,
    date: '2026-04-19',
    readTime: '12分钟',
    featured: false,
  },
  {
    slug: 'culture-soul',
    title: '文化灵魂：为什么文旅产业正在经历一场静默革命？',
    excerpt: '当"网红打卡地"成为标配，中国文旅行业正陷入前所未有的同质化困境。MBCT提出文化积淀理论。',
    category: '文旅学术',
    categoryColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: BookOpen,
    date: '2026-04-19',
    readTime: '10分钟',
    featured: false,
  },
]

export default function ArticlesPage() {
  const featuredArticle = articles.find(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-brand-gold hover:text-brand-gold/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
            
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
                📚 专业洞察
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                MBCT 行业洞察与实战案例
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                深度解析酒店行业数字化转型、文旅产业创新、存量资产激活的前沿思考与实战经验
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
              🔥 热门报道
            </h2>
            <Link href={`/articles/${featuredArticle.slug}`}>
              <Card className="hover:shadow-lg transition-all cursor-pointer border-brand-gold/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={featuredArticle.categoryColor}>
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                    <span className="text-gray-500 text-sm">{featuredArticle.readTime}阅读</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 hover:text-brand-gold transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <span className="text-brand-gold font-medium inline-flex items-center">
                    阅读全文 <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">📖 全部文章</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={article.categoryColor}>{article.category}</Badge>
                    </div>
                    <CardTitle className="text-lg hover:text-brand-gold transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">{article.date} · {article.readTime}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-brand-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              需要专业咨询方案？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              MBCT 团队为您提供酒店数字化转型、存量资产改造、文旅项目策划等全方位解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold text-lg px-8">
                立即获取方案 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-brand-navy">
                电话联系：400-888-8888
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
