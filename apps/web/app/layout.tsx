import { Geist, Geist_Mono } from 'next/font/google'

import '@workspace/ui/globals.css'
import Nav from '@/components/layouts/Nav'
import { Providers } from '@/components/providers'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${
          // biome-ignore lint/nursery/useSortedClasses: <explanation>
          fontMono.variable
        } bg-violet-gray-50 font-sans antialiased`}
      >
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
