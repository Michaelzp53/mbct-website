'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  isManualOverride: boolean
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
  isManualOverride: false,
})

export function useTheme() {
  return useContext(ThemeContext)
}

/** 判断访客本地时间是否在白天（6:00-18:00，访客本地时间） */
function isDaytime(): boolean {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18
}

/** 根据预设时间获取主题 */
function getScheduledTheme(): Theme {
  return isDaytime() ? 'light' : 'dark'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isManualOverride, setIsManualOverride] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // 优先检查手动覆盖（sessionStorage，浏览器关闭后失效）
    const manual = sessionStorage.getItem('mbct_theme_override') as Theme | null
    if (manual === 'light' || manual === 'dark') {
      setThemeState(manual)
      setIsManualOverride(true)
    } else {
      // 无手动覆盖，按访客本地时间预设
      setThemeState(getScheduledTheme())
      setIsManualOverride(false)
    }

    // 每5分钟重新检查预设时间（仅非手动覆盖时生效）
    const interval = setInterval(() => {
      if (!sessionStorage.getItem('mbct_theme_override')) {
        setThemeState(getScheduledTheme())
      }
    }, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  // 应用主题到 html 元素
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    setIsManualOverride(true)
    sessionStorage.setItem('mbct_theme_override', t)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isManualOverride }}>
      {children}
    </ThemeContext.Provider>
  )
}
