import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type ContactSearch = { service?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact SoftSkySolution | Get a Quote" },
      { name: "description", content: "Contact SoftSkySolution 24/7. Call +254 112 199 055 or email softskysolution@gmail.com. Get a quote via WhatsApp or Gmail." },
    ],
  }),
  component: Contact,
});

const contactItems = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat Live 24/7", href: "https://wa.me/254112199055" },
  { icon: Mail, label: "Primary Email", value: "softskysolution@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=softskysolution@gmail.com" },
  { icon: Mail, label: "Support Email", value: "supportsoftskysolution@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=supportsoftskysolution@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 112 199 055", href: "tel:+254112199055" },
  { icon: Phone, label: "Alternative Phone", value: "+254 762 095 235", href: "tel:+254762095235" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: undefined },
];

function Contact() {
  const { service } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "Not sure yet",
    message: service
      ? `Hello SoftSkySolution team,\n\nI am interested in your "${service}" solutions. Please provide more details, pricing, and how we can get started.\n\nThank you.`
      : "",
  });

  const buildGmailUrl = () => {
    const subject = encodeURIComponent(`Quote Request: ${service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${quoteForm.name || "Not provided"}\n` +
      `Email: ${quoteForm.email || "Not provided"}\n` +
      `Company/Institution: ${quoteForm.company || "Not provided"}\n` +
      `Project Budget: ${quoteForm.budget}\n\n` +
      `Message:\n${quoteForm.message || "No details yet."}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=softskysolution@gmail.com&su=${subject}&body=${body}`;
  };

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello SoftSkySolution! 👋\n\n` +
      `*Quote Request*\n` +
      `Name: ${quoteForm.name || "Not provided"}\n` +
      `Email: ${quoteForm.email || "Not provided"}\n` +
      `Company: ${quoteForm.company || "Not provided"}\n` +
      `Budget: ${quoteForm.budget}\n\n` +
      `Details: ${quoteForm.message || (service ? `Interested in: ${service}` : "General inquiry")}`
    );
    return `https://wa.me/254112199055?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/mqakpwyz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 6000);
      } else {
        throw new Error("bad status");
      }
    } catch {
      window.open(buildGmailUrl(), "_blank", "noopener,noreferrer");
      setSent(true);
      setTimeout(() => setSent(false), 6000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Let's build something <span className="text-gradient-primary">extraordinary</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we will respond immediately with a clear path forward.
          </p>
        </div>
      </section>

      {/* QUICK QUOTE OPTIONS */}
      <section className="container mx-auto px-4 md:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-display font-bold mb-2">Request a Quote Instantly</h2>
            <p className="text-muted-foreground text-sm">
              Pick the channel most convenient for you — WhatsApp for a quick chat, or Gmail for a formal email.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* WhatsApp Card */}
            <Card className="p-5 bg-card/50 border-border/50 hover:border-green-500/60 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base leading-tight">Chat on WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Instant &amp; conversational</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Best for quick questions and fast answers. Opens WhatsApp with your details pre-filled.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </a>
            </Card>

            {/* Gmail Card */}
            <Card className="p-5 bg-card/50 border-border/50 hover:border-primary/60 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base leading-tight">Send via Gmail</h3>
                  <p className="text-xs text-muted-foreground">Formal &amp; detailed</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Best for formal proposals and detailed briefs. Opens Gmail compose window directly.
              </p>
              <a
                href={buildGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                Compose Email on Gmail
              </a>
            </Card>
          </div>

          {/* Optional pre-fill fields */}
          <Card className="p-5 bg-card/30 border-border/50">
            <p className="text-xs text-muted-foreground font-medium mb-3 uppercase tracking-wider">
              Optional: Fill in your details to pre-fill the buttons above ↑
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="q-name" className="text-xs">Your Name</Label>
                <Input id="q-name" placeholder="Full name" value={quoteForm.name}
                  onChange={e => setQuoteForm({ ...quoteForm, name: e.target.value })} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="q-email" className="text-xs">Your Email</Label>
                <Input id="q-email" type="email" placeholder="your@email.com" value={quoteForm.email}
                  onChange={e => setQuoteForm({ ...quoteForm, email: e.target.value })} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="q-company" className="text-xs">Company (optional)</Label>
                <Input id="q-company" placeholder="Your company" value={quoteForm.company}
                  onChange={e => setQuoteForm({ ...quoteForm, company: e.target.value })} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="q-budget" className="text-xs">Budget (KES)</Label>
                <select id="q-budget" className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
                  value={quoteForm.budget} onChange={e => setQuoteForm({ ...quoteForm, budget: e.target.value })}>
                  <option>Under 100,000</option>
                  <option>100,000 to 500,000</option>
                  <option>500,000 to 2,000,000</option>
                  <option>2,000,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="space-y-1 mt-3">
              <Label htmlFor="q-message" className="text-xs">Your Message / Project Description</Label>
              <Textarea id="q-message" rows={3} placeholder="Your Message / Project Description"
                value={quoteForm.message} onChange={e => setQuoteForm({ ...quoteForm, message: e.target.value })} />
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACT INFO + FULL FORM */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-display font-bold">Reach us directly</h2>
            <p className="text-muted-foreground">
              Available 24/7 every day. We give feedback immediately.
            </p>
            <div className="space-y-2 pt-2">
              {contactItems.map((c) => {
                const isExternal = c.href && (c.href.startsWith("http") || c.href.startsWith("tel"));
                const El = c.href ? "a" : "div";
                return (
                  <El
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    {...(isExternal && c.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex items-start gap-4 p-4 rounded-xl bg-card/50 border transition-all duration-300 ${
                      c.label === "WhatsApp"
                        ? "border-green-500/25 hover:border-green-500/60 hover:shadow-green-500/5 hover:shadow-lg bg-green-500/[0.03]"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${
                      c.label === "WhatsApp" ? "bg-green-500/15 text-green-500" : "bg-primary/10 text-primary"
                    }`}>
                      <c.icon className={`h-5 w-5 ${c.label === "WhatsApp" ? "" : "fill-current"}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="font-medium break-all">{c.value}</div>
                    </div>
                  </El>
                );
              })}
            </div>
          </div>

          {/* Full form */}
          <Card className="lg:col-span-3 p-6 bg-card/50 border-border/50">
            <h3 className="font-display font-bold text-lg mb-1">Send a Detailed Message</h3>
            <p className="text-xs text-muted-foreground mb-5">
              This form sends directly to our email. We reply as soon as possible.
            </p>
            {sent ? (
              <div className="text-center py-12 space-y-3 animate-fade-up">
                <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
                <h3 className="text-2xl font-display font-bold">Message sent!</h3>
                <p className="text-muted-foreground">We will be in touch very shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company or Institution (Optional)</Label>
                  <Input id="company" name="company" placeholder="e.g. Acme Inc." />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget">Project budget (KES)</Label>
                  <select id="budget" name="budget" className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm">
                    <option>Under 100,000</option>
                    <option>100,000 to 500,000</option>
                    <option>500,000 to 2,000,000</option>
                    <option>2,000,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    defaultValue={quoteForm.message}
                    placeholder="Tell us about your project"
                  />
                </div>

                <Button type="submit" size="lg" disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-11">
                  {submitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </Button>

                {/* Alternate channels below form */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 font-semibold text-sm transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp Instead
                  </a>
                  <a
                    href={buildGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-semibold text-sm transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Open Gmail Instead
                  </a>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}