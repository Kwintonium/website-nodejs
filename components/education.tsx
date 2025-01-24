"use client"

import { motion } from "framer-motion"

export function Education() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="text-xl font-semibold">Master of Science in Data Science</h3>
            <p className="text-primary">Western Governors University</p>
            <p className="text-muted-foreground">2022</p>
          </div>

          <div className="border-l-2 border-primary pl-4 space-y-2">
            <h3 className="text-xl font-semibold">Bachelor of Science in Mechanical Engineering</h3>
            <p className="text-primary">Purdue University</p>
            <p className="text-muted-foreground">2018</p>
          </div>
        </div>
      </div>
    </section>
  )
} 