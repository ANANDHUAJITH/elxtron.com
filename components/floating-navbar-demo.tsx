"use client"

import React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Home, MessageCircle, User, BookOpen, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

// FloatingNav component
const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = React.useState(false)
  const [inHomeSection, setInHomeSection] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  // Track active section
  React.useEffect(() => {
    const sectionIds = navItems.map((item) => item.link.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.5 } // 50% visible to count as active
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [navItems])

  // Track if we're inside #home
  React.useEffect(() => {
    const homeEl = document.querySelector("#home")
    if (!homeEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInHomeSection(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(homeEl)
    return () => observer.disconnect()
  }, [])

  // Scroll listener for showing/hiding
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()

      if (inHomeSection) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <motion.div
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => {
        const isActive = navItem.link.replace("#", "") === activeSection
        return (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 px-3 py-1 rounded-full transition-colors duration-200",
              isActive
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "dark:text-neutral-50 text-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        )
      })}

      {/* Updated Login/Signup button */}
      <Link
        href="/login"
        className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      >
        <span>Login / Signup</span>
        <span className="absolute inset-x-0 w-full h-px -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </Link>
    </motion.div>
  )
}

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
      link: "#projects",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
     {
      name: "Products",
      link: "#products",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contacts",
      icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <>
      {/* Desktop Floating Nav */}
      <div className="fixed top-4 inset-x-0 z-50 hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <nav className="grid gap-4 py-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name + index}
                  href={item.link}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              {/* Add Login/Signup link inside mobile menu */}
              <Link
                href="/login"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                Login / Signup
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
