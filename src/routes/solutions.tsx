import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Sparkles, Globe2,
  Bot, CalendarDays, CalendarClock, Users as UsersIcon, Package, ShoppingCart,
  FileText, Wallet, PiggyBank, Stethoscope, Church, Banknote, Calculator,
  GraduationCap, FileCheck, Building2, Tent, Network, Box, Landmark, Car,
  Tractor, Store, Layout, Home as HomeIcon, Hotel, Smartphone, ShieldCheck, PenTool,
  MonitorPlay, Database, Server, Briefcase, BarChart3, Layers, Zap,
  ArrowUpRight, Code2, Cloud, Brain, Shield, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | SoftSkySolution | Complete Digital Systems & Software" },
      { name: "description", content: "Explore SoftSkySolution's full range of digital solutions: enterprise systems, web development, mobile apps, AI automation, cloud infrastructure, graphics & branding. Built in Kenya for businesses across Africa." },
    ],
  }),
  component: Solutions,
});

const categories = [
  {
    id: "systems",
    label: "⚡ System Development",
    description: "Enterprise-grade management systems engineered for African institutions, including hospitals, schools, churches, SACCOs, cooperatives, farms, and government offices.",
  },
  {
    id: "web",
    label: "🌍 Website Development",
    description: "Modern, lightning-fast websites that rank on Google, convert visitors into customers, and represent your brand with distinction.",
  },
  {
    id: "graphics",
    label: "🎨 Graphics & Branding",
    description: "Creative visual identities that make your brand unforgettable, from logo design to animated social media content.",
  },
  {
    id: "cloud",
    label: "☁️ Cloud & Infrastructure",
    description: "Scalable cloud architecture, DevOps pipelines, database management, and API integration services for modern businesses.",
  },
];

