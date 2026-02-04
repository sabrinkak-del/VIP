import type { Metadata } from "next"
import { Playfair_Display, Assistant } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  variable: "--font-assistant",
})

export const metadata: Metadata = {
  title: "Ddelux CRM",
  description: "מרכז שליטה לנדל״ן יוקרתי - Ddelux Prime Real Estate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${playfair.variable} ${assistant.variable}`}>
        {children}
      </body>
    </html>
  )
}
