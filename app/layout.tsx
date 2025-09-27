import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Inter, Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const inter = Inter({ 
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
  variable: '--font-inter'
})
const sourceSerif4 = Source_Serif_4({ 
  weight: ["200","300","400","500","600","700","800","900"],
  subsets: ['latin'],
  variable: '--font-source-serif'
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${sourceSerif4.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
