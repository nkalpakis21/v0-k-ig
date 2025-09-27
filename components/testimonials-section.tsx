import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Denver, CO",
    text: "Kalpakis Insurance Group made switching insurance so easy. Their rates are competitive and the customer service is outstanding. I saved over $400 a year!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    location: "Austin, TX",
    text: "When I had a claim after a fender bender, they handled everything quickly and professionally. No hassles, just great service when I needed it most.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Phoenix, AZ",
    text: "As a first-time homeowner, I was overwhelmed by insurance options. Their agent walked me through everything and found the perfect coverage for my budget.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty italic">"{testimonial.text}"</blockquote>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
