import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Code2, Cloud, Smartphone, Brain, Shield, Rocket,
  Sparkles, CheckCircle2, Globe2, Star, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoftSkySolution LTD — Build Bold Software" },
      { name: "description", content: "Strategic technology partners building world-class software, cloud platforms, AI products and mobile apps for ambitious teams." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern, performant web apps built with React, Next.js and TanStack." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS & Android apps that users love to open every day." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable infrastructure on AWS, GCP and Cloudflare with CI/CD pipelines." },
  { icon: Brain, title: "AI & Automation", desc: "LLM-powered features, intelligent chatbots and workflow automation." },
  { icon: Shield, title: "Cybersecurity", desc: "Hardening, audits and zero-trust architecture for peace of mind." },
  { icon: Rocket, title: "Digital Strategy", desc: "Product strategy, UX research and go-to-market for digital launches." },
];

const stats = [
  { value: 120, suffix: "+", label: "Clients Globally" },
  { value: 280, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

function useCounter(target: number, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return n;
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const n = useCounter(value);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary">
        {n}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 starfield opacity-60"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 md:px-6 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Q3 Projects
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05]">
              We build <span className="text-gradient-primary">bold software</span><br />
              for ambitious teams.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SoftSkySolution LTD is a Nairobi-rooted, globally-trusted technology partner — engineering web, mobile, AI and cloud products that move businesses forward.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow text-base h-12 px-7">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 h-12 px-7">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
              {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            End-to-end services <span className="text-gradient-primary">that ship</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From idea validation to scaled production — our team owns every layer of your digital product.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card
              key={s.title}
              className="group relative p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1 duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-xl transition-all" />
              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-semibold">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card/30 border-y border-border/40 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                <Globe2 className="h-4 w-4" /> Why SoftSkySolution
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                A global team with a <span className="text-gradient-primary">local heart</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We blend deep engineering chops with strategic clarity. Every engagement is led by senior talent, runs on transparent sprints, and is built to outlast the trends.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated senior engineers — no juniors hidden behind the curtain",
                  "Weekly demos and Slack-first communication",
                  "Fixed-scope or retainer engagement models",
                  "12-month post-launch support included",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-4">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "01", title: "Discover", desc: "Workshops to align on goals and metrics." },
                { num: "02", title: "Design", desc: "UX research and clickable prototypes." },
                { num: "03", title: "Develop", desc: "Iterative sprints with weekly demos." },
                { num: "04", title: "Deploy", desc: "Launch, monitor, optimize, scale." },
              ].map((p) => (
                <Card key={p.num} className="p-6 bg-background/60 border-border/40 hover:border-primary/50 transition-colors">
                  <div className="text-3xl font-display font-bold text-primary/70 mb-3">{p.num}</div>
                  <h4 className="font-display font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Star className="h-4 w-4" /> Client Love
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Trusted by founders & enterprises
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "SoftSkySolution rebuilt our entire platform in 10 weeks. Conversion is up 38%.", name: "Amara Okafor", role: "CEO, Lagos Logistics" },
            { quote: "The most senior, most communicative team we've ever worked with. Period.", name: "James Mwangi", role: "CTO, FinHub Kenya" },
            { quote: "They shipped what 2 previous agencies couldn't. Now our growth partner.", name: "Sophie Laurent", role: "Founder, Atelier Paris" },
          ].map((t) => (
            <Card key={t.name} className="p-8 bg-card/50 border-border/50 space-y-4">
              <Quote className="h-8 w-8 text-primary/40" />
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="pt-2 border-t border-border/40">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/30 p-12 md:p-16 text-center">
          <div className="absolute inset-0 starfield opacity-30" />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to build something <span className="text-gradient-primary">extraordinary?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project. We'll get back within 24 hours with a roadmap.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-12 px-8">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
