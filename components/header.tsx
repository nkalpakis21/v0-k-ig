import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8" />
            <span className="font-bold text-4xl">KALPAKIS INSURANCE GROUP</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent font-bold text-base"
            >
              Contact Us
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base">Get Quote</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
