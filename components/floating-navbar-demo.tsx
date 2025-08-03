"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Home, MessageCircle, User, BookOpen } from "lucide-react"

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "#blog",
      icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#products",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contacts",
      icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <FloatingNav navItems={navItems} />
    </div>
  )
}
