import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="font-bold text-lg sm:text-2xl lg:text-4xl">KALPAKIS INSURANCE GROUP</span>
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

          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent font-bold text-xs lg:text-base"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs lg:text-base"
              asChild
            >
              <a href="https://form.jotform.com/252594970207059" target="_blank" rel="noopener noreferrer">Get Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
