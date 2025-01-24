"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  description: string
  highlight: string
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
    >
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-sm font-medium text-primary">
            {skill.level}%
          </span>
        </div>
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="absolute h-full bg-primary"
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {skill.description}
      </p>
      <div className="absolute -top-2 -right-2 invisible group-hover:visible">
        <div className="bg-background/80 border border-border text-foreground text-xs p-3 rounded-lg max-w-[250px] shadow-lg">
          {skill.highlight}
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  const technicalSkills: Skill[] = [
    {
      name: "Python",
      level: 100,
      description: "Expert in Python development, building robust AI/ML applications that deliver real-world functionality and drive business value",
      highlight: "1,000s of hours of development experience in spanning various domains understanding parallel processing, virtual environments, package management, and more"
    },
    {
      name: "Gen AI",
      level: 95,
      description: "Proven expertise in building large language models (LLMs) and vision-language models (VLMs) applications",
      highlight: "Vast experience fine-tuning open-source or foundational models on real curated datasets. Proficient in developing LLM pipelines, including Retrieval-Augmented Generation (RAG), embeddings, deployment, and more."
    },
    {
      name: "Machine Learning & Deep Learning",
      level: 95,
      description: "Deep knowledge for choosing the right AI technology for the job",
      highlight: "Skilled in utilizing a variety of ML/DL libraries and frameworks, with the ability to fine-tune neural networks to solve specific problems"
    },
    {
      name: "AWS Cloud Development",
      level: 95,
      description: "Specialized in cloud-based AI infrastructure and architecting scalable deployment solutions",
      highlight: "Sagemaker Notebooks, SageMaker SDK, Distributed Training, Docker, RESTful APIs, and more"
    },
    {
      name: "Data Analysis",
      level: 100,
      description: "Mastery in extracting actionable insights from complex datasets to drive informed decision-making",
      highlight: "Focused on delivering clear, actionable insights by thoroughly understanding data and its context"
    },
    {
      name: "Computer Vision",
      level: 85,
      description: "Proficient in image processing, intrinsic calibration, algorithms, and more",
      highlight: "I am proud to have developed an end-to-end production-grade intrinsic calibration optimization algorithm"
    }
  ]

  const managementSkills: Skill[] = [
    {
      name: "Team Leadership & Mentorship",
      level: 100,
      description: "Experienced in leading teams, mentoring team members, and fostering a collaborative and high-performance culture",
      highlight: "Mentoring data scientists, helping them develop technical expertise and contribute to high-impact projects."
    },
    {
      name: "Business Acumen",
      level: 95,
      description: "Strong understanding of business impact, strategy, and aligning data science with organizational goals",
      highlight: "Experience leading multi-million dollar initiatives that had a direct business impact"
    },
    {
      name: "Agile Management",
      level: 90,
      description: "Skilled in leading cross-functional agile teams and managing projects through iterative development",
      highlight: "Leading multiple product launches with a team of data scientists"
    },

    {
      name: "Communication & Storytelling",
      level: 100,
      description: "Exceptional ability to communicate complex technical concepts to both technical and non-technical audiences",
      highlight: "Regular presenter of technical demos at business and customer meetings"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-white">Technical Expertise</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Management & Leadership</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {managementSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

