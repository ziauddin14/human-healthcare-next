/**
 * UI Feature Types
 * Defines TypeScript types for UI-related state (modals, navigation, etc.)
 */

export interface UIState {
  isMenuOpen: boolean
  activeModal: string | null
  notifications: Notification[]
}

export interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  timestamp: number
}

