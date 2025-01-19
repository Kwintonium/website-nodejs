"use client"

import { motion } from "framer-motion"
import { SkillChart } from "@/components/skill-chart"

export default function Skills() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
        <SkillChart />
      </motion.div>
    </div>
  )
}

