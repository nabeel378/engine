import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IndustryPartners } from "@/components/industry-partners"
import { ProblemSection } from "@/components/problem-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { IntegrationSection } from "@/components/integration-section"
import { MetricsSection } from "@/components/metrics-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-2.5 border-t border-dotted border-border"></div>
      <HeroSection />
      <div className="mt-2.5 border-b border-dotted border-border"></div>
      <IndustryPartners />
      <ProblemSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <MetricsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
