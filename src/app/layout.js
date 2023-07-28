
import Header from './components/header/Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Albert Arques Portfolio',
  description: 'Muestra de trabajos de Albert Arques',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${opensans.className} bg-gray-200`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
