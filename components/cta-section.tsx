"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-0 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start py-16 lg:py-20">
          <div className="flex flex-col justify-start pt-8">
            <div className="flex items-center gap-2 mb-6">
              {/* <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-foreground"
              >
                <rect width="8" height="8" fill="currentColor" />
                <rect x="16" y="0" width="8" height="8" fill="currentColor" />
                <rect x="8" y="8" width="8" height="8" fill="currentColor" />
                <rect x="24" y="8" width="8" height="8" fill="currentColor" />
                <rect x="0" y="16" width="8" height="8" fill="currentColor" />
                <rect x="16" y="16" width="8" height="8" fill="currentColor" />
                <rect x="8" y="24" width="8" height="8" fill="currentColor" />
                <rect x="24" y="24" width="8" height="8" fill="currentColor" />
              </svg> */}
              <span className="text-2xl font-semibold text-primary-foreground">Waply</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-primary-foreground mb-4 leading-tight">
              Ready to scale?
              <br />
              Book a demo
            </h2>
            <p className="text-primary-foreground/90 text-sm mb-8 max-w-md leading-relaxed">
              See how Waply transforms customer communication. Pick a time that works for you.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-md w-fit px-8 h-12 font-medium"
              onClick={() => window.location.href = 'https://calendly.com/mohammadnabeel/30min'}
            >
              Schedule Now
            </Button>
          </div>

          <div className="lg:ml-auto w-full max-w-md">
            <iframe
              src="https://calendly.com/mohammadnabeel/30min?hide_event_type_details=1&hide_gdpr_block=1"
              width="100%"
              height="600"
              style={{ border: 0, borderRadius: '0.5rem' }}
              frameBorder="0"
              allow="payment"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
