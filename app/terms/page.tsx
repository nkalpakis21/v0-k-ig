import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-balance">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Effective Date:</strong> October 1, 2025
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to the website of Kalpakis Insurance Group, LLC ("we," "our," or "us"). By 
                accessing or using this website, you agree to comply with and be bound by these Terms & 
                Conditions. Please read them carefully. If you do not agree, please discontinue use of our 
                website.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Website Use</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    This website is provided for informational and educational purposes related to our 
                    insurance products and services. You may use the site only for lawful purposes and in 
                    accordance with these Terms & Conditions.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1 ml-4">
                    <li>Use the website in any way that violates applicable laws or regulations</li>
                    <li>Attempt to interfere with the security or functionality of the site</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Use automated means (such as bots, crawlers, or scrapers) without our prior written consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. No Insurance Contract or Coverage Guarantee</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Information provided on this website does not constitute an offer to sell insurance or 
                    create a binding insurance contract. Submission of information through our forms does not 
                    create coverage. Coverage is not effective until confirmed in writing by a licensed agent and 
                    all underwriting requirements are satisfied.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. Intellectual Property Rights</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    All content, logos, graphics, images, and other materials on this website are the property of 
                    Kalpakis Insurance Group, LLC or its licensors and are protected by intellectual property 
                    laws. You may not copy, reproduce, distribute, or modify any content without our prior 
                    written permission, except for personal, non-commercial use.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Third-Party Links</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites for convenience or reference. We do 
                    not control or endorse these websites and are not responsible for their content, products, 
                    services, or privacy practices. Use of third-party sites is at your own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Disclaimer of Warranties</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    This website is provided on an "as is" and "as available" basis. We make no warranties, 
                    express or implied, regarding the website's operation or the information, content, or 
                    services included on it. To the fullest extent permitted by law, we disclaim all warranties, 
                    including implied warranties of merchantability, fitness for a particular purpose, and non- 
                    infringement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Limitation of Liability</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Kalpakis Insurance Group, LLC, its affiliates, 
                    officers, employees, and agents shall not be liable for any indirect, incidental, 
                    consequential, special, or punitive damages arising out of or related to your use of the 
                    website, even if advised of the possibility of such damages. Our total liability for any claim 
                    shall not exceed the amount paid by you (if any) for accessing the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Indemnification</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    You agree to defend, indemnify, and hold harmless Kalpakis Insurance Group, LLC, its 
                    affiliates, employees, and agents from and against any claims, liabilities, damages, 
                    judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) 
                    arising out of or relating to your violation of these Terms & Conditions or your use of the 
                    website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Governing Law</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    These Terms & Conditions shall be governed by and construed in accordance with the laws 
                    of the Commonwealth of Pennsylvania, without regard to its conflict of laws principles. 
                    Any legal action or proceeding arising under these Terms shall be brought exclusively in the 
                    state or federal courts located in Pennsylvania.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Changes to These Terms</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    We may revise these Terms & Conditions at any time without prior notice. The updated 
                    version will be posted on this page with a new Effective Date. Continued use of the website 
                    after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms & Conditions, please contact us at:
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

                <div className="border-t pt-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">SMS Terms & Conditions</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>Effective Date:</strong> 10/1/2025
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">1. SMS Consent Communication</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        By providing your phone number, you consent to receive SMS messages from Kalpakis 
                        Insurance Group, LLC. Your information will not be shared with third parties for 
                        marketing purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">2. Types of SMS Communications</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                        If you have opted in to receive text messages from us, you may receive messages related to:
                      </p>
                      <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1 ml-4">
                        <li>Appointment reminders</li>
                        <li>Follow-up communications</li>
                        <li>Billing or account inquiries</li>
                        <li>Promotions or special offers (if applicable)</li>
                      </ul>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-3">
                        Example: "Hello, this is a friendly reminder of your upcoming appointment with Kalpakis 
                        Insurance Group, LLC on [Date] at [Time]. Reply STOP to opt out of SMS messaging at any 
                        time."
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">3. Message Frequency</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Message frequency may vary depending on the type of communication. For example, you 
                        may receive up to 2 SMS messages per week related to your appointments, billing, or 
                        other account matters.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">4. Potential Fees for SMS Messaging</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Standard message and data rates may apply according to your carrier plan. Fees may vary 
                        depending on whether messages are sent domestically or internationally.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">5. Opt-In Method</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                        You can opt-in to receive SMS messages from Kalpakis Insurance Group, LLC through:
                      </p>
                      <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1 ml-4">
                        <li>Verbally, during a conversation with our team</li>
                        <li>Completing an online form</li>
                        <li>Submitting a paper form</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">6. Opt-Out Method</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                        You can opt out of receiving SMS messages at any time by:
                      </p>
                      <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1 ml-4">
                        <li>Replying "STOP" to any SMS you receive</li>
                        <li>Contacting us directly at (412) 202-9293 or team@kalpakisig.com</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">7. Help</h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        If you experience any issues, you can reply with "HELP" to any SMS message, or contact us 
                        directly at (412) 202-9293 or team@kalpakisig.com.
                      </p>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-3">
                        Additional Options: If you do not wish to receive SMS messages, simply do not check the 
                        SMS consent box on our forms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">8. Standard Messaging Disclosures</h3>
                      <ul className="list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed space-y-1 ml-4">
                        <li>Message and data rates may apply</li>
                        <li>You can opt out at any time by texting "STOP"</li>
                        <li>For assistance, text "HELP" or visit our <a href="/privacy" className="text-primary hover:text-primary/80 underline">Privacy Policy</a> and <a href="/terms" className="text-primary hover:text-primary/80 underline">Terms and Conditions</a> pages</li>
                        <li>Message frequency may vary</li>
                      </ul>
                    </div>
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
