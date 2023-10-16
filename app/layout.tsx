import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/layout/Header'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Roody',
    default: 'Roody'
  },
  description:
    'I am a software engineer based in Germany, passionate about creating innovative solutions.',
  keywords: [
    'roody',
    'portfolio',
    'blog',
    'web development',
    'web design',
    'full-stack development',
    'back-end development',
    'react',
    'nextjs',
    'articles',
    'technology blog',
    'docker',
    'raspberry pi'
  ],
  openGraph: {
    title: 'Roody',
    description:
      'I am a software engineer based in Germany, passionate about creating innovative solutions.',
    url: 'https://roody.io',
    siteName: 'Roody',
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Roody',
    card: 'summary_large_image'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon-180x180.png'
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL as string,
    languages: {
      'en-US': process.env.NEXT_PUBLIC_APP_URL as string
    }
  },
  manifest: `/site.webmanifest`
}
export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-[100vh]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="container grow flex">{children}</main>
          <Footer />
          {modal}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
