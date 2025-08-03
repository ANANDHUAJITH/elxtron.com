"use client"
import { ChevronDown } from "lucide-react"

export default function MoreButton() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-200 shadow-lg flex flex-col items-center gap-2">
        <span className="text-sm font-medium">More</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </div>
  )
}
