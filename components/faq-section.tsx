"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is Waply for?",
    answer:
      "Waply is designed for businesses that rely on WhatsApp to sell, support, and engage customers. It’s ideal for e-commerce brands, service providers, agencies, SaaS companies, and growing teams that want to automate conversations, manage leads, and close more deals without complexity.",
  },
  {
    question: "What channels does Waply support?",
    answer:
      "Waply is built primarily for WhatsApp Business API. In addition, you can manage conversations from Facebook, Instagram, web chat, and other channels in one unified inbox so your team never misses a customer message.",
  },
  {
    question: "Can I automate customer conversations without coding?",
    answer:
      "Absolutely. Waply’s no-code automation tools let you build smart conversation flows, auto-replies, lead qualification, order updates, and follow-ups without writing a single line of code. You can also switch to a human agent anytime.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "You can start immediately with a free trial. Most businesses go live within a few days after connecting their WhatsApp Business account. Our guided setup, templates, and support make onboarding fast and simple.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Waply offers a free trial and a simple $39/month plan. Message charges from WhatsApp (Meta) apply separately based on usage. There are no hidden fees pay only for what you use as your business grows.",
  },
  {
    question: "Is my customer data safe with Waply?",
    answer:
      "Yes. We take security seriously. All data is securely encrypted, access is role-based, and your customer conversations remain private. Waply never sells or uses your data for training third-party AI models.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-normal text-foreground lg:text-4xl mb-10 text-center text-balance">
            <span className="font-serif italic text-primary">Frequently</span> Asked Questions.
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card px-5"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary py-4 hover:no-underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
