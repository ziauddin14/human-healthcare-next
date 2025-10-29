'use client'
import { useEffect, useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import { store, useAppSelector, useAppDispatch } from '@/store'
import { setTheme } from '@/features/ui/uiSlice'

function ThemeWatcher() {
  // Dark mode locked: no runtime theme manipulation
  return null
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWatcher />
      {children}
    </Provider>
  )
}
