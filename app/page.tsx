/**
 * Home Page
 * Healthcare at Your Doorstep
 */
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20 dark:from-slate-800/50 dark:to-slate-900/50"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
          >
            Healthcare at Your Doorstep
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 dark:text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4"
          >
            Seamless, Doctor-Led Care at Home, So You Can Focus on What Matters Most – Even From Abroad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="text-xl font-semibold text-white px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl inline-block border border-white/30">
              Most popular premium package costs $99/month
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-4 md:px-12 md:py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Book an appointment"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-20 text-slate-900 dark:text-slate-100"
          >
            Here's How We Help
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🏥",
                title: "Doctor Home Visits",
                description: "Get professional consultations without the hassle of hospital trips.",
                color: "blue"
              },
              {
                icon: "👩‍⚕️",
                title: "Nursing Care at Home",
                description: "Trained nurses for chronic conditions & more.",
                color: "green"
              },
              {
                icon: "🏋️‍♂️",
                title: "Physio at Home",
                description: "Regain mobility & strength with expert rehabilitation.",
                color: "purple"
              },
              {
                icon: "📊",
                title: "Health Monitoring & Support",
                description: "Stay updated on your loved one's health anytime.",
                color: "orange"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:border-blue-300 dark:hover:border-blue-600`}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Serving Karachi's Most Trusted Families
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            In Gulshan, PECHS, Defence, Malir Cantt, North Nazimabad, Clifton
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Call Today for Peace of Mind
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light">
            📞 Book an appointment by calling{' '}
            <a 
              href="tel:+923192060174" 
              className="underline font-bold hover:text-blue-100 transition-all duration-300 ease-in-out decoration-2 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              0319-2060174
            </a>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-blue-100">
            Give your parents the care they deserve!
          </p>
        </motion.div>
      </section>
    </div>
  )
}
