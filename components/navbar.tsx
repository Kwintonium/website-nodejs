"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface NavbarProps {
  onAboutClick: () => void
  onSkillsClick: () => void
  onExperienceClick: () => void
  onEducationClick: () => void
}

export function Navbar({ onAboutClick, onSkillsClick, onExperienceClick, onEducationClick }: NavbarProps) {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex-1 flex items-center justify-start pl-[100px] space-x-6 text-sm font-medium">
          <Button
            variant="ghost"
            className="hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="hover:text-primary transition-colors"
            onClick={onAboutClick}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="hover:text-primary transition-colors"
            onClick={onSkillsClick}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            className="hover:text-primary transition-colors"
            onClick={onExperienceClick}
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            className="hover:text-primary transition-colors"
            onClick={onEducationClick}
          >
            Education
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

