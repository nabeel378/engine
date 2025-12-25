"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-slate-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Waply"
              width={30}
              height={20}
              className="w-20 h-11 object-contain"
              priority
            />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-0 bg-secondary rounded-full px-1 py-1">
          <Link href="/" className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground bg-background transition-colors">
            Home
          </Link>
          <a href="https://app.dover.com/jobs/waply" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Careers
          </a>
        </div>

        <Button 
          className="bg-primary hover:bg-primary text-primary-foreground rounded-md px-5 py-2 h-auto text-sm font-medium relative group overflow-hidden inline-flex items-center justify-center"
          onClick={() => window.open('https://calendly.com/mohammadnabeel/30min', '_blank')}
        >
          <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full">
            Book demo
          </span>
          <span className="absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
            Book demo
          </span>
        </Button>
      </div>
    </nav>
  )
}