const systemSolutions = [
  {
    icon: Bot,
    title: "AI Chatbot Systems",
    desc: "Intelligent conversational agents that handle customer queries, bookings, and support 24/7. Powered by LLMs with custom training on your business data.",
    features: ["Natural language understanding", "Multi-language support", "CRM integration", "Analytics dashboard", "WhatsApp & web deployment"],
    highlight: "Reduce support costs by up to 60%",
  },
  {
    icon: CalendarDays,
    title: "Attendance Management Systems",
    desc: "Digital and biometric check-in solutions for schools, offices, and factories. Real-time attendance tracking with automated reporting and notifications.",
    features: ["Biometric integration", "GPS-based tracking", "Automated alerts", "Overtime calculation", "Export to payroll"],
    highlight: "Track 1000+ employees in real-time",
  },
  {
    icon: CalendarClock,
    title: "Booking & Appointment Systems",
    desc: "Seamless scheduling platforms for clinics, salons, consultants, and service businesses. Customers book online, you manage everything from one dashboard.",
    features: ["Online self-booking", "SMS/email reminders", "Calendar sync", "Payment integration", "Waitlist management"],
    highlight: "Zero double-bookings guaranteed",
  },
  {
    icon: UsersIcon,
    title: "Staff Management Systems",
    desc: "Complete HR management to track performance, manage leave requests, store employee records, and generate compliance reports from a single platform.",
    features: ["Performance reviews", "Leave tracking", "Document storage", "Role-based access", "Custom reporting"],
    highlight: "All HR operations in one place",
  },
  {
    icon: Package,
    title: "Inventory Management Systems",
    desc: "Real-time stock tracking with automated reorder alerts, supplier management, and multi-warehouse support. Never run out of critical stock again.",
    features: ["Real-time stock levels", "Barcode/QR scanning", "Auto-reorder alerts", "Multi-warehouse", "Supplier management"],
    highlight: "Reduce stock-outs by 90%",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Systems",
    desc: "Streamline your entire purchasing lifecycle, from requisition to payment. Vendor management, approval workflows, and budget tracking built in.",
    features: ["Purchase requisitions", "Approval workflows", "Vendor scoring", "Budget tracking", "Audit trails"],
    highlight: "Full procurement lifecycle control",
  },
  {
    icon: FileText,
    title: "Document Management Systems",
    desc: "Secure digital archiving with fast search, version control, and role-based access. Go paperless and find any document in seconds.",
    features: ["AES-256 encryption", "Full-text search", "Version history", "Access controls", "Cloud backup"],
    highlight: "Find any document in under 3 seconds",
  },
  {
    icon: Wallet,
    title: "Finance & Accounting Systems",
    desc: "Comprehensive financial management with general ledger, invoicing, accounts payable/receivable, and automated financial reporting.",
    features: ["General ledger", "Invoicing & billing", "Tax compliance", "Bank reconciliation", "Financial reports"],
    highlight: "KRA-compliant financial reporting",
  },
  {
    icon: PiggyBank,
    title: "SACCO Management Systems",
    desc: "Complete SACCO operations management, including member registration, savings tracking, loan processing, dividend calculation, and regulatory compliance.",
    features: ["Member management", "Savings & deposits", "Loan processing", "Dividend calculation", "Regulatory reports"],
    highlight: "Trusted by 10+ SACCOs in Kenya",
  },
  {
    icon: Stethoscope,
    title: "Hospital & Clinic Systems",
    desc: "End-to-end hospital management, covering patient records, appointment scheduling, pharmacy management, billing, and lab integration.",
    features: ["Electronic health records", "Appointment scheduling", "Pharmacy module", "Lab integration", "Insurance billing"],
    highlight: "Digitize patient care end-to-end",
  },
  {
    icon: Church,
    title: "Church Management Systems",
    desc: "Manage your congregation digitally, tracking member registration, tithes, offerings, event planning, SMS communication, and online giving.",
    features: ["Member database", "Tithe tracking", "Event management", "SMS broadcasting", "Online giving portal"],
    highlight: "Empower your ministry digitally",
  },
  {
    icon: Banknote,
    title: "Payroll Systems",
    desc: "Automated salary processing with statutory deductions (PAYE, NSSF, NHIF, Housing Levy), payslip generation, and bank file exports.",
    features: ["Auto deductions", "Payslip generation", "Bank file export", "Leave integration", "Year-end reports"],
    highlight: "100% KRA/NSSF/NHIF compliant",
  },
  {
    icon: Calculator,
    title: "Point of Sale (POS) Systems",
    desc: "Fast retail checkout with inventory sync, sales analytics, receipt printing, and multi-branch support. Works online and offline.",
    features: ["Quick checkout", "Inventory sync", "Sales reports", "Receipt printing", "Multi-branch"],
    highlight: "Works offline, never lose a sale",
  },
  {
    icon: GraduationCap,
    title: "E-Learning & LMS Platforms",
    desc: "Deliver courses, assignments, quizzes, and grades online. Video streaming, discussion forums, and certificate generation included.",
    features: ["Course management", "Video streaming", "Quizzes & assignments", "Progress tracking", "Certificates"],
    highlight: "Used by 5+ institutions in Kenya",
  },
  {
    icon: FileCheck,
    title: "Examination & Results Systems",
    desc: "Secure exam management with automated grading, report card generation, transcript printing, and parent portal access.",
    features: ["Exam scheduling", "Auto-grading", "Report cards", "Transcript generation", "Parent portal"],
    highlight: "Generate 1000+ report cards in minutes",
  },
  {
    icon: Building2,
    title: "Hostel Management Systems",
    desc: "Room allocation, fee tracking, student records, and maintenance requests. Perfect for universities, colleges, and boarding schools.",
    features: ["Room allocation", "Fee tracking", "Maintenance requests", "Student records", "Occupancy reports"],
    highlight: "Manage 500+ rooms effortlessly",
  },
  {
    icon: Tent,
    title: "Event Management Systems",
    desc: "End-to-end event management, covering ticketing, registration, attendee tracking, badge printing, and post-event analytics.",
    features: ["Online ticketing", "QR check-in", "Badge printing", "Attendee analytics", "Sponsor management"],
    highlight: "Handle events of any scale",
  },
  {
    icon: Network,
    title: "CRM Systems",
    desc: "Build stronger customer relationships with lead tracking, pipeline management, automated follow-ups, and sales forecasting.",
    features: ["Lead management", "Pipeline tracking", "Email automation", "Sales forecasting", "Custom dashboards"],
    highlight: "Convert 3x more leads into customers",
  },
  {
    icon: Box,
    title: "Asset Management Systems",
    desc: "Track every asset your organization owns, including depreciation, maintenance schedules, location tracking, and disposal management.",
    features: ["Asset tagging", "Depreciation tracking", "Maintenance schedules", "Location tracking", "Disposal reports"],
    highlight: "Full asset lifecycle management",
  },
  {
    icon: Landmark,
    title: "Loan & Cooperative Systems",
    desc: "Loan origination, disbursement, amortization scheduling, repayment tracking, and member management for cooperatives and microfinance.",
    features: ["Loan origination", "Amortization schedules", "Repayment tracking", "Member management", "Interest calculation"],
    highlight: "Process loans in under 5 minutes",
  },
  {
    icon: Car,
    title: "Transport & Fleet Management",
    desc: "Fleet tracking, vehicle booking, driver management, fuel monitoring, and maintenance scheduling for logistics companies.",
    features: ["GPS tracking", "Vehicle booking", "Driver management", "Fuel monitoring", "Maintenance alerts"],
    highlight: "99.8% fleet uptime guaranteed",
  },
  {
    icon: Tractor,
    title: "Agriculture & Farm Systems",
    desc: "Smart farming solutions, covering crop yield tracking, weather integration, farm accounting, IoT sensor support, and supply chain management.",
    features: ["Yield tracking", "Weather integration", "Farm accounting", "IoT sensors", "Supply chain"],
    highlight: "Data-driven farming decisions",
  },
];

