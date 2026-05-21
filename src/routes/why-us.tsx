import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Globe2, Star,
  Shield, Rocket, Heart, Award, Target, Eye, Users,
  Clock, Zap, Code2, Headset, MessageSquare, BadgeCheck,
  TrendingUp, Lock, Cpu, Layers, BarChart3, RefreshCw,
  Phone, Mail, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getEmailLink } from "@/lib/utils";
import { useState } from "react";
import caleb1 from "@/assets/caleb-1.png";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | SoftSkySolution | Your Trusted Technology Partner" },
      { name: "description", content: "Discover why 15+ institutions trust SoftSkySolution. Founder-led delivery, transparent pricing, 12-month support, modern tech stack, and a proven 4-step process. Built in Kenya, trusted across Africa." },
    ],
  }),
  component: WhyUs,
});

const differentiators = [
  {
    icon: Star,
    title: "Founder-Led Delivery",
    desc: "Unlike agencies where your project gets passed to juniors, every SoftSkySolution project is personally led by the founder, Caleb Kisangau. You get direct access to the engineer building your system, ensuring quality at every stage.",
    stat: "100%",
    statLabel: "Projects founder-led",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-First Communication",
    desc: "We don't hide behind ticket systems. You get real-time updates via WhatsApp, weekly video demos, and same-day responses. You always know exactly where your project stands: no surprises, no waiting.",
    stat: "< 2hrs",
    statLabel: "Average response time",
  },
  {
    icon: Shield,
    title: "Custom Post-Launch Support",
    desc: "Every project includes a tailored post-launch support plan based on our specific agreement, which covers bug fixes, minor adjustments, performance monitoring, and security patches. We don't disappear after deployment.",
    stat: "Custom",
    statLabel: "Per agreement",
  },
  {
    icon: Lock,
    title: "Fixed-Price, No Hidden Costs",
    desc: "We quote a clear, fixed price before work begins. No hourly billing surprises, no scope creep charges, no hidden fees. You know exactly what you're paying from day one.",
    stat: "0",
    statLabel: "Hidden fees, ever",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    desc: "We use the latest battle-tested technologies, including React, Next.js, TanStack, Node.js, PostgreSQL, and cloud-native infrastructure. Your system is built to be fast, secure, and future-proof.",
    stat: "95+",
    statLabel: "PageSpeed score",
  },
  {
    icon: BadgeCheck,
    title: "Proven Track Record",
    desc: "With 25+ projects delivered for universities, colleges, SACCOs, churches, hospitals, and businesses across Kenya, we have the experience and institutional knowledge to deliver complex systems on time.",
    stat: "25+",
    statLabel: "Projects delivered",
  },
  {
    icon: TrendingUp,
    title: "Systems Built to Scale",
    desc: "Every system is engineered with growth in mind. From 10 users to 10,000, your platform scales seamlessly without expensive re-architecture. Cloud-native design ensures reliability at any load.",
    stat: "10K+",
    statLabel: "Users supported",
  },
  {
    icon: RefreshCw,
    title: "Agile, Iterative Delivery",
    desc: "We work in 1-2 week sprints with live demos at the end of each cycle. You see real progress, give feedback early, and steer the project direction instead of just waiting and hoping for the best.",
    stat: "Weekly",
    statLabel: "Live demos",
  },
];

