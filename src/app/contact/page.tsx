import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { ContactForm } from "@/components/forms/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Forinda to learn how our agritech solutions can transform your farming operations. Our team is ready to help.",
  alternates: {
    canonical: "https://forinda.org/contact",
  },
  openGraph: {
    title: "Contact Us | Forinda",
    description: "Get in touch with Forinda to learn how our agritech solutions can transform your farming operations.",
    url: "https://forinda.org/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Ready to transform your farming operations? Contact us to learn more about our agritech solutions.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
