'use client'

/**
 * Theme Toggle Component
 * Allows users to switch between light and dark modes
 * Connected to Redux uiSlice for state management
 */
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleTheme, setTheme } from '@/features/ui/uiSlice'

export default function ThemeToggle() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.ui.theme)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    
    if (savedTheme) {
      dispatch(setTheme(savedTheme))
    }
  }, [dispatch])

  // Apply theme to document whenever it changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <button
      onClick={handleToggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className="text-gray-700 dark:text-gray-300 text-xl">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

