import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const integrationSteps = [
  {
    image: "/i1.png",
    title: "Connect",
    description: "All conversations in one place",
  },
  {
    image: "/i2.png",
    title: "Automate",
    description: "Let AI handle the repetitive work",
  },
  {
    image: "/i3.png",
    title: "Scale",
    description: "Grow without hiring",
  },
]

export function IntegrationSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-6xl font-medium text-foreground text-balance" style={{fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em', lineHeight: '1em'}}>
            Everything connected. <span className="font-serif italic text-primary">Everything</span> automated.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-5xl">
          {integrationSteps.map((step, index) => {
            return (
              <Card key={index} className="bg-card border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-2 pb-2 text-left">
                  <div 
                    className="mb-6 flex justify-center p-8 rounded-lg border border-gray-200"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={900}
                      height={400}
                    />
                  </div>
                  <h3 className="text-3xl font-medium text-foreground mb-2" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.01em', lineHeight: '1em' }}>{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium" style={{ fontFamily: 'Satoshi, sans-serif', letterSpacing: '-0.02em' }}>{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
