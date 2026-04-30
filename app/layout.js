import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'CS Website',
  description: 'Computer Science Website',
  themeColor: '#111827',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased ${inter.variable}`}>
      <body className="bg-white text-gray-600 font-sans">{children}</body>
    </html>
  )
}
