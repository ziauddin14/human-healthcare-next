/**
 * Footer Component
 * Simple footer with copyright information
 * Responsive and centered with proper theme support
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 dark:bg-gray-900 text-slate-300 dark:text-slate-400 py-12 border-t border-gray-800 dark:border-gray-700 shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-center text-base transition-colors duration-500 ease-in-out">
          &copy; {currentYear} Human Healthcare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

