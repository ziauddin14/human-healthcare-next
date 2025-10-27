/**
 * Contact Feature Types
 * Defines TypeScript types for contact-related state and actions
 */

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactState {
  formData: ContactFormData | null
  isLoading: boolean
  error: string | null
  success: boolean
}

