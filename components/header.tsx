"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/header.png" 
              alt="Kalpakis Insurance Group Logo" 
              className="h-6 w-auto sm:h-8 sm:w-auto"
            />
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
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#services" 
                className="hover:text-accent transition-colors text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="hover:text-accent transition-colors text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="hover:text-accent transition-colors text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent font-bold text-sm"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                </Button>
                <Button 
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-sm"
                  asChild
                >
                  <a href="https://form.jotform.com/252594970207059" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
