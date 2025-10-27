/**
 * About Page
 * Our Story and Mission
 */
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-foreground transition-colors duration-300">
          Our Story
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 transition-colors duration-300">
          Bringing American Healthcare to Your Doorstep
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12 md:mb-20">
        <div className="bg-white dark:bg-slate-800 p-6 md:p-10 lg:p-12 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Human Health Care Services Pvt Ltd is a Pakistani company headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi. 
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            An idea of Human Health LLC, a US-based startup, we bring world-class healthcare services to your doorstep.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-slate-800 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Stress-Free Appointments
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With healthcare accessibility at your doorstep, save time and avoid traveling hassles, freeing you from mental agony and unmet healthcare needs.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-indigo-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Compassionate, Personalized Care
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our patient-centered approach ensures your needs are met with kindness and understanding.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Professional Staff
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our local team of experts is dedicated to ensuring your healthcare needs are met with personalized attention.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:bg-slate-800 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-orange-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Peace of Mind for Overseas Pakistanis
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our services eliminate the need to fly back to Karachi, providing peace of mind for you and your loved ones.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white p-16 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-6xl font-bold mb-4 text-blue-400">100%</div>
            <div className="text-xl text-gray-300">Reduced Emergencies</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-6xl font-bold mb-4 text-green-400">100%</div>
            <div className="text-xl text-gray-300">Money Back Guarantee</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-6xl font-bold mb-4 text-yellow-400">0</div>
            <div className="text-xl text-gray-300">COVID Positive Cases</div>
          </div>
          <div className="transform hover:scale-110 transition-all duration-300">
            <div className="text-6xl font-bold mb-4 text-purple-400">100%</div>
            <div className="text-xl text-gray-300">Trust</div>
          </div>
        </div>
      </section>
    </div>
  )
}

