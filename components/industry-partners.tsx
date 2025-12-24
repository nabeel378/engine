export function IndustryPartners() {
  const integrations = [
    { label: 'Salesforce', weight: 'font-semibold' },
    { label: 'HubSpot', weight: 'font-bold' },
    { label: 'Shopify', weight: 'font-bold' },
    { label: 'Zoho', weight: 'font-semibold' },
    { label: 'Pipedrive', weight: 'font-bold' },
    { label: 'Google', weight: 'font-semibold' },
    { label: 'Microsoft', weight: 'font-bold' },
    { label: 'Slack', weight: 'font-semibold' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-xs text-muted-foreground uppercase tracking-wide font-medium" style={{fontFamily: 'Satoshi, sans-serif'}}>
          Integrations
        </p>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...integrations, ...integrations].map((integration, idx) => (
              <div key={idx} className="flex flex-col items-center flex-shrink-0 transition-all duration-300 hover:opacity-100 cursor-pointer" style={{fontFamily: 'Satoshi, sans-serif'}}>
                <div className={`${integration.weight} text-base tracking-tight text-foreground`}>
                  {integration.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
