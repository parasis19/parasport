"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Node.js, featuring product filtering, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "A drag-and-drop task management application with user authentication, task categories, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and parallax effects, showcasing projects and skills.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data based on user location or search.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Weather API", "Chart.js"],
    liveLink: "#",
    githubLink: "#",
  },
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ExternalLink size={16} className="mr-1" /> Live Demo
          </a>
          <a
            href={project.githubLink}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={16} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto">
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project was carefully crafted with attention to detail and user
              experience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <motion.div variants={headerVariants} className="text-center mt-12">
            <a
              href="#"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
