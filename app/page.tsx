/**
 * Home Page
 * Healthcare at Your Doorstep
 */
import { Metadata } from 'next'
import HomePageClient from './home-client'

export const metadata: Metadata = {
  title: 'Human Healthcare - Healthcare at Your Doorstep',
  description: 'Seamless, Doctor-Led Care at Home. Professional healthcare services brought to your doorstep in Karachi. Serving Gulshan, PECHS, Defence, Malir Cantt, North Nazimabad, and Clifton.',
  openGraph: {
    title: 'Human Healthcare - Healthcare at Your Doorstep',
    description: 'Seamless, Doctor-Led Care at Home. Professional healthcare services brought to your doorstep in Karachi.',
    url: 'https://human-healthcare.com',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Human Healthcare - Healthcare at Your Doorstep',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Healthcare - Healthcare at Your Doorstep',
    description: 'Seamless, Doctor-Led Care at Home. Professional healthcare services brought to your doorstep in Karachi.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return <HomePageClient />
}