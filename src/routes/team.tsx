import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Facebook, Instagram, Youtube, Music2, ArrowRight, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import caleb1 from "@/assets/caleb-1.png";
import caleb2 from "@/assets/caleb-2.png";
import caleb3 from "@/assets/caleb-3.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "About Me — SoftSkySolution" },
      { name: "description", content: "Meet Caleb Kisangau — Founder of SoftSkySolution, leading the business vision and engineering." },
    ],
  }),
  component: Team,
});

const socials = [
  { Icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { Icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  { Icon: Music2, href: "https://tiktok.com/", label: "TikTok" },
  { Icon: Github, href: "https://github.com/caljan254", label: "GitHub" },
];

function Team() {
  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            About Me
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            The mind behind <span className="text-gradient-primary">SoftSkySolution</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            SoftSkySolution is founder-led. Every project benefits from direct engineering oversight and a personal commitment to quality.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-card/50 border-border/50">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative aspect-square lg:aspect-auto bg-slate-900/10 dark:bg-slate-950/40">
                <img src={caleb1} alt="Caleb Kisangau" className="absolute inset-0 h-full w-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-3 p-6 md:p-10 space-y-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">Caleb Kisangau</h2>
                  <p className="text-primary font-semibold mt-1">Founder</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Caleb is the founder of SoftSkySolution, a passionate full-stack software engineer, innovator and entrepreneur dedicated to building technology that solves real problems for African institutions and businesses. He combines deep engineering skill with a strong sense of mission: to make modern, secure, world-class software accessible to organizations of every size.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His work spans institutional websites, learning management systems, financial systems, customer feedback platforms, online marketplaces, donation platforms and ICT support services. He has personally led the delivery of projects for universities, colleges, religious organizations and political institutions across Kenya.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Caleb is a recognized innovator, a confident communicator, and a hands-on engineer who still ships code daily. He believes in transparent communication, founder-led delivery and long-term partnership with every client.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <a href="mailto:softskysolution@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/40 hover:bg-primary/10 text-sm font-medium">
                    <Mail className="h-4 w-4" /> softskysolution@gmail.com
                  </a>
                  <a href="tel:+254112199055" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/40 hover:bg-primary/10 text-sm font-medium">
                    <Phone className="h-4 w-4" /> +254 112 199 055
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/40">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Card className="overflow-hidden border-border/50 bg-slate-900/10 dark:bg-slate-950/40">
              <img src={caleb2} alt="Caleb Kisangau portrait" className="w-full h-72 object-contain" />
            </Card>
            <Card className="overflow-hidden border-border/50 bg-slate-900/10 dark:bg-slate-950/40">
              <img src={caleb3} alt="Caleb presenting at innovation event" className="w-full h-72 object-contain" />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}