"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Timeline } from "@/components/timeline"

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I have dedicated my career to using AI to transform industries, and I am constantly pushing the boundaries of what&apos;s possible with data science. With years of experience in developing cutting-edge AI solutions, I&apos;ve had the privilege of working on projects that have made significant impacts across various sectors.
            </p>
            <p className="text-lg">
              My expertise spans machine learning, deep learning, natural language processing, and computer vision. I&apos;m passionate about leveraging these technologies to solve complex real-world problems and drive innovation in the field of artificial intelligence.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder-headshot.jpg"
              alt="Senior Data Scientist"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">Career Timeline</h2>
        <Timeline />
      </motion.div>
    </div>
  )
}

