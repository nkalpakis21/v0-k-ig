import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, User, Heart, ArrowRight } from "lucide-react"

const services = [
  {
    icon: User,
    title: "Personal Insurance",
    description: "Personalized coverage for individuals and families with flexible options to protect your assets and lifestyle.",
    features: ["Home Protection", "Auto Coverage", "Umbrella Policies","Renters, Motorcycles, RV, Boats"],
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    description: "Comprehensive business protection with tailored coverage for your company's unique needs and risks.",
    features: ["Business Owners Policy", "General Liability", "Property Coverage", "Commercial Auto"],
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's future with life insurance solutions that provide financial protection and peace of mind.",
    features: ["Term Life", "Whole Life", "Universal Life", "Mortage Protection"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Insurance Solutions for Every Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer comprehensive insurance options to protect you, your family, and your assets with personalized service at competitive rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
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
