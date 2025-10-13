import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower farmers with technology that makes sustainable agriculture accessible and profitable for everyone.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously develop cutting-edge solutions that address real-world farming challenges.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description:
      "Building a future where technology and nature work together for healthier crops and a healthier planet.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] md:h-[500px] order-2 lg:order-1">
            <Image
              src="/farmers-working-with-modern-agricultural-technolog.jpg"
              alt="Farmers using modern agricultural technology"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">About Forinda</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Founded by farmers for farmers, Forinda bridges the gap between traditional agriculture and modern
              technology. We understand the challenges you face because we've lived them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our team of agronomists, engineers, and data scientists work together to create solutions that are
              practical, affordable, and truly make a difference in your daily operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              With over 500 farms already using our platform, we're building a community of forward-thinking farmers who
              are shaping the future of agriculture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="p-6 border-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
