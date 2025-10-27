/**
 * Custom React Hooks
 * Shared custom hooks for the application
 */
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'

// Typed hooks for Redux
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

