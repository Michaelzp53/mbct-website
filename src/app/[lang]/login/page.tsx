'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { User, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react'

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/zh'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(isLogin ? 'Login' : 'Register', { email, password, name })
  }

  return (
    <div className="bg-[#111827] rounded-2xl p-8 border border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              姓名
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
                placeholder="请输入您的姓名"
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            邮箱
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
              placeholder="请输入您的邮箱"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            密码
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
              placeholder="请输入密码（至少8位）"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-3 bg-[#f59e0b] text-[#0f172a] font-bold rounded-lg hover:bg-[#f59e0b]/90 transition-all"
        >
          {isLogin ? '登录' : '注册'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {isLogin ? '还没有账号？' : '已有账号？'}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-[#f59e0b] font-medium hover:underline"
          >
            {isLogin ? '立即注册' : '立即登录'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-medium">MBCT会员中心</span>
          </div>
          <h2 className="text-3xl font-bold text-white">欢迎回来</h2>
          <p className="mt-2 text-gray-400">登录以获取独家行业洞察与资源</p>
        </div>

        <Suspense fallback={<div className="text-center text-gray-400">加载中...</div>}>
          <LoginForm />
        </Suspense>

        <div className="mt-8 text-center">
          <Link href="/zh" className="text-gray-500 hover:text-white transition-colors">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}