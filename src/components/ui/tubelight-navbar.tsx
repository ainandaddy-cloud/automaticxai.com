"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DivideIcon as LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import ThemeToggle from "../ThemeToggle"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollSpy } from "../../hooks/useScrollSpy"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const { isDark } = useTheme()
  
  // Extract section IDs from URLs (remove the # prefix)
  const sectionIds = items.map(item => item.url.replace('#', ''))
  
  // Use scrollspy to track active section
  const activeSection = useScrollSpy({ 
    sectionIds,
    rootMargin: '-10% 0px -60% 0px'
  })

  // Find the active tab name based on the active section
  const activeTab = items.find(item => item.url === `#${activeSection}`)?.name || items[0].name

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (item: NavItem) => {
    // Smooth scroll to section
    const element = document.querySelector(item.url)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-4 glass-card py-2 px-4 rounded-full">
        <div className="flex items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 btn-underline-hover",
                  isDark ? "text-text-secondary hover:text-white" : "text-dark-600 hover:text-dark-900",
                  isActive && (isDark ? "text-white" : "text-dark-900"),
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className={cn(
                      "absolute inset-0 w-full rounded-full -z-10 border",
                      isDark 
                        ? "bg-gradient-card border-accent-500/40" 
                        : "bg-gradient-card-light border-accent-600/40"
                    )}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    <div className={cn(
                      "absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-t-full",
                      isDark ? "bg-accent-500" : "bg-accent-600"
                    )}>
                      <div className={cn(
                        "absolute w-8 h-4 rounded-full blur-sm -top-1 -left-1",
                        isDark ? "bg-accent-500/20" : "bg-accent-600/20"
                      )} />
                    </div>
                  </motion.div>
                )}
              </button>
            )
          })}
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}