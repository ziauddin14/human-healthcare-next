'use client'

/**
 * Theme Provider Wrapper
 * Ensures the theme class is applied to the <html> element and
 * initializes from localStorage to avoid hydration mismatches.
 */
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { setTheme } from '@/features/ui/uiSlice'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.ui.theme)

  // Initialize theme from localStorage on first mount
  useEffect(() => {
    const storedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark' | null
    const initialTheme = storedTheme ?? 'light'
    // Apply immediately to prevent flash
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    document.documentElement.classList.toggle('light', initialTheme !== 'dark')
    dispatch(setTheme(initialTheme))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React to store theme changes
  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    // Persist selection
    localStorage.setItem('theme', theme)
  }, [theme])

  return <>{children}</>
}

