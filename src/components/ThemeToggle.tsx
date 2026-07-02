'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  lang?: string
  className?: string
}

export function ThemeToggle({ lang = 'zh', className = '' }: ThemeToggleProps) {
  const { theme, setTheme, isManualOverride } = useTheme()
  const isZh = lang === 'zh'

  return (
    <div className={`relative flex items-center gap-1 px-1 py-1 rounded-lg border border-border bg-muted/50 ${className}`}>
      <button
        onClick={() => setTheme('light')}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer
          ${theme === 'light'
            ? 'bg-white border border-sky-200 text-[#003b71] shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'}
        `}
        title={isZh ? '白天模式' : 'Light mode'}
      >
        <Sun className="w-3.5 h-3.5" />
        <span>{isZh ? '昼' : 'Light'}</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer
          ${theme === 'dark'
            ? 'bg-[#172033] border border-sky-300/30 text-sky-100 shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'}
        `}
        title={isZh ? '夜间模式' : 'Dark mode'}
      >
        <Moon className="w-3.5 h-3.5" />
        <span>{isZh ? '夜' : 'Dark'}</span>
      </button>

      {isManualOverride && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" title={isZh ? '已手动切换，关闭浏览器后恢复自动' : 'Manual override, will reset on browser close'} />
      )}
    </div>
  )
}
