"use client"

import { motion } from "framer-motion"

export function Experience() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          
          <div className="space-y-16">
            {/* Sustainment */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary/80 border-2 border-background" />
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Lead Senior Data Scientist</h3>
                  <a href="https://www.sustainment.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                    <p className="text-blue-400 inline hover:text-blue-600 hover:underline transition-colors">Sustainment</p>
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Austin, TX (Remote)</p>
                  <p className="text-muted-foreground">July 2023 – Present</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Sustainment is a software and AI company focused on optimizing manufacturing supply chains through AI-driven solutions, connecting contracting teams with U.S. manufacturing suppliers to enhance throughput, reduce rework, and streamline part procurement.
              </p>
              <p className="text-muted-foreground">
                As the Lead Senior Data Scientist at Sustainment, I report directly to the VP of Data Science and manage a team of three data scientists to develop AI-driven solutions for part procurement. I am responsible for defining the project scope, ensuring timely deliverables, and driving successful outcomes. Additionally, I lead the fine-tuning, deployment, and ongoing operations of Vision-Language Models (VLMs) and Large Language Models (LLMs), applying advanced AI techniques to address complex challenges. A highlight of my role is delivering technical demos to board members and customers, where I showcase the product's impact and help generate new business opportunities.
              </p>
            </motion.div>

            {/* Aptiv */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary/80 border-2 border-background" />
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Data Scientist - Camera Systems</h3>
                  <a href="https://www.aptiv.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                    <p className="text-blue-400 inline hover:text-blue-600 hover:underline transition-colors">Aptiv</p>
                  </a>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Troy, MI (Hybrid)</p>
                  <p className="text-muted-foreground">2018 – July 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Aptiv is a global technology and manufacturing tier-1 automotive supplier that develops integrated autonomous driving solutions to enable the future of mobility.
              </p>
              <p className="text-muted-foreground">
                As a data scientist on the Camera Systems team, I leveraged real-world camera data in Python to extract actionable insights, develop visualizations, and present findings to upper management and customers, influencing key product and design decisions. I also developed full-stack image processing solutions for manufacturing, implementing image quality metrics like intrinsic calibration, focus score, SNR, and demosaicing, which significantly improved quality control processes in camera module production.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

