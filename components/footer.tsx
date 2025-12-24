export function Footer() {
  return (
  <section className="py-0 bg-primary">
    <footer className="bg-white py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <a href="/" className="text-foreground font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="https://app.dover.com/jobs/waply" className="text-foreground font-medium hover:text-primary transition-colors">
              Careers <span className="text-muted-foreground text-sm">(We're hiring)</span>
            </a>
            <a href="/privacy-policy" className="text-foreground font-medium hover:text-primary transition-colors">
              Privacy policy
            </a>
            <a href="/terms-of-service" className="text-foreground font-medium hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-foreground font-medium mb-2">info@waply.io</p>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Waply INC</p>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}
