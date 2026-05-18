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
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto flex min-h-24 items-center justify-between px-4 md:px-6 py-2">
        <Link to="/" className="flex items-center gap-4 group mr-auto">
          <div className="overflow-visible py-2 px-1 -my-2 flex items-center justify-center">
            <img
              src={logo}
              alt="SoftSkySolution LTD"
              className="transition-transform group-hover:scale-110"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain",
                maxWidth: "none",
                minWidth: "auto",
                background: "transparent",
                display: "block",
                margin: 0,
                padding: 0,
                border: "none",
                outline: "none",
                boxShadow: "none"
              }}
            />
          </div>
          <span className="font-display text-lg font-medium tracking-tight hidden sm:inline text-gray-600">
            Digital Innovation Hub
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 ${active ? "text-blue-600" : "text-gray-700"
                  }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-blue-600" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block ml-4">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 font-semibold text-base px-6 py-2 h-auto">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${pathname === l.to ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold text-base py-3 h-auto">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}