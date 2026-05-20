import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-6 py-1.5 max-w-7xl mx-auto">
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
          <span className="font-display text-xs font-medium tracking-tight text-gray-500">
            Digital Innovation Hub
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-between flex-1 max-w-2xl mx-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-0 py-1 text-sm font-medium transition-colors hover:text-blue-600 ${active ? "text-blue-600" : "text-gray-700"
                  }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-600" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 font-semibold text-xs px-4 py-1.5 h-auto">
            <Link to="/contact">Get a Quote</Link>
          </Button>
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
            <Button asChild className="mt-1 bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm py-2 h-auto">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}