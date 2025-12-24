import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-2.5 border-t border-dotted border-border"></div>
      
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-medium text-foreground mb-8" style={{fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.03em'}}>
              Terms & Conditions
            </h1>
            
            <div className="prose prose-sm max-w-none text-foreground/90">
              <p className="mb-6 text-lg">
                Last updated: April 19, 2023
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Waply ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by Waply.
              </p>
              <p className="mb-4">
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: Privacy Policy.
              </p>
              <p className="mb-4">
                Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
              </p>
              <p className="mb-4">
                If you do not agree with Agreements, you must not use our Service. Please contact us if you have any questions regarding the Agreements.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">2. Communications</h2>
              <p className="mb-4">
                By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">3. Purchases</h2>
              <p className="mb-4">
                If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
              </p>
              <p className="mb-4">
                We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">4. Subscriptions</h2>
              <p className="mb-4">
                Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
              </p>
              <p className="mb-4">
                At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Waply cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Waply customer support team.
              </p>
              <p className="mb-4">
                A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide Waply with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Waply to charge all Subscription fees incurred through your account to any such payment instruments.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">5. Free Trial</h2>
              <p className="mb-4">
                Waply may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
              </p>
              <p className="mb-4">
                You may be required to enter your billing information in order to sign up for Free Trial.
              </p>
              <p className="mb-4">
                If you do enter your billing information when signing up for Free Trial, you will not be charged by Waply until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
              </p>
              <p className="mb-4">
                At any time and without notice, Waply reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">6. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mb-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at legal@waply.io.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
