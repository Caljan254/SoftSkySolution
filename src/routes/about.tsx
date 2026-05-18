import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import calebImage from "@/assets/caleb-2.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SoftSkySolution" },
      { name: "description", content: "Meet Caleb Kisangau and SoftSkySolution, a personal technology business building digital products from Nairobi." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcomes Over Output", desc: "I measure success by your KPIs, not by how many lines of code I ship." },
  { icon: Heart, title: "Radical Transparency", desc: "You get real time updates, weekly demos, and no surprises on invoices." },
  { icon: Award, title: "Senior By Default", desc: "Every project gets my full experience and expertise. No shortcuts." },
  { icon: Globe2, title: "Globally Minded", desc: "I serve clients across borders with scale, speed, and local understanding." },
];

function About() {
  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            About Me and SoftSkySolution
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Engineering <span className="text-gradient-primary">excellence</span>, from Kenya to the world
          </h1>
          <p className="text-lg text-muted-foreground">
            I am Caleb Kisangau, a strategist, designer and engineer. I believe world class software should not be a coastal privilege.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={calebImage}
              alt="Caleb Kisangau"
              width={400}
              height={400}
              loading="lazy"
              className="relative rounded-2xl shadow-card w-64 h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              My story
            </h2>
            <p className="text-muted-foreground text-lg">
              I started SoftSkySolution as a personal technology business with a simple vision. I wanted to prove that an African solo creator could compete with the best from London, Berlin and San Francisco when it comes to quality, speed and craftsmanship.
            </p>
            <p className="text-muted-foreground text-lg">
              Today SoftSkySolution has become a trusted name. I deliver modern web platforms, mobile apps, AI solutions, and enterprise systems. I have built election dashboards, mobile banking solutions, AI powered SaaS products, and everything in between right here from Nairobi.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <div className="text-3xl font-display font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">280+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-background/60 border-border/40 space-y-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">My Mission</h3>
              <p className="text-muted-foreground">
                To engineer software that creates meaningful and lasting impact for ambitious organizations and entrepreneurs no matter where they are in the world.
              </p>
            </Card>
            <Card className="p-6 bg-background/60 border-border/40 space-y-3">
              <Eye className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">My Vision</h3>
              <p className="text-muted-foreground">
                To build SoftSkySolution into Africa's most trusted technology brand, known for technical excellence and human centered design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-10 max-w-2xl mx-auto space-y-3">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What I <span className="text-gradient-primary">stand for</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four values that guide every line of code, every conversation, and every deliverable.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <Card key={v.title} className="p-5 bg-card/50 border-border/50 hover:border-primary/50 transition-colors space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-base">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link to="/contact">Work With Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}