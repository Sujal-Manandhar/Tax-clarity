import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronDown, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

const WHATSAPP_NUMBER = "9779823405140";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!slug) return <Navigate to="/services" replace />;

  const service = getServiceBySlug(slug);
  if (!service) return <Navigate to="/services" replace />;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello! I'm interested in your ${service.title} service. Please share more details.`
  )}`;

  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero pb-16 pt-14 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sd-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sd-grid)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <service.icon className="h-8 w-8 text-yellow-300" />
            </div>
            {service.badge && (
              <span className="mb-3 inline-block rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                {service.badge}
              </span>
            )}
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">{service.title}</h1>
            <p className="mb-6 text-xl font-medium text-yellow-300">{service.tagline}</p>
            <p className="mb-8 max-w-2xl text-lg text-white/80">{service.description}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-yellow-400 font-semibold text-gray-900 hover:bg-yellow-300">
                <Link to="/contact">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                What's Included
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                    </div>
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                Our Process
              </h2>
              <ol className="space-y-0">
                {service.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    {/* Left column: circle + connector line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md ring-4 ring-primary/10">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < service.process.length - 1 && (
                        <div className="mt-1 w-0.5 flex-1 bg-primary/20" />
                      )}
                    </div>
                    {/* Right column: text */}
                    <div className="pb-8 pt-1.5 min-w-0">
                      <h3 className="mb-1 font-semibold text-foreground leading-tight">
                        {p.step}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Pricing Guide</h2>
            <p className="mb-8 text-muted-foreground">{service.pricing.note}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.pricing.tiers.map((tier, i) => (
                <div
                  key={tier.label}
                  className={`rounded-2xl border p-6 transition-all ${
                    i === 1
                      ? "border-primary bg-primary text-primary-foreground shadow-lg"
                      : "border-border bg-card"
                  }`}
                >
                  <div className={`mb-1 text-xs font-semibold uppercase tracking-wider ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {tier.label}
                  </div>
                  <div className={`mb-3 text-2xl font-bold ${i === 1 ? "text-white" : "text-foreground"}`}>
                    {tier.price}
                  </div>
                  <p className={`text-sm ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">
              All prices are exclusive of government levies. Contact us for a precise quote tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-foreground hover:bg-muted/50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="border-t border-border px-6 pb-4 pt-3 text-sm text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-white/80">
              Contact us today for a free consultation on {service.title}.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-yellow-400 font-semibold text-gray-900 hover:bg-yellow-300">
                <Link to="/contact">
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2 border border-white/30 bg-white/10 text-white hover:bg-white/20">
                <a href="tel:+9779823405140">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Related Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
