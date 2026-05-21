import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | SoftSkySolution" },
      { name: "description", content: "Selected projects delivered by SoftSkySolution, including institutional websites, learning management systems, financial systems, donation platforms, and more." },
    ],
  }),
  component: Portfolio,
});

type Project = {
  title: string;
  category: string;
  tags: string[];
  desc: string;
  image: string;
  story: string[];
  status?: "Live" | "Ongoing";
};

const projects: Project[] = [
  {
    title: "Directorate of ICT Website",
    category: "Institutional",
    tags: ["React", "Ticketing", "Portals"],
    desc: "Built a modern Directorate of ICT website with a built-in ticket tracking system, internship and attachment application portal, and seamless integration with the main university portals. This improved response times and student-staff communication.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    story: [
      "The Directorate of ICT needed a unified platform where students and staff could easily access support and services without sending direct emails or visiting physical offices.",
      "We built a comprehensive portal that includes a ticketing system for IT support, allowing users to track the status of their requests in real-time.",
      "Additionally, the platform features an automated internship application portal, reducing manual paperwork for the department and streamlining the selection process.",
    ],
    status: "Live",
  },
  {
    title: "University Customer Feedback System",
    category: "Institutional",
    tags: ["Real-time", "Automation", "Analytics"],
    desc: "A real-time, automated customer feedback platform used across all institutional offices. It is accessible by students, staff and visitors, turning feedback into actionable insights for leadership.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format",
    story: [
      "Traditional paper-based suggestion boxes were failing to capture real-time sentiments from university stakeholders. Issues took weeks to reach the right desk.",
      "We deployed a QR-code driven, mobile-first feedback system. Now, anyone on campus can scan a code at any service point and submit their feedback in under ten seconds.",
      "The system automatically routes the feedback to the relevant department head, categorizes it by sentiment, and generates visual reports for the university management board to track service quality.",
    ],
    status: "Live",
  },
  {
    title: "Mercy Institutional College System",
    category: "Education",
    tags: ["Website", "Portal", "SMS"],
    desc: "Full website and portal advancement plus a complete Student Management System handling admissions, records, fees, performance tracking and parent communication.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format",
    story: [
      "Mercy Institutional College was struggling with fragmented systems: one for admissions, another for accounting, and manual SMS for parent communication.",
      "We engineered a unified College Management System. The new platform handles everything from the moment a student applies online to their graduation.",
      "Parents now receive automated SMS alerts for fee balances and exam results, and the administration has a single dashboard to monitor the entire institution's health.",
    ],
    status: "Live",
  },
  {
    title: "Finance Hub System",
    category: "FinTech",
    tags: ["Finance", "Reporting", "Security"],
    desc: "A bespoke financial system focused on financial tracking, automated reporting, role-based access and secure data handling. Built for institutions that demand accuracy and accountability.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format",
    story: [
      "A growing institution required a secure, internal financial tracking system that could handle multiple approval layers without the bloat of traditional ERP software.",
      "We built the Finance Hub with a core focus on security and role-based access. No transaction can be initiated and approved by the same user, enforcing strict separation of duties.",
      "The system features automated daily reconciliation reports, immutable audit logs, and encrypted data storage, bringing absolute transparency to their financial operations.",
    ],
    status: "Live",
  },
  {
    title: "Online Market Platform",
    category: "E-commerce",
    tags: ["Marketplace", "Payments", "Logistics"],
    desc: "A nationwide online marketing and selling platform connecting vendors and buyers across the country with integrated payments, listings, search and order management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format",
    story: [
      "We noticed a gap in the market for a truly localized e-commerce platform that understood how Kenyan vendors actually do business.",
      "This Online Market Platform was built mobile-first, prioritizing lightweight image uploads for vendors and seamless M-Pesa integration for buyers.",
      "Since launch, it has empowered hundreds of small businesses to reach a national audience without needing their own standalone websites.",
    ],
    status: "Live",
  },
  {
    title: "CCCUPARTY System",
    category: "Civic / GovTech",
    tags: ["Events", "Coordination", "Web"],
    desc: "A political party management system and public website built for event management, member coordination and participation in political events. This unites digital tools with grassroots organizing.",
    image: "https://images.unsplash.com/photo-1523580495863-d6dcdd28181f?w=800&auto=format",
    story: [
      "Managing thousands of party members across different counties required a robust digital infrastructure that could handle high traffic during event seasons.",
      "We developed a centralized coordination platform. It allows organizers to schedule events, track member registrations, and send bulk communications instantly.",
      "The public-facing website also serves as the official news and resource hub, ensuring all members receive accurate information directly from the source.",
    ],
    status: "Live",
  },
  {
    title: "Edusly Management Platform",
    category: "Education",
    tags: ["LMS", "Courses", "Assessments"],
    desc: "An ongoing learning management system designed for modern institutions. It includes courses, classes, assessments, reporting and learner engagement in one polished platform.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format",
    story: [
      "Edusly was born from the realization that most Learning Management Systems are too complex for everyday teachers and students.",
      "We are currently building this platform to be fiercely user-friendly. It focuses on offline-capable content delivery, simple gradebooks, and low-bandwidth video streaming.",
      "The goal is to provide a world-class e-learning experience that works flawlessly on basic smartphones and intermittent internet connections.",
    ],
    status: "Ongoing",
  },
  {
    title: "Donation System for Carmelites of Juja",
    category: "Non-profit",
    tags: ["Donations", "Catholic", "Payments"],
    desc: "A Catholic donation website and management system supporting the financial sustainability of the Carmelite community in Juja with secure online giving and reporting.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format",
    story: [
      "The Carmelite community in Juja needed a modern way to receive support from their congregation and well-wishers globally.",
      "We designed a respectful, beautiful website that tells their story and integrated a seamless donation gateway supporting mobile money and cards.",
      "The backend system allows the community administrators to track campaigns, issue receipts automatically, and maintain transparent financial records of all contributions.",
    ],
    status: "Live",
  },
  {
    title: "Technical Support & Systems Management",
    category: "ICT Services",
    tags: ["Hardware", "Networking", "Sysadmin"],
    desc: "Ongoing professional technical support across hardware repair and deployment, network design and administration, and systems management for institutional clients.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
    story: [
      "Software is only as good as the infrastructure it runs on. Many of our clients require ongoing IT support beyond just writing code.",
      "We provide comprehensive systems management, acting as the outsourced IT department for multiple institutions. This includes setting up secure campus networks, maintaining server infrastructure, and troubleshooting hardware.",
      "By combining software engineering with hands-on systems administration, we guarantee high availability and performance across the entire technology stack.",
    ],
    status: "Live",
  },
];

