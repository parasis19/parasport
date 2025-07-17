"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Parallax } from "react-parallax"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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
      strength={300}
      className="py-20 md:py-32"
      bgClassName="object-cover"
      id="about"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center mb-12">
              About Me
            </motion.h2>
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <motion.p variants={itemVariants} className="text-lg">
                  Hello! I'm John, a passionate frontend developer and UI/UX designer with over 5 years of experience
                  creating beautiful, functional websites and applications.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg">
                  I specialize in building responsive, user-friendly interfaces using modern technologies like React,
                  Tailwind CSS, and various animation libraries to create engaging user experiences.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg">
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source
                  projects, or hiking in the mountains.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <a
                    href="#contact"
                    className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Let's Connect
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  )
}

export default About
