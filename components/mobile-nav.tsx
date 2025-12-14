"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 flex flex-col gap-1.5 p-2 rounded-lg bg-blue-400/90 backdrop-blur-sm border border-blue-300/50 hover:bg-blue-500/90 transition-all shadow-lg"
        aria-label="Open menu"
      >
        <span className="w-6 h-0.5 bg-white rounded-full"></span>
        <span className="w-6 h-0.5 bg-white rounded-full"></span>
        <span className="w-6 h-0.5 bg-white rounded-full"></span>
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-gray-900">B.T</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Greeting */}
        <div className="px-6 py-8">
          <h2 className="text-5xl font-light text-gray-300">Hi, I'm</h2>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 space-y-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left text-xl font-medium text-gray-900 hover:text-white hover:bg-blue-400 px-4 py-3 rounded-lg transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left text-xl font-medium text-gray-900 hover:text-white hover:bg-blue-400 px-4 py-3 rounded-lg transition-all"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="block w-full text-left text-xl font-medium text-gray-900 hover:text-white hover:bg-blue-400 px-4 py-3 rounded-lg transition-all"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left text-xl font-medium text-gray-900 hover:text-white hover:bg-blue-400 px-4 py-3 rounded-lg transition-all"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-xl font-medium text-gray-900 hover:text-white hover:bg-blue-400 px-4 py-3 rounded-lg transition-all"
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  )
}
