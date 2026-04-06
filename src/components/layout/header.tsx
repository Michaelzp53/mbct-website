'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const services = [
  { title: '酒店SaaS管理系统', href: '/services/saas' },
  { title: '管理咨询服务', href: '/services/consulting' },
  { title: '可行性分析报告', href: '/services/feasibility' },
  { title: '运营诊断报告', href: '/services/diagnosis' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-navy to-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-navy text-lg leading-none">MBCT</span>
              <span className="text-xs text-brand-muted">迈创兄弟商业科技</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    关于我们
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'flex items-center gap-1')}>
                  服务 <ChevronDown className="h-4 w-4" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/solutions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    解决方案
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cases" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    案例
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    联系我们
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="btn-gold">
              获取方案
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">关于我们</Button>
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-brand-muted px-2">服务项目</p>
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-left">
                        {service.title}
                      </Button>
                    </Link>
                  ))}
                </div>
                <Link href="/solutions" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">解决方案</Button>
                </Link>
                <Link href="/cases" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">案例</Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">联系我们</Button>
                </Link>
                <div className="pt-4 border-t">
                  <Button className="w-full btn-gold">获取方案</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
