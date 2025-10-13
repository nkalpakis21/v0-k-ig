import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Target, Handshake } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">About Kalpakis Insurance Group</h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Jesse Kalpakis comes from serving as managing partner of a franchise-model independent agency, where he gained firsthand insight into what works—and where the industry as a whole often falls short. Out of that experience, he founded Kalpakis Insurance Group, LLC with a mission of doing things differently.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-base sm:text-lg text-muted-foreground text-center">
            His vision is guided by four core principles:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Reliable Guidance */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="h-20 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Reliable Guidance</CardTitle>
              </div>
              <CardDescription className="text-pretty flex-1 text-sm sm:text-base leading-relaxed">
                You can trust that we know what we're doing—and that we're committed to providing prompt, knowledgeable, and empathetic insurance advice.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Unbiased Carrier Access */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="h-20 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Unbiased Carrier Access</CardTitle>
              </div>
              <CardDescription className="text-pretty flex-1 text-sm sm:text-base leading-relaxed">
                We'll never influence your options by having a singular carrier's logo on our door. As rates & underwriting guidelines continue to evolve, a relationship with a truly independent local agency is critical.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Memorable Service */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="h-20 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Memorable Service</CardTitle>
              </div>
              <CardDescription className="text-pretty flex-1 text-sm sm:text-base leading-relaxed">
                We supplement, never sacrifice, customer service with Tech & AI. Our agency is enthusiastically by your side for the life of your policy, not just the day you sign it.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Authentic Connections */}
          <Card className="border-border hover:shadow-lg transition-shadow flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="h-20 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Authentic Connections</CardTitle>
              </div>
              <CardDescription className="text-pretty flex-1 text-sm sm:text-base leading-relaxed">
                We build lasting relationships with carrier & referral partners whose values & processes align with ours. When we work together, our shared clients win—and our partners shine as the heroes of their story.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <a href="#contact" className="text-primary hover:text-primary/80 font-semibold underline">
              LEARN MORE
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
