'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppDispatch, useAppSelector } from '@/store'
import { submitContactForm, resetContact } from '@/features/contact/contactSlice'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/app/components/ui/skeleton'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPageClient() {
  const dispatch = useAppDispatch()
  const { isLoading, success, error } = useAppSelector((state) => state.contact)
  const [isContactInfoLoaded, setIsContactInfoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContactInfoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await dispatch(submitContactForm(data)).unwrap()
    reset()
  }

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetContact())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success, error, dispatch])

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
          Connect With Human Healthcare
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4"
        >
          We're here to answer your questions and help you get started
        </motion.p>
      </section>

      {/* Success/Error Messages */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200"
        >
          {success}
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-800 dark:text-red-200"
        >
          {error}
        </motion.div>
      )}

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-12 md:mb-20"
      >
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-slate-900 dark:text-slate-100">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
              >
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-100 transition-colors duration-200"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
              >
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-100 transition-colors duration-200"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
              >
                Subject *
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-100 transition-colors duration-200"
                placeholder="What is this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
              >
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-slate-100 transition-colors duration-200 resize-vertical"
                placeholder="Tell us how we can help you..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {!isContactInfoLoaded ? (
          <div className="space-y-6">
            <Skeleton className="w-64 h-8 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-40 h-5" />
              </div>
              <div className="space-y-3">
                <Skeleton className="w-16 h-6" />
                <Skeleton className="w-48 h-5" />
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          Or Contact Us Directly
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  📞 Phone
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <a href="tel:+923192060174" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    +92 319-2060174
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  📧 Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <a href="mailto:service@human-healthcare.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    service@human-healthcare.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  )
}
