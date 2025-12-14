"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Connect" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(id)
  }

  return (
    <nav className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6 bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center gap-3"
            aria-label={`Navigate to ${section.label}`}
          >
            {/* Dash line */}
            <div
              className={cn(
                "h-[2px] transition-all duration-300",
                activeSection === section.id
                  ? "w-12 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                  : "w-6 bg-gray-400 group-hover:w-10 group-hover:bg-blue-500",
              )}
            />
            {/* Label appears on hover */}
            <span
              className={cn(
                "absolute left-14 whitespace-nowrap text-sm font-medium transition-all duration-300",
                "opacity-0 group-hover:opacity-100",
                activeSection === section.id ? "text-blue-400" : "text-gray-300",
              )}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
