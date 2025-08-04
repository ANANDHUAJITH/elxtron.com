import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ELXTRON LABS - Advanced Technology Solutions",
  description:
    "Discover cutting-edge technology solutions and innovative products at ELXTRON LABS. Explore our interactive 3D demonstrations and advanced engineering capabilities.",
  keywords: "ELXTRON LABS, technology, innovation, 3D modeling, engineering, advanced solutions, drone technology",
  authors: [{ name: "ELXTRON LABS" }],
  creator: "ELXTRON LABS",
  publisher: "ELXTRON LABS",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "ELXTRON LABS - Advanced Technology Solutions",
    description: "Discover cutting-edge technology solutions and innovative products at ELXTRON LABS.",
    siteName: "ELXTRON LABS",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ELXTRON LABS - Advanced Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELXTRON LABS - Advanced Technology Solutions",
    description: "Discover cutting-edge technology solutions and innovative products at ELXTRON LABS.",
    images: ["/images/og-image.jpg"],
    creator: "@elxtronlabs",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ELXTRON LABS",
              url: "https://your-domain.vercel.app",
              logo: "https://your-domain.vercel.app/images/elxtron-logo.png",
              description: "Advanced technology solutions and innovative products",
              sameAs: ["https://twitter.com/elxtronlabs", "https://linkedin.com/company/elxtronlabs"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
