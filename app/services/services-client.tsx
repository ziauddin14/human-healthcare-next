'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Skeleton } from '@/app/components/ui/skeleton'
import { useState, useEffect } from 'react'

export default function ServicesPageClient() {
  const [isMainServicesLoaded, setIsMainServicesLoaded] = useState(false)
  const [isAdditionalServicesLoaded, setIsAdditionalServicesLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delays for different sections
    const mainTimer = setTimeout(() => {
      setIsMainServicesLoaded(true)
    }, 1200)

    const additionalTimer = setTimeout(() => {
      setIsAdditionalServicesLoaded(true)
    }, 1800)

    return () => {
      clearTimeout(mainTimer)
      clearTimeout(additionalTimer)
    }
  }, [])

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-slate-900 dark:text-slate-100"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Comprehensive healthcare services brought to your doorstep
        </motion.p>
      </section>

      {/* Main Services */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {!isMainServicesLoaded ? (
          // Skeleton loaders for main services
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
              <Skeleton className="w-16 h-16 mb-4 rounded-full" />
              <Skeleton className="w-3/4 h-8 mb-6" />
              <div className="space-y-3">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-5/6 h-4" />
                <Skeleton className="w-4/5 h-4" />
              </div>
            </div>
          ))
        ) : (
          [
            {
              title: "Home-Based Comprehensive Care",
              description: "Health expertise that meets you where you are. Personalized care, tailored to all your needs, brought right to your doorstep.",
              icon: "🏠",
              color: "blue"
            },
            {
              title: "American and UK Specialists Opinion",
              description: "Access American, Canadian, and UK medical expertise. From cardiology, neurology, gastroenterology to primary care and geriatrics.",
              icon: "🌍",
              color: "indigo"
            },
            {
              title: "Regular Health Screenings",
              description: "Stay proactive with inclusive annual screenings and labs to keep you ahead in your health journey.",
              icon: "🔍",
              color: "purple"
            },
            {
              title: "No Lab Visits Required",
              description: "Our in-home phlebotomy service takes care of blood tests, bringing the lab to your comfort zone.",
              icon: "🧪",
              color: "orange"
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                y: -8
              }}
              className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))
        )}
      </section>

      {/* Additional Services */}
      <section className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 text-slate-900 dark:text-slate-100"
        >
          Additional Benefits
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {!isAdditionalServicesLoaded ? (
            // Skeleton loaders for additional services
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                <Skeleton className="w-16 h-16 mb-4 rounded-full" />
                <Skeleton className="w-3/4 h-6 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4" />
                </div>
              </div>
            ))
          ) : (
            [
              {
                title: "Hospital Support",
                description: "During hospital admissions, we're by your side offering attendance and support on behalf of family members.",
                icon: "🏥",
                color: "blue"
              },
              {
                title: "Instant Messaging",
                description: "Reach out to our medical team anytime through our instant messaging service for questions or concerns.",
                icon: "💬",
                color: "indigo"
              },
              {
                title: "Flexible Healthcare",
                description: "Choose from in-person visits or connect virtually, as your lifestyle demands.",
                icon: "📱",
                color: "purple"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  y: -8
                }}
                className="p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-16 rounded-2xl shadow-xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 font-light">
            Choose from our flexible pricing plans designed to meet your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-white to-blue-50 text-blue-600 font-bold px-10 py-5 rounded-2xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-blue-200 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                Contact Us Today
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="tel:+923192060174"
                className="inline-block border-2 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                Call Now: 0319-2060174
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
