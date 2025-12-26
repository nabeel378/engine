export function Footer() {
  return (
  <section className="py-0 bg-background">
    <footer className="bg-white py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Waply</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The fastest way to automate customer conversations on WhatsApp.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Product</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/#capabilities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Company</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="https://app.dover.com/jobs/waply" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers (We're hiring)
              </a>
              <a href="mailto:info@waply.io" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Waply INC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:info@waply.io" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              info@waply.io
            </a>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}
