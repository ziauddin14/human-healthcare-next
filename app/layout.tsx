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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Provider store={store}>
          <ThemeProvider>
            <div className="min-h-screen">
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
