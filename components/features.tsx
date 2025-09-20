"use client"

import type React from "react"

import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Brain, Calendar, Users, Shield, Heart, Pill, Activity } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0, 0.659, 0.42]) // #00A86B in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0, 0.659, 0.42]) // #00A86B in RGB normalized

  const [dark, setDark] = useState<number>(0) // Always light theme

  useEffect(() => {
    setBaseColor([0, 0.659, 0.42]) // #00A86B
    setGlowColor([0, 0.659, 0.42]) // #00A86B
    setDark(0) // Always light theme
  }, [theme])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setInputValue("")
    }
  }

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-20 blur-3xl select-none"></div>
      <div className="via-primary/30 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          Intelligent Features
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>🏥</span>
              <span>AI Healthcare Features</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(0, 168, 107, 0.6)",
                  boxShadow: "0 0 30px rgba(0, 168, 107, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl leading-none font-semibold tracking-tight">
                      Predictive Personalization Engine
                    </h3>
                  </div>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      AI-powered analysis of patient data to create personalized medication schedules and dosage
                      recommendations.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"></div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(0, 168, 107)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary rounded-full blur-[74px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Medical Icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-8">
                        {/* Left Column - Patient Data */}
                        <div className="flex flex-col gap-3">
                          {[
                            { icon: <Heart className="h-4 w-4" />, label: "Vitals" },
                            { icon: <Activity className="h-4 w-4" />, label: "History" },
                            { icon: <Pill className="h-4 w-4" />, label: "Allergies" },
                          ].map((item, index) => (
                            <motion.div
                              key={`left-${index}`}
                              className="bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-foreground text-sm font-medium shadow-sm border border-primary/10"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [-20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center text-primary">{item.icon}</div>
                              {item.label}
                            </motion.div>
                          ))}
                        </div>

                        {/* Center AI Brain */}
                        <motion.div
                          className="w-16 h-16 border border-primary/20 rounded-lg overflow-hidden shadow-lg bg-primary/5 flex items-center justify-center"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={isCliHovering ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Brain className="h-8 w-8 text-primary" />
                        </motion.div>

                        {/* Right Column - Recommendations */}
                        <div className="flex flex-col gap-3">
                          {[
                            { icon: <Calendar className="h-4 w-4" />, label: "Schedule" },
                            { icon: <Pill className="h-4 w-4" />, label: "Dosage" },
                            { icon: <Shield className="h-4 w-4" />, label: "Safety" },
                          ].map((item, index) => (
                            <motion.div
                              key={`right-${index}`}
                              className="bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-foreground text-sm font-medium shadow-sm border border-primary/10"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center text-primary">{item.icon}</div>
                              {item.label}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(0, 168, 107, 0.6)",
                  boxShadow: "0 0 30px rgba(0, 168, 107, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl leading-none font-semibold tracking-tight">Smart Medication Scheduler</h3>
                  </div>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Intelligent scheduling system that adapts to your lifestyle and sends timely reminders for optimal
                      medication adherence.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <h1 className="mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                    <span className="bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5">
                      <ScrambleHover
                        text="MedSchedule"
                        scrambleSpeed={70}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-primary to-primary bg-clip-text text-transparent"
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        characters="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|"
                      />
                    </span>
                  </h1>
                </div>
                <div className="absolute top-64 z-10 flex items-center justify-center">
                  <div className="w-[400px] h-[400px]">
                    <Suspense
                      fallback={<div className="bg-secondary/20 h-[400px] w-[400px] animate-pulse rounded-full"></div>}
                    >
                      <Earth baseColor={baseColor} markerColor={[0, 0, 0]} glowColor={glowColor} dark={dark} />
                    </Suspense>
                  </div>
                </div>
                <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                  <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px]"></div>
                  <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px]"></div>
                </div>
              </motion.div>

              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(0, 168, 107, 0.5)",
                  boxShadow: "0 0 30px rgba(0, 168, 107, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl leading-none font-semibold tracking-tight">Care Circle Integration</h3>
                  </div>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Connect with family, caregivers, and healthcare providers for comprehensive medication management
                      and support.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-lg">
                    <div className="relative rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
                      <div className="p-4">
                        <textarea
                          className="w-full min-h-[100px] bg-transparent border-none text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-base leading-relaxed"
                          placeholder="Share medication updates with your care team..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 pb-4">
                        <div className="flex items-center gap-3">
                          <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                            <Users className="h-4 w-4 text-primary" />
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-medium">
                            <Heart className="h-4 w-4" />
                            Share Update
                          </button>
                        </div>
                        <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                          <Calendar className="h-4 w-4 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 20px 40px rgba(0, 168, 107, 0.3)",
                  borderColor: "rgba(0, 168, 107, 0.6)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl leading-none font-semibold tracking-tight">EHR Integration</h3>
                  </div>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Seamless integration with Electronic Health Records for comprehensive medication history and
                      clinical decision support.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-sm">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold text-foreground">Secure EHR</h4>
                          <p className="text-sm text-muted-foreground">Connected & Protected</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Medical History Synced</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Prescription Records</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>Clinical Alerts</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
