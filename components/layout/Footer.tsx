/**
 * Footer Component
 * Simple footer with copyright information
 * Responsive and centered
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-gray-950 text-slate-300 py-12 border-t border-slate-800 shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-center text-base transition-colors duration-500 ease-in-out">
          &copy; {currentYear} Human Healthcare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

