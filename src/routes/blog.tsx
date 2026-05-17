import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SoftSkySolution LTD" },
      { name: "description", content: "Insights, tutorials and stories from SoftSkySolution LTD on software engineering, institutional ICT, AI, cloud and digital transformation in Africa." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "Why Every Kenyan Institution Needs a Modern Ticketing System",
    excerpt: "Email chains and WhatsApp groups can't scale. Here's how a simple ticketing system transformed how one university directorate serves thousands of students.",
    body: "Public institutions in Kenya generate thousands of requests every week — from password resets and network issues to internship applications. Without a ticketing system, these requests live in inboxes, get forgotten and frustrate everyone. At SoftSkySolution, we recently rolled out a ticketing system for the Directorate of ICT at a Kenyan university and reduced average response time from 3 days to under 6 hours. The secret isn't fancy AI — it's structure: clear categories, owner assignment, SLAs and dashboards leadership can actually read.",
    date: "May 10, 2026",
    read: "6 min read",
    category: "Institutional ICT",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Real-Time Customer Feedback: The Quiet Superpower of Modern Offices",
    excerpt: "Most institutions still rely on annual surveys. We're building something better: real-time, anonymous feedback that lands on the right desk in seconds.",
    body: "Annual satisfaction surveys are too little, too late. Modern institutions need to know — today — that the cashier window has a 40-minute queue, or that the registration portal is down. SoftSkySolution's institutional feedback platform captures input from students, staff and visitors in real-time, routes it intelligently and turns it into dashboards leaders can act on. The result: faster fixes, happier people and measurable service improvement.",
    date: "Apr 28, 2026",
    read: "5 min read",
    category: "Product",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "Building Africa's Online Marketplaces — Lessons From the Trenches",
    excerpt: "Logistics, payments, trust, mobile-first. Here's what we learned shipping an online market platform that actually works for Kenyan vendors and buyers.",
    body: "Building an e-commerce platform in Africa isn't just code — it's logistics, last-mile delivery, mobile money, vendor verification and trust. We share the design decisions behind our Online Market Platform: why we chose M-Pesa first, how we designed for low-end Android, and the simple anti-fraud signals that made the biggest difference in our first 90 days.",
    date: "Apr 15, 2026",
    read: "7 min read",
    category: "E-commerce",
    gradient: "from-rose-500/30 to-red-500/30",
  },
  {
    title: "Learning Management Systems: What Schools Actually Need (vs What Vendors Sell)",
    excerpt: "An honest take from the engineers building Edusly — the features that matter in real Kenyan classrooms, and the bloat we deliberately removed.",
    body: "Most LMS products are designed for Silicon Valley universities, not Kenyan high schools and colleges. As we build Edusly, our team interviewed teachers, students and administrators to ruthlessly cut features no one uses and double down on what matters: offline-friendly content, clear gradebooks, SMS notifications for parents, and dashboards that actually answer 'is this student doing okay?'",
    date: "Mar 30, 2026",
    read: "8 min read",
    category: "EdTech",
    gradient: "from-amber-500/30 to-orange-500/30",
  },
  {
    title: "Securing Institutional Finance Systems: A Practical Checklist",
    excerpt: "Role-based access, audit logs, encryption at rest, reconciliation reports. The non-negotiables we ship in every Finance Hub deployment.",
    body: "When you build a financial system for an institution, you carry a responsibility no marketing site does. We walk through the SoftSkySolution Finance Hub security model — least-privilege roles, immutable audit logs, encrypted backups, daily reconciliation reports, and the disaster-recovery drills we run before going live. If you're evaluating a finance system vendor, use this list as a sanity check.",
    date: "Mar 12, 2026",
    read: "6 min read",
    category: "Security",
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "From Idea to Live System in 8 Weeks: Our Delivery Playbook",
    excerpt: "Discovery, design, develop, deploy. Our 4-phase playbook for shipping institutional software fast — without cutting corners on quality.",
    body: "Speed and quality aren't opposites. We share the exact 4-phase delivery framework SoftSkySolution uses on every engagement: a 1-week Discovery workshop, 2 weeks of Design with clickable prototypes, 4 weeks of weekly-demo Development sprints, and 1 week of Deploy + handover. This is how we ship real institutional systems in 8 weeks with zero late-night heroics.",
    date: "Feb 26, 2026",
    read: "9 min read",
    category: "Process",
    gradient: "from-indigo-500/30 to-violet-500/30",
  },
];

function Blog() {
  return (
    <>
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Insights & Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            The <span className="text-gradient-primary">SoftSky</span> Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Practical lessons from the engineers, designers and strategists shipping real software for African institutions and businesses.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 flex flex-col">
              <div className={`relative h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center p-6 text-center`}>
                <div className="absolute inset-0 starfield opacity-30" />
                <span className="relative text-xs uppercase tracking-widest text-foreground/80 px-3 py-1 rounded-full bg-background/30 backdrop-blur">{p.category}</span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-display font-bold leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{p.body}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border/40">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Want us to write about your topic?</h2>
          <p className="text-muted-foreground">Suggest a topic or share what you'd like to learn from our team.</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-12 px-8">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
