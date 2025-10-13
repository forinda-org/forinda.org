import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, BarChart3, Truck, Users } from "lucide-react"

const services = [
  {
    icon: Wifi,
    title: "IoT Crop Monitoring",
    description:
      "Real-time monitoring of soil moisture, temperature, and crop health with advanced IoT sensors deployed across your fields.",
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description:
      "Data-driven insights to maximize your harvest. Predict yields, optimize resources, and make informed decisions.",
  },
  {
    icon: Truck,
    title: "Supply Chain Tracking",
    description:
      "End-to-end visibility of your produce from farm to market. Ensure quality and reduce waste with smart logistics.",
  },
  {
    icon: Users,
    title: "Farmer Advisory Portal",
    description:
      "Access expert advice, weather forecasts, market prices, and best practices through our comprehensive farmer portal.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive agritech solutions designed to modernize your farming operations and boost productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
