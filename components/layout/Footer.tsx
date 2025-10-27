/**
 * Footer Component
 * Simple footer with copyright information
 * Responsive and centered
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {currentYear} Human Healthcare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

