/**
 * Services Page
 * Comprehensive Healthcare Services
 */
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-foreground transition-colors duration-300">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 transition-colors duration-300">
          Comprehensive healthcare services brought to your doorstep
        </p>
      </section>

      {/* Main Services */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Home-Based Comprehensive Care
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Health expertise that meets you where you are. Personalized care, tailored to all your needs, brought right to your doorstep.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-indigo-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            American and UK Specialists Opinion
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Access American, Canadian, and UK medical expertise. From cardiology, neurology, gastroenterology to primary care and geriatrics.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Regular Health Screenings
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Stay proactive with inclusive annual screenings and labs to keep you ahead in your health journey.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            No Lab Visits Required
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our in-home phlebotomy service takes care of blood tests, bringing the lab to your comfort zone.
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          Additional Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hospital Support
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              During hospital admissions, we're by your side offering attendance and support on behalf of family members.
            </p>
          </div>

          <div className="p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Instant Messaging
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Reach out to our medical team anytime through our instant messaging service for questions or concerns.
            </p>
          </div>

          <div className="p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Flexible Healthcare
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Choose from in-person visits or connect virtually, as your lifestyle demands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-16 rounded-2xl shadow-xl text-center">
        <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-2xl mb-10 font-light">
          Choose from our flexible pricing plans designed to meet your healthcare needs.
        </p>
        <div className="flex gap-6 justify-center">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-white to-blue-50 text-blue-600 font-bold px-10 py-5 rounded-2xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-200"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}

