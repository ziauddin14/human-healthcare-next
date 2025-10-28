/**
 * About Page
 * Our Story and Mission
 */
import { Metadata } from 'next'
import AboutPageClient from './about-client'

export const metadata: Metadata = {
  title: 'About Us - Human Healthcare | Our Story & Mission',
  description: 'Learn about Human Healthcare\'s mission to bring American healthcare to your doorstep in Karachi. Discover our story, values, and commitment to compassionate care.',
  openGraph: {
    title: 'About Us - Human Healthcare | Our Story & Mission',
    description: 'Learn about Human Healthcare\'s mission to bring American healthcare to your doorstep in Karachi.',
    url: 'https://human-healthcare.com/about',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Human Healthcare - Our Story & Mission',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Human Healthcare | Our Story & Mission',
    description: 'Learn about Human Healthcare\'s mission to bring American healthcare to your doorstep in Karachi.',
    images: ['/og-image.jpg'],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}