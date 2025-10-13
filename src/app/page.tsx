import { Header } from "@/components/site/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/site/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Transform your farm with cutting-edge agritech solutions. IoT monitoring, yield analytics, and smart farming tools for sustainable agriculture.",
  alternates: {
    canonical: "https://forinda.org",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
