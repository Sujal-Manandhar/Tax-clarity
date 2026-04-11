import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients", color: "text-primary" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "text-green-600" },
  { icon: CheckCircle, value: "98%", label: "Filing Accuracy", color: "text-yellow-600" },
  { icon: Award, value: "24hr", label: "Response Time", color: "text-primary" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Stats Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className={`animate-on-scroll order-1 lg:order-2 ${isVisible ? "visible" : ""}`}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Tax Clarity Nepal
            </div>
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Nepal's Trusted Partner in{" "}
              <span className="text-primary">Tax & Compliance</span>
            </h2>
            <p className="mb-4 text-muted-foreground">
              Founded by seasoned Chartered Accountants, Tax Clarity Nepal was built on one mission: 
              making tax and financial compliance straightforward for every Nepali business and individual.
            </p>
            <p className="mb-6 text-muted-foreground">
              With deep expertise in Nepal's IRD regulations, VAT framework, and corporate tax law, 
              our team handles your compliance with precision — so you never miss a deadline or face 
              an unexpected penalty.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                "IRD-certified tax professionals",
                "Transparent, flat-rate pricing",
                "Dedicated client relationship manager",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
