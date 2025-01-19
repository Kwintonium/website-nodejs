"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface NavbarProps {
  onAboutClick: () => void
  onSkillsClick: () => void
  onExperienceClick: () => void
  onEducationClick: () => void
}

export function Navbar({ onAboutClick, onSkillsClick, onExperienceClick, onEducationClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: "About", onClick: onAboutClick },
    { name: "Skills", onClick: onSkillsClick },
    { name: "Experience", onClick: onExperienceClick },
    { name: "Education", onClick: onEducationClick },
  ]

  // Function to handle closing the mobile menu after an item is clicked
  const handleNavItemClick = (onClick: () => void) => {
    onClick() // Execute the passed onClick handler for the specific item
    setIsMobileMenuOpen(false) // Close the mobile menu
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex flex-1 items-center justify-start pl-[100px] space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={item.onClick}
            >
              {item.name}
            </Button>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger Button */}
          <Button
            variant="ghost"
            className="p-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background/95 border-t text-center space-y-4 p-4 z-50">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full hover:text-primary transition-colors"
                  onClick={() => handleNavItemClick(item.onClick)} // Close the menu after clicking a link
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
