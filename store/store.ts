/**
 * Redux Store Configuration
 * Central store setup with all slices
 */
import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '@/features/contact/contactSlice'
import uiReducer from '@/features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

