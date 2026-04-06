'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface NavbarProps {
  lang: string
}

export function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const navLinks = [
    { href: `/${lang}/`, label: '首页' },
    { href: `/${lang}/knowledge`, label: '行业前沿' },
    { href: `/${lang}/about`, label: '关于我们' },
    { href: `/${lang}/services`, label: '核心业务' },
    { href: `/${lang}/cases`, label: '成功案例' },
    { href: `/${lang}/contact`, label: '联系我们' },
    { href: `/${lang}/contact?type=plan`, label: '获取方案' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f59e0b]/30 bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f172a]/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}/`} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-lg flex items-center justify-center">
              <span className="text-[#0f172a] font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-none">MBCT</span>
              <span className="text-xs text-gray-400">迈创兄弟商业科技</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-base font-medium text-gray-300 rounded-lg hover:bg-[#f59e0b]/10 hover:text-[#f59e0b] transition-colors'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Lang + Login */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switch with icon */}
            <Link
              href={`/${lang === 'zh' ? 'en' : 'zh'}/`}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-400 hover:text-[#f59e0b] transition-colors rounded-lg hover:bg-[#f59e0b]/10"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'zh' ? 'English' : '中文'}</span>
            </Link>
            
            {/* Login/Register with gold border */}
            <Link href={`/${lang}/login`}>
              <Button 
                variant="outline" 
                className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#0f172a] font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-1.5"
              >
                <User className="w-4 h-4" />
                登录 / 注册
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden" render={<Button variant="ghost" size="icon" className="text-gray-300 hover:text-white"><Menu className="h-5 w-5" /></Button>} />
            <SheetContent side="right" className="w-[300px] p-0 bg-[#0f172a] border-l border-[#f59e0b]/30">
              <div className="flex flex-col gap-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-lg flex items-center justify-center">
                      <span className="text-[#0f172a] font-bold">M</span>
                    </div>
                    <span className="font-bold text-white">MBCT</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-gray-400">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-3 text-base font-medium text-gray-300 rounded-lg hover:bg-[#f59e0b]/10 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-3">
                  <Link 
                    href={`/${lang === 'zh' ? 'en' : 'zh'}/`} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-[#f59e0b]"
                  >
                    <Globe className="w-4 h-4" />
                    {lang === 'zh' ? 'English' : '中文'}
                  </Link>
                  
                  <Link href={`/${lang}/login`} onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#0f172a]"
                    >
                      <User className="w-4 h-4 mr-2" />
                      登录 / 注册
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}