import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nik Dashewski',
  description: 'Product-director & developer. Backend, web3, AI and financial services.',
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
