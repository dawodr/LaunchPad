import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { AmbientColor } from "@/components/ambient-color"

export default function HomePage() {
  return (
    <div className="relative overflow-hidden w-full bg-charcoal min-h-screen">
      <AmbientColor />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
