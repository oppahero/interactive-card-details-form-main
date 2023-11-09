import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  weight: '500',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: 'Interactive card details form by María López',
  description: 'FrontendMentor challenge',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
