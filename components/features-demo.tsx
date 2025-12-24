export function FeaturesDemo() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-medium text-foreground lg:text-[52px] text-balance mb-4"
              style={{
                fontFamily: "Satoshi, sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: "1.05",
              }}
            >
              See <span
                className="italic text-primary"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Waply
              </span> in action
            </h2>
            <p
              className="text-lg text-muted-foreground"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Watch how teams manage conversations and automate workflows across all channels
            </p>
          </div>

          {/* Video/GIF Container */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden bg-neutral-100"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px",
            }}
          >
            {/* Placeholder for video/gif */}
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
              <div className="text-center">
                <div
                  className="text-6xl mb-4"
                  style={{ opacity: 0.3 }}
                >
                  🎬
                </div>
                <p
                  className="text-neutral-600"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  Video/GIF Demo Coming Soon
                </p>
                <p
                  className="text-sm text-neutral-500 mt-2"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  Replace with your Waply product demo video or animated GIF
                </p>
              </div>
            </div>
          </div>

          {/* Features highlight below video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div
                className="text-3xl font-bold text-primary mb-2"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                45s
              </div>
              <p
                className="text-sm text-neutral-600"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Average response time
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-primary mb-2"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                100%
              </div>
              <p
                className="text-sm text-neutral-600"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Message capture rate
              </p>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-primary mb-2"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                24/7
              </div>
              <p
                className="text-sm text-neutral-600"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                AI-powered support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
