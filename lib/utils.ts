/**
 * Utility Functions
 * Shared helper functions and utilities
 */

/**
 * Combines Tailwind CSS classes with conditional classes
 * @param classes - Array of class strings, objects, or undefined values
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Debounce function for delaying function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

