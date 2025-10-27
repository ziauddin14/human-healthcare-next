/**
 * Contact Slice
 * Redux slice for managing contact form state with async thunk for form submission
 */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ContactState, ContactFormData } from './contactTypes'

const initialState: ContactState = {
  formData: null,
  isLoading: false,
  error: null,
  success: false,
}

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

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
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.success = false
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isLoading = false
        state.success = true
        state.error = null
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false
        state.success = false
        state.error = action.payload as string
      })
  },
})

export const { setFormData, setLoading, setError, setSuccess, resetContact } = contactSlice.actions
export default contactSlice.reducer

