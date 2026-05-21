import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/why-us", label: "Why Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/training", label: "Training" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* 24/7 Availability and Immediate Feedback Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-white text-[11px] sm:text-xs py-2 px-4 md:px-6 font-medium tracking-wide shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-4 gap-y-1.5 w-full">
          <div className="flex items-center gap-2 justify-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>We are Available 24/7 & Everyday — Get Feedback Immediately!</span>
          </div>
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 justify-center md:pl-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=softskysolution@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors font-semibold flex items-center gap-1.5 underline decoration-white/30"
            >
              <Mail className="h-3.5 w-3.5" /> softskysolution@gmail.com
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="tel:+254112199055"
              className="hover:text-blue-200 transition-colors font-semibold flex items-center gap-1.5 underline decoration-white/30"
            >
              <Phone className="h-3.5 w-3.5" /> +254 112 199 055
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 py-1.5 w-full">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={logo}
            alt="SoftSkySolution LTD"
            className="transition-transform group-hover:scale-105"
            style={{
              height: "45px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
          <span className="font-display text-[10px] font-medium tracking-tight text-gray-500 hidden sm:inline">
            Digital Innovation Hub
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 mx-4">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-0 py-1 text-xs xl:text-sm font-medium transition-colors hover:text-blue-600 ${active ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-600" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link
            to="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold text-xs px-4 py-2 h-9 rounded-md flex items-center justify-center transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden p-1.5 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col p-3 gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === l.to ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm py-2.5 rounded-md flex items-center justify-center transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}