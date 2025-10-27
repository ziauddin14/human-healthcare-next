'use client'

/**
 * Theme Provider Wrapper
 * Handles theme class application to html element
 */
import { useEffect } from 'react'
import { useAppSelector } from '@/store'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.ui.theme)

  useEffect(() => {
    // Apply theme class to html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return <>{children}</>
}

