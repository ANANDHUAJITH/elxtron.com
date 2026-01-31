import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N.E.R.V.E. - Neural Enhancement & Robotic Vital Systems",
  description:
    "Revolutionizing human potential through bioengineering, robotics, and neuroscience. Explore cutting-edge neural interfaces, prosthetics, and FES systems powered by digital twins and advanced muscle simulations.",
  keywords: "neural enhancement, robotics, bioengineering, neuroscience, prosthetics, neural interfaces, FES, rehabilitation, digital twins, muscle simulation",
  authors: [{ name: "N.E.R.V.E." }],
  creator: "N.E.R.V.E.",
  publisher: "N.E.R.V.E.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "N.E.R.V.E. - Neural Enhancement & Robotic Vital Systems",
    description: "Revolutionizing human potential through bioengineering and neural technology.",
    siteName: "N.E.R.V.E.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N.E.R.V.E. - Neural Enhancement & Robotic Vital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N.E.R.V.E. - Neural Enhancement & Robotic Vital Systems",
    description: "Revolutionizing human potential through bioengineering and neural technology.",
    images: ["/images/og-image.jpg"],
    creator: "@nervesystems",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f1419",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1e88e5" }],
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
              name: "N.E.R.V.E.",
              url: "https://your-domain.vercel.app",
              logo: "https://your-domain.vercel.app/images/nerve-logo.png",
              description: "Neural Enhancement & Robotic Vital Systems - Revolutionizing human potential through bioengineering and neuroscience",
              sameAs: ["https://twitter.com/nervesystems", "https://linkedin.com/company/nervesystems"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
      <SpeedInsights/>
    </html>
  )
}
