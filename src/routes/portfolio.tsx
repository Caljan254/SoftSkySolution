import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SoftSkySolution LTD" },
      { name: "description", content: "Selected work from SoftSkySolution: SaaS platforms, mobile apps, AI products and enterprise systems." },
    ],
  }),
  component: Portfolio,
});

type Project = { title: string; category: string; tags: string[]; desc: string; gradient: string };

const projects: Project[] = [
  { title: "FinHub Mobile Banking", category: "FinTech", tags: ["React Native", "Node.js", "AWS"], desc: "End-to-end mobile banking app serving 50k+ users across East Africa.", gradient: "from-blue-500/30 to-cyan-500/30" },
  { title: "MediTrack EHR", category: "HealthTech", tags: ["Next.js", "Postgres", "HIPAA"], desc: "Electronic health records platform deployed across 12 clinics.", gradient: "from-emerald-500/30 to-teal-500/30" },
  { title: "AgriPredict AI", category: "AgriTech / AI", tags: ["Python", "ML", "Computer Vision"], desc: "Crop disease detection from smartphone photos with 94% accuracy.", gradient: "from-amber-500/30 to-orange-500/30" },
  { title: "VoteSafe Dashboard", category: "GovTech", tags: ["React", "D3", "Cloudflare"], desc: "Real-time election results dashboard handling 200k req/sec.", gradient: "from-red-500/30 to-rose-500/30" },
  { title: "Atelier Commerce", category: "E-commerce", tags: ["Shopify", "Hydrogen", "Stripe"], desc: "Luxury fashion storefront with AR try-on and headless CMS.", gradient: "from-purple-500/30 to-pink-500/30" },
  { title: "LogiFlow ERP", category: "Enterprise", tags: ["TanStack", "GraphQL", "GCP"], desc: "Logistics ERP managing 15k daily shipments across 8 countries.", gradient: "from-indigo-500/30 to-violet-500/30" },
];

const categories = ["All", "FinTech", "HealthTech", "AgriTech / AI", "GovTech", "E-commerce", "Enterprise"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Selected Work
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Products that <span className="text-gradient-primary">moved markets</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A sample of the platforms, apps and systems we've engineered for clients across three continents.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <Card key={p.title} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300">
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 starfield opacity-30" />
                <div className="relative text-center px-6">
                  <div className="text-xs uppercase tracking-widest text-foreground/70 mb-2">{p.category}</div>
                  <div className="text-2xl font-display font-bold">{p.title}</div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                  View Case Study <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Your project could be next.</h2>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-12 px-8">
            <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
