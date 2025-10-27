/**
 * Contact Page
 * Get in touch with Human Healthcare
 */

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Connect With Human Healthcare
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're here to answer your questions and help you get started
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Details */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Main Office
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HQ40 c/o E40, PRECHS, Bl 10A,<br />
                  Gulshan-e-Iqbal, Karachi, Pakistan
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Phone Numbers
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  📞 <a href="tel:+923192060174" className="hover:text-blue-600 dark:hover:text-blue-400">+92 319-2060174</a><br />
                  📞 <a href="tel:+13199363574" className="hover:text-blue-600 dark:hover:text-blue-400">+1 319 936-3574</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  📧 <a href="mailto:service@human-healthcare.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    service@human-healthcare.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  🕐 09:00 AM - 06:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              📱 Send us a WhatsApp Message
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              <a href="https://wa.me/13199363574" className="hover:text-green-600 dark:hover:text-green-400 font-semibold">
                +1 (319) 936-3574
              </a>
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Location
          </h3>
          <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Map will be displayed here
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-6">
          Book Your Appointment Today
        </h2>
        <p className="text-xl mb-8">
          Call us now at{' '}
          <a href="tel:+923192060174" className="underline font-bold">
            0319-2060174
          </a>
        </p>
        <p className="text-lg">
          Give your parents the care they deserve!
        </p>
      </section>
    </div>
  )
}