const webSolutions = [
  {
    icon: Globe2,
    title: "Company & Corporate Websites",
    desc: "Professional business websites that establish credibility, showcase your services, and generate leads. SEO-optimized and mobile-first.",
    features: ["Custom design", "SEO optimization", "Contact forms", "Blog integration", "Analytics setup"],
    highlight: "Page speed score: 95+",
  },
  {
    icon: Store,
    title: "E-Commerce Websites",
    desc: "High-conversion online stores with secure payments (M-PESA, card, PayPal), inventory management, and order tracking.",
    features: ["M-PESA integration", "Product management", "Order tracking", "Customer accounts", "Discount engine"],
    highlight: "Sell to customers 24/7",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    desc: "Showcase your creative work, achievements, and professional brand with stunning portfolio websites that get you noticed.",
    features: ["Gallery layouts", "Case studies", "Testimonials", "Contact forms", "Social links"],
    highlight: "Stand out from the competition",
  },
  {
    icon: HomeIcon,
    title: "Real Estate Websites",
    desc: "Property listing platforms with advanced search, virtual tours, lead capture, and agent management dashboards.",
    features: ["Property listings", "Advanced search", "Virtual tours", "Lead capture", "Agent dashboards"],
    highlight: "Capture 42+ leads per week",
  },
  {
    icon: Hotel,
    title: "Hotel & Booking Websites",
    desc: "Direct booking engines with room management, availability calendars, payment processing, and guest portals.",
    features: ["Direct booking", "Room management", "Availability calendar", "Guest portal", "Review system"],
    highlight: "Eliminate OTA commission fees",
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Websites",
    desc: "Websites that look and work flawlessly on every device, including phones, tablets, laptops, and desktops. No pinching, no scrolling issues.",
    features: ["Responsive design", "Touch-optimized", "Fast loading", "Cross-browser", "Progressive web app"],
    highlight: "100% responsive on all devices",
  },
  {
    icon: GraduationCap,
    title: "School & Institution Websites",
    desc: "Modern websites for schools, colleges, and universities with admissions portals, news sections, and parent communication tools.",
    features: ["Admissions portal", "News & events", "Staff directory", "Photo galleries", "Download center"],
    highlight: "Digitize your institution's presence",
  },
  {
    icon: ShieldCheck,
    title: "Website Security & Maintenance",
    desc: "24/7 monitoring, regular backups, security patches, SSL management, and performance optimization for your existing website.",
    features: ["24/7 monitoring", "Daily backups", "Security patches", "SSL management", "Performance tuning"],
    highlight: "Zero breaches, 99.9% uptime",
  },
];

const graphicsSolutions = [
  {
    icon: PenTool,
    title: "Logo & Brand Identity Design",
    desc: "Memorable visual identities that capture your brand essence. Complete brand kits with logo variations, color palettes, and typography guidelines.",
    features: ["Logo design (3 concepts)", "Brand guidelines", "Color palette", "Typography system", "Business card design"],
    highlight: "Your brand, unforgettable",
  },
  {
    icon: MonitorPlay,
    title: "Motion Graphics & Animation",
    desc: "Engaging animated content for social media, advertising, presentations, and product demos that capture attention and drive engagement.",
    features: ["Social media animations", "Product demos", "Explainer videos", "Ad animations", "Logo reveals"],
    highlight: "10x more engagement than static content",
  },
  {
    icon: Layers,
    title: "Social Media Design",
    desc: "Scroll-stopping social media content, such as post designs, story templates, carousel graphics, and cover images for all platforms.",
    features: ["Post templates", "Story designs", "Carousel graphics", "Cover images", "Ad creatives"],
    highlight: "Consistent brand across all platforms",
  },
  {
    icon: FileText,
    title: "Print & Marketing Materials",
    desc: "Professional flyers, posters, brochures, banners, and corporate stationery designed to make a lasting impression.",
    features: ["Flyer design", "Poster design", "Brochures", "Pull-up banners", "Business stationery"],
    highlight: "Print-ready, high-resolution output",
  },
];

