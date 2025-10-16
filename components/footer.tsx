import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img 
                        src="/logo.png" 
                        alt="Kalpakis Insurance Group Logo" 
                        className="h-8 w-auto sm:h-10 sm:w-auto"
                      />
                    </div>
            <p className="text-sm sm:text-base text-primary-foreground/80 text-pretty">
              Reliable Guidance | Unbiased Carrier Access | Memorable Service | Authentic Connections
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Personal Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Investment Properties
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Business Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="https://form.jotform.com/252594970207059" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
                      <li>
                        <a href="/privacy" className="hover:text-accent transition-colors">
                          Privacy Policy
                        </a>
                      </li>
              <li>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(412) 202-9293  </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>team@kalpakisig.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{"1179 Rostraver Rd | Belle Vernon, PA 15012"}    </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-primary-foreground/60">
          <p className="text-sm sm:text-base">© 2025 Kalpakis Insurance Group, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
