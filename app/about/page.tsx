/**
 * About Page
 * Our Story and Mission
 */
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Story
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Bringing American Healthcare to Your Doorstep
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Human Health Care Services Pvt Ltd is a Pakistani company headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi. 
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            An idea of Human Health LLC, a US-based startup, we bring world-class healthcare services to your doorstep.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Stress-Free Appointments
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            With healthcare accessibility at your doorstep, save time and avoid traveling hassles, freeing you from mental agony and unmet healthcare needs.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Compassionate, Personalized Care
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our patient-centered approach ensures your needs are met with kindness and understanding.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Professional Staff
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our local team of experts is dedicated to ensuring your healthcare needs are met with personalized attention.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Peace of Mind for Overseas Pakistanis
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our services eliminate the need to fly back to Karachi, providing peace of mind for you and your loved ones.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 dark:bg-gray-800 text-white p-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2 text-blue-400">100%</div>
            <div className="text-gray-300">Reduced Emergencies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-green-400">100%</div>
            <div className="text-gray-300">Money Back Guarantee</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-yellow-400">0</div>
            <div className="text-gray-300">COVID Positive Cases</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2 text-purple-400">100%</div>
            <div className="text-gray-300">Trust</div>
          </div>
        </div>
      </section>
    </div>
  )
}

