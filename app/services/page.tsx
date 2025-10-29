
import { Metadata } from 'next'
import ServicesPageClient from './services-client'

export const metadata: Metadata = {
  title: 'Our Services - Human Healthcare | Comprehensive Healthcare at Home',
  description: 'Discover our comprehensive healthcare services including doctor home visits, nursing care, physiotherapy, and health monitoring. Professional care brought to your doorstep in Karachi.',
  openGraph: {
    title: 'Our Services - Human Healthcare | Comprehensive Healthcare at Home',
    description: 'Discover our comprehensive healthcare services including doctor home visits, nursing care, physiotherapy, and health monitoring.',
    url: 'https://human-healthcare.com/services',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Human Healthcare Services - Comprehensive Healthcare at Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Human Healthcare | Comprehensive Healthcare at Home',
    description: 'Discover our comprehensive healthcare services including doctor home visits, nursing care, physiotherapy, and health monitoring.',
    images: ['/og-image.jpg'],
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}