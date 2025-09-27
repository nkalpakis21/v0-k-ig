import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-bold">Kalpakis Insurance Group</span>
            </div>
            <p className="text-primary-foreground/80 text-pretty">
              Reliable Guidance | Unbiased Carrier Access | Memorable Service | Authentic Connections
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Personal Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Commercial Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Claims
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
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
                <span>{"1179 Rostraver Rd | Rostraver Twp, PA 15012"}    </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Kalpakis Insurance Group, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
