import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quiosque',
  description: 'Facilidade e agilidade para seu negócio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
