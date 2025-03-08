import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zoey Lee | Hackathon Projects",
  description: "Builder, Entrepreneur, Athlete",
  icons: {
    icon: '/favicon.png', // /public path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <html lang="en" className="scroll-smooth dark">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}



import './globals.css'