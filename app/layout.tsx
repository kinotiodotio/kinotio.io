import '@/app/globals.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { cn } from '@/lib/utils'
import { DATA } from '@/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: DATA.keywords,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'en',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html suppressHydrationWarning>
      <Script
        async
        src="https://insight.kinotio.io/script.js"
        data-website-id="f360a477-254b-4a7e-803b-e3915e903a00"
      />
      <Script
        async
        src="https://kinotio.instatus.com/en/6f8e5fad/widget/script.js"
      />
      <body className={cn('min-h-screen', inter.className)}>
        <div className="min-h-screen bg-gradient-to-br from-black via-[#1E3E62] to-[#FF6500] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-20"></div>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
