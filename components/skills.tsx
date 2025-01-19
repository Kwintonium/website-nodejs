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
      description: "Expert-level Python development with a focus on AI/ML applications",
      highlight: "1,000s of hours of development experience in various domains"
    },
    {
      name: "LLMs & VLMs",
      level: 95,
      description: "Deep expertise in large language models (LLMs) and vision-language models (VLMs)",
      highlight: "Vast experience fine-tuning open-source or foundational models on real datasets. Proficient in developing LLM pipelines, including Retrieval-Augmented Generation (RAG), embeddings, deployment, and more."
    },
    {
      name: "Machine Learning & Deep Learning",
      level: 95,
      description: "Advanced expertise in implementing neural networks and machine learning algorithms",
      highlight: "From Logistic Regression to 70B-parameter LLMs!"
    },
    {
      name: "Data Analysis",
      level: 100,
      description: "Mastery in extracting actionable insights from complex datasets to drive informed decision-making",
      highlight: "If I can't explain it, I don't fully understand the problem."
    },
    {
      name: "Computer Vision",
      level: 85,
      description: "Proficient in image processing and visual AI systems, with a focus on optimization techniques",
      highlight: "Developed production-grade intrinsic calibration optimization algorithms"
    },
    {
      name: "Cloud Development for AI",
      level: 95,
      description: "Specialized in cloud-based AI infrastructure and scalable deployment solutions (fluent in AWS)",
      highlight: "Architected deployable AI solutions tailored for engineering and DevOps requirements"
    }
  ]

  const managementSkills: Skill[] = [
    {
      name: "Agile Management",
      level: 90,
      description: "Skilled in leading cross-functional agile teams and managing projects through iterative development",
      highlight: "Successfully led multiple product launches with a team of data scientists"
    },
    {
      name: "Communication & Storytelling",
      level: 100,
      description: "Exceptional ability to communicate complex technical concepts to both technical and non-technical audiences",
      highlight: "Regular presenter at technical demos and business meetings"
    },
    {
      name: "Business Acumen",
      level: 100,
      description: "Strong understanding of business impact, strategy, and aligning data science with organizational goals",
      highlight: "Led and drove multi-million dollar initiatives that had a direct business impact"
    },
    {
      name: "Team Leadership & Mentorship",
      level: 90,
      description: "Experienced in leading teams, mentoring team members, and fostering a collaborative and high-performance culture",
      highlight: "Mentored data scientists, helping them develop technical expertise and contribute to high-impact projects."
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

