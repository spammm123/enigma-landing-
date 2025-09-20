"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{ backgroundColor: "#047857" }} // Changed to dark green color
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12"
            style={{ color: "#ffffff" }} // Changed text to white for better contrast
          >
            <motion.div
              className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ul className="space-y-2">
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Home
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Features
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Support
                </li>
              </ul>
              <ul className="space-y-2">
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Privacy
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Terms
                </li>
                <li
                  className="hover:underline cursor-pointer transition-colors"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  Contact
                </li>
              </ul>
            </motion.div>
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[120px] text-[60px] font-bold select-none font-heading"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              MediGuide
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
