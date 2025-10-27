/**
 * UI Slice
 * Redux slice for managing UI state (theme, menu)
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UIState, Theme } from './uiTypes'

const initialState: UIState = {
  theme: 'light',
  isMenuOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const { toggleTheme, setTheme, toggleMenu } = uiSlice.actions
export default uiSlice.reducer

