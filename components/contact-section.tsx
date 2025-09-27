import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">Contact Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to get started? We're here to help you find the perfect insurance coverage for your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Phone Contact */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Call Us</CardTitle>
              <CardDescription className="text-pretty">
                Speak directly with our insurance experts for personalized service and immediate assistance.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-end">
              <div className="space-y-4">
                <div className="text-2xl font-bold text-primary">(412) 202-9293</div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="tel:+14122029293">
                    Call Now
                    <Phone className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Email Us</CardTitle>
              <CardDescription className="text-pretty">
                Send us a message and we'll get back to you with a personalized quote and coverage options.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-end">
              <div className="space-y-4">
                <div className="text-lg font-medium text-primary">team@kalpakisig.com</div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="mailto:team@kalpakisig.com">
                    Send Email
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
