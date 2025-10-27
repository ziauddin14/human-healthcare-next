/**
 * Home Page
 * Landing page for the application
 */

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Human Healthcare
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Your trusted healthcare platform
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quality Care</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We provide top-notch healthcare services with a focus on patient well-being.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert Team</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our team consists of experienced healthcare professionals dedicated to your health.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Available 24/7</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We're here for you round the clock, providing care when you need it most.
          </p>
        </div>
      </section>
    </div>
  )
}
