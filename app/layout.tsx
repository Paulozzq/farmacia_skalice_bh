import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Herbolaria Skalice',
  description: 'Remedios del viejo reino — Inspirado en Kingdom Come Deliverance II',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-green-100 font-serif">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
