"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-5 text-5xl font-medium leading-tight text-foreground lg:text-7xl text-balance tracking-tight" style={{fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.03em'}}>
            Your <span className="italic text-primary font-normal" style={{fontFamily: 'Instrument Serif, serif'}}>customers</span> deserve better
          </h1>


          <p className="mb-12 text-2xl text-neutral-600 lg:text-3xl text-pretty max-w-3xl mx-auto font-medium" style={{fontFamily: 'Satoshi, sans-serif', lineHeight: '1.4em'}}>
            Never lose a customer to a slow reply again.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary text-primary-foreground rounded-md px-6 h-11 text-sm font-medium relative group overflow-hidden inline-flex items-center justify-center"
              onClick={() => window.location.href = 'https://bit.ly/waply-book-demo'}
            >
              <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full">
                Book demo
              </span>
              <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                Book demo
              </span>
            </Button>
                    
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:text-primary hover:bg-background bg-background rounded-md px-6 h-11 text-sm font-medium relative group overflow-hidden inline-flex items-center justify-center"
              onClick={() => window.location.href = 'https://app.waply.io'}
            >
              <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full flex items-center gap-2">
                Get Started
              </span>
              <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
