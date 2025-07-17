"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Parallax } from "react-parallax"
import { Code, Palette, Database } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code size={24} />,
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Design",
    icon: <Palette size={24} />,
    items: [
      { name: "Figma", level: 80 },
      { name: "UI/UX", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Animation", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: <Database size={24} />,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "Firebase", level: 75 },
    ],
  },
]

const SkillBar = ({ name, level, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        ></motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <Parallax
      bgImage="/placeholder.svg?height=1080&width=1920"
      strength={200}
      className="py-20 md:py-32"
      bgClassName="object-cover"
      id="skills"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gray-100/95 dark:bg-gray-800/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-16">
              My Skills
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-lg mr-4">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div>
                    {skillGroup.items.map((skill, index) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  )
}

export default Skills
