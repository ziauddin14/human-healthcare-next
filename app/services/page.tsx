/**
 * Services Page
 * Comprehensive Healthcare Services
 */
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive healthcare services brought to your doorstep
        </p>
      </section>

      {/* Main Services */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Home-Based Comprehensive Care
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Health expertise that meets you where you are. Personalized care, tailored to all your needs, brought right to your doorstep.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            American and UK Specialists Opinion
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Access American, Canadian, and UK medical expertise. From cardiology, neurology, gastroenterology to primary care and geriatrics.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Regular Health Screenings
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay proactive with inclusive annual screenings and labs to keep you ahead in your health journey.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            No Lab Visits Required
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our in-home phlebotomy service takes care of blood tests, bringing the lab to your comfort zone.
          </p>
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Additional Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Hospital Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              During hospital admissions, we're by your side offering attendance and support on behalf of family members.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Instant Messaging
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reach out to our medical team anytime through our instant messaging service for questions or concerns.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Flexible Healthcare
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from in-person visits or connect virtually, as your lifestyle demands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Choose from our flexible pricing plans designed to meet your healthcare needs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}

