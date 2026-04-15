'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Globe, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import type { Dict } from '@/lib/dicts'

interface NavbarProps {
  lang: string
  dict: Dict
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { nav } = dict

  const navLinks = [
    { href: `/${lang}/`, label: nav.home },
    { href: `/${lang}/knowledge`, label: lang === 'zh' ? '行业前沿' : 'Knowledge' },
    { href: `/${lang}/about`, label: nav.about },
    { href: `/${lang}/services`, label: nav.services },
    { href: `/${lang}/cases`, label: nav.cases },
    { href: `/${lang}/contact`, label: nav.contact },
    { href: `/${lang}/contact?type=plan`, label: nav.getPlan },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f59e0b]/30 bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f172a]/90">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}/`} className="flex items-center gap-3">
            <Image src="/MBCT_final_gold.png" alt="MBCT Logo" width={46} height={46} className="object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-none">MBCT</span>
              <span className="text-xs text-gray-400">Marvelbros Commercial Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-2 py-2 text-sm font-medium text-gray-300 rounded-lg hover:bg-[#f59e0b]/10 hover:text-[#f59e0b] transition-colors whitespace-nowrap'
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
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </Link>

            {/* Login/Register with gold border */}
            <Link href={`/${lang}/login`}>
              <Button
                variant="outline"
                className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#0f172a] font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-1.5"
              >
                <User className="w-4 h-4" />
                {nav.login}
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
                    <Image src="/MBCT_final_gold.png" alt="MBCT Logo" width={37} height={37} className="object-contain" />
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
                    {lang === 'zh' ? 'EN' : '中文'}
                  </Link>

                  <Link href={`/${lang}/login`} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#0f172a]"
                    >
                      <User className="w-4 h-4 mr-2" />
                      {nav.login}
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
