import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — SoftSkySolution" },
      { name: "description", content: "Deep, practical insights from SoftSkySolution on building modern software, institutional ICT, AI, cloud and digital transformation in Africa." },
    ],
  }),
  component: Blog,
});

type Post = {
  title: string;
  excerpt: string;
  body: string[];
  takeaways: string[];
  date: string;
  read: string;
  category: string;
  gradient: string;
};

const posts: Post[] = [
  {
    title: "Why Every Kenyan Institution Needs a Modern Ticketing System",
    excerpt: "Email chains and WhatsApp groups can't scale. Here's how a structured ticketing system transformed how one university directorate serves thousands of students.",
    body: [
      "Public institutions in Kenya quietly handle thousands of internal requests every week — password resets, network outages, transcripts, internship applications, lost ID cards. Without a ticketing system, these requests live in personal inboxes, get forgotten in WhatsApp groups, and frustrate students, staff and leadership alike.",
      "When SoftSkySolution rolled out a ticketing system for the Directorate of ICT at a Kenyan university, the goal was simple: every request gets logged, assigned, tracked and closed — visibly. Average response time dropped from over 3 days to under 6 hours within the first month.",
      "The win wasn't fancy AI. It was structure: clear categories, owner assignment, service-level agreements (SLAs), and dashboards that leadership could actually read at a glance. Students saw their ticket status in real time and stopped sending duplicate emails. Officers stopped firefighting and started planning.",
      "If your institution still runs on 'send me a WhatsApp', you are leaving service quality, accountability and reputation on the table. A modern ticketing system pays for itself within a single semester.",
    ],
    takeaways: [
      "Structure beats software — categories, owners and SLAs matter more than AI.",
      "Visible ticket status reduces duplicate requests by up to 60%.",
      "Leadership dashboards turn complaints into measurable improvements.",
    ],
    date: "May 10, 2026",
    read: "6 min read",
    category: "Institutional ICT",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Real-Time Customer Feedback: The Quiet Superpower of Modern Offices",
    excerpt: "Annual surveys are too little, too late. Real-time, anonymous feedback that lands on the right desk in seconds is the new standard.",
    body: [
      "Most institutions still rely on annual or quarterly satisfaction surveys. By the time the results are tabulated and presented, the people who were frustrated have already moved on — and the same issues repeat next term.",
      "Modern institutions need to know today that the cashier window has a 40-minute queue, the registration portal is throwing errors, or the cafeteria service has slipped. The SoftSkySolution feedback platform captures input from students, staff and visitors in real time, routes it intelligently to the right office, and turns it into dashboards leaders can act on.",
      "We deliberately keep the user interface simple: a QR code, a five-second submission, optional anonymity. Behind the scenes, the platform applies smart routing, basic sentiment scoring, and SLA tracking so nothing falls through the cracks.",
      "The result is faster fixes, happier people, and measurable service improvement that can be reported to councils, boards and accreditation bodies with confidence.",
    ],
    takeaways: [
      "Real-time feedback beats annual surveys in every meaningful metric.",
      "Anonymous channels surface the issues people are too polite to raise.",
      "Routing + SLAs are what turn feedback into action.",
    ],
    date: "Apr 28, 2026",
    read: "5 min read",
    category: "Product",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "Building Africa's Online Marketplaces — Lessons From the Trenches",
    excerpt: "Logistics, payments, trust, mobile-first. What it really takes to ship a marketplace platform that works for Kenyan vendors and buyers.",
    body: [
      "Building an e-commerce platform in Africa is not just code. It is logistics, last-mile delivery, mobile money, vendor verification and — most of all — trust. Many beautifully designed marketplaces have failed because they optimized for Silicon Valley assumptions in a Nairobi context.",
      "When we shipped the SoftSkySolution Online Market Platform, our first big decision was payments: M-Pesa first, cards second. This single choice doubled completion rate on checkout.",
      "Our second decision was vendor onboarding. We designed for vendors with low-end Android phones and intermittent data: small image uploads, draft saving, SMS notifications. Friction at the vendor side is invisible to founders but lethal to supply.",
      "Finally, anti-fraud. We do not pretend to have machine learning answers; instead, we use simple, transparent signals — phone verification, device fingerprints, transaction velocity limits — that catch 90% of bad actors with 10% of the engineering cost.",
    ],
    takeaways: [
      "M-Pesa first is not optional — it is the default for Kenyan checkout.",
      "Design vendor flows for low-end Android, not for your designer's MacBook.",
      "Simple anti-fraud rules outperform complex models in early stages.",
    ],
    date: "Apr 15, 2026",
    read: "7 min read",
    category: "E-commerce",
    gradient: "from-rose-500/30 to-red-500/30",
  },
  {
    title: "Learning Management Systems: What Schools Actually Need vs What Vendors Sell",
    excerpt: "Honest insights from building Edusly — the features that matter in real Kenyan classrooms, and the bloat we removed.",
    body: [
      "Most LMS products are designed for well-funded universities, not Kenyan high schools, colleges and bootcamps. As we built Edusly, we interviewed teachers, students, parents and administrators to ruthlessly cut features no one uses and double down on what matters.",
      "Three features made the biggest difference: offline-friendly content so students can study during outages, clear gradebooks teachers can update in under a minute, and SMS notifications for parents who do not check email but never miss a text.",
      "We deliberately removed video conferencing, complex discussion forums and gamification badges from version one. Why? Because real teachers told us they would never use them, and they competed for screen space with the things that actually mattered.",
      "Edusly answers one question for every administrator at a glance: 'Is this student doing okay?' Everything else flows from there.",
    ],
    takeaways: [
      "Cut features ruthlessly — every extra toggle is a tax on usage.",
      "SMS still wins parent engagement in 2026.",
      "Design the dashboard around the question leadership actually asks.",
    ],
    date: "Mar 30, 2026",
    read: "8 min read",
    category: "EdTech",
    gradient: "from-amber-500/30 to-orange-500/30",
  },
  {
    title: "Securing Institutional Finance Systems: A Practical Checklist",
    excerpt: "Role-based access, audit logs, encryption at rest, reconciliation. The non-negotiables we ship in every Finance Hub deployment.",
    body: [
      "When you build a financial system for an institution, you carry a responsibility that no marketing site or blog ever will. A single careless query can corrupt months of records. A single weak admin password can drain accounts.",
      "Our Finance Hub security model rests on five pillars: least-privilege roles where no single user can both create and approve a transaction; immutable audit logs written to append-only storage; encrypted backups tested by actual restore drills; daily automated reconciliation reports that flag mismatches before humans see them; and a written disaster-recovery runbook rehearsed before any go-live.",
      "We also do something unusual: we publish our security model to clients in plain English. Boards and finance committees can read it and ask sharp questions. This transparency builds trust and surfaces blind spots early.",
      "If you are evaluating a finance system vendor, use this checklist as your starting point. If the vendor cannot explain each pillar in plain language, walk away.",
    ],
    takeaways: [
      "Separation of duties is the single biggest fraud-prevention control.",
      "Untested backups are not backups — schedule restore drills monthly.",
      "If the vendor cannot explain security in plain English, do not buy.",
    ],
    date: "Mar 12, 2026",
    read: "6 min read",
    category: "Security",
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "From Idea to Live System in 8 Weeks: My Delivery Playbook",
    excerpt: "Discovery, Design, Develop, Deploy. The four-phase playbook we use to ship serious institutional software fast without cutting corners.",
    body: [
      "Speed and quality are not opposites — bad process is. After delivering dozens of projects, we boiled our approach down to a four-phase framework that we run on every engagement.",
      "Week 1 is Discovery: a structured workshop to align on goals, users, success metrics and constraints. We leave Week 1 with a one-page scope document everyone has signed.",
      "Weeks 2 and 3 are Design: low-fidelity wireframes, then clickable prototypes that real users click through. Most scope arguments are resolved here, before a single line of production code is written.",
      "Weeks 4 through 7 are Development: weekly demo Fridays where the client sees real, working software. Bugs, scope tweaks and surprises are surfaced and resolved early. No big-bang reveal.",
      "Week 8 is Deploy: launch, monitoring, training, handover documentation, and a written 12-month support plan. We do not disappear after launch — that is when the real partnership begins.",
    ],
    takeaways: [
      "Structured discovery prevents 80% of expensive mid-project pivots.",
      "Weekly demos turn surprises into small adjustments.",
      "Plan post-launch support before launch, not after.",
    ],
    date: "Feb 26, 2026",
    read: "9 min read",
    category: "Process",
    gradient: "from-indigo-500/30 to-violet-500/30",
  },
];

