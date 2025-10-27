/**
 * Redux Store Configuration
 * Central store setup with all slices
 * Configured for Next.js 14 App Router with Redux DevTools support
 */
import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '@/features/contact/contactSlice'
import uiReducer from '@/features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