const categories = ["All", "Institutional", "Education", "FinTech", "E-commerce", "Civic / GovTech", "Non-profit", "ICT Services"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Selected Work
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Projects that <span className="text-gradient-primary">made impact</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A sample of the real systems, platforms and websites I have engineered for institutions, businesses and communities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <Card key={p.title} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 flex flex-col cursor-pointer" onClick={() => setOpenProject(p)}>
              <div 
                className="relative h-48 bg-cover bg-center flex items-center justify-center overflow-hidden"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${p.image})` }}
              >
                <div className="absolute inset-0 starfield opacity-30" />
                <div className="relative text-center px-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-white/80 mb-1 font-semibold">{p.category}</div>
                  <div className="text-lg font-display font-bold leading-tight">{p.title}</div>
                </div>
                {p.status && (
                  <span className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-semibold border ${p.status === "Live" ? "bg-emerald-500/80 text-white border-emerald-400" : "bg-amber-500/80 text-white border-amber-400"
                    }`}>{p.status}</span>
                )}
              </div>
              <div className="p-5 space-y-3 flex flex-col flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all cursor-pointer w-fit mt-1">
                  Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Your project could be next.</h2>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-11 px-7">
            <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CASE STUDY DIALOG */}
      <Dialog open={!!openProject} onOpenChange={(open) => !open && setOpenProject(null)}>
        <DialogContent className="max-w-3xl w-[95%] p-0 overflow-hidden bg-card border-border/60 shadow-2xl rounded-xl max-h-[90vh] flex flex-col z-[100]">
          {openProject && (
            <>
              <div 
                className="h-56 bg-cover bg-center flex items-center justify-center relative shrink-0"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${openProject.image})` }}
              >
                <div className="relative text-center px-6 max-w-2xl z-10 space-y-3">
                  <span className="inline-block text-xs uppercase tracking-widest text-white px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/20">
                    {openProject.category}
                  </span>
                  <DialogTitle className="text-3xl md:text-4xl font-display font-bold leading-tight text-white">
                    {openProject.title}
                  </DialogTitle>
                </div>
              </div>
              <div className="p-6 md:p-10 overflow-y-auto space-y-6 text-left">
                <div className="flex flex-wrap gap-2 pb-4 border-b border-border/40">
                  {openProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                  ))}
                  {openProject.status && (
                    <span className={`px-3 py-1 text-sm rounded-full font-semibold border ml-auto ${openProject.status === "Live" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"}`}>
                      Status: {openProject.status}
                    </span>
                  )}
                </div>
                
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90 pt-2">
                  <div className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm mb-2">
                    <BookOpen className="h-4 w-4" /> The Story
                  </div>
                  {openProject.story.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/40 flex justify-end">
                   <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                     <Link to="/contact" search={{ service: `Interested in: ${openProject.title}` }}>
                       Request a Similar System <ExternalLink className="ml-2 h-4 w-4" />
                     </Link>
                   </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}