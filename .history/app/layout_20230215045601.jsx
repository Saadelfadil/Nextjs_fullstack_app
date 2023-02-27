import './globals.css'
import Nav from "./auth/nav"
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto"
});

export default function RootLayout({children})
  {
  return (
    <html lang="en">
      <head />
      <body className='mx-4 md:mx-'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
