'use client'
import { motion } from 'framer-motion'
import { Skeleton } from '@/app/components/ui/skeleton'
import { useState, useEffect } from 'react'

export default function AboutPageClient() {
  const [isMissionLoaded, setIsMissionLoaded] = useState(false)
  const [isFeaturesLoaded, setIsFeaturesLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delay for the mission section
    const missionTimer = setTimeout(() => {
      setIsMissionLoaded(true)
    }, 1000)

    // Simulate loading delay for the features section
    const featuresTimer = setTimeout(() => {
      setIsFeaturesLoaded(true)
    }, 1500)

    return () => {
      clearTimeout(missionTimer)
      clearTimeout(featuresTimer)
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
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Bringing American Healthcare to Your Doorstep
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="mb-12 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-6 md:p-10 lg:p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {!isMissionLoaded ? (
            <div className="space-y-6">
              {/* Skeleton for heading */}
              <Skeleton className="w-64 h-8 sm:h-10 md:h-12 rounded-lg" />
              
              {/* Skeleton for first paragraph */}
              <div className="space-y-3">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-3/4 h-4 rounded" />
              </div>
              
              {/* Skeleton for second paragraph */}
              <div className="space-y-3">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-5/6 h-4 rounded" />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Human Health Care Services Pvt Ltd is a Pakistani company headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi. 
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                An idea of Human Health LLC, a US-based startup, we bring world-class healthcare services to your doorstep.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {!isFeaturesLoaded ? (
          // Skeleton loaders for features
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
              title: "Stress-Free Appointments",
              description: "With healthcare accessibility at your doorstep, save time and avoid traveling hassles, freeing you from mental agony and unmet healthcare needs.",
              gradient: "from-blue-50 to-indigo-50",
              border: "border-blue-100",
              hoverBorder: "hover:border-blue-300",
              icon: "🏥"
            },
            {
              title: "Compassionate, Personalized Care",
              description: "Our patient-centered approach ensures your needs are met with kindness and understanding.",
              gradient: "from-indigo-50 to-purple-50",
              border: "border-indigo-100",
              hoverBorder: "hover:border-indigo-300",
              icon: "❤️"
            },
            {
              title: "Professional Staff",
              description: "Our local team of experts is dedicated to ensuring your healthcare needs are met with personalized attention.",
              gradient: "from-purple-50 to-pink-50",
              border: "border-purple-100",
              hoverBorder: "hover:border-purple-300",
              icon: "👨‍⚕️"
            },
            {
              title: "Peace of Mind for Overseas Pakistanis",
              description: "Our services eliminate the need to fly back to Karachi, providing peace of mind for you and your loved ones.",
              gradient: "from-orange-50 to-yellow-50",
              border: "border-orange-100",
              hoverBorder: "hover:border-orange-300",
              icon: "✈️"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                y: -8
              }}
              className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out transform border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))
        )}
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Trusted by Families Across Karachi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
            <div className="text-blue-100">Families Served</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold mb-2">1000+</div>
            <div className="text-blue-100">Successful Visits</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
