import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nippon Trading – Construction Equipment & Solutions",
  description: "Global supplier of new and used construction, transportation, and handling equipment.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
