import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Code2, Cloud, Smartphone, Brain, Shield, Rocket,
  Sparkles, CheckCircle2, Globe2, Star, Quote, ChevronLeft, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import calebImage from "@/assets/caleb-2.png";
import caleb1 from "@/assets/caleb-1.png";
import caleb2 from "@/assets/caleb-2.png";
import caleb3 from "@/assets/caleb-3.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoftSkySolution — Modern Software, Web, AI & Cloud Solutions" },
      { name: "description", content: "SoftSkySolution builds modern web platforms, mobile apps, AI products, cloud systems and enterprise software for institutions and businesses across Africa." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern, performant web apps and institutional portals built with React, Next.js and TanStack." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform Android and iOS apps that delight users and drive daily engagement." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure on AWS, GCP and Cloudflare with full CI/CD pipelines." },
  { icon: Brain, title: "AI & Automation", desc: "LLM-powered features, intelligent chatbots, and process automation that save time." },
  { icon: Shield, title: "Cybersecurity", desc: "Security hardening, audits and zero-trust architecture to protect your business." },
  { icon: Rocket, title: "Digital Strategy", desc: "Product strategy, UX research and go-to-market support for successful digital launches." },
];

const stats = [
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Institutions Served" },
  { value: 9, suffix: "+", label: "Live Systems" },
  { value: 100, suffix: "%", label: "Client Commitment" },
];

