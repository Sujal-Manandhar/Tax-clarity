import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your needs and assess your current compliance status.",
  },
  {
    number: "02",
    title: "Documentation",
    description: "Collect required documents with a clear checklist tailored to your case.",
  },
  {
    number: "03",
    title: "Filing & Compliance",
    description: "Accurate filing and proactive deadline management to keep you compliant.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Continuous guidance for audits, updates, and future planning.",
  },
];

const ProcessSteps = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`animate-on-scroll mx-auto mb-12 max-w-2xl text-center ${isVisible ? "visible" : ""}`}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Process
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process designed to make your experience stress-free
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`animate-on-scroll animate-on-scroll-delay-${index + 1} ${isVisible ? "visible" : ""} relative`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-px w-full border-t-2 border-dashed border-primary/20 lg:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Number */}
                <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg ring-4 ring-primary/20 transition-transform duration-300 hover:scale-105">
                  {step.number}
                </div>
                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
