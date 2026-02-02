"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { StarBackground } from "./star-background"
import { ShootingStars } from "./shooting-stars"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute inset-0"
      >
        <StarBackground />
        <ShootingStars />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-5xl mx-auto text-center mt-6 relative z-10 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white"
      >
        Launch your next project with LaunchPad
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-2 md:mt-6 text-base md:text-xl text-neutral-400 max-w-3xl mx-auto relative z-10"
      >
        A beautifully crafted starter template powered by Next.js, Tailwind CSS, and Framer Motion. Build stunning websites in minutes, not hours.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center mt-8 relative z-10"
      >
        <Button asChild size="lg">
          <Link href="#pricing">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#features">Learn More</Link>
        </Button>
      </motion.div>
      
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />
    </div>
  )
}
