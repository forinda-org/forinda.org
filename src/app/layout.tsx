import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://forinda.org"),
  title: {
    default: "Forinda - Agritech Solutions for Modern Farming",
    template: "%s | Forinda",
  },
  description:
    "Transform your farm with cutting-edge agritech solutions. IoT monitoring, yield analytics, and smart farming tools for sustainable agriculture.",
  keywords: [
    "agritech",
    "smart farming",
    "agriculture technology",
    "IoT farming",
    "crop monitoring",
    "yield analytics",
    "sustainable farming",
  ],
  authors: [{ name: "Forinda" }],
  creator: "Forinda",
  publisher: "Forinda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forinda.org",
    siteName: "Forinda",
    title: "Forinda - Agritech Solutions for Modern Farming",
    description:
      "Transform your farm with cutting-edge agritech solutions. IoT monitoring, yield analytics, and smart farming tools for sustainable agriculture.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forinda Agritech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forinda - Agritech Solutions for Modern Farming",
    description:
      "Transform your farm with cutting-edge agritech solutions. IoT monitoring, yield analytics, and smart farming tools for sustainable agriculture.",
    images: ["/og-image.jpg"],
    creator: "@forinda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Toaster />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
