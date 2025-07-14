import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://stjudegcxchallenge.com'),
  title: 'St. Jude GCX Challenge - Play for Good',
  description: 'Play the free challenge for your chance to win a trip to GCX 2026! Support St. Jude Children\'s Research Hospital.',
  keywords: 'GCX, St. Jude, gaming, charity, challenge, contest, GCX 2026',
  icons: {
    icon: '/images/St.-Jude-logo.png',
    shortcut: '/images/St.-Jude-logo.png',
    apple: '/images/St.-Jude-logo.png',
  },
  openGraph: {
    title: 'St. Jude GCX Challenge - Play for Good',
    description: 'Play the free challenge for your chance to win a trip to GCX 2026!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gcx-dark text-white font-gaming antialiased">
        {children}
      </body>
    </html>
  )
} 