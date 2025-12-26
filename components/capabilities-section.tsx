import { MessageSquare, Workflow, Filter, Send, Package, Users, BarChart3, Zap } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Omni-Channel",
    description: "Manage WhatsApp, SMS, email, and more from one unified inbox",
    video: "/omni.mp4"
  },
    {
    icon: Filter,
    title: "Keyword Trigger",
    description: "Auto-respond to customer messages based on keywords and conditions",
    video: "/keyword.mp4"
  },
  {
    icon: Send,
    title: "Broadcast",
    description: "Send targeted campaigns to thousands of customers instantly",
    video: "/broadcast.mp4"
  },
  {
    icon: Workflow,
    title: "Flow Builder",
    description: "Create complex customer journeys with drag-and-drop automation",
    video: "/flow.mp4"
  },

  {
    icon: Package,
    title: "Catalog Management",
    description: "Showcase products directly in WhatsApp conversations",
    video: null
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Assign conversations, manage permissions, track agent performance",
    video: null
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time insights into response times, conversion rates, and engagement",
    video: "/analytic.mp4"
  },
  {
    icon: Zap,
    title: "AI Assistant",
    description: "Intelligent handoff and auto-responses powered by AI",
    video: "/ai.mp4"
  },
]

export function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2
            className="text-5xl lg:text-6xl font-medium text-foreground text-balance mb-6"
            style={{
              fontFamily: "Satoshi, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Powerful <span
              className="italic text-primary"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              capabilities
            </span>
          </h2>
          <p
            className="text-xl text-neutral-600"
            style={{ fontFamily: "Satoshi, sans-serif", lineHeight: "1.6" }}
          >
            Everything you need to deliver exceptional customer experiences at scale
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl">
          {features.map((feature, index) => {
            // Create varied sizes for visual interest
            const isLarge = index % 5 === 0 || index % 5 === 3
            const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1"
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${colSpan}`}
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 16px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Background GIF/Demo Area */}
                <div
                  className="relative w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden"
                  style={{
                    aspectRatio: isLarge ? "2 / 1.2" : "1 / 1.2",
                    boxShadow: "0 0 24px rgba(22, 163, 74, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                    border: "1px solid",
                    borderImage: "linear-gradient(135deg, rgba(22, 163, 74, 0.3), rgba(16, 185, 129, 0.15)) 1",
                  }}
                >
                  {/* Animated background accent */}
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br from-green-100/40 to-transparent"></div>
                  
                  {/* Video Content */}
                  {feature.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={feature.video} type="video/mp4" />
                    </video>
                  ) : (
                    // Fallback placeholder when no video
                    <div className="relative h-full flex flex-col items-center justify-center p-6">
                      <div
                        className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500"
                        style={{
                          width: isLarge ? "56px" : "48px",
                          height: isLarge ? "56px" : "48px",
                          backgroundColor: "#16A34A20",
                          borderRadius: "12px",
                        }}
                      >
                        <feature.icon className={`text-primary group-hover:text-primary transition-all ${isLarge ? "w-7 h-7" : "w-6 h-6"}`} />
                      </div>
                      <p
                        className="text-neutral-400 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Demo Coming Soon
                      </p>
                    </div>
                  )}

                  {/* Hover border glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/20 rounded-2xl"></div>
                </div>

                {/* Info Section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent pt-6">
                  <h3
                    className="text-left font-medium text-foreground mb-1"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 text-sm text-neutral-600"
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      lineHeight: "1.5"
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
