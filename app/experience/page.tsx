"use client"

import { motion } from "framer-motion"
import { Timeline } from "@/components/timeline"

export default function Experience() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
        <Timeline />
      </motion.div>
    </div>
  )
}

