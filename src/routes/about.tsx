import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Globe2, Mail, Phone, ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube, Music2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import calebImage from "@/assets/caleb-2.png";
import caleb1 from "@/assets/caleb-1.png";
import caleb3 from "@/assets/caleb-3.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SoftSkySolution" },
      { name: "description", content: "Meet Caleb Kisangau, founder of SoftSkySolution — a Kenyan technology business building modern software for institutions and businesses across Africa." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcomes Over Output", desc: "Success is measured by your KPIs, not lines of code shipped." },
  { icon: Heart, title: "Radical Transparency", desc: "Real-time updates, weekly demos, no surprises on invoices." },
  { icon: Award, title: "Senior By Default", desc: "Every project gets full engineering expertise. No shortcuts." },
  { icon: Globe2, title: "Globally Minded", desc: "We serve clients across borders with scale and local understanding." },
];

const socials = [
  { Icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { Icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  { Icon: Music2, href: "https://tiktok.com/", label: "TikTok" },
  { Icon: Github, href: "https://github.com/caljan254", label: "GitHub" },
];

function About() {
  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            About SoftSkySolution
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Engineering <span className="text-gradient-primary">excellence</span>, from Kenya to the world
          </h1>
          <p className="text-lg text-muted-foreground">
            Founder-led, craft-first, on-demand. We build modern software that institutions and businesses can rely on.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card w-full max-w-md aspect-[4/5] bg-card">
              <img src={calebImage} alt="Caleb Kisangau" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Our story</h2>
            <p className="text-muted-foreground text-lg">
              SoftSkySolution was started as a personal technology business with one clear vision: prove that an African creator can compete with the best from London, Berlin and San Francisco on quality, speed and craftsmanship.
            </p>
            <p className="text-muted-foreground text-lg">
              Today SoftSkySolution is a trusted name. We deliver modern web platforms, mobile apps, AI solutions, and enterprise systems for universities, colleges, religious organizations, political institutions, marketplaces and businesses — engineered right here from Kenya, for clients across Africa and beyond.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <div className="text-3xl font-display font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Projects Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Institutions Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-background/60 border-border/40 space-y-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To engineer software that creates meaningful and lasting impact for ambitious organizations and entrepreneurs — no matter where they are in the world.
              </p>
            </Card>
            <Card className="p-6 bg-background/60 border-border/40 space-y-3">
              <Eye className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-display font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To build SoftSkySolution into Africa's most trusted technology brand, known for technical excellence and human-centered design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FOUNDER (moved from /team) */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              Meet The Founder
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              The mind behind <span className="text-gradient-primary">SoftSkySolution</span>
            </h2>
          </div>

          <Card className="overflow-hidden bg-card/60 border-border/50">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative aspect-square lg:aspect-auto bg-card">
                <img src={caleb1} alt="Caleb Kisangau" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="lg:col-span-3 p-6 md:p-10 space-y-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold">Caleb Kisangau</h3>
                  <p className="text-primary font-semibold mt-1">Founder & CEO, SoftSkySolution</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Caleb is a passionate full-stack software engineer, innovator and entrepreneur dedicated to building technology that solves real problems for African institutions and businesses. He combines deep engineering skill with a strong sense of mission: to make modern, secure, world-class software accessible to organizations of every size.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His work spans institutional websites, learning management systems (Edusly), financial systems (Finance Hub), customer feedback platforms, online marketplaces, donation platforms and ICT support — for universities, colleges, religious and political organizations across Kenya.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Caleb is a recognized innovator and a hands-on engineer who still ships code daily. He believes in transparent communication, founder-led delivery and long-term partnership with every client.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    <Link to="/contact">Work With Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
            <Card className="overflow-hidden border-border/50 bg-card aspect-[4/3]">
              <img src={calebImage} alt="Caleb Kisangau portrait" className="w-full h-full object-cover" />
            </Card>
            <Card className="overflow-hidden border-border/50 bg-card aspect-[4/3]">
              <img src={caleb3} alt="Caleb presenting at innovation event" className="w-full h-full object-cover" />
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              What we <span className="text-gradient-primary">stand for</span>
            </h2>
            <p className="text-muted-foreground text-lg">Four values that guide every line of code, every conversation, every deliverable.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {values.map((v) => (
              <Card key={v.title} className="p-5 bg-background/60 border-border/40 hover:border-primary/50 transition-colors space-y-3">
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
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
