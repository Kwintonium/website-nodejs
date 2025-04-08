"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a Senior Data Scientist at Sustainment, where I leverage cutting-edge AI to optimize manufacturing supply chains. With a background in both Mechanical Engineering and Data Science, I bring a unique perspective to solving complex technical challenges.
            </p>
            <p className="text-muted-foreground">
              My expertise spans across AI, computer vision, and machine learning, with a particular focus on implementing state-of-the-art Large Language Models (VLMS/LLMs) for practical business applications. As a full-stack data scientist, I lead and mentor a team of data scientists in developing end-to-end solutions, from data acquisition and analysis to deploying models in production as scalable APIs. Together, we create innovative solutions that enhance manufacturing efficiency and streamline part procurement processes.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/headshot_01.jpg"
              alt="Quinn Meyer"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

