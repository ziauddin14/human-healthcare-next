/**
 * Contact Page
 * Fully functional contact form with validation and Redux state management
 */
import { Metadata } from 'next'
import ContactPageClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact Us - Human Healthcare | Get in Touch Today',
  description: 'Contact Human Healthcare for professional healthcare services at your doorstep in Karachi. Call +92 319-2060174 or send us a message. We\'re here to help.',
  openGraph: {
    title: 'Contact Us - Human Healthcare | Get in Touch Today',
    description: 'Contact Human Healthcare for professional healthcare services at your doorstep in Karachi. Call +92 319-2060174 or send us a message.',
    url: 'https://human-healthcare.com/contact',
    siteName: 'Human Healthcare',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Human Healthcare - Get in Touch Today',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Human Healthcare | Get in Touch Today',
    description: 'Contact Human Healthcare for professional healthcare services at your doorstep in Karachi. Call +92 319-2060174 or send us a message.',
    images: ['/og-image.jpg'],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}