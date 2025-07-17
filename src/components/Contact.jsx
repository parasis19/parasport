"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Parallax } from "react-parallax"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "sharma prashant",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      formRef.current.reset()
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)" },
  }

  return (
    <Parallax
      bgImage="/placeholder.svg?height=1080&width=1920"
      strength={300}
      className="py-20 md:py-32"
      bgClassName="object-cover"
      id="contact"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
              Get In Touch
            </motion.h2>
            <div className="grid md:grid-cols-5 gap-8">
              <motion.div variants={itemVariants} className="md:col-span-2 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-500/20 text-primary-400 rounded-lg mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Email</h4>
                      <p className="mt-1">contact@johndoe.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-500/20 text-primary-400 rounded-lg mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Phone</h4>
                      <p className="mt-1">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-500/20 text-primary-400 rounded-lg mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-400">Location</h4>
                      <p className="mt-1">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="md:col-span-3">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.div>
                  ) : null}
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <motion.div whileFocus="focus">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Name
                        </label>
                        <motion.input
                          variants={inputVariants}
                          whileFocus="focus"
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div whileFocus="focus">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <motion.input
                          variants={inputVariants}
                          whileFocus="focus"
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                    <motion.div className="mb-6" whileFocus="focus">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Subject
                      </label>
                      <motion.input
                        variants={inputVariants}
                        whileFocus="focus"
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div className="mb-6" whileFocus="focus">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <motion.textarea
                        variants={inputVariants}
                        whileFocus="focus"
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all duration-300"
                      />
                    </motion.div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" /> Send Message
                        </span>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  )
}

export default Contact
