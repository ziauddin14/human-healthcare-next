/**
 * Pricing Page
 * Transparent pricing plans for healthcare services
 */
import { Metadata } from 'next'
import PricingPageClient from './pricing-client'

export const metadata: Metadata = {
  title: 'Pricing | Human Healthcare | Transparent Healthcare Plans',
  description: 'Transparent pricing plans for our healthcare services tailored to your needs. Choose from flexible packages for doctor visits, nursing care, and comprehensive health monitoring.',
  openGraph: {
    title: 'Pricing | Human Healthcare | Transparent Healthcare Plans',
    description: 'Transparent pricing plans for our healthcare services tailored to your needs. Choose from flexible packages for doctor visits, nursing care, and comprehensive health monitoring.',
    url: 'https://human-healthcare.com/pricing',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Human Healthcare Pricing Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Human Healthcare | Transparent Healthcare Plans',
    description: 'Transparent pricing plans for our healthcare services tailored to your needs. Choose from flexible packages for doctor visits, nursing care, and comprehensive health monitoring.',
    images: ['/og-image.jpg'],
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
