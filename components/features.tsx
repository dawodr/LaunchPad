"use client"

import { motion } from "framer-motion"
import { Rocket, Zap, Globe, Shield, Code, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Built on Next.js for optimal performance and blazing fast load times.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Stunning UI components with smooth animations powered by Framer Motion.",
    span: "col-span-1",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "Clean, maintainable code with TypeScript and modern best practices.",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge computing and automatic scaling on Vercel.",
    span: "col-span-1 md:col-span-2",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6"
          >
            <Rocket className="h-6 w-6 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white"
          >
            Everything you need to ship fast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-center mt-4 max-w-2xl"
          >
            LaunchPad comes packed with all the features you need to build modern web applications quickly and efficiently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6 hover:border-neutral-700 transition-colors",
                feature.span
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-transparent pointer-events-none" />
    </section>
  )
}
