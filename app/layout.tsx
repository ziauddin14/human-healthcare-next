import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ReduxProvider from '@/lib/redux-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Human Healthcare',
  description: 'Your trusted healthcare platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
