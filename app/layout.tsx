import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Waply - WhatsApp Automation Platform",
  description:
    "Never lose a customer to a slow reply again. Automate WhatsApp conversations, scale your team, and grow your business.",
  generator: "waply.io",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="m88x0qtliz95e8synplo0uwkfxr8b9" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PZ9W742GHS"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PZ9W742GHS');
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const navbar = document.querySelector('nav');
                if (navbar) {
                  window.addEventListener('scroll', () => {
                    if (window.scrollY > 10) {
                      navbar.classList.remove('bg-slate-50');
                    } else {
                      navbar.classList.add('bg-slate-50');
                    }
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
