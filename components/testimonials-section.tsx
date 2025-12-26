"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef, useEffect } from "react"

const testimonials = [
  {
    rating: 5,
    quote:
      "This has been eye-opening. Customers love the new experience and our team handles fewer unqualified calls.",
    author: "VP of Sales",
    company: "Large Equipment Dealer",
  },
  {
    rating: 5,
    quote:
      "Waply has transformed our customer engagement strategy. The WhatsApp integration is seamless and our response rates are way up.",
    author: "Marketing Director",
    company: "Enterprise Customer",
  },
  {
    rating: 5,
    quote:
      "This is really interesting—very useful for both internal ops and fleet management.",
    author: "CEO",
    company: "Equipment Marketplace",
  },
  {
    rating: 5,
    quote: "Waply made managing our business incredibly easy. Best investment we've made!",
    author: "Edubliss.co",
    company: "Customer",
  },
  {
    rating: 5,
    quote: "We cut response times to 45 seconds and never miss a lead thanks to smart AI handoffs.",
    author: "Head of Operations",
    company: "Retail Services",
  },
  {
    rating: 5,
    quote: "The analytics dashboard shows exactly which campaigns convert. It's our new growth command center.",
    author: "Growth Lead",
    company: "E-commerce Brand",
  },
]

export function TestimonialsSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)

  // Create infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft || 0))
    setScrollLeft(trackRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.5
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (trackRef.current?.offsetLeft || 0))
    setScrollLeft(trackRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.5
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const container = trackRef.current
    if (!container) return

    const autoScroll = () => {
      if (!isPaused) {
        const singleSetWidth = (testimonials.length * 356) // 340px width + 16px gap
        const maxScroll = singleSetWidth
        
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += 1
        }
      }
    }

    intervalIdRef.current = setInterval(autoScroll, 30)

    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isPaused])

  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4" style={{fontFamily: 'Satoshi, sans-serif', fontWeight: 500}}>
            Testimonials
          </p>
          <h2
            className="text-4xl font-medium text-foreground lg:text-[40px] text-balance leading-tight"
            style={{fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em', lineHeight: '1'}}
          >
            Loved by teams
            <br className="hidden sm:block" />
            who trust <span className="italic text-primary" style={{fontFamily: 'Instrument Serif, serif'}}>Waply</span>
          </h2>
        </div>
        <div 
          className="testimonial-scroll-container"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: isDragging ? 'none' : 'auto',
            WebkitUserSelect: isDragging ? 'none' : 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card flex-shrink-0"
              style={{width: '340px', height: '350px', borderRadius: '20px'}}
            >
              <CardContent className="relative z-[1] p-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-primary text-lg" aria-hidden>
                        ★
                      </span>
                  ))}
                  </div>
                  <blockquote className="mb-6">
                    <p
                      className="text-sm text-neutral-700 leading-relaxed"
                      style={{fontFamily: 'Satoshi, sans-serif'}}
                    >
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                </div>
                <footer className="text-xs space-y-1">
                  <p className="font-medium text-foreground" style={{fontFamily: 'Satoshi, sans-serif'}}>
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground" style={{fontFamily: 'Satoshi, sans-serif'}}>
                    {testimonial.company}
                  </p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <style>{`
        .testimonial-scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
