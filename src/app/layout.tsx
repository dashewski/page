import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nik Dashewski',
  description: 'IT-entrepreneur & developer. Backend, crypto, AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
