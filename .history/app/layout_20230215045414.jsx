import './globals.css'
import Nav from "./auth/nav"
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: [""]
})
export default function RootLayout({children})
  {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Nav />
      <body>{children}</body>
    </html>
  )
}
