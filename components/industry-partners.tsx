"use client"

import Image from "next/image"

export function IndustryPartners() {
  const integrations = [
    { label: 'Salesforce', logo: '/salesforce-logo.svg' },
    { label: 'HubSpot', logo: '/hubspot-logo-alt.svg' },
    { label: 'Shopify', logo: '/shopify-logo.svg' },
    { label: 'Zoho', logo: '/zoho-logo.svg' },
    { label: 'Pipedrive', logo: '/pipedrive-logo.svg' },
    { label: 'Microsoft', logo: '/microsoft-logo.svg' },
    { label: 'Slack', logo: '/slack-logo-alt.svg' },
    { label: 'Calendly', logo: '/calendly.svg' },
  { label: 'Google Sheets', logo: '/google-sheet.svg' },
  { label: 'Woocommerce', logo: '/woocommerce.svg' },
  { label: 'SendGrid', logo: '/sendgrid.svg' },
  { label: 'Noon', logo: '/noon.svg' },

    
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <p 
            className="text-base font-normal text-center"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              color: 'rgb(97, 97, 97)',
              letterSpacing: '0',
              lineHeight: '1.6'
            }}
          >
            Built with industry leaders, for industry leaders
          </p>
        </div>

        <section 
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            placeItems: 'center',
            margin: '0px',
            padding: '10px 10px 10px 50px',
            listStyleType: 'none',
            opacity: 1,
            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
            overflow: 'hidden',
          }}
        >
          <ul 
            style={{
              display: 'flex',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              placeItems: 'center',
              margin: '0px',
              padding: '0px',
              listStyleType: 'none',
              gap: '50px',
              position: 'relative',
              flexDirection: 'row',
              willChange: 'transform',
              animation: 'marquee-scroll 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {[...integrations, ...integrations].map((integration, idx) => (
              <li key={idx} style={{flexShrink: 0}}>
                <div 
                  className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
                  style={{minWidth: '88px'}}
                >
                  <Image
                    src={integration.logo}
                    alt={integration.label}
                    width={14}
                    height={14}
                    className="object-contain"
                    style={{display: 'block', width: '70%', height: '70%'}}
                  />
                  <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center whitespace-nowrap">
                    {integration.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 30px));
          }
        }
        
        .marquee-content-premium {
          animation: marquee-scroll 40s linear infinite !important;
        }
      `}</style>
    </section>
  )
}
