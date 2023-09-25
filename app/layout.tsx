import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from "./providers";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Second Fazt Video Project',
  description: 'Project made following Fazt Video',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen ${roboto.className}`}>
        <Providers>
          <div className='h-full w-full'>
            {children} 
          </div>
        </Providers>
      </body>
    </html>
  )
}
