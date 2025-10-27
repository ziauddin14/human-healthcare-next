/**
 * Home Page
 * Healthcare at Your Doorstep
 */
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-gray-900 dark:via-slate-800 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Healthcare at Your Doorstep
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 dark:text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Seamless, Doctor-Led Care at Home, So You Can Focus on What Matters Most – Even From Abroad.
          </p>
          <p className="text-xl font-semibold text-white mb-12 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-2xl inline-block">
            Most popular premium package costs $99/month
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-4 md:px-12 md:py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg transform hover:-translate-y-1 hover:scale-105"
            aria-label="Book an appointment"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 bg-foreground transition-colors duration-300">
            Here's How We Help
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-background dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-105">
              <div className="text-5xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold mb-4 bg-foreground transition-colors duration-300">
                Doctor Home Visits
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                Get professional consultations without the hassle of hospital trips.
              </p>
            </div>

            <div className="bg-background dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-2 hover:border-green-300 dark:hover:border-green-600 hover:scale-105">
              <div className="text-5xl mb-6">👩‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4 bg-foreground transition-colors duration-300">
                Nursing Care at Home
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                Trained nurses for chronic conditions & more.
              </p>
            </div>

            <div className="bg-background dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-2 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105">
              <div className="text-5xl mb-6">🏋️‍♂️</div>
              <h3 className="text-2xl font-bold mb-4 bg-foreground transition-colors duration-300">
                Physio at Home
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                Regain mobility & strength with expert rehabilitation.
              </p>
            </div>

            <div className="bg-background dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600 hover:scale-105">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4 bg-foreground transition-colors duration-300">
                Health Monitoring & Support
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                Stay updated on your loved one's health anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Serving Karachi's Most Trusted Families
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            In Gulshan, PECHS, Defence, Malir Cantt, North Nazimabad, Clifton
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Call Today for Peace of Mind
          </h2>
          <p className="text-2xl mb-10 font-light">
            📞 Book an appointment by calling{' '}
            <a href="tel:+923192060174" className="underline font-bold hover:text-blue-100 transition-all duration-500 ease-in-out decoration-2 underline-offset-4">
              0319-2060174
            </a>
          </p>
          <p className="text-xl text-blue-100">
            Give your parents the care they deserve!
          </p>
        </div>
      </section>
    </div>
  )
}
