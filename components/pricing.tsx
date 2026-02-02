"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and experiments",
    features: [
      "All core components",
      "Basic documentation",
      "Community support",
      "1 project",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for professional developers and teams",
    features: [
      "Everything in Starter",
      "Premium components",
      "Priority support",
      "Unlimited projects",
      "Figma files",
      "Early access to updates",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams with specific needs",
    features: [
      "Everything in Pro",
      "Custom components",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Team training",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white"
          >
            Simple, transparent pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-center mt-4 max-w-2xl"
          >
            Choose the plan that works best for you. All plans include access to our core features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border p-6 flex flex-col",
                plan.highlighted
                  ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent"
                  : "border-neutral-800 bg-neutral-950/50"
              )}
            >
              {plan.highlighted && (
                <span className="text-xs font-medium text-cyan-400 mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-neutral-400 ml-2">/one-time</span>
                )}
              </div>
              <p className="text-neutral-400 mt-2">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-cyan-400 shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="mt-8 w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
