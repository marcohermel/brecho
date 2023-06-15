import './globals.css'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Closet do Bem',
  description: 'Closet do Bem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
