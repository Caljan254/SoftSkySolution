import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SoftSkySolution LTD" },
      { name: "description", content: "Meet SoftSkySolution LTD — a Nairobi-based technology partner building digital products for clients across three continents." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcomes Over Output", desc: "We measure success by your KPIs, not by lines of code shipped." },
  { icon: Heart, title: "Radical Transparency", desc: "Real-time dashboards, weekly demos, no surprises on invoices." },
  { icon: Award, title: "Senior By Default", desc: "Every project led by 8+ year engineers — never a sandbox for juniors." },
  { icon: Globe2, title: "Globally Minded", desc: "Clients in 15+ countries means we ship for scale, latency and locality." },
];

function About() {
  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Engineering <span className="text-gradient-primary">excellence</span>, from Kenya to the world
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a tight-knit team of strategists, designers and engineers united by one belief: world-class software shouldn't be a coastal privilege.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={aboutImg}
              alt="SoftSkySolution team member at work"
              width={1280}
              height={1024}
              loading="lazy"
              className="relative rounded-2xl shadow-card"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Our story
            </h2>
            <p className="text-muted-foreground text-lg">
              Founded in Nairobi by Caleb Janju, SoftSkySolution LTD started as a one-person consultancy with a stubborn vision: prove that an African studio could compete head-to-head with London, Berlin and San Francisco — on quality, on speed, on craft.
            </p>
            <p className="text-muted-foreground text-lg">
              Five years and 280+ shipped projects later, we're a multidisciplinary team serving founders, governments and Fortune 500s. We've built election dashboards, mobile banking, AI-powered SaaS, and everything in between.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-3xl font-display font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 border-y border-border/40 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-background/60 border-border/40 space-y-4">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To engineer software that creates measurable, lasting impact for ambitious organizations — wherever they are in the world.
              </p>
            </Card>
            <Card className="p-8 bg-background/60 border-border/40 space-y-4">
              <Eye className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Africa's most trusted technology export — a brand synonymous with technical excellence and human-centered design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What we <span className="text-gradient-primary">stand for</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four values that show up in every line of code, every meeting, every deliverable.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-colors space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
