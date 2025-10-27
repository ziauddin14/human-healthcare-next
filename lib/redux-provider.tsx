'use client'

/**
 * Redux Provider Wrapper
 * Client component that wraps the app with Redux Provider
 */
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={store}>{children}</Provider>
}

