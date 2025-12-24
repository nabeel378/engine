import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Users, Target } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    title: "Scattered customer conversations",
    description: "Messages across SMS, WhatsApp, email, and phone are disorganized and hard to track",
  },
  {
    icon: Zap,
    title: "Slow response times cost leads",
    description: "Manual processes mean customers wait hours for replies, driving them to competitors",
  },
  {
    icon: Users,
    title: "Team collaboration is broken",
    description: "No unified inbox means lost messages, duplicated efforts, and inconsistent customer experience",
  },
  {
    icon: Target,
    title: "Missed opportunities to engage",
    description: "No smart follow-ups means abandoned carts, unqualified leads, and repeat customers slip away",
  },
];

export function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2
            className="text-4xl font-medium text-foreground lg:text-[52px]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.05",
            }}
          >
            Customer conversations are{" "}
            <span
              className="italic text-primary"
              style={{ fontFamily: "Instrument Serif, serif" }}
            >
              fragmented
            </span>
          </h2>
          <h2
            className="text-4xl font-medium text-foreground lg:text-[52px] mt-1"
            style={{
              fontFamily: "Satoshi, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.05",
            }}
          >
            across disconnected channels
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-white border border-neutral-200 rounded-[20px]"
              style={{
                minHeight: "80px",
                boxShadow:
                  "rgba(0, 0, 0, 0.18) 0px 0.6px 0.6px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.3px 2.3px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px",
              }}
            >
              <CardContent className="p-3">
                {/* Icon + Title Row */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: "#16A34A",
                      width: "44px",
                      height: "44px",
                      borderRadius: "6px",
                    }}
                  >
                    <problem.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>

                  <div className="max-w-[75%]">
                    <h3
                      className="text-left font-medium text-foreground"
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: "22px",
                        lineHeight: "1.3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {problem.title}
                    </h3>

                    <p
                      className="mt-2 text-sm text-neutral-600"
                      style={{
                        fontFamily: "Satoshi, sans-serif",
                        lineHeight: "1.5",
                      }}
                    >
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
