"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Parallax } from "react-parallax"

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <Parallax
      bgImage="/hero.jpeg?height=1600&width=1500"
      strength={90}
      className="h-screen"
      bgClassName="object-cover"
      id="hero"
    >
      <div ref={ref} className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <motion.div
          className="container mx-auto px-4 z-20 text-white text-center"
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            John Doe
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Frontend Developer & UI/UX Designer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Parallax>
  )
}

export default Hero
