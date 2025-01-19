import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: "2023",
    title: "Senior Data Scientist",
    company: "AI Innovations Inc.",
    description: "Leading a team in developing state-of-the-art AI models for predictive analytics.",
  },
  {
    year: "2021",
    title: "Machine Learning Engineer",
    company: "Tech Giants Co.",
    description: "Implemented advanced NLP models for sentiment analysis and chatbot development.",
  },
  {
    year: "2019",
    title: "Data Scientist",
    company: "Data Driven Solutions",
    description: "Developed computer vision algorithms for autonomous vehicle projects.",
  },
  {
    year: "2017",
    title: "Junior Data Analyst",
    company: "StartUp Analytics",
    description: "Conducted data analysis and built predictive models for various client projects.",
  },
]

export function Timeline() {
  return (
    <div className="relative">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className="mb-8 flex justify-between items-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-primary-foreground">{event.year}</h1>
          </div>
          <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-primary text-xl">{event.title}</h3>
            <h4 className="mb-3 font-semibold text-lg">{event.company}</h4>
            <p className="text-sm leading-snug tracking-wide text-opacity-100">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

