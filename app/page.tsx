"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"

export default function Home() {
  const { theme } = useTheme()
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Navbar
        onAboutClick={() => handleScroll(aboutRef)}
        onSkillsClick={() => handleScroll(skillsRef)}
        onExperienceClick={() => handleScroll(experienceRef)}
        onEducationClick={() => handleScroll(educationRef)}
      />
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Experience />
        </motion.div>
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Education />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

