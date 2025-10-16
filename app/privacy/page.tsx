import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-balance">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Effective Date:</strong> October 1, 2025
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Kalpakis Insurance Group, LLC ("we," "our," or "us") respects your privacy and is committed to 
                protecting your personal information. This Privacy Policy explains how we collect, use, share, and 
                protect your information in compliance with applicable federal and Pennsylvania state laws, including 
                the Gramm–Leach–Bliley Act (GLBA) and related privacy regulations.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We may collect personal information from you in various ways, including online forms, phone 
                    conversations, email, and in person. This may include: name, address, email address, phone number, 
                    date of birth, driver's license information, Social Security number (when necessary for quoting or 
                    underwriting), vehicle/property/insurance history information, and IP address or browsing data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We use the information we collect to provide quotes, communicate with you, process transactions, 
                    meet legal obligations, and improve our website and services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. How We Share Your Information</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share your information only as necessary to provide 
                    services and comply with the law, including with licensed carriers, service providers, regulatory 
                    authorities, or with your consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We maintain safeguards in compliance with federal and Pennsylvania regulations to protect your 
                    personal information. While we take reasonable steps to secure data, no method of transmission over 
                    the Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Your Rights & Choices</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Under Pennsylvania and federal law, you may request access to, correction of, or restrictions on certain 
                    uses or disclosures of your personal information. You may also opt out of certain information sharing 
                    where permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Cookies & Analytics</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our website may use cookies and similar technologies to enhance your experience and analyze traffic. 
                    You can manage cookies through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Compliance with GLBA and Pennsylvania Requirements</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    As an insurance agency, we follow GLBA requirements to safeguard customer information and provide 
                    disclosures about our information practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Changes to This Policy</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy periodically. Any changes will be posted on this page with an 
                    updated Effective Date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Contact Us</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    If you have questions, requests, or concerns about this Privacy Policy or our data practices, contact:
                  </p>
                  <div className="mt-4 p-6 bg-muted/50 rounded-lg">
                    <p className="text-base sm:text-lg font-semibold mb-2">Kalpakis Insurance Group, LLC</p>
                    <p className="text-base sm:text-lg text-muted-foreground mb-1">1179 Rostraver Rd</p>
                    <p className="text-base sm:text-lg text-muted-foreground mb-1">Belle Vernon, PA 15012</p>
                    <p className="text-base sm:text-lg text-muted-foreground mb-1">
                      Email: <a href="mailto:team@kalpakisig.com" className="text-primary hover:text-primary/80 underline">team@kalpakisig.com</a>
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Phone: <a href="tel:+14122029293" className="text-primary hover:text-primary/80 underline">(412) 202-9293</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
