/**
 * Home Page
 * Healthcare at Your Doorstep
 */
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Healthcare at Your Doorstep
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Seamless, Doctor-Led Care at Home, So You Can Focus on What Matters Most – Even From Abroad.
          </p>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-8">
            Most popular premium package costs $99/month
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Here's How We Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Doctor Home Visits
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get professional consultations without the hassle of hospital trips.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Nursing Care at Home
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trained nurses for chronic conditions & more.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Physio at Home
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regain mobility & strength with expert rehabilitation.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Health Monitoring & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated on your loved one's health anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Serving Karachi's Most Trusted Families
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            In Gulshan, PECHS, Defence, Malir Cantt, North Nazimabad, Clifton
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Call Today for Peace of Mind
          </h2>
          <p className="text-xl mb-8">
            📞 Book an appointment by calling <a href="tel:+923192060174" className="underline font-bold">0319-2060174</a>
          </p>
          <p className="text-lg">
            Give your parents the care they deserve!
          </p>
        </div>
      </section>
    </div>
  )
}
