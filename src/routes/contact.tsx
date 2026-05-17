import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SoftSkySolution LTD — Get in Touch" },
      { name: "description", content: "Contact SoftSkySolution LTD. Call +254 112 199 055 or +254 762 095 235, or email softskysolution@gmail.com. Response within 24 hours." },
    ],
  }),
  component: Contact,
});

const contactItems = [
  { icon: Mail, label: "Primary Email", value: "softskysolution@gmail.com", href: "mailto:softskysolution@gmail.com" },
  { icon: Mail, label: "Support Email", value: "supportsoftskysolution@gmail.com", href: "mailto:supportsoftskysolution@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 112 199 055", href: "tel:+254112199055" },
  { icon: Phone, label: "Alternative Phone", value: "+254 762 095 235", href: "tel:+254762095235" },
  { icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Let's build something <span className="text-gradient-primary">extraordinary</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your project. We'll respond within 24 hours with a clear path forward.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-display font-bold">Reach us directly</h2>
            <p className="text-muted-foreground">
              Prefer email or a phone call? We're available Monday–Saturday, 8am–8pm EAT.
            </p>

            <div className="space-y-3 pt-4">
              {contactItems.map((c) => (
                <a key={c.label} href={c.href ?? "#"}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium break-all">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 p-8 bg-card/50 border-border/50">
            {sent ? (
              <div className="text-center py-16 space-y-4 animate-fade-up">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-display font-bold">Message sent!</h3>
                <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Institution</Label>
                  <Input id="company" placeholder="Acme Inc. or institution name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Project budget (KES)</Label>
                  <select id="budget" className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm">
                    <option>Under 100,000</option>
                    <option>100,000 – 500,000</option>
                    <option>500,000 – 2,000,000</option>
                    <option>2,000,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea id="message" required rows={5} placeholder="What are you building? What's the goal? Any deadlines?" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
