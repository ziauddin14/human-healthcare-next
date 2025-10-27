'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ThemeProvider from './theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} font-sans transition-colors duration-300`}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
