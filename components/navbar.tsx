"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full">
        <div className="flex items-center justify-between w-full rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md px-4 py-2">
          <Link href="/" className="font-bold text-xl text-white">
            LaunchPad
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#pricing">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full">
        <div className="flex items-center justify-between w-full rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md px-4 py-2">
          <Link href="/" className="font-bold text-xl text-white">
            LaunchPad
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 mx-4 rounded-2xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-md p-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-400 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-neutral-800">
                  <Button variant="ghost" asChild>
                    <Link href="#">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="#pricing">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
