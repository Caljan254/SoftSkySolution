import React from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight, Code2, Cloud, Smartphone, Brain, Shield, Rocket,
  Sparkles, CheckCircle2, Globe2, Star, Quote, ChevronLeft, ChevronRight,
  Bot, CalendarDays, CalendarClock, Users as UsersIcon, Package, ShoppingCart,
  FileText, Wallet, PiggyBank, Stethoscope, Church, Banknote, Calculator,
  GraduationCap, FileCheck, Building2, Tent, Network, Box, Landmark, Car,
  Tractor, Globe, Briefcase, CloudCog, Database, Code2 as CodeIcon, Wrench,
  Store, Layout, Newspaper, Laptop, Home as HomeIcon, Hotel, AppWindow,
  Server, ShieldCheck, PenTool, Image as ImageIcon, MonitorPlay, Mail, Phone,
  Send, Headset
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
import flyerWeb from "@/assets/flyer-web.jpg";
import flyerMobile from "@/assets/flyer-mobile.jpg";
import flyerAi from "@/assets/flyer-ai.jpg";
import flyerCloud from "@/assets/flyer-cloud.jpg";
import flyerSecurity from "@/assets/flyer-security.jpg";
import flyerEcommerce from "@/assets/flyer-ecommerce.jpg";
import flyerLms from "@/assets/flyer-lms.jpg";
import flyerFinance from "@/assets/flyer-finance.jpg";
import flyerDesign from "@/assets/flyer-design.jpg";
import flyerIct from "@/assets/flyer-ict.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoftSkySolution | Modern Software, Web, AI & Cloud Solutions" },
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

