"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Who is Waply for?",
    answer:
      "Waply is built for any business that wants to deliver exceptional customer experiences through WhatsApp and other messaging channels. From e-commerce to SaaS, support teams to sales—if you chat with customers, Waply helps you do it faster and smarter.",
  },
  {
    question: "What channels does Waply support?",
    answer:
      "Waply specializes in WhatsApp but also supports SMS, email, and web chat through our unified omni-channel inbox. Manage all customer conversations in one place, regardless of where they reach you.",
  },
  {
    question: "Can I automate customer conversations without coding?",
    answer:
      "Yes! Our visual Flow Builder lets you create sophisticated automation journeys without writing any code. Build keyword triggers, multi-step workflows, and smart handoffs to human agents—all through an intuitive interface.",
  },
  {
    question: "How quickly can I launch Waply?",
    answer:
      "Most teams get started in days, not weeks. Connect your WhatsApp Business Account, set up your automations using the Flow Builder, and you're live. We provide setup support and templates to accelerate your launch.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Waply offers flexible pricing based on message volume and features you need. Whether you're sending 1,000 or 1 million messages per month, we scale with you. Get a custom quote or start with our free tier.",
  },
  {
    question: "How do you protect customer data and privacy?",
    answer:
      "Security is non-negotiable. All data is encrypted end-to-end, we comply with GDPR and other regulations, and your conversations are never used to train AI models. Your customer data is yours and only yours.",
  },
]

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
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary py-4 hover:no-underline">
                  <span className="flex items-center justify-between w-full">
                    <span>{faq.question}</span>
                    <Plus className="size-5 text-primary shrink-0 ml-4 transition-transform duration-200 [[data-state=open]>&]:rotate-45" />
                  </span>
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
