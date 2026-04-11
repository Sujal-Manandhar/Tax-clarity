import { Building2, Rocket, Heart, Briefcase, Globe, Store } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const industries = [
  { icon: Building2, name: "SMEs", description: "Small & medium enterprises" },
  { icon: Rocket, name: "Startups", description: "Early-stage companies" },
  { icon: Heart, name: "NGOs", description: "Non-profits & charities" },
  { icon: Briefcase, name: "Freelancers", description: "Independent professionals" },
  { icon: Globe, name: "Import/Export", description: "Trade businesses" },
  { icon: Store, name: "Retail", description: "Shops & e-commerce" },
];

const Industries = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`animate-on-scroll mx-auto mb-12 max-w-2xl text-center ${isVisible ? "visible" : ""}`}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Who We Serve
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for diverse business types across Nepal
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="h-7 w-7" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{industry.name}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{industry.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
