import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Youtube, Music2 } from "lucide-react";
import logo from "@/assets/footer.png";

const WhatsAppIconSocial = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socials = [
  { Icon: WhatsAppIconSocial, href: "https://wa.me/254112199055", label: "WhatsApp" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100087054785585", label: "Facebook" },
  { Icon: Music2, href: "https://www.tiktok.com/@tiktok.comsoftskysol?_r=1&_t=ZS-96W1Oc4V8in", label: "TikTok" },
  { Icon: Youtube, href: "https://www.youtube.com/@KisangauMumo", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 mt-16">
      <div className="w-full px-4 md:px-8 py-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="overflow-visible p-1 -m-1 flex items-center justify-center">
                <img
                  src={logo}
                  alt="SoftSkySolution LTD"
                  className="transition-transform group-hover:scale-105"
                  style={{
                    height: "45px",
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
              <span className="font-display text-xs font-medium tracking-tight text-gray-400">
                Digital Innovation Hub
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
                { to: "/solutions", label: "Solutions" },
                { to: "/why-us", label: "Why Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/gallery", label: "Gallery" },
                { to: "/training", label: "Training" },
                { to: "/blog", label: "Insights" },
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
                <span className="w-4 h-4 text-green-400 shrink-0 flex items-center justify-center">
                  <WhatsAppIconSocial className="h-4 w-4" />
                </span>
                <a href="https://wa.me/254112199055" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">Chat Live on WhatsApp</a>
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

        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400 items-center">
          <p>© {new Date().getFullYear()} SoftSkySolution. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with precision in Nairobi 🇰🇪 for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}