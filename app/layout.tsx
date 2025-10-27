'use client'

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
