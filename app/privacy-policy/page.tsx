import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-2.5 border-t border-dotted border-border"></div>
      
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-medium text-foreground mb-8" style={{fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.03em'}}>
              Privacy Policy
            </h1>
            
            <div className="prose prose-sm max-w-none text-foreground/90">
              <p className="mb-6 text-lg">
                Last updated: April 19, 2023
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Waply, we respect your privacy and are committed to protecting it through our compliance with this policy.
              </p>
              <p className="mb-4">
                This Privacy Policy describes the types of information we may collect from you or that you may provide when you use our WhatsApp automation platform and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p className="mb-4">
                Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our platform. By accessing or using our platform, you agree to this privacy policy.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our platform, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal information such as name, email address, telephone number, and billing information.</li>
                <li>Information about your WhatsApp conversations when you use our platform to automate responses.</li>
                <li>Information about your customers or end-users who interact with your WhatsApp business account through our platform.</li>
                <li>Technical information including IP address, browser type, operating system, and device information.</li>
                <li>Usage data such as pages visited, features used, and time spent on the platform.</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide, maintain, and improve our platform and services.</li>
                <li>To process and complete transactions, and send you related information, including purchase confirmations and invoices.</li>
                <li>To send you technical notices, updates, security alerts, and support and administrative messages.</li>
                <li>To respond to your comments, questions, and requests, and provide customer service.</li>
                <li>To communicate with you about products, services, offers, promotions, and events, and provide other news or information about us and our partners.</li>
                <li>To monitor and analyze trends, usage, and activities in connection with our platform.</li>
                <li>To personalize and improve the platform and provide content or features that match user profiles or interests.</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
              </p>
              <p className="mb-4">
                We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Waply's assets.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>
              <p className="mb-4">
                We may also disclose your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li>To enforce or apply our terms of use and other agreements.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Waply, our customers, or others.</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
              </p>
              <p className="mb-4">
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our platform, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
              </p>
              <p className="mb-4">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our platform. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the platform.
              </p>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@waply.io.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