const slides = [
  {
    img: gallery1,
    title: "Innovation in Action",
    desc: "Presenting SoftSkySolution's innovative tech solutions at national innovation forums.",
  },
  {
    img: gallery3,
    title: "Award-Winning Excellence",
    desc: "Recognized for outstanding contribution to digital transformation and student innovation.",
  },
  {
    img: caleb3,
    title: "Visionary Leadership",
    desc: "Driven by purpose, building software that uplifts institutions and communities.",
  },
  {
    img: gallery2,
    title: "Collaborative Culture",
    desc: "Thriving in partnership, engaging clients, students and stakeholders as one team.",
  },
  {
    img: heroBg,
    title: "Engineered for Scale",
    desc: "From classrooms to enterprises, robust systems built to grow with you.",
  },
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
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary">{n}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  return (
    <section className="w-full pt-4 pb-2 relative z-10 animate-fade-up">
      <div className="relative overflow-hidden border-y border-primary/20 shadow-glow bg-slate-950/40">
        <div className="relative aspect-[16/8] md:aspect-[21/9] lg:aspect-[24/9]">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              {/* Beautiful ambient background matching slide colors */}
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-40 scale-110" />
              
              {/* Crisp contained foreground image (seen 100% fully, z-10) */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
                <img src={s.img} alt={s.title} className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl relative z-10 border border-white/5" />
              </div>
              
              {/* Elegant glassmorphic text badge for 100% text legibility without darkening images */}
              <div className="absolute bottom-4 left-4 right-4 z-30 md:bottom-8 md:left-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div className="bg-slate-950/75 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl shadow-lg space-y-1.5">
                  <h3 className="text-lg md:text-2xl font-display font-bold text-white leading-tight drop-shadow-sm">{s.title}</h3>
                  <p className="text-gray-200 text-xs md:text-sm leading-relaxed drop-shadow-sm">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prev} aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-12 md:w-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 md:h-12 md:w-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 right-6 md:right-12 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      {/* SLIDING IMAGES AT THE TOP */}
      <HeroSlider />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-16">
        <div className="absolute inset-0 starfield opacity-60"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Now accepting new projects
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05]">
              I build <span className="text-gradient-primary">bold software</span><br />
              for ambitious teams.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              SoftSkySolution is a Kenya-based, globally-minded technology business building web, mobile, AI and cloud products that transform institutions and grow businesses.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow text-base h-11 px-6">
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 h-11 px-6">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border/50 aspect-[4/3] max-w-md mx-auto lg:mx-0 bg-slate-900/10 dark:bg-slate-950/40">
            <img src={calebImage} alt="Caleb Kisangau" className="h-full w-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              A Kenyan technologist on a <span className="text-gradient-primary">global mission</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I founded SoftSkySolution with a clear mission: to deliver world-class digital systems that solve real problems for institutions, businesses and communities. I specialize in building bespoke web platforms, mobile applications, financial systems, learning management systems, customer feedback engines and AI-driven products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From universities and colleges to political organizations, religious institutions and online marketplaces, every system I deliver is engineered for security, scale and long-term maintainability. I believe technology should empower people, not complicate their work.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Link to="/about">Learn More About Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-primary/40 shadow-glow aspect-[3/4] max-w-sm mx-auto bg-slate-900/10 dark:bg-slate-950/40">
                <img src={caleb1} alt="Caleb Kisangau" className="h-full w-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-2xl bg-primary/20 border border-primary/40 backdrop-blur hidden md:flex items-center justify-center">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold text-center px-2">Founder</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                <Star className="h-4 w-4" /> Meet The Founder
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Caleb Kisangau
              </h2>
              <p className="text-primary text-lg font-semibold">Founder, SoftSkySolution</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Caleb is a passionate full-stack software engineer, innovator and entrepreneur with a deep love for building technology that solves real problems. As the founder of SoftSkySolution, he leads the business in designing and delivering modern web platforms, mobile applications, learning management systems, customer feedback engines and financial software for institutions across Kenya.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in React, Node.js, cloud infrastructure, AI integration and ICT systems administration, Caleb has personally led the engineering of several institutional projects including university directorate websites, college management platforms, online marketplaces and donation systems for non-profits. He is a recognized innovator and a firm believer that African talent can build software that competes globally.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Link to="/team">Learn More About Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10">
                  <Link to="/contact">Work With Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" /> What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            End-to-end services <span className="text-gradient-primary">that ship</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From idea validation to scaled production, I own every layer of your digital product.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title}
              className="group relative p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1 duration-300">
              <div className="relative space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-display font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY ME */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                <Globe2 className="h-4 w-4" /> Why SoftSkySolution
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                A focused business with a <span className="text-gradient-primary">craft-first</span> heart
              </h2>
              <p className="text-muted-foreground text-lg">
                I blend strong engineering with strategic clarity. Every engagement is led directly by me, runs on transparent sprints, and is built to outlast trends.
              </p>
              <ul className="space-y-2">
                {[
                  "Founder-led delivery with direct access to the engineer behind your project",
                  "Weekly demos and WhatsApp-first communication",
                  "Fixed-scope or retainer engagement models",
                  "12-month post-launch support included on every project",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "01", title: "Discover", desc: "Workshops to align on goals and metrics." },
                { num: "02", title: "Design", desc: "UX research and clickable prototypes." },
                { num: "03", title: "Develop", desc: "Iterative sprints with weekly demos." },
                { num: "04", title: "Deploy", desc: "Launch, monitor, optimize, scale." },
              ].map((p) => (
                <Card key={p.num} className="p-5 bg-background/60 border-border/40 hover:border-primary/50 transition-colors">
                  <div className="text-2xl font-display font-bold text-primary/70 mb-2">{p.num}</div>
                  <h4 className="font-display font-semibold mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
            <Star className="h-4 w-4" /> What Clients Say
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Trusted by institutions and innovators
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { quote: "SoftSkySolution delivered our directorate website and ticketing system on time and with great attention to detail. Communication was excellent throughout.", name: "ICT Directorate", role: "South Eastern Kenya University" },
            { quote: "Our institutional customer feedback platform has transformed how we listen to students and staff. Real-time, simple, reliable.", name: "Institutional Client", role: "Higher Education, Kenya" },
            { quote: "Caleb understands both the technology and the people who use it. A rare combination in this industry.", name: "Project Partner", role: "Mercy Institutional College" },
          ].map((t) => (
            <Card key={t.name} className="p-6 bg-card/50 border-border/50 space-y-3">
              <Quote className="h-7 w-7 text-primary/40" />
              <p className="text-foreground/90 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="pt-2 border-t border-border/40">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/30 p-10 md:p-12 text-center">
          <div className="absolute inset-0 starfield opacity-30" />
          <div className="relative space-y-5 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Ready to build something <span className="text-gradient-primary">extraordinary?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell me about your project. I will get back within 24 hours with a roadmap.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-11 px-7">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* hidden preloads */}
      <div className="hidden">
        <img src={caleb2} alt="" />
      </div>
    </>
  );
}