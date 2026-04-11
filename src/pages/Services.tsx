import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              What We Do
            </div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive tax, accounting, and compliance services for individuals and businesses across Nepal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
              >
                {service.badge && (
                  <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {service.badge}
                  </div>
                )}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-1 text-sm font-medium text-primary">{service.tagline}</p>
                <p className="mb-5 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline underline-offset-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl gradient-navy p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold mb-2">Not sure what you need?</h2>
            <p className="mb-6 opacity-90">Tell us your situation and we'll recommend the best service for you.</p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
