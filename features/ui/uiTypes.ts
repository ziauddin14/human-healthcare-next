/**
 * UI Feature Types
 * Defines TypeScript types for UI-related state
 */

export type Theme = 'light' | 'dark'

export interface UIState {
  theme: Theme
  isMenuOpen: boolean
}