const cloudSolutions = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Migration",
    desc: "Migrate your systems to AWS, GCP, or Azure with zero downtime. Scalable architecture designed for growth and cost efficiency.",
    features: ["Cloud migration", "Auto-scaling", "Load balancing", "Cost optimization", "Multi-region deployment"],
    highlight: "Save up to 40% on infrastructure costs",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    desc: "High-performance database architecture with PostgreSQL, MySQL, MongoDB, and Redis. Query optimization and data migration services.",
    features: ["Schema design", "Query optimization", "Data migration", "Backup strategies", "Replication setup"],
    highlight: "Sub-millisecond query performance",
  },
  {
    icon: Server,
    title: "API Development & Integration",
    desc: "RESTful and GraphQL APIs that connect your systems seamlessly. Third-party integrations with M-PESA, SMS gateways, and more.",
    features: ["REST & GraphQL APIs", "M-PESA integration", "SMS gateway", "Payment processing", "Webhook systems"],
    highlight: "Connect any system, anywhere",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    desc: "Security audits, penetration testing, and compliance implementation. Protect your data and meet regulatory requirements.",
    features: ["Security audits", "Penetration testing", "Data encryption", "Access control", "Compliance reports"],
    highlight: "Enterprise-grade security for all",
  },
];

type CategoryId = "systems" | "web" | "graphics" | "cloud";

const solutionsByCategory: Record<CategoryId, typeof systemSolutions> = {
  systems: systemSolutions,
  web: webSolutions,
  graphics: graphicsSolutions,
  cloud: cloudSolutions,
};

function Solutions() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("systems");
  const activeSolutions = solutionsByCategory[activeCategory];
  const activeInfo = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" /> Our Solutions
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-5">
            Complete <span className="text-gradient-primary">digital solutions</span> for every industry
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From enterprise management systems to stunning websites and creative branding, SoftSkySolution delivers end-to-end technology solutions that transform how African businesses operate, compete, and grow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow text-base h-11 px-6">
              <Link to="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 h-11 px-6">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-border/40 bg-card/30">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { value: "50+", label: "Solutions Available" },
              { value: "22+", label: "Industry Categories" },
              { value: "15+", label: "Institutions Served" },
              { value: "100%", label: "Custom-Built" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="container mx-auto px-4 md:px-6 pt-16 pb-4">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Browse by <span className="text-gradient-primary">category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a category below to explore our full range of solutions tailored for your industry.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryId)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card/50 text-foreground border-border/50 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {activeInfo.description}
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeSolutions.map((s) => (
            <Card
              key={s.title}
              className="group p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1 duration-300 space-y-4 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <s.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-display font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold w-fit">
                <Zap className="h-3 w-3" /> {s.highlight}
              </div>

              {/* Features */}
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button asChild variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10 mt-auto">
                <Link to="/contact" search={{ service: s.title }}>
                  Get a Quote <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-card/30 border-y border-border/40 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              How we <span className="text-gradient-primary">deliver</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every solution follows our proven 4-step delivery process, spanning discovery to deployment and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Discovery & Scoping", desc: "We meet to understand your needs, goals, current pain points, and desired outcomes. We map your idea into a clear technical specification.", icon: "🔍" },
              { num: "02", title: "Design & Prototype", desc: "We create wireframes and interactive prototypes so you can see and feel the solution before a single line of code is written.", icon: "🎨" },
              { num: "03", title: "Build & Test", desc: "Iterative development with weekly demos, continuous testing, and your feedback integrated at every sprint cycle.", icon: "⚡" },
              { num: "04", title: "Deploy & Support", desc: "Launch with confidence. We handle deployment, training, documentation, and provide 12 months of post-launch support.", icon: "🚀" },
            ].map((p) => (
              <Card key={p.num} className="p-6 bg-background/60 border-border/40 hover:border-primary/50 transition-colors space-y-3 text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="text-sm font-mono text-primary/70 font-bold">{p.num}</div>
                <h4 className="font-display font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Industries we <span className="text-gradient-primary">serve</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our solutions power organizations across these key sectors in Kenya and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {[
            { icon: "🏫", name: "Education" },
            { icon: "🏥", name: "Healthcare" },
            { icon: "⛪", name: "Faith Organizations" },
            { icon: "🏦", name: "Finance & SACCOs" },
            { icon: "🏨", name: "Hospitality" },
            { icon: "🛒", name: "Retail & E-commerce" },
            { icon: "🌾", name: "Agriculture" },
            { icon: "🏛️", name: "Government" },
            { icon: "🚗", name: "Transport & Logistics" },
            { icon: "🏢", name: "Corporate" },
            { icon: "🏠", name: "Real Estate" },
            { icon: "🎪", name: "Events & Entertainment" },
            { icon: "💼", name: "Professional Services" },
            { icon: "🏭", name: "Manufacturing" },
            { icon: "📡", name: "Telecommunications" },
          ].map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all text-center"
            >
              <span className="text-2xl">{ind.icon}</span>
              <span className="text-sm font-medium">{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/30 p-10 md:p-14 text-center">
          <div className="absolute inset-0 starfield opacity-30" />
          <div className="relative space-y-5 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Don't see your exact solution? <span className="text-gradient-primary">Let's build it.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every system we deliver is custom-built for your specific needs. Tell us what you're looking for and we'll scope a tailored solution, free of charge.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-glow h-12 px-8">
                <Link to="/contact">Request a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 h-12 px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