const imageSlides = [
  { 
      category: "⚡ SYSTEM DEVELOPMENT", 
      title: "AI & Smart Automation", 
      desc: "AI Chatbots, Attendance, Booking, Appointment & Staff Management, streamlining operations.",
      tags: ["AI Chatbot Systems", "Attendance Mgmt", "Booking Systems", "Staff Mgmt"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format",
      welcome: "✨ Welcome to Smarter Business Operations"
  },
  { 
      category: "📦 INVENTORY & PROCUREMENT", 
      title: "Inventory & Procurement Systems", 
      desc: "Real-time stock tracking, procurement lifecycles, document management & reporting.",
      tags: ["Inventory Mgmt", "Procurement", "Doc Mgmt", "Feedback Reports"],
      bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format",
      welcome: "📊 Gain Total Control Over Your Supply Chain"
  },
  { 
      category: "💰 FINANCE & ACCOUNTING", 
      title: "Finance, SACCO & Loan Systems", 
      desc: "Complete accounting, Sacco management, loan tracking, cooperative & rental systems.",
      tags: ["Finance & Accounting", "Sacco Mgmt", "Loan Mgmt", "Cooperative Mgmt"],
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format",
      welcome: "💡 Smart Finance, Zero Errors – Let's Grow Together"
  },
  { 
      category: "🏥 HEALTH & HOSPITAL", 
      title: "Hospital & Clinic Solutions", 
      desc: "Patient records, hospital management, appointment scheduling & staff coordination.",
      tags: ["Hospital Systems", "Clinic Mgmt", "Appointment Scheduling", "E-Health"],
      bg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format",
      welcome: "🩺 Elevate Patient Care with Digital Excellence"
  },
  { 
      category: "⛪ CHURCH & FAITH", 
      title: "Church Management Systems", 
      desc: "Member registration, event planning, donation tracking and online portals for churches.",
      tags: ["Church Mgmt", "Member Registration", "Event Mgmt", "Online Voting"],
      bg: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&auto=format",
      welcome: "🙏 Empowering Ministries with Modern Tools"
  },
  { 
      category: "🏫 EDUCATION & E-LEARNING", 
      title: "School & E-Learning Portals", 
      desc: "Comprehensive school, student portal, exam, result, hostel and e-learning systems.",
      tags: ["E-learning", "Exam Mgmt", "Result Mgmt", "Hostel Mgmt", "School Mgmt"],
      bg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format",
      welcome: "📚 Shape Future Leaders – Digitize Your Institution"
  },
  { 
      category: "🏨 HOSPITALITY & HOTEL", 
      title: "Hotel & Rental Management", 
      desc: "Booking engines, hotel PMS, rental property systems, transport management.",
      tags: ["Hotel Mgmt", "Rental Mgmt", "Transport Mgmt", "Booking Reservation"],
      bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format",
      welcome: "🏆 Unleash 5-Star Guest Experiences"
  },
  { 
      category: "👥 CRM & BUSINESS AUTO", 
      title: "CRM & Business Automation", 
      desc: "Customer relationship, asset management, multi-user dashboards, cloud systems.",
      tags: ["CRM Systems", "Asset Mgmt", "Business Automation", "Cloud Systems"],
      bg: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&auto=format",
      welcome: "🤝 Turn Leads into Loyalty – Automate & Conquer"
  },
  { 
      category: "👨‍💼 PAYROLL & HR", 
      title: "Payroll & Staff Systems", 
      desc: "Payroll management, staff performance, leave tracking & HR dashboards.",
      tags: ["Payroll Systems", "Staff Mgmt", "HR automation", "Multi-user Dashboard"],
      bg: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&auto=format",
      welcome: "⭐ Empower Your Workforce, Simplify Payroll"
  },
  { 
      category: "🌾 AGRICULTURE & COUNTY", 
      title: "Farm & County Portals", 
      desc: "Agriculture management, farm analytics, county service portals & data collection.",
      tags: ["Agriculture/Farm Mgmt", "County Portals", "Data Collection", "IoT-ready"],
      bg: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1600&auto=format",
      welcome: "🌱 Grow Smarter with Agri-Tech & Public Portals"
  },
  { 
      category: "📱 WEBSITE DEVELOPMENT", 
      title: "Modern Business & E-commerce Websites", 
      desc: "Company sites, e-commerce, school websites, real estate, portfolio & custom web apps.",
      tags: ["Company Websites", "E-commerce", "School Websites", "Real Estate", "Landing Pages"],
      bg: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&auto=format",
      welcome: "🌍 Your Digital Presence, Perfected"
  },
  { 
      category: "🛍️ ONLINE STORE & CMS", 
      title: "Online Store & Custom Web Apps", 
      desc: "Mobile-friendly stores, website redesign, hosting, security & maintenance.",
      tags: ["Online Store Dev", "Web Redesign", "Hosting", "Maintenance", "Security"],
      bg: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format",
      welcome: "🛒 Sell More, Worry Less – E-commerce Unleashed"
  },
  { 
      category: "🎨 GRAPHICS & BRANDING", 
      title: "Creative Digital Branding", 
      desc: "Logo, poster, flyer, social media designs, motion graphics & animated ads.",
      tags: ["Logo Design", "Flyer/Poster", "Motion Graphics", "Social Media Posters"],
      bg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&auto=format",
      welcome: "🎯 Make Heads Turn – Creative That Converts"
  },
  { 
      category: "🧾 POS & RETAIL", 
      title: "Point of Sale Systems", 
      desc: "Retail POS, inventory sync, sales analytics & receipt management.",
      tags: ["POS Systems", "Sales Dashboard", "Retail Inventory", "Multi-branch"],
      bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&auto=format",
      welcome: "💸 Accelerate Sales, Streamline Checkout"
  },
  { 
      category: "🗳️ VOTING & CONFERENCE", 
      title: "Online Voting & Event Systems", 
      desc: "Secure online voting, conference scheduling, event registration & management.",
      tags: ["Online Voting", "Event Mgmt", "Conference Tools", "Registration Systems"],
      bg: "https://images.unsplash.com/photo-1523580495863-d6dcdd28181f?w=1600&auto=format",
      welcome: "🗳️ Democracy Redefined – Secure & Transparent"
  },
  { 
      category: "📊 DATA & API INTEGRATION", 
      title: "Database & API Services", 
      desc: "Database design, API integrations, system maintenance & upgrades.",
      tags: ["Database Design", "API Integration", "System Maintenance", "Upgrades"],
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format",
      welcome: "🔗 Seamless Integration, Infinite Possibilities"
  },
  { 
      category: "🏢 REAL ESTATE & PROPERTY", 
      title: "Real Estate & Rental Systems", 
      desc: "Property listings, tenant management, rental tracking and lease agreements.",
      tags: ["Real Estate Websites", "Rental Mgmt", "Lease Tracking", "Tenant Portal"],
      bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format",
      welcome: "🏡 Unlock Real Estate Potential – Digital Solutions"
  },
  { 
      category: "📈 BUSINESS DASHBOARD", 
      title: "Multi-User Dashboards & Analytics", 
      desc: "Role-based dashboards, KPI tracking, business intelligence tools.",
      tags: ["Multi-user Dashboard", "Analytics", "Cloud-based", "Reporting Systems"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format",
      welcome: "📊 Data-Driven Decisions – Real-Time Insights"
  },
  { 
      category: "✝️ CHURCH & SACCO WEBSITES", 
      title: "Niche Institutional Websites", 
      desc: "Sacco websites, church portals, NGO platforms, event and ministry sites.",
      tags: ["Sacco Websites", "Church Websites", "NGO Websites", "Personal Branding"],
      bg: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&auto=format",
      welcome: "🌟 Digital Homes for Faith & Finance"
  },
  { 
      category: "🔧 SYSTEM MAINTENANCE", 
      title: "Maintenance, Security & Upgrades", 
      desc: "24/7 monitoring, system upgrades, security patches & performance tuning.",
      tags: ["System Maintenance", "Security", "Performance", "Cloud Deployment"],
      bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format",
      welcome: "🛡️ Always Secure, Always Reliable"
  }
];

const digitalFlyers = [
  { title: "AI Chatbot Systems", desc: "Automate customer support with intelligent conversational agents.", icon: Bot, category: "System Development" },
  { title: "Attendance Systems", desc: "Biometric and digital check-ins for schools and corporate offices.", icon: CalendarDays, category: "System Development" },
  { title: "Booking & Appointment Systems", desc: "Seamless scheduling for clinics, salons, and consultants.", icon: CalendarClock, category: "System Development" },
  { title: "Staff Management Systems", desc: "Track performance, leave, and employee records in one place.", icon: UsersIcon, category: "System Development" },
  { title: "Inventory Systems", desc: "Real-time stock tracking and automated reordering alerts.", icon: Package, category: "System Development" },
  { title: "Procurement Systems", desc: "Streamline purchasing, vendor management, and approvals.", icon: ShoppingCart, category: "System Development" },
  { title: "Document Management Systems", desc: "Secure digital archiving and fast document retrieval.", icon: FileText, category: "System Development" },
  { title: "Finance & Accounting Systems", desc: "Comprehensive ledgers, invoicing, and financial reporting.", icon: Wallet, category: "System Development" },
  { title: "Sacco Systems", desc: "Manage member savings, loans, and dividends efficiently.", icon: PiggyBank, category: "System Development" },
  { title: "Hospital & Clinic Systems", desc: "Patient records, billing, and pharmacy management.", icon: Stethoscope, category: "System Development" },
  { title: "Church Management Systems", desc: "Member tracking, tithe management, and event planning.", icon: Church, category: "System Development" },
  { title: "Payroll Systems", desc: "Automated salary processing and tax compliance.", icon: Banknote, category: "System Development" },
  { title: "POS Systems", desc: "Fast retail checkout with integrated inventory syncing.", icon: Calculator, category: "System Development" },
  { title: "E-learning Systems", desc: "Deliver courses, assignments, and grades online.", icon: GraduationCap, category: "System Development" },
  { title: "Examination & Result Systems", desc: "Secure grading and automated report card generation.", icon: FileCheck, category: "System Development" },
  { title: "Hostel Management Systems", desc: "Room allocation, fee tracking, and student records.", icon: Building2, category: "System Development" },
  { title: "Event Management Systems", desc: "Ticketing, registration, and attendee tracking.", icon: Tent, category: "System Development" },
  { title: "CRM Systems", desc: "Build stronger customer relationships and track sales.", icon: Network, category: "System Development" },
  { title: "Asset Management Systems", desc: "Track depreciation, maintenance, and asset locations.", icon: Box, category: "System Development" },
  { title: "Loan & Cooperative Systems", desc: "Loan origination, amortization, and repayment tracking.", icon: Landmark, category: "System Development" },
  { title: "Transport & Rental Systems", desc: "Fleet tracking, booking, and maintenance schedules.", icon: Car, category: "System Development" },
  { title: "Agriculture/Farm Systems", desc: "Yield tracking, weather integrations, and farm accounting.", icon: Tractor, category: "System Development" },
  { title: "Company Websites", desc: "Professional corporate presence with tailored branding.", icon: Globe2, category: "Website Development" },
  { title: "E-commerce Websites", desc: "High-conversion online stores with secure payments.", icon: Store, category: "Website Development" },
  { title: "Portfolio Websites", desc: "Showcase your creative work and professional achievements.", icon: Layout, category: "Website Development" },
  { title: "Real Estate Websites", desc: "Property listings, virtual tours, and lead generation.", icon: HomeIcon, category: "Website Development" },
  { title: "Hotel Booking Websites", desc: "Direct reservations and room availability management.", icon: Hotel, category: "Website Development" },
  { title: "Mobile Responsive Websites", desc: "Flawless experiences across all devices and screen sizes.", icon: Smartphone, category: "Website Development" },
  { title: "Website Security & Maintenance", desc: "Uptime monitoring, backups, and threat protection.", icon: ShieldCheck, category: "Website Development" },
  { title: "Logo & Brand Design", desc: "Memorable visual identities that stand out.", icon: PenTool, category: "Graphics & Branding" },
  { title: "Motion Graphics", desc: "Engaging animated content for marketing and ads.", icon: MonitorPlay, category: "Graphics & Branding" },
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

// ─── Reduced-height hero slider ────────────────────────────────────────────────
function ContinuousSlider() {
  const navigate = useNavigate();
  const all = imageSlides;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalSlides = all.length;
  const SLIDE_DURATION = 6000;

  // Touch & Swipe states
  const touchStartX = useRef(0);
  const mouseDownX = useRef(0);

  // Auto-sliding effect
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused, totalSlides]);

  function handleConnectClick(serviceTitle: string) {
    navigate({
      to: "/contact",
      search: { service: serviceTitle }
    });
  }

  function handleReachUsClick(serviceTitle: string) {
    navigate({
      to: "/contact",
      search: { service: serviceTitle }
    });
  }

  // Swipe / Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else {
        setCurrent((prev) => (prev + 1) % totalSlides);
      }
    }
    setPaused(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownX.current = e.clientX;
    setPaused(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseDownX.current === 0) return;
    const diff = e.clientX - mouseDownX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else {
        setCurrent((prev) => (prev + 1) % totalSlides);
      }
    }
    mouseDownX.current = 0;
    setPaused(false);
  };

  return (
    <section className="relative w-full overflow-hidden border-b border-white/5 h-[68vh] sm:h-[65vh] lg:h-[82vh] bg-[#000]">
      <style dangerouslySetInnerHTML={{
        __html: `
        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            will-change: transform;
            height: 100%;
        }
        .carousel-slide {
            flex: 0 0 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            display: flex;
            align-items: flex-end;
        }
        .carousel-slide::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.2) 100%);
            pointer-events: none;
            z-index: 1;
        }
        .slide-content {
            position: relative;
            z-index: 2;
            padding: 1.25rem;
            color: white;
            max-width: 800px;
            width: 100%;
            text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        @media (min-width: 768px) {
            .slide-content {
                padding: 3rem;
            }
        }
        @keyframes grow-bar  { from { width: 0%; } to { width: 100%; } }
      `}} />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div key={current + (paused ? "-paused" : "-active")} className="h-full bg-blue-500"
          style={{ animation: paused ? "none" : `grow-bar ${SLIDE_DURATION}ms linear forwards` }} />
      </div>

      <div 
        className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {all.map((slide, idx) => (
            <div 
              key={idx}
              className="carousel-slide"
              style={{ 
                backgroundImage: `url('${slide.bg}')`,
                backgroundPosition: 'center 30%'
              }}
            >
              <div className="slide-content mb-10 sm:mb-12 md:pl-16">
                {/* Welcome Text & Category Badge Grouped */}
                <div className="flex flex-col items-start gap-2 mb-3 md:mb-4">
                  <div className="inline-block px-3 py-0.5 md:px-3.5 md:py-1 rounded-full bg-black/50 border border-white/10 text-yellow-300 text-[10px] md:text-sm font-semibold tracking-wider backdrop-blur-sm">
                    {slide.welcome}
                  </div>
                  <div className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-white/15 text-white text-[9px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-md border border-white/5">
                    {slide.category}
                  </div>
                </div>
                {/* Slide Title */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl mb-2 md:mb-3 font-display">
                  {slide.title}
                </h2>
                {/* Description */}
                <p className="text-white/90 text-xs sm:text-sm md:text-lg leading-relaxed mb-3 md:mb-5 max-w-xl line-clamp-2 sm:line-clamp-none">
                  {slide.desc}
                </p>
                {/* Tags */}
                <div className="hidden sm:flex flex-wrap gap-2 mb-6">
                  {slide.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-white/10 border border-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* CTA Buttons */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 md:gap-3 w-full max-w-md sm:max-w-none">
                  <button 
                    onClick={() => handleConnectClick(slide.title)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#2c5a6e] hover:bg-[#1e3f4e] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-[11px] sm:text-base transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-auto"
                  >
                    <Send className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    <span className="hidden sm:inline">Connect with Us</span>
                    <span className="inline sm:hidden">Connect</span>
                  </button>
                  <button 
                    onClick={() => handleReachUsClick(slide.title)}
                    className="inline-flex items-center justify-center gap-1.5 bg-transparent border border-white/90 hover:bg-white/20 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-[11px] sm:text-base transition-all duration-300 backdrop-blur-sm cursor-pointer w-full sm:w-auto"
                  >
                    <Headset className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                    <span className="hidden sm:inline">Reach Us / Get Quote</span>
                    <span className="inline sm:hidden">Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-50 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
        {all.map((_, i) => (
          <button key={i}
            onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 2000); }}
            className="rounded-full transition-all duration-300 h-2.5 cursor-pointer"
            style={{ width: i === current ? 26 : 10, background: i === current ? "#2c5a6e" : "rgba(255,255,255,0.35)" }} />
        ))}
      </div>

    </section>
  );
}

function renderMockupContent(title: string, Icon: any) {
  const defaultLayout = (
    <div className="flex-1 p-4 flex flex-col gap-3">
      <div className="w-1/3 h-4 bg-white/10 rounded-md animate-pulse" />
      <div className="w-full h-20 bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
        <Icon className="h-8 w-8 text-blue-400/50" />
      </div>
      <div className="w-2/3 h-3 bg-white/5 rounded-md mt-auto" />
      <div className="w-1/2 h-3 bg-white/5 rounded-md" />
    </div>
  );

  switch (title) {
    case "AI Chatbot Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-[11px] font-sans">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">AI Live Console</div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="bg-white/5 p-2 rounded-lg text-white/70 self-start max-w-[85%] border border-white/5">
              Need to book a service?
            </div>
            <div className="bg-blue-600/20 p-2 rounded-lg text-blue-200 self-end max-w-[85%] border border-blue-500/25 font-medium">
              Sure! Initiating portal...
            </div>
          </div>
          <div className="text-[9px] text-blue-400/60 animate-pulse mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" /> AI Agent is typing...
          </div>
        </div>
      );
    case "Attendance Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-emerald-300/60 uppercase font-semibold tracking-wider">Biometric Log</div>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded border border-white/5">
              <span className="text-white/80">Caleb Kisangau</span>
              <span className="text-emerald-400 font-medium text-[10px]">08:00 AM (IN)</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-1.5 rounded border border-white/5">
              <span className="text-white/80">Jane Mumo</span>
              <span className="text-emerald-400 font-medium text-[10px]">08:14 AM (IN)</span>
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-1.5 rounded text-center text-[10px]">
            Today's Attendance: 98% (Optimal)
          </div>
        </div>
      );
    case "Booking & Appointment Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-[11px]">
          <div className="text-[10px] text-purple-300/60 uppercase font-semibold tracking-wider">Scheduler</div>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="text-white/50 text-[10px]">Next Slots Available:</div>
            <div className="grid grid-cols-3 gap-1">
              <span className="bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-center rounded py-0.5">09 AM</span>
              <span className="bg-blue-500/25 border border-blue-500/30 text-blue-300 text-center rounded py-0.5">11 AM</span>
              <span className="bg-white/5 text-white/30 text-center rounded py-0.5 line-through">02 PM</span>
            </div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 text-purple-300 p-1.5 rounded text-center text-[10px] mt-auto">
            Booked: 14 Appointments Today
          </div>
        </div>
      );
    case "Staff Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Staff Metrics</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between font-bold text-white">
              <span>84 On Payroll</span>
              <span className="text-blue-400">12 Active</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[85%]" />
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Average Work Hours: 8.2 hrs/day</div>
        </div>
      );
    case "Inventory Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-yellow-300/60 uppercase font-semibold tracking-wider">Stock Ledger</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between bg-white/5 p-1 rounded text-[11px] border border-white/5">
              <span className="text-white/80">Laptops (Core i7)</span>
              <span className="text-white font-bold">42 Unit(s)</span>
            </div>
            <div className="flex justify-between bg-red-500/10 p-1 rounded text-[11px] border border-red-500/20">
              <span className="text-red-300">Ethernet Cables</span>
              <span className="text-red-400 font-bold">2 Unit(s) (Low!)</span>
            </div>
          </div>
          <div className="text-[10px] text-yellow-300/80 bg-yellow-500/10 border border-yellow-500/20 p-1 rounded text-center mt-auto">
            Reorder Level Reached
          </div>
        </div>
      );
    case "Procurement Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Procure Flow</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px] text-white/70">
              <span>PO-4029 Approved</span>
              <span className="text-emerald-400 font-bold">KES 145K</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/50">
              <span>PO-4030 Pending</span>
              <span className="text-yellow-400">KES 82K</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Vendor Network: 14 Active</div>
        </div>
      );
    case "Document Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-[11px]">
          <div className="text-[10px] text-sky-300/60 uppercase font-semibold tracking-wider">Digital Vault</div>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded border border-white/5">
              <Icon className="h-4 w-4 text-sky-400" />
              <span className="text-white/80 truncate">Financial_Report_2026.pdf</span>
            </div>
          </div>
          <div className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-1 rounded text-center mt-auto font-mono">
            Encryption: AES-256 SECURED
          </div>
        </div>
      );
    case "Finance & Accounting Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-green-300/60 uppercase font-semibold tracking-wider">Accounting Ledger</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Total Revenue:</span>
              <span className="text-emerald-400 font-bold">KES 485,200</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Total Expenses:</span>
              <span className="text-red-400 font-bold">KES 120,400</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Profit Margin: 75.2%</div>
        </div>
      );
    case "Sacco Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-indigo-300/60 uppercase font-semibold tracking-wider">Cooperative Portal</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Total Savings:</span>
              <span className="text-white font-bold">KES 8.4M</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Active Loans:</span>
              <span className="text-indigo-400 font-bold">KES 4.2M</span>
            </div>
          </div>
          <div className="text-[9px] text-indigo-300/80 bg-indigo-500/10 border border-indigo-500/20 p-1 rounded text-center mt-auto">
            Dividend Yield: 8.5% p.a.
          </div>
        </div>
      );
    case "Hospital & Clinic Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-rose-300/60 uppercase font-semibold tracking-wider">Patient Dashboard</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Active Queue:</span>
              <span className="text-rose-400 font-bold">4 Patients</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/60">
              <span>Dr. Mumo:</span>
              <span className="text-emerald-400">In Consult</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Ward Occupancy: 64%</div>
        </div>
      );
    case "Church Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Congregation Portal</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Total Members:</span>
              <span className="text-white font-bold">1,450</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Weekly Tithes:</span>
              <span className="text-emerald-400 font-bold">KES 84,200</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Project: Youth Ministry Active</div>
        </div>
      );
    case "Payroll Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-green-300/60 uppercase font-semibold tracking-wider">Payroll Processor</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Month: June 2026</span>
              <span className="text-emerald-400 font-bold">PROCESSED</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[100%]" />
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">KRA/NSSF/NHIF Compliant</div>
        </div>
      );
    case "POS Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Retail POS Console</div>
          <div className="space-y-2 mt-2">
            <div className="bg-white/5 p-1.5 rounded border border-white/5 text-[11px]">
              <div className="flex justify-between text-white/80">
                <span>1x License Pack</span>
                <span>KES 4,500</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-500/30 text-blue-300 p-1.5 rounded text-center text-xs font-bold mt-auto">
            Payment: M-PESA SUCCESSFUL
          </div>
        </div>
      );
    case "E-learning Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Edusly Portal</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Online Courses:</span>
              <span className="text-white font-bold">12 Active</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Students Online:</span>
              <span className="text-blue-400 font-bold">384</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Course Completion Rate: 88%</div>
        </div>
      );
    case "Examination & Result Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-indigo-300/60 uppercase font-semibold tracking-wider">Grading Console</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Class Average:</span>
              <span className="text-indigo-400 font-bold">78.4% (B+)</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">A Grades:</span>
              <span className="text-white font-bold">42 Student(s)</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Exam Transcripts: SECURE</div>
        </div>
      );
    case "Hostel Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Room Matrix</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px]">
              <span>Hostel Occupancy:</span>
              <span className="text-white font-bold">96% Allocated</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[96%]" />
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Available beds: 14</div>
        </div>
      );
    case "Event Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-purple-300/60 uppercase font-semibold tracking-wider">Gate Access</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Tickets Sold:</span>
              <span className="text-white font-bold">420 / 500</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Checked In:</span>
              <span className="text-purple-400 font-bold">310 Attendees</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Live updates: ACTIVE</div>
        </div>
      );
    case "CRM Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Sales Pipeline</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px]">
              <span>New Hot Leads:</span>
              <span className="text-blue-400 font-bold">+15 This Week</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span>Close Rate:</span>
              <span className="text-emerald-400 font-bold">24.3%</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Total pipeline value: KES 1.8M</div>
        </div>
      );
    case "Asset Management Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-amber-300/60 uppercase font-semibold tracking-wider">Asset Register</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Laptops Tracked:</span>
              <span>84 Unit(s)</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Office Routers:</span>
              <span>12 Unit(s)</span>
            </div>
          </div>
          <div className="text-[10px] text-amber-400 text-center mt-auto">Total Net Assets: KES 12.5M</div>
        </div>
      );
    case "Loan & Cooperative Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-emerald-300/60 uppercase font-semibold tracking-wider">Loan Origination</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Pending Reviews:</span>
              <span className="text-yellow-400 font-bold">8 Applications</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/60">
              <span>Amortization Rate:</span>
              <span className="text-white">12% p.a.</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Total disbursed: KES 850k</div>
        </div>
      );
    case "Transport & Rental Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Fleet Hub</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Vehicles Active:</span>
              <span className="text-emerald-400 font-bold">8 Out / 3 Idle</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Uptime:</span>
              <span className="text-white font-mono">99.8%</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Maintenance: Scheduled</div>
        </div>
      );
    case "Agriculture/Farm Systems":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-emerald-300/60 uppercase font-semibold tracking-wider">Agro Ledger</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Crop Harvest:</span>
              <span className="text-emerald-400 font-bold">4.2 Ton(s)</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Soil Moisture:</span>
              <span className="text-white font-mono">42% (Normal)</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Sensor Status: 8 Connected</div>
        </div>
      );
    case "Company Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Server Status</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Domain Live:</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/60">
              <span>Page Speed:</span>
              <span className="text-blue-300 font-bold">A Grade (98%)</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Load Time: 0.8 seconds</div>
        </div>
      );
    case "E-commerce Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-indigo-300/60 uppercase font-semibold tracking-wider">E-Shop Dashboard</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Today's Sales:</span>
              <span className="text-emerald-400 font-bold">KES 45,200</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-white/70">Conversion Rate:</span>
              <span className="text-white font-bold">3.8%</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Shopping Carts Active: 14</div>
        </div>
      );
    case "Portfolio Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Portfolio Traffic</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span>Impressions:</span>
              <span className="text-white font-bold">1,400+ Views</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span>Client Enquiries:</span>
              <span className="text-blue-400 font-bold">18 Contacts</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Showcase Category: Web & AI</div>
        </div>
      );
    case "Real Estate Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Property Portal</div>
          <div className="space-y-1.5 mt-2">
            <div className="bg-white/5 p-1 rounded text-[11px] border border-white/5">
              <span className="text-white font-semibold">2-Bedroom Apartment, Juja</span>
              <div className="text-emerald-400 font-bold">KES 4.5M</div>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Leads Captured: 42 this week</div>
        </div>
      );
    case "Hotel Booking Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-teal-300/60 uppercase font-semibold tracking-wider">Front Desk</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex justify-between text-[11px]">
              <span>Occupied Rooms:</span>
              <span className="text-white font-bold">18 Rooms (82%)</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span>Pending Check-ins:</span>
              <span className="text-teal-400">4 Bookings</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Guest Portal Status: Live</div>
        </div>
      );
    case "Mobile Responsive Websites":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-[11px]">
          <div className="text-[10px] text-blue-300/60 uppercase font-semibold tracking-wider">Viewport Engine</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[10px] text-white/80">
              <span>Mobile Fit Rate:</span>
              <span className="text-emerald-400 font-bold">100% Responsive</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[100%]" />
            </div>
          </div>
          <div className="text-[9px] text-white/40 text-center mt-auto">Device Profiles: Phone/Tablet/Desktop</div>
        </div>
      );
    case "Website Security & Maintenance":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-emerald-300/60 uppercase font-semibold tracking-wider">Firewall Status</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px] text-white/80">
              <span>Threat Shield:</span>
              <span className="text-emerald-400 font-bold">ACTIVE</span>
            </div>
            <div className="flex justify-between text-[11px] text-white/60">
              <span>SSL Encryption:</span>
              <span className="text-white">VALID (256-bit)</span>
            </div>
          </div>
          <div className="text-[9px] text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 p-1 rounded text-center mt-auto font-mono">
            Zero Security Breaches Detected
          </div>
        </div>
      );
    case "Logo & Brand Design":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-indigo-300/60 uppercase font-semibold tracking-wider">Brand Tokens</div>
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#0284c7] border border-white/20" />
              <span className="text-[10px] font-mono text-white/70">#0284c7 (Sky Blue)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#4f46e5] border border-white/20" />
              <span className="text-[10px] font-mono text-white/70">#4f46e5 (Indigo)</span>
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Primary Font: Outfit Sans</div>
        </div>
      );
    case "Motion Graphics":
      return (
        <div className="flex-1 p-3 flex flex-col justify-between text-xs">
          <div className="text-[10px] text-purple-300/60 uppercase font-semibold tracking-wider">Render Pipeline</div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-[11px]">
              <span>Output Rate:</span>
              <span className="text-purple-400 font-bold">60 FPS</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full w-[100%]" />
            </div>
          </div>
          <div className="text-[10px] text-white/40 text-center mt-auto">Status: Finished Render</div>
        </div>
      );
    default:
      return defaultLayout;
  }
}

function Home() {
  return (
    <>
      {/* SLIDING IMAGES AT THE TOP - REDUCED HEIGHT */}
      <ContinuousSlider />

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

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              I build <span className="text-gradient-primary">bold software</span> for ambitious teams.
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
                  <Link to="/about">Learn More About Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
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