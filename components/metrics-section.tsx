const metrics = [
  {
    value: "2.5s",
    label: "average response time to leads",
  },
  {
    value: "24/7",
    label: "AI support without human limits",
  },
  {
    value: "10x",
    label: "faster than email or SMS",
  },
  {
    value: "92%",
    label: "average customer satisfaction rate",
  },
]

export function MetricsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-normal text-foreground lg:text-4xl text-balance">
            Built for <span className="font-serif italic text-primary">scale</span> and results
          </h2>
        </div>

        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 mx-auto max-w-5xl">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-primary rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary-foreground mb-2">{metric.value}</div>
              <p className="text-xs text-primary-foreground/90 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
