import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Smartphone, Cloud, Brain, Shield, Rocket,
  Palette, BarChart3, Search, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | SoftSkySolution" },
      { name: "description", content: "Full-stack software engineering: web, mobile, cloud, AI, cybersecurity, branding and digital strategy." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade web platforms with React, Next.js, TanStack Start and modern tooling.",
    features: ["SSR and edge rendering", "Type-safe full-stack", "Real-time features", "SEO and performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-feeling iOS and Android apps with React Native, Expo and Swift or Kotlin where needed.",
    features: ["Cross-platform", "Offline-first", "Push notifications", "App Store launch"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure on AWS, GCP, Cloudflare with battle-tested CI/CD pipelines.",
    features: ["Infrastructure as code", "Auto-scaling", "Cost optimization", "Disaster recovery"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "LLM-powered features, RAG systems, computer vision, and intelligent automation.",
    features: ["Custom chatbots", "Document AI", "Predictive models", "Vector search"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security audits, penetration testing and zero-trust architecture implementation.",
    features: ["Vulnerability audits", "SOC 2 readiness", "Penetration testing", "Secure SDLC"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    desc: "Research-led product design that makes complex software feel simple and delightful.",
    features: ["User research", "Design systems", "Prototyping", "Usability testing"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Data pipelines, dashboards and BI platforms that turn raw numbers into decisions.",
    features: ["ETL pipelines", "Custom dashboards", "Real-time analytics", "Data warehousing"],
  },
  {
    icon: Search,
    title: "SEO & Growth",
    desc: "Technical SEO, content strategy and conversion optimization that compounds.",
    features: ["Technical audits", "Content strategy", "CRO experiments", "Analytics setup"],
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    desc: "Product strategy, market validation and go-to-market planning for digital launches.",
    features: ["Product discovery", "Roadmap planning", "GTM strategy", "Investor decks"],
  },
];

function Services() {
  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            My Services
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Every <span className="text-gradient-primary">discipline</span> your product needs
          </h1>
          <p className="text-lg text-muted-foreground">
            Nine specialized practices from one accountable engineer. Engage me for a single sprint or a long-term partnership.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1 duration-300 space-y-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              <ul className="space-y-1.5 pt-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/30 p-10 md:p-12 text-center">
          <div className="relative space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Not sure which service fits?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free 30 minute scoping call. I will help map your idea to a concrete plan.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-11 px-7">
              <Link to="/contact">
                Book Free Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}