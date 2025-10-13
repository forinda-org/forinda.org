import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Forinda's IoT sensors have transformed how I manage my crops. I can monitor everything from my phone and make decisions based on real data, not guesswork.",
    author: "Sarah Johnson",
    role: "Organic Farm Owner",
    avatar: "/female-farmer-portrait.png",
  },
  {
    quote:
      "The yield analytics helped us increase our harvest by 30% in just one season. The ROI was incredible, and the support team is always there when we need them.",
    author: "Michael Chen",
    role: "Commercial Farmer",
    avatar: "/male-farmer-portrait.png",
  },
  {
    quote:
      "As a small-scale farmer, I thought this technology was out of reach. Forinda made it affordable and easy to implement. It's been a game-changer for my business.",
    author: "Priya Patel",
    role: "Small-Scale Farmer",
    avatar: "/female-farmer-portrait-smiling.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What Farmers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join hundreds of satisfied farmers who have transformed their operations with Forinda.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed mb-6 text-pretty">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