const techStack = [
  { category: "Frontend", tools: ["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", tools: ["Node.js", "Express", "Hono", "Python", "Go"] },
  { category: "Database", tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
  { category: "Cloud", tools: ["AWS", "GCP", "Cloudflare", "Vercel", "Netlify"] },
  { category: "Mobile", tools: ["React Native", "Expo", "Flutter", "Swift", "Kotlin"] },
  { category: "AI & ML", tools: ["OpenAI", "LangChain", "TensorFlow", "Hugging Face", "RAG Pipelines"] },
  { category: "DevOps", tools: ["Docker", "GitHub Actions", "CI/CD", "Terraform", "Monitoring"] },
  { category: "Payments", tools: ["M-PESA", "Stripe", "PayPal", "Flutterwave", "Paystack"] },
];

const guarantees = [
  {
    icon: Clock,
    title: "On-Time Delivery Guarantee",
    description: "We set realistic timelines and stick to them. If we miss a deadline due to our own fault, you get a discount on the next project milestone. We respect your time as much as ours.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "Every system is built with AES-256 encryption, role-based access control, SQL injection prevention, XSS protection, and HTTPS by default. Your data is as safe as a bank vault.",
  },
  {
    icon: Code2,
    title: "Clean, Documented Code",
    description: "You own your code 100%. Every project comes with clean, well-commented source code, technical documentation, and deployment guides. No vendor lock-in, ever.",
  },
  {
    icon: Headset,
    title: "Responsive Support",
    description: "Our support team responds within 2 hours during business days. Critical issues get same-day resolution. You're never left hanging when something goes wrong.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimized",
    description: "We optimize for speed, delivering sub-second page loads, efficient database queries, CDN-powered assets, and lazy loading. Your users get a lightning-fast experience every time.",
  },
  {
    icon: Users,
    title: "User Training Included",
    description: "We don't just build and leave. Every project includes hands-on training for your team, including live walkthroughs, video tutorials, and user manuals so your staff can operate the system confidently.",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on complexity. A standard website takes 2-3 weeks, a custom management system takes 4-8 weeks, and larger platforms take 8-11 weeks. We always provide a detailed timeline before starting.",
  },
  {
    q: "What is your pricing model?",
    a: "We use fixed-price quotes for most projects. You get a detailed breakdown of costs before work begins, meaning no hourly billing surprises. For ongoing work, we offer monthly retainer packages.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Absolutely. We serve clients across East Africa, West Africa, Europe, and Asia. All communication happens via WhatsApp, Zoom, and email, so timezone differences are never a problem.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Free post-launch support duration depends on the project's scale and complexity, covering bug fixes, minor adjustments, and security patches. After that, we offer affordable annual maintenance packages.",
  },
  {
    q: "Can you work with my existing system?",
    a: "Yes. We regularly integrate with existing systems, migrate data from legacy platforms, and build new modules on top of existing infrastructure. We'll assess your current setup during our free scoping call.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes, 100%. Once agreements and payments are 100% completed, you own all source code, designs, and documentation. We provide full access to the code repository and deployment guides. There's zero vendor lock-in with SoftSkySolution.",
  },
  {
    q: "How do I get started?",
    a: "Simply reach out via our contact page, WhatsApp, or email. We'll schedule a free 30-minute scoping call to understand your needs and provide a detailed proposal within 48 hours.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-xl transition-all duration-300 ${open ? "border-primary/50 bg-primary/5" : "border-border/50 bg-card/30"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
      >
        <span className="font-display font-semibold text-base pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5 px-5" : "max-h-0"}`}>
        <p className="text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Award className="h-4 w-4" /> Why Choose SoftSkySolution
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-5">
            Your project deserves a <span className="text-gradient-primary">partner, not just a vendor</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not the biggest agency. We're not the cheapest freelancer. We're the focused, founder-led technology partner that treats your project like our own, because our reputation is built one successful delivery at a time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow text-base h-11 px-6">
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 h-11 px-6">
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="border-b border-border/40 bg-card/30">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { value: "25+", label: "Projects Delivered" },
              { value: "15+", label: "Institutions Served" },
              { value: "12 mo", label: "Free Post-Launch Support" },
              { value: "100%", label: "Client Commitment" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> What Sets Us Apart
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            8 reasons clients <span className="text-gradient-primary">choose us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These aren't just marketing promises; they're commitments we deliver on every single project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {differentiators.map((d) => (
            <Card
              key={d.title}
              className="group p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow duration-300 flex gap-5"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <d.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-display font-semibold">{d.title}</h3>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-display font-bold text-primary">{d.stat}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{d.statLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/40 shadow-glow aspect-[3/4] max-w-sm mx-auto bg-slate-900/10 dark:bg-slate-950/40">
                <img src={caleb1} alt="Caleb Kisangau, Founder of SoftSkySolution" className="h-full w-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl bg-primary/20 border border-primary/40 backdrop-blur hidden md:flex items-center justify-center">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold text-center px-2">Founder</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                <Star className="h-4 w-4" /> The Person Behind Your Project
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Meet <span className="text-gradient-primary">Caleb Kisangau</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When you work with SoftSkySolution, you work directly with the founder. Caleb is a full-stack software engineer with 5+ years of experience building institutional software across Kenya. He personally architects, codes, and deploys every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This founder-led model means zero communication gaps, faster decisions, and a level of quality that large agencies simply cannot match. Your project isn't just another ticket in a queue; it's a personal commitment backed by years of engineering expertise and a reputation that Caleb stakes his name on.
              </p>
              <ul className="space-y-2">
                {[
                  "Full-stack engineer with React, Node.js, cloud, and AI expertise",
                  "Built systems for universities, colleges, SACCOs, and churches",
                  "Direct WhatsApp access (no account managers or middlemen)",
                  "Ships code daily, as a hands-on engineer, not just a manager",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    {p.includes("WhatsApp") ? (
                      <a href="https://wa.me/254112199055" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-semibold flex items-center gap-1">
                        {p} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-sm">{p}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Link to="/contact">Work With Caleb <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10">
                  <Link to="/about">Read Full Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Shield className="h-4 w-4" /> Our Guarantees
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Commitments we <span className="text-gradient-primary">stand behind</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These aren't aspirational values; they're contractual guarantees included in every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {guarantees.map((g) => (
            <Card key={g.title} className="group p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow duration-300 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold">{g.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Layers className="h-4 w-4" /> Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Built with <span className="text-gradient-primary">modern tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We use the latest industry-standard technologies to ensure your system is fast, secure, and future-proof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {techStack.map((ts) => (
              <Card key={ts.category} className="p-5 bg-background/60 border-border/40 hover:border-primary/50 transition-colors space-y-3">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary">{ts.category}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {ts.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-full bg-primary/5 border border-primary/15 text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Rocket className="h-4 w-4" /> Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            From idea to <span className="text-gradient-primary">launch in 4 steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven, transparent delivery process that keeps you in control at every stage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              num: "01",
              title: "Discovery & Scoping Call",
              desc: "We start with a free 30-minute call to understand your business, goals, pain points, and desired outcomes. We ask the right questions so we can map your idea into a clear, actionable technical specification.",
              details: ["Stakeholder interviews", "Requirements gathering", "Technical feasibility assessment", "Budget and timeline estimation"],
              duration: "1-3 days",
            },
            {
              num: "02",
              title: "Proposal, Design & Prototype",
              desc: "We deliver a detailed proposal with fixed pricing, timeline, and deliverables. Once approved, we create wireframes and interactive prototypes so you can see and feel the solution before development begins.",
              details: ["Detailed written proposal", "Wireframes and mockups", "Interactive prototype", "Design system creation"],
              duration: "3-7 days",
            },
            {
              num: "03",
              title: "Agile Development & Weekly Demos",
              desc: "We build in 1-2 week sprint cycles. At the end of each sprint, you get a live demo of new features. Your feedback is incorporated immediately into the next cycle, ensuring the final product matches your vision perfectly.",
              details: ["Sprint-based development", "Weekly video demos", "Real-time WhatsApp updates", "Continuous testing & QA"],
              duration: "4-12 weeks",
            },
            {
              num: "04",
              title: "Deployment, Training & Support",
              desc: "We deploy to production, train your team, deliver documentation, and provide 12 months of free support. You go live with confidence knowing we're always a WhatsApp message away.",
              details: ["Production deployment", "Staff training sessions", "Technical documentation", "12-month support included"],
              duration: "3-5 days",
            },
          ].map((step) => (
            <Card key={step.num} className="p-6 md:p-8 bg-card/50 border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 text-center md:text-left">
                  <div className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/60 transition-colors">{step.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-mono">{step.duration}</div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-display font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Flexible <span className="text-gradient-primary">engagement models</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the working model that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "Fixed-Price Project",
                desc: "Best for well-defined projects with clear requirements. You get a fixed quote, a fixed timeline, and a fixed deliverable. No surprises.",
                features: ["Clear scope & timeline", "Fixed budget", "Milestone payments", "Ideal for new systems"],
                badge: "Most Popular",
              },
              {
                title: "Monthly Retainer",
                desc: "Best for ongoing work, including maintenance, feature additions, and support. You get a dedicated allocation of hours each month at a discounted rate.",
                features: ["Dedicated monthly hours", "Priority support", "Flexible scope", "Ideal for growing systems"],
                badge: "Best Value",
              },
              {
                title: "Consultation & Advisory",
                desc: "Need technical guidance without full development? We offer consulting sessions for architecture reviews, technology selection, and project scoping.",
                features: ["Expert guidance", "Technology selection", "Architecture review", "Ideal for early-stage ideas"],
                badge: "Quick Start",
              },
            ].map((model) => (
              <Card key={model.title} className="p-6 bg-background/60 border-border/40 hover:border-primary/50 transition-colors space-y-4 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {model.badge}
                </div>
                <h3 className="text-lg font-display font-bold">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
                <ul className="space-y-1.5">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10 mt-auto">
                  <Link to="/contact">Discuss This Model <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Frequently asked <span className="text-gradient-primary">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/30 p-10 md:p-14 text-center">
          <div className="absolute inset-0 starfield opacity-30" />
          <div className="relative space-y-5 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to work with a partner who <span className="text-gradient-primary">truly cares?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free 30-minute scoping call. No obligations, no sales pressure, just an honest conversation about your project and how we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-12 px-8">
                <Link to="/contact">Book Free Scoping Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground pt-2">
              <a href="https://wa.me/254112199055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a href="tel:+254112199055" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +254 112 199 055
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=softskysolution@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> softskysolution@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
