import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Music2 } from "lucide-react";
import logo from "@/assets/footer.png";

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 mt-24">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-4">
              <div className="overflow-visible p-1 -m-1 flex items-center justify-center">
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
              <span className="font-display text-2xl font-bold text-white">
                SoftSky<span className="text-blue-400">Solution</span>
              </span>
            </Link>
            <p className="text-gray-300 max-w-md leading-relaxed">
              SoftSkySolution is a Kenyan-rooted technology business engineering modern web platforms, mobile apps, AI solutions, cloud infrastructure and enterprise systems for institutions and businesses across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-300 hover:scale-110"
                  aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-white text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
                  <Link to={l.to} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-white text-lg">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:softskysolution@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">softskysolution@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:supportsoftskysolution@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors break-all">supportsoftskysolution@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:+254112199055" className="text-gray-300 hover:text-blue-400 transition-colors">+254 112 199 055</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:+254762095235" className="text-gray-300 hover:text-blue-400 transition-colors">+254 762 095 235</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400 items-center">
          <p>© {new Date().getFullYear()} SoftSkySolution. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with precision in Nairobi 🇰🇪 for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}