/**
 * UI Slice
 * Redux slice for managing UI state (modals, navigation, notifications)
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UIState, Notification } from './uiTypes'

const initialState: UIState = {
  isMenuOpen: false,
  activeModal: null,
  notifications: [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload
    },
    setActiveModal: (state, action: PayloadAction<string | null>) => {
      state.activeModal = action.payload
    },
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'timestamp'>>) => {
      const notification: Notification = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: Date.now(),
      }
      state.notifications.push(notification)
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload)
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
  },
})

export const {
  toggleMenu,
  setMenuOpen,
  setActiveModal,
  addNotification,
  removeNotification,
  clearNotifications,
} = uiSlice.actions
export default uiSlice.reducer

