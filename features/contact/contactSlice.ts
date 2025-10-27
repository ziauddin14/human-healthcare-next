/**
 * Contact Slice
 * Redux slice for managing contact form state
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactState, ContactFormData } from './contactTypes'

const initialState: ContactState = {
  formData: null,
  isLoading: false,
  error: null,
  success: false,
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ContactFormData>) => {
      state.formData = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload
    },
    resetContact: (state) => {
      state.formData = null
      state.isLoading = false
      state.error = null
      state.success = false
    },
  },
})

export const { setFormData, setLoading, setError, setSuccess, resetContact } = contactSlice.actions
export default contactSlice.reducer

