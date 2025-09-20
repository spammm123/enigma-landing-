"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Calendar, Users, Pill, Activity, LogIn, UserPlus } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="absolute top-0 right-0 z-20 p-6">
          <div className="flex items-center gap-3">
            <motion.button
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-white/80 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 text-primary font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(4, 120, 87, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <LogIn className="h-4 w-4" />
              Login
            </motion.button>
            <motion.button
              className="group flex items-center gap-2 px-6 py-2 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground font-medium btn-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </motion.button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20"
              >
                <Heart className="h-4 w-4" />
                AI-Powered Healthcare
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance font-heading"
              >
                <strong className="text-primary">AI-Powered</strong> Medication <br />
                <strong>Guidance</strong> & <em className="italic text-primary">Adherence</em>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Predictive personalization, smart reminders, and care circle integration. Transform medication management
              with intelligent AI assistance and seamless healthcare coordination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -left-16 text-primary/30"
                >
                  <Pill className="h-6 w-6" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -top-4 right-12 text-primary/30"
                >
                  <Activity className="h-5 w-5" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-2 -right-20 text-primary/30"
                >
                  <Heart className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Get started button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#features">
                  <motion.div
                    className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:shadow-lg transition-all duration-300 btn-glow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="border border-primary/20 bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <Heart className="h-4 w-4" />
                        Get Started
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </motion.div>
                </a>

                <a href="#how-it-works">
                  <motion.div
                    className="group cursor-pointer border border-primary/20 bg-transparent gap-2 h-[60px] flex items-center px-6 rounded-full hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="font-medium tracking-tight flex items-center gap-2 justify-center text-base text-primary">
                      <Brain className="h-4 w-4" />
                      Learn More
                    </p>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto pb-8"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Trusted by leading healthcare institutions</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="h-6 w-6" />
                  <span className="font-medium">Mayo Clinic</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Brain className="h-6 w-6" />
                  <span className="font-medium">Johns Hopkins</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-6 w-6" />
                  <span className="font-medium">Cleveland Clinic</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-6 w-6" />
                  <span className="font-medium">Kaiser Permanente</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
