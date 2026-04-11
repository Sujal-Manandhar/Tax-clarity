import { CheckCircle, TrendingUp, Users, Award, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  {
    title: "Experienced Tax Professionals",
    description: "Our team has years of experience navigating Nepal's tax landscape.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Clear pricing upfront for all our services.",
  },
  {
    title: "Confidential & Secure",
    description: "Your financial data is protected with strict confidentiality protocols.",
  },
  {
    title: "Timely Compliance",
    description: "Never miss a deadline with our proactive compliance management.",
  },
  {
    title: "Nepal Regulation Expertise",
    description: "Deep understanding of local tax laws and IRD requirements.",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Clients Served", color: "bg-primary/10 text-primary" },
  { icon: Award, value: "10+", label: "Years Experience", color: "bg-green-50 text-green-600" },
  { icon: TrendingUp, value: "98%", label: "On-time Filing", color: "bg-yellow-50 text-yellow-600" },
  { icon: Clock, value: "24hr", label: "Response Time", color: "bg-primary/10 text-primary" },
];

const WhyChooseUs = () => {
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
            Why Choose Us
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why Tax Clarity Nepal
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to making tax and compliance simple, so you can focus on what matters — growing your business.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} rounded-2xl border border-border p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
            >
              <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} ${isVisible ? "visible" : ""} group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-card`}
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-green-600 transition-colors group-hover:text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
