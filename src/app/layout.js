import { Inter } from 'next/font/google'
import './globals.css'
//import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinyl Oddyssey',
  description: 'Vinyl store landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Header/>*/}
        {children}
      </body>
    </html>
  )
}
