import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — SoftSkySolution LTD" },
      { name: "description", content: "Meet the engineers, designers and strategists behind SoftSkySolution LTD." },
    ],
  }),
  component: Team,
});

const team = [
  { name: "Caleb Janju", role: "Founder & CEO", bio: "Full-stack engineer, 8+ years building software for clients across 4 continents.", initials: "CJ" },
  { name: "Amina Hassan", role: "Head of Engineering", bio: "Ex-Google. Distributed systems and cloud architecture specialist.", initials: "AH" },
  { name: "David Otieno", role: "Lead Designer", bio: "Award-winning product designer focused on data-dense interfaces.", initials: "DO" },
  { name: "Priya Sharma", role: "AI/ML Lead", bio: "PhD in Machine Learning. Built ML systems serving millions of requests.", initials: "PS" },
  { name: "Marcus Weber", role: "Head of Strategy", bio: "Former McKinsey consultant. Translates business goals into product roadmaps.", initials: "MW" },
  { name: "Sarah Kimani", role: "Director of Operations", bio: "Keeps 25 humans aligned and shipping on schedule, across timezones.", initials: "SK" },
];

function Team() {
  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            The Team
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Senior <span className="text-gradient-primary">humans</span>, not seat-fillers
          </h1>
          <p className="text-lg text-muted-foreground">
            A multidisciplinary team across Nairobi, Berlin and Bangalore — united by a craft-first culture.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <Card key={m.name} className="group p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 text-center space-y-4">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-display font-bold text-primary-foreground shadow-glow">
                {m.initials}
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">{m.name}</h3>
                <p className="text-primary text-sm font-medium">{m.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
              <div className="flex justify-center gap-2 pt-2">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
