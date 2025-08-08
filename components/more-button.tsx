"use client"

import React from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function MoreButton() {
  const [currentSection, setCurrentSection] = React.useState("home")

  // Map section -> button text + URL
  const sectionConfig: Record<
    string,
    { text: string; url: string }
  > = {
    home: { text: "More", url: "http://1.com" },
    blog: { text: "Read More", url: "http://2.com" },
    about: { text: "Know Us More", url: "http://3.com" },
    products: { text: "View All Products", url: "http://4.com" },
    contacts: { text: "Thanks", url: "http://5.com" },
  }

  React.useEffect(() => {
    const sectionIds = Object.keys(sectionConfig)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(id)
            }
          })
        },
        { threshold: 0.5 } // Section counts as active when 50% visible
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const { text, url } = sectionConfig[currentSection] || sectionConfig.home

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Link
        href={url}
        target="_blank"
        className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-200 shadow-lg flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium">{text}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </Link>
    </div>
  )
}
