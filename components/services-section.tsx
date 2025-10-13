import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, User, Heart, ArrowRight, Home } from "lucide-react"

const services = [
  {
    icon: User,
    title: "Personal Insurance",
    description: "Personalized coverage for individuals and families with flexible options to protect your assets and lifestyle.",
    features: ["Home", "Auto", "Flood", "Umbrella, Renters, Motorcycle, RV, Boat, +"],
  },
  {
    icon: Home,
    title: "Investment Properties",
    description: "Customized coverage for landlords and investors designed to protect your property, income, and long-term investment goals.",
    features: ["Rentals", "Flips", "Vacants", "Builders Risk"],
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Comprehensive business protection with tailored coverage for your company's unique needs and risks.",
    features: ["Business Owners Policy (BOP)", "General Liability & Commercial Property", "Professional Liability", "Commercial Auto, Workers Comp, Cyber, +"],
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Coming soon - Secure your family's future with life insurance solutions that provide financial protection and peace of mind.",
    features: ["Term Life", "Whole Life", "Universal Life", "Mortgage Protection"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">Personalized, Competitive Coverage Options for a Variety of Needs</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty flex-1">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-end mt-auto">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="#contact">
                    Contact Us to Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
