'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Skeleton } from '@/app/components/ui/skeleton'
import { useState, useEffect } from 'react'

export default function PricingPageClient() {
  const [isPricingLoaded, setIsPricingLoaded] = useState(false)
  const [isFeaturesLoaded, setIsFeaturesLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delays for different sections
    const pricingTimer = setTimeout(() => {
      setIsPricingLoaded(true)
    }, 1000)

    const featuresTimer = setTimeout(() => {
      setIsFeaturesLoaded(true)
    }, 1500)

    return () => {
      clearTimeout(pricingTimer)
      clearTimeout(featuresTimer)
    }
  }, [])

  const pricingPlans = [
    {
      name: "Basic Care",
      price: "PKR 2,500",
      period: "per visit",
      description: "Essential healthcare services for routine check-ups and consultations",
      features: [
        "Doctor home visit",
        "Basic health assessment",
        "Prescription management",
        "Follow-up consultation",
        "Health report via WhatsApp"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Comprehensive Care",
      price: "PKR 4,500",
      period: "per visit",
      description: "Complete healthcare package with nursing support and monitoring",
      features: [
        "Doctor home visit",
        "Nursing care (2 hours)",
        "Vital signs monitoring",
        "Lab sample collection",
        "Medication administration",
        "Health report & recommendations",
        "24/7 phone support"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Premium Care",
      price: "PKR 7,500",
      period: "per visit",
      description: "Full-service healthcare with specialist consultation and ongoing support",
      features: [
        "Specialist doctor visit",
        "Nursing care (4 hours)",
        "Comprehensive health screening",
        "Lab tests & diagnostics",
        "Physiotherapy session",
        "Medication management",
        "Weekly health reports",
        "Priority emergency support",
        "Family health consultation"
      ],
      popular: false,
      color: "purple"
    }
  ]

  const additionalServices = [
    {
      name: "Emergency Visit",
      price: "PKR 3,500",
      description: "Urgent medical attention within 2 hours",
      icon: "🚨"
    },
    {
      name: "Lab Tests",
      price: "PKR 1,200",
      description: "Blood work and diagnostic tests at home",
      icon: "🧪"
    },
    {
      name: "Physiotherapy",
      price: "PKR 2,000",
      description: "Physical therapy and rehabilitation services",
      icon: "🏋️‍♂️"
    },
    {
      name: "Health Monitoring",
      price: "PKR 1,500",
      description: "Daily health check-ins and monitoring",
      icon: "📊"
    }
  ]

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
          Transparent Pricing Plans
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Choose the healthcare plan that best fits your needs. All our services are designed to provide quality care at your doorstep.
        </motion.p>
      </section>

      {/* Pricing Plans */}
      <section className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100"
        >
          Choose Your Plan
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {!isPricingLoaded ? (
            // Skeleton loaders for pricing plans
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                <Skeleton className="w-32 h-8 mb-4" />
                <Skeleton className="w-24 h-12 mb-2" />
                <Skeleton className="w-16 h-4 mb-6" />
                <Skeleton className="w-full h-4 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4" />
                  <Skeleton className="w-4/5 h-4" />
                  <Skeleton className="w-3/4 h-4" />
                </div>
                <Skeleton className="w-full h-12 mt-6 rounded-lg" />
              </div>
            ))
          ) : (
            pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  y: -8
                }}
                className={`relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out border-2 ${
                  plan.popular 
                    ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100"
        >
          Additional Services
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {!isFeaturesLoaded ? (
            // Skeleton loaders for additional services
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                <Skeleton className="w-12 h-12 mb-4 rounded-full" />
                <Skeleton className="w-24 h-6 mb-2" />
                <Skeleton className="w-20 h-4 mb-3" />
                <Skeleton className="w-full h-4" />
              </div>
            ))
          ) : (
            additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  y: -8
                }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {service.name}
                </h3>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {service.price}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "Are there any hidden charges?",
              answer: "No, our pricing is completely transparent. The price you see is what you pay - no hidden fees or surprise charges."
            },
            {
              question: "Can I change my plan later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Contact us to discuss your changing needs."
            },
            {
              question: "Do you accept insurance?",
              answer: "We work with most major insurance providers. Contact us to verify your coverage and benefits."
            },
            {
              question: "What if I need emergency care?",
              answer: "We provide emergency visits within 2 hours for urgent medical needs. Call our emergency line for immediate assistance."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100">
          Contact us today to discuss your healthcare needs and choose the perfect plan for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 hover:text-blue-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            Contact Us
          </Link>
          <a
            href="tel:+923192060174"
            className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            Call: 0319-2060174
          </a>
        </div>
      </motion.section>
    </div>
  )
}
