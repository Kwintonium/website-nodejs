"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Machine Learning", level: 95 },
  { name: "Deep Learning", level: 90 },
  { name: "Natural Language Processing", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Data Visualization", level: 85 },
  { name: "Big Data Technologies", level: 75 },
  { name: "Python", level: 95 },
  { name: "R", level: 80 },
  { name: "SQL", level: 85 },
  { name: "TensorFlow", level: 90 },
  { name: "PyTorch", level: 85 },
  { name: "Scikit-learn", level: 90 },
]

export function SkillChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-lg p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary text-primary-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
            <Progress value={skill.level} className="w-full" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

