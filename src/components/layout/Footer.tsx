import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-hero text-white">
      {/* Main footer grid */}
      <div className="container-custom pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <span className="text-lg font-bold text-white">TC</span>
              </div>
              <div>
                <div className="font-bold text-white leading-tight">Tax Clarity Nepal</div>
                <div className="text-xs text-white/60">Kathmandu, Nepal</div>
              </div>
            </Link>
            <p className="mb-5 text-sm text-white/70 leading-relaxed">
              Nepal's trusted partner in tax, accounting, and compliance — helping businesses and individuals thrive since 2014.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61567220103659"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/taxclaritynepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@taxclaritynepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://taxclarity.com.np"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white hover:scale-110"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Resources", href: "/resources" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-white hover:underline underline-offset-2"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-400" />
                <span className="text-sm text-white/70">
                  Putalisadak, Kathmandu<br />Bagmati Province, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                <a href="tel:+9779823405140" className="text-sm text-white/70 transition-colors hover:text-white">
                  +977 9823405140
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-yellow-400" />
                <a href="mailto:info@taxclarity.com.np" className="text-sm text-white/70 transition-colors hover:text-white">
                  info@taxclarity.com.np
                </a>
              </li>
            </ul>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs font-medium text-white/80">Business Hours</p>
              <p className="mt-1 text-xs text-white/60">Sun – Fri: 10:00 AM – 6:00 PM</p>
              <p className="text-xs text-white/60">Saturday: Closed</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-xs text-white/50">
              &copy; {currentYear} Tax Clarity Nepal. All rights reserved. · IRD Registered · CA Nepal Member
            </p>
            <div className="flex items-center gap-5">
              <Link to="/privacy-policy" className="text-xs text-white/50 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-white/50 transition-colors hover:text-white">
                Terms of Service
              </Link>
              <span className="text-xs text-white/30">🇳🇵 Made in Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
