import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-glow transition-transform group-hover:scale-110">
            <Cloud className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            SoftSky<span className="text-primary">Solution</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 glass">
          <nav className="container mx-auto flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
