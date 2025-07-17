"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { Sun, Moon } from "lucide-react"

const Navbar = ({ scrollY, darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, [scrollY])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="hero" smooth={true} duration={800} className="cursor-pointer">
            Portfolio
          </Link>
        </motion.div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
