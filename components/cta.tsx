"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to launch your project?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Join thousands of developers who are already building amazing products with LaunchPad. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#pricing" className="flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#">View Documentation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
