import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-md">
                <span className="text-lg font-bold text-primary-foreground">TC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground leading-tight">Tax Clarity Nepal</span>
                <span className="text-xs text-muted-foreground">Kathmandu, Nepal</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {/* Home */}
              <Link
                to="/"
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive("/services")
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega dropdown */}
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute left-1/2 top-full z-50 mt-2 w-[580px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background shadow-xl transition-all duration-200 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-4">
                    <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Our Services
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {servicesData.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5"
                        >
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <service.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary">
                              {service.shortTitle}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-1">{service.tagline}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-border pt-3">
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center rounded-xl bg-primary/5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="tel:+9779823405140"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+9779823405140</span>
              </a>
              <Button asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Side Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-bold text-primary-foreground">TC</span>
            </div>
            <span className="font-bold text-foreground">Tax Clarity Nepal</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {/* Home */}
          <Link
            to="/"
            style={{ transitionDelay: isOpen ? "0ms" : "0ms" }}
            className={`mobile-nav-item ${isOpen ? "visible" : ""} flex items-center rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent ${
              isActive("/") ? "bg-primary/5 text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>

          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            style={{ transitionDelay: isOpen ? "0ms" : "0ms" }}
            className={`mobile-nav-item ${isOpen ? "visible" : ""} flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent ${
              isActive("/services") ? "bg-primary/5 text-primary" : "text-foreground"
            }`}
          >
            <span>Services</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Services submenu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3 pb-2">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <service.icon className="h-4 w-4 flex-shrink-0 text-primary" />
                  {service.shortTitle}
                </Link>
              ))}
              <Link
                to="/services"
                className="mt-1 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5"
              >
                All Services →
              </Link>
            </div>
          </div>

          {/* Other nav links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              style={{ transitionDelay: isOpen ? `${(i + 1) * 55}ms` : "0ms" }}
              className={`mobile-nav-item ${isOpen ? "visible" : ""} mt-1 flex items-center rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent ${
                isActive(link.href) ? "bg-primary/5 text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTAs */}
        <div className="border-t border-border px-4 py-4 space-y-3">
          <a
            href="tel:+9779823405140"
            className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            Call +977 9823405140
          </a>
          <Button asChild className="w-full">
            <Link to="/contact">Get Consultation</Link>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Header;