function Blog() {
  const [openPost, setOpenPost] = useState<Post | null>(null);

  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" /> Insights & Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            The <span className="text-gradient-primary">SoftSky</span> Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Deep, practical lessons from real software we have built for African institutions and businesses. No fluff, no hype — just what works.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden bg-card/60 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 flex flex-col">
              <div className={`relative h-28 bg-gradient-to-br ${p.gradient} flex items-center justify-center p-4`}>
                <div className="absolute inset-0 starfield opacity-30" />
                <span className="relative text-xs uppercase tracking-widest text-foreground/90 px-3 py-1 rounded-full bg-background/40 backdrop-blur">{p.category}</span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-display font-bold leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border/40">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
                <Button onClick={() => setOpenPost(p)} variant="ghost" className="justify-start px-0 text-primary hover:text-primary hover:bg-transparent">
                  Read full insight <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Want us to write about your topic?</h2>
          <p className="text-muted-foreground">Suggest a topic and we will share our experience in detail.</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-11 px-7">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* READER MODAL */}
      {openPost && (
        <div className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-start md:items-center justify-center p-3 md:p-6 overflow-y-auto" onClick={() => setOpenPost(null)}>
          <Card className="relative w-full max-w-3xl bg-card border-border/60 my-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpenPost(null)} aria-label="Close" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors z-10">
              <X className="h-4 w-4" />
            </button>
            <div className={`h-24 bg-gradient-to-br ${openPost.gradient} rounded-t-xl flex items-center justify-center`}>
              <span className="text-xs uppercase tracking-widest text-foreground/90 px-3 py-1 rounded-full bg-background/40 backdrop-blur">{openPost.category}</span>
            </div>
            <div className="p-6 md:p-10 space-y-5">
              <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">{openPost.title}</h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {openPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {openPost.read}</span>
              </div>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
                {openPost.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6 p-5 rounded-xl border border-primary/30 bg-primary/5 space-y-2">
                <div className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</div>
                <ul className="space-y-1.5 text-sm md:text-base">
                  {openPost.takeaways.map((t, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary">•</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
