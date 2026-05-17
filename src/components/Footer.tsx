import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { Icon: Facebook, href: "https://facebook.com/softskysolution", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com/softskysolution", label: "Instagram" },
  { Icon: Linkedin, href: "https://linkedin.com/company/softskysolution", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/softskysolution", label: "Twitter / X" },
  { Icon: Youtube, href: "https://youtube.com/@softskysolution", label: "YouTube" },
  { Icon: Music2, href: "https://tiktok.com/@softskysolution", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 mt-24">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="SoftSkySolution LTD" className="h-12 w-12 rounded-lg object-cover" />
              <span className="font-display text-xl font-bold">
                SoftSky<span className="text-primary">Solution</span> LTD
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              SoftSkySolution LTD is a Kenyan-rooted technology company engineering modern web platforms, mobile apps, AI solutions, cloud infrastructure and enterprise systems for institutions and businesses across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
                { to: "/team", label: "Our Team" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:softskysolution@gmail.com" className="hover:text-primary">softskysolution@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:supportsoftskysolution@gmail.com" className="hover:text-primary break-all">supportsoftskysolution@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+254112199055" className="hover:text-primary">+254 112 199 055</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+254762095235" className="hover:text-primary">+254 762 095 235</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded object-cover opacity-80" />
            <p>© {new Date().getFullYear()} SoftSkySolution LTD. All rights reserved.</p>
          </div>
          <p>Crafted with precision in Nairobi 🇰🇪 for the world.</p>
        </div>
      </div>
    </footer>
  );
}
