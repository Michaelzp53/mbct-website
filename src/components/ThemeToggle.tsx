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
    <div className={`relative flex items-center gap-0.5 border border-slate-300 bg-white p-0.5 dark:border-slate-700 dark:bg-slate-900 ${className}`}>
      <button
        onClick={() => setTheme('light')}
        className={`
          flex cursor-pointer items-center gap-1.5 px-2 py-1.5 text-xs font-medium transition-colors
          ${theme === 'light'
            ? 'bg-[#0b4a6f] text-white'
            : 'text-slate-500 hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300'}
        `}
        title={isZh ? '白天模式' : 'Light mode'}
      >
        <Sun className="w-3.5 h-3.5" />
        <span>{isZh ? '昼' : 'Light'}</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`
          flex cursor-pointer items-center gap-1.5 px-2 py-1.5 text-xs font-medium transition-colors
          ${theme === 'dark'
            ? 'bg-slate-800 text-white'
            : 'text-slate-500 hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300'}
        `}
        title={isZh ? '夜间模式' : 'Dark mode'}
      >
        <Moon className="w-3.5 h-3.5" />
        <span>{isZh ? '夜' : 'Dark'}</span>
      </button>

      {isManualOverride && (
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#d98b28]" title={isZh ? '已手动切换，关闭浏览器后恢复自动' : 'Manual override, will reset on browser close'} />
      )}
    </div>
  )
}
