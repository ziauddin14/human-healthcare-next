"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en" className="dark" suppressHydrationWarning>
  <body className={`${inter.variable} font-sans antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}>
    <Providers>
      <div className="min-h-screen bg-gray-950 text-gray-100 transition-colors duration-300">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </Providers>
  </body>
</html>

  );
}
