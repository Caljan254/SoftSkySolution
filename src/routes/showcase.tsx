import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Bot, CalendarDays, CalendarClock, Users, Package, ShoppingCart,
  FileText, Wallet, PiggyBank, Stethoscope, Church, Banknote,
  Calculator, GraduationCap, FileCheck, Building2, Tent, Network,
  Box, Landmark, Car, Tractor, Globe2, Store, Layout, Home, Hotel,
  Smartphone, ShieldCheck, PenTool, MonitorPlay, Mail, Phone, Code2,
} from "lucide-react";

export const Route = createFileRoute("/showcase")({
  component: ShowcasePage,
  head: () => ({
    meta: [
      { title: "SoftSkySolution — Digital Solutions Showcase" },
      { name: "description", content: "Transforming Ideas Into Digital Solutions" },
    ],
  }),
});

// ─── Slide data ───────────────────────────────────────────────────────────────

const slides = [
  // System Development
  { title: "AI Chatbot Systems", desc: "Automate customer support with intelligent conversational agents available 24/7.", icon: Bot, category: "System Development", accent: "#3b82f6", stat1: "Response Time", val1: "< 1 sec", stat2: "Resolved Queries", val2: "94%", detail: "AI Agent is typing…" },
  { title: "Attendance Systems", desc: "Biometric and digital check-ins for schools and corporate offices.", icon: CalendarDays, category: "System Development", accent: "#10b981", stat1: "Today's Attendance", val1: "98% Optimal", stat2: "Staff on Duty", val2: "42 / 43", detail: "Caleb Kisangau — 08:00 AM (IN)" },
  { title: "Booking & Appointment Systems", desc: "Seamless scheduling for clinics, salons, and consultants.", icon: CalendarClock, category: "System Development", accent: "#8b5cf6", stat1: "Appointments Today", val1: "14 Booked", stat2: "Next Available", val2: "09:00 AM", detail: "Slot 11 AM — OPEN" },
  { title: "Staff Management Systems", desc: "Track performance, leave, and employee records in one place.", icon: Users, category: "System Development", accent: "#0ea5e9", stat1: "On Payroll", val1: "84 Staff", stat2: "Avg Work Hrs", val2: "8.2 hrs/day", detail: "Leave Request — Pending Review" },
  { title: "Inventory Systems", desc: "Real-time stock tracking and automated reordering alerts.", icon: Package, category: "System Development", accent: "#f59e0b", stat1: "Total SKUs", val1: "1,240 Items", stat2: "Low Stock Alert", val2: "3 Products", detail: "Ethernet Cables — 2 Units (Reorder!)" },
  { title: "Procurement Systems", desc: "Streamline purchasing, vendor management, and approvals.", icon: ShoppingCart, category: "System Development", accent: "#06b6d4", stat1: "PO-4029 Approved", val1: "KES 145K", stat2: "Vendor Network", val2: "14 Active", detail: "PO-4030 Pending — KES 82K" },
  { title: "Document Management Systems", desc: "Secure digital archiving and fast document retrieval.", icon: FileText, category: "System Development", accent: "#6366f1", stat1: "Encrypted Files", val1: "AES-256", stat2: "Docs Archived", val2: "4,820 Files", detail: "Financial_Report_2026.pdf — SECURED" },
  { title: "Finance & Accounting Systems", desc: "Comprehensive ledgers, invoicing, and financial reporting.", icon: Wallet, category: "System Development", accent: "#22c55e", stat1: "Total Revenue", val1: "KES 485,200", stat2: "Profit Margin", val2: "75.2%", detail: "Expenses: KES 120,400" },
  { title: "Sacco Systems", desc: "Manage member savings, loans, and dividends efficiently.", icon: PiggyBank, category: "System Development", accent: "#a855f7", stat1: "Total Savings", val1: "KES 8.4M", stat2: "Dividend Yield", val2: "8.5% p.a.", detail: "Active Loans: KES 4.2M" },
  { title: "Hospital & Clinic Systems", desc: "Patient records, billing, and pharmacy management.", icon: Stethoscope, category: "System Development", accent: "#ef4444", stat1: "Active Queue", val1: "4 Patients", stat2: "Ward Occupancy", val2: "64%", detail: "Dr. Mumo — In Consult" },
  { title: "Church Management Systems", desc: "Member tracking, tithe management, and event planning.", icon: Church, category: "System Development", accent: "#3b82f6", stat1: "Total Members", val1: "1,450", stat2: "Weekly Tithes", val2: "KES 84,200", detail: "Project: Youth Ministry Active" },
  { title: "Payroll Systems", desc: "Automated salary processing and tax compliance.", icon: Banknote, category: "System Development", accent: "#14b8a6", stat1: "June 2026", val1: "PROCESSED", stat2: "Compliance", val2: "KRA/NSSF/NHIF", detail: "All 84 employees paid on time" },
  { title: "POS Systems", desc: "Fast retail checkout with integrated inventory syncing.", icon: Calculator, category: "System Development", accent: "#f97316", stat1: "M-PESA", val1: "SUCCESSFUL", stat2: "Today's Sales", val2: "KES 48,200", detail: "1x License Pack — KES 4,500" },
  { title: "E-learning Systems", desc: "Deliver courses, assignments, and grades online.", icon: GraduationCap, category: "System Development", accent: "#0284c7", stat1: "Students Online", val1: "384 Active", stat2: "Completion Rate", val2: "88%", detail: "12 Courses Active" },
  { title: "Examination & Result Systems", desc: "Secure grading and automated report card generation.", icon: FileCheck, category: "System Development", accent: "#7c3aed", stat1: "Class Average", val1: "78.4% (B+)", stat2: "A Grades", val2: "42 Students", detail: "Transcripts: SECURED" },
  { title: "Hostel Management Systems", desc: "Room allocation, fee tracking, and student records.", icon: Building2, category: "System Development", accent: "#2563eb", stat1: "Occupancy", val1: "96% Allocated", stat2: "Available Beds", val2: "14 Beds", detail: "Room matrix updated" },
  { title: "Event Management Systems", desc: "Ticketing, registration, and attendee tracking.", icon: Tent, category: "System Development", accent: "#9333ea", stat1: "Tickets Sold", val1: "420 / 500", stat2: "Checked In", val2: "310 Attendees", detail: "Live gate updates: ACTIVE" },
  { title: "CRM Systems", desc: "Build stronger customer relationships and track sales.", icon: Network, category: "System Development", accent: "#1d4ed8", stat1: "Hot Leads", val1: "+15 This Week", stat2: "Close Rate", val2: "24.3%", detail: "Pipeline value: KES 1.8M" },
  { title: "Asset Management Systems", desc: "Track depreciation, maintenance, and asset locations.", icon: Box, category: "System Development", accent: "#d97706", stat1: "Assets Tracked", val1: "84 Laptops", stat2: "Net Assets", val2: "KES 12.5M", detail: "Office Routers: 12 Units" },
  { title: "Loan & Cooperative Systems", desc: "Loan origination, amortization, and repayment tracking.", icon: Landmark, category: "System Development", accent: "#059669", stat1: "Disbursed", val1: "KES 850K", stat2: "Pending Reviews", val2: "8 Applications", detail: "Amortization Rate: 12% p.a." },
  { title: "Transport & Rental Systems", desc: "Fleet tracking, booking, and maintenance schedules.", icon: Car, category: "System Development", accent: "#0369a1", stat1: "Vehicles Active", val1: "8 On Road", stat2: "Fleet Uptime", val2: "99.8%", detail: "Maintenance: Scheduled" },
  { title: "Agriculture/Farm Systems", desc: "Yield tracking, weather integrations, and farm accounting.", icon: Tractor, category: "System Development", accent: "#16a34a", stat1: "Crop Harvest", val1: "4.2 Tons", stat2: "Soil Moisture", val2: "42% Normal", detail: "Sensors: 8 Connected" },
  // Website Development
  { title: "Company Websites", desc: "Professional corporate presence with tailored branding and SEO.", icon: Globe2, category: "Website Development", accent: "#3b82f6", stat1: "Page Speed", val1: "A Grade 98%", stat2: "Load Time", val2: "0.8 seconds", detail: "Domain: ONLINE & Secure" },
  { title: "E-commerce Websites", desc: "High-conversion online stores with secure payment gateways.", icon: Store, category: "Website Development", accent: "#6366f1", stat1: "Today's Sales", val1: "KES 45,200", stat2: "Conversion Rate", val2: "3.8%", detail: "Shopping Carts Active: 14" },
  { title: "Portfolio Websites", desc: "Showcase your creative work and professional achievements.", icon: Layout, category: "Website Development", accent: "#0ea5e9", stat1: "Impressions", val1: "1,400+ Views", stat2: "Enquiries", val2: "18 Contacts", detail: "Category: Web & AI" },
  { title: "Real Estate Websites", desc: "Property listings, virtual tours, and lead generation.", icon: Home, category: "Website Development", accent: "#10b981", stat1: "2BR Apartment, Juja", val1: "KES 4.5M", stat2: "Weekly Leads", val2: "42 Captured", detail: "Virtual tour: Available" },
  { title: "Hotel Booking Websites", desc: "Direct reservations and room availability management.", icon: Hotel, category: "Website Development", accent: "#14b8a6", stat1: "Occupied Rooms", val1: "18 (82%)", stat2: "Pending Check-ins", val2: "4 Bookings", detail: "Guest Portal: LIVE" },
  { title: "Mobile Responsive Websites", desc: "Flawless experiences across all devices and screen sizes.", icon: Smartphone, category: "Website Development", accent: "#8b5cf6", stat1: "Mobile Fit Rate", val1: "100%", stat2: "Devices Covered", val2: "Phone/Tablet/PC", detail: "Fully Responsive Design" },
  { title: "Website Security & Maintenance", desc: "Uptime monitoring, backups, and threat protection.", icon: ShieldCheck, category: "Website Development", accent: "#22c55e", stat1: "Threat Shield", val1: "ACTIVE", stat2: "SSL Encryption", val2: "256-bit VALID", detail: "Zero breaches detected" },
  // Branding
  { title: "Logo & Brand Design", desc: "Memorable visual identities that stand out in your market.", icon: PenTool, category: "Graphics & Branding", accent: "#a855f7", stat1: "Primary Color", val1: "#0284c7 Sky Blue", stat2: "Secondary", val2: "#4f46e5 Indigo", detail: "Font: Outfit Sans" },
  { title: "Motion Graphics", desc: "Engaging animated content for marketing and ads.", icon: MonitorPlay, category: "Graphics & Branding", accent: "#ec4899", stat1: "Output Rate", val1: "60 FPS", stat2: "Status", val2: "Render Complete", detail: "Export: MP4 / GIF / WebM" },
];

