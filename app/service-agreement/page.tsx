/**
 * Service Agreement Page
 * Terms, conditions, and client commitments
 */
import { Metadata } from 'next'
import ServiceAgreementPageClient from './service-agreement-client'

export const metadata: Metadata = {
  title: 'Service Agreement | Human Healthcare | Terms & Conditions',
  description: 'Review the service agreement outlining terms, conditions, and client commitments for Human Healthcare services. Understand your rights and responsibilities.',
  openGraph: {
    title: 'Service Agreement | Human Healthcare | Terms & Conditions',
    description: 'Review the service agreement outlining terms, conditions, and client commitments for Human Healthcare services.',
    url: 'https://human-healthcare.com/service-agreement',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Human Healthcare Service Agreement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Agreement | Human Healthcare | Terms & Conditions',
    description: 'Review the service agreement outlining terms, conditions, and client commitments for Human Healthcare services.',
    images: ['/og-image.jpg'],
  },
}

export default function ServiceAgreementPage() {
  return <ServiceAgreementPageClient />
}
