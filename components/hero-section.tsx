import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-bold text-balance leading-tight text-4xl">
              Reliable Guidance | Unbiased Carrier Access | Memorable Service | Authentic Connections
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed font-mono">
              We're Different, See For Yourself ↓
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-base">
                Get Quote
                
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent font-bold text-base"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us 
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/happy-family-in-front-of-modern-home-with-car-in-d.jpg"
              alt="Happy family with their home and car"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