// ─── Gradient palettes per category ──────────────────────────────────────────
const categoryGradient: Record<string, string> = {
  "System Development":  "from-slate-950 via-blue-950 to-slate-900",
  "Website Development": "from-slate-950 via-indigo-950 to-slate-900",
  "Graphics & Branding": "from-slate-950 via-purple-950 to-slate-900",
};

// ─── Full-screen Slide ────────────────────────────────────────────────────────
function FullSlide({ slide, state }: { slide: typeof slides[0]; state: "entering" | "active" | "exiting" }) {
  const Icon = slide.icon;

  const transform =
    state === "entering" ? "translateX(100%)" :
    state === "exiting"  ? "translateX(-100%)" :
                           "translateX(0%)";

  const gradClass = categoryGradient[slide.category] ?? "from-slate-950 via-slate-900 to-slate-950";

  return (
    <div
      style={{
        transform,
        transition: "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
        position: "absolute",
        inset: 0,
        willChange: "transform",
      }}
      className={`w-full h-full bg-gradient-to-br ${gradClass} flex flex-col overflow-hidden`}
    >
      {/* Ambient glow behind icon */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: slide.accent }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: slide.accent }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── Header bar ── */}
      <div className="relative z-20 flex items-center justify-between px-8 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <Code2 className="text-white h-4 w-4" />
          </div>
          <div>
            <div className="text-white font-bold tracking-wider text-base leading-none">SoftSkySolution</div>
            <div className="text-blue-300/70 text-[10px] uppercase tracking-[0.2em]">Transforming Ideas Into Digital Solutions</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs">
            <Phone className="h-3 w-3 text-blue-400" /> 0112199055
          </div>
          <div className="flex items-center gap-1.5 text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs">
            <Mail className="h-3 w-3 text-blue-400" /> mumokisangau91@gmail.com
          </div>
        </div>
        <div className="text-[11px] text-white/30 font-mono hidden lg:block">www.softskysolution.co.ke</div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 py-8">

        {/* Left: icon + metadata */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/2">
          {/* Category badge */}
          <div className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-md border"
            style={{ background: `${slide.accent}22`, borderColor: `${slide.accent}55`, color: slide.accent }}>
            {slide.category}
          </div>

          {/* Icon */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-md"
            style={{ background: `${slide.accent}25` }}>
            <Icon className="w-14 h-14 md:w-20 md:h-20" style={{ color: slide.accent }} />
          </div>

          {/* Title + desc */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl mb-4">
              {slide.title}
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
              {slide.desc}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-2">
            <div className="px-6 py-3 rounded-full font-semibold text-sm text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
              Learn More →
            </div>
            <div className="px-6 py-3 rounded-full font-semibold text-sm text-white border backdrop-blur-md cursor-pointer transition-colors"
              style={{ background: `${slide.accent}33`, borderColor: `${slide.accent}66` }}>
              Get a Quote
            </div>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="md:w-1/2 w-full max-w-md">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Fake window bar */}
            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4">
                <div className="h-5 bg-white/5 rounded-md w-48 flex items-center px-3">
                  <span className="text-white/30 text-[10px] font-mono">{slide.title.toLowerCase().replace(/ /g, "-")}.softskysolution.co.ke</span>
                </div>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-6 flex flex-col gap-5">
              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{slide.stat1}</div>
                  <div className="text-xl font-bold text-white">{slide.val1}</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{slide.stat2}</div>
                  <div className="text-xl font-bold" style={{ color: slide.accent }}>{slide.val2}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-white/40 mb-1.5">
                  <span>System Performance</span>
                  <span style={{ color: slide.accent }}>98.4%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "98%", background: slide.accent }} />
                </div>
              </div>

              {/* Activity row */}
              <div className="rounded-xl border p-3 text-sm flex items-center gap-3"
                style={{ background: `${slide.accent}15`, borderColor: `${slide.accent}30` }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: slide.accent }} />
                <span className="text-white/80 font-medium">{slide.detail}</span>
              </div>

              {/* Skeleton rows */}
              <div className="flex flex-col gap-2">
                <div className="h-3 rounded bg-white/5 w-4/5" />
                <div className="h-3 rounded bg-white/5 w-3/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-20 px-8 py-4 flex items-center justify-between border-t border-white/5">
        <div className="text-white/30 text-xs">© {new Date().getFullYear()} SoftSkySolution — Founded by Caleb Mumo Kisangau</div>
        <div className="text-white/20 text-xs font-mono">www.softskysolution.co.ke</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function ShowcasePage() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "transitioning">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SLIDE_DURATION = 3500; // ms each slide is visible
  const TRANSITION_MS  = 1200; // must match CSS transition above

  function advance() {
    if (phase !== "idle") return;
    const n = (current + 1) % slides.length;
    setNext(n);
    setPhase("transitioning");
    // after CSS transition finishes, swap current → next
    timerRef.current = setTimeout(() => {
      setCurrent(n);
      setNext(null);
      setPhase("idle");
    }, TRANSITION_MS);
  }

  useEffect(() => {
    const id = setInterval(advance, SLIDE_DURATION);
    return () => { clearInterval(id); if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, phase]);

  return (
    <div className="fixed inset-0 bg-slate-950 overflow-hidden" style={{ fontFamily: "'Inter','Outfit',sans-serif" }}>
      {/* Current slide — exits to left when transitioning */}
      <FullSlide
        slide={slides[current]}
        state={phase === "transitioning" ? "exiting" : "active"}
      />

      {/* Next slide — enters from right */}
      {next !== null && (
        <FullSlide
          slide={slides[next]}
          state={phase === "transitioning" ? "active" : "entering"}
        />
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (phase !== "idle" || i === current) return;
              setNext(i);
              setPhase("transitioning");
              timerRef.current = setTimeout(() => { setCurrent(i); setNext(null); setPhase("idle"); }, TRANSITION_MS);
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 6,
              height: 6,
              background: i === current ? slides[current].accent : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-20 right-8 z-50 text-white/20 font-mono text-xs">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Progress bar at very top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-50 bg-white/5">
        <div
          key={current}
          className="h-full"
          style={{
            background: slides[current].accent,
            animation: `grow-bar ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grow-bar { from { width: 0% } to { width: 100% } }
      `}} />
    </div>
  );
}
