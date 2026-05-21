import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  gradient: string;
  status?: "Live" | "Ongoing";
};

const projects: Project[] = [
  {
    title: "Directorate of ICT Website",
    category: "Institutional",
    tags: ["React", "Ticketing", "Portals"],
    desc: "Built a modern Directorate of ICT website with a built-in ticket tracking system, internship and attachment application portal, and seamless integration with the main university portals. This improved response times and student-staff communication.",
    gradient: "from-blue-500/30 to-cyan-500/30",
    status: "Live",
  },
  {
    title: "University Customer Feedback System",
    category: "Institutional",
    tags: ["Real-time", "Automation", "Analytics"],
    desc: "A real-time, automated customer feedback platform used across all institutional offices. It is accessible by students, staff and visitors, turning feedback into actionable insights for leadership.",
    gradient: "from-emerald-500/30 to-teal-500/30",
    status: "Live",
  },
  {
    title: "Mercy Institutional College System",
    category: "Education",
    tags: ["Website", "Portal", "SMS"],
    desc: "Full website and portal advancement plus a complete Student Management System handling admissions, records, fees, performance tracking and parent communication.",
    gradient: "from-amber-500/30 to-orange-500/30",
    status: "Live",
  },
  {
    title: "Finance Hub System",
    category: "FinTech",
    tags: ["Finance", "Reporting", "Security"],
    desc: "A bespoke financial system focused on financial tracking, automated reporting, role-based access and secure data handling. Built for institutions that demand accuracy and accountability.",
    gradient: "from-purple-500/30 to-pink-500/30",
    status: "Live",
  },
  {
    title: "Online Market Platform",
    category: "E-commerce",
    tags: ["Marketplace", "Payments", "Logistics"],
    desc: "A nationwide online marketing and selling platform connecting vendors and buyers across the country with integrated payments, listings, search and order management.",
    gradient: "from-rose-500/30 to-red-500/30",
    status: "Live",
  },
  {
    title: "CCCUPARTY System",
    category: "Civic / GovTech",
    tags: ["Events", "Coordination", "Web"],
    desc: "A political party management system and public website built for event management, member coordination and participation in political events. This unites digital tools with grassroots organizing.",
    gradient: "from-indigo-500/30 to-violet-500/30",
    status: "Live",
  },
  {
    title: "Edusly Management Platform",
    category: "Education",
    tags: ["LMS", "Courses", "Assessments"],
    desc: "An ongoing learning management system designed for modern institutions. It includes courses, classes, assessments, reporting and learner engagement in one polished platform.",
    gradient: "from-sky-500/30 to-blue-500/30",
    status: "Ongoing",
  },
  {
    title: "Donation System for Carmelites of Juja",
    category: "Non-profit",
    tags: ["Donations", "Catholic", "Payments"],
    desc: "A Catholic donation website and management system supporting the financial sustainability of the Carmelite community in Juja with secure online giving and reporting.",
    gradient: "from-yellow-500/30 to-amber-500/30",
    status: "Live",
  },
  {
    title: "Technical Support & Systems Management",
    category: "ICT Services",
    tags: ["Hardware", "Networking", "Sysadmin"],
    desc: "Ongoing professional technical support across hardware repair and deployment, network design and administration, and systems management for institutional clients.",
    gradient: "from-cyan-500/30 to-emerald-500/30",
    status: "Live",
  },
];

const categories = ["All", "Institutional", "Education", "FinTech", "E-commerce", "Civic / GovTech", "Non-profit", "ICT Services"];

function Portfolio() {
  const [filter, setFilter] = useState("All");
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
            <Card key={p.title} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 flex flex-col">
              <div className={`relative h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 starfield opacity-30" />
                <div className="relative text-center px-4">
                  <div className="text-xs uppercase tracking-widest text-foreground/70 mb-1">{p.category}</div>
                  <div className="text-lg font-display font-bold leading-tight">{p.title}</div>
                </div>
                {p.status && (
                  <span className={`absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-semibold ${p.status === "Live" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
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
                <Link
                  to="/contact"
                  search={{ service: `Case Study: ${p.title}` }}
                  className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all cursor-pointer w-fit mt-1"
                >
                  Request Case Study <ExternalLink className="h-3.5 w-3.5" />
                </Link>
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
    </>
  );
}