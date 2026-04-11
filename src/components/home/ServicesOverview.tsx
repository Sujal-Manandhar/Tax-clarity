import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { servicesData } from "@/data/servicesData";

const featuredSlugs = [
  "corporate-tax-filing",
  "personal-tax-planning",
  "vat-consulting",
  "audit-compliance",
];

const additionalSlugs = [
  "accounting-bookkeeping",
  "pan-vat-registration",
  "payroll-compliance",
];

const ServicesOverview = () => {
  const { ref, isVisible } = useScrollAnimation();

  const featured = servicesData.filter((s) => featuredSlugs.includes(s.slug));
  const additional = servicesData.filter((s) => additionalSlugs.includes(s.slug));

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`animate-on-scroll mx-auto mb-12 max-w-2xl text-center ${isVisible ? "visible" : ""}`}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            What We Do
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Tax & Compliance Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored for individuals and businesses across Nepal
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover`}
            >
              {service.badge && (
                <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {service.badge}
                </div>
              )}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary">{service.title}</h3>
              <p className="mb-3 text-xs font-medium text-primary/70">{service.tagline}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 border-t border-border" />
          <span className="text-sm text-muted-foreground">Additional Services</span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Additional Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {additional.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-soft`}
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="mb-0.5 font-semibold text-foreground group-hover:text-primary">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
