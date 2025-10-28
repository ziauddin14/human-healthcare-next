'use client'
import { motion } from 'framer-motion'
import { Skeleton } from '@/app/components/ui/skeleton'
import { useState, useEffect } from 'react'

export default function ServiceAgreementPageClient() {
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delay for content
    const timer = setTimeout(() => {
      setIsContentLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const sections = [
    {
      title: "1. Service Description",
      content: "Human Healthcare provides comprehensive healthcare services at your doorstep, including doctor visits, nursing care, physiotherapy, and health monitoring. Our services are designed to bring quality healthcare to your home, eliminating the need for hospital visits for routine care.",
      points: [
        "Doctor home visits for consultations and check-ups",
        "Nursing care for medication administration and monitoring",
        "Physiotherapy sessions for rehabilitation and mobility",
        "Health monitoring and regular check-ins",
        "Lab sample collection and diagnostic services",
        "Emergency medical support when needed"
      ]
    },
    {
      title: "2. Client Responsibilities",
      content: "To ensure the best possible care, clients are expected to:",
      points: [
        "Provide accurate medical history and current medications",
        "Ensure a safe and clean environment for healthcare providers",
        "Be present during scheduled visits or arrange for a responsible adult",
        "Follow medical advice and treatment plans as prescribed",
        "Notify us of any changes in health condition or medications",
        "Pay for services as per the agreed pricing structure",
        "Respect our healthcare providers and maintain professional conduct"
      ]
    },
    {
      title: "3. Service Terms",
      content: "Our services are provided under the following terms:",
      points: [
        "Services are available 24/7 for emergency situations",
        "Routine visits are scheduled based on availability and client needs",
        "All medical advice is provided by licensed healthcare professionals",
        "Prescriptions and treatments are based on professional medical judgment",
        "We maintain strict confidentiality of all medical information",
        "Services may be modified or discontinued with reasonable notice",
        "Emergency services are prioritized over routine appointments"
      ]
    },
    {
      title: "4. Payment Terms",
      content: "Payment for services is handled as follows:",
      points: [
        "Payment is due upon completion of each service",
        "We accept cash, bank transfers, and digital payment methods",
        "Emergency services may require advance payment or deposit",
        "Package deals and bulk services may have different payment terms",
        "Late payments may incur additional charges as per policy",
        "Refunds are provided only in cases of service failure on our part",
        "All prices are in Pakistani Rupees (PKR) unless otherwise specified"
      ]
    },
    {
      title: "5. Privacy and Confidentiality",
      content: "We are committed to protecting your privacy and medical information:",
      points: [
        "All medical records are kept strictly confidential",
        "Information is shared only with authorized healthcare providers",
        "We comply with all applicable privacy laws and regulations",
        "Client consent is required for sharing information with family members",
        "Medical records are securely stored and protected",
        "We do not sell or share personal information with third parties",
        "Clients have the right to access their medical records upon request"
      ]
    },
    {
      title: "6. Limitation of Liability",
      content: "While we strive to provide the best possible care, please note:",
      points: [
        "Our liability is limited to the cost of services provided",
        "We are not responsible for pre-existing conditions or complications",
        "Emergency situations may require hospital referral",
        "We provide home healthcare, not emergency room services",
        "Clients are responsible for following medical advice",
        "We maintain professional liability insurance as required",
        "Any disputes will be resolved through appropriate legal channels"
      ]
    },
    {
      title: "7. Cancellation and Refund Policy",
      content: "Cancellation and refund terms are as follows:",
      points: [
        "24-hour notice required for routine appointment cancellations",
        "Emergency cancellations are handled on a case-by-case basis",
        "No-show appointments may incur a cancellation fee",
        "Refunds are provided for services not rendered due to our fault",
        "Partial refunds may be available for incomplete services",
        "Refund requests must be submitted within 7 days of service",
        "Processing time for refunds is 5-10 business days"
      ]
    },
    {
      title: "8. Contact Information",
      content: "For questions, concerns, or service requests:",
      points: [
        "Phone: +92 319-2060174 (24/7 emergency line)",
        "Email: service@human-healthcare.com",
        "Address: E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi",
        "WhatsApp: Available for non-emergency inquiries",
        "Office Hours: 9:00 AM - 6:00 PM (Monday to Saturday)",
        "Emergency Services: Available 24/7",
        "Website: www.human-healthcare.com"
      ]
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-slate-900 dark:text-slate-100"
        >
          Service Agreement
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Please read this service agreement carefully. By using our healthcare services, you agree to the terms and conditions outlined below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Last Updated:</strong> January 2024 | <strong>Effective Date:</strong> January 1, 2024
          </p>
        </motion.div>
      </section>

      {/* Agreement Sections */}
      <section className="space-y-8">
        {!isContentLoaded ? (
          // Skeleton loaders for content
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
              <Skeleton className="w-48 h-6 mb-4" />
              <Skeleton className="w-full h-4 mb-4" />
              <Skeleton className="w-5/6 h-4 mb-6" />
              <div className="space-y-3">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-4/5 h-4" />
                <Skeleton className="w-3/4 h-4" />
                <Skeleton className="w-5/6 h-4" />
              </div>
            </div>
          ))
        ) : (
          sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
              }}
              className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {section.content}
              </p>
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 text-sm">•</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))
        )}
      </section>

      {/* Acceptance Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Agreement Acceptance
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg mb-6 text-blue-100">
            By using Human Healthcare services, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions outlined in this service agreement.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-sm text-blue-100 mb-4">
              <strong>Important:</strong> This agreement is legally binding. If you do not agree with any part of these terms, please do not use our services.
            </p>
            <p className="text-sm text-blue-100">
              For any questions about this agreement, please contact us at{' '}
              <a 
                href="mailto:service@human-healthcare.com" 
                className="underline hover:text-white transition-colors duration-300"
              >
                service@human-healthcare.com
              </a>
              {' '}or call{' '}
              <a 
                href="tel:+923192060174" 
                className="underline hover:text-white transition-colors duration-300"
              >
                +92 319-2060174
              </a>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Questions About Our Services?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
            Our team is here to help you understand our services and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Contact Us
            </a>
            <a
              href="tel:+923192060174"
              className="inline-block border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Call Now
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
