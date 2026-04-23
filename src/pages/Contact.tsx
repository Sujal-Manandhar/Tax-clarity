import Layout from "@/components/layout/Layout";
import ContactPreview from "@/components/home/ContactPreview";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
              Contact TaxCare Nepal
            </h1>
            <p className="text-lg text-muted-foreground">
              Get a consultation and stay compliant with confidence.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactPreview />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Putalisadak, Kathmandu
                      <br />
                      Bagmati Province, Nepal
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href="tel:+9779823405140"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +9779823405140
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:info@TaxCare.com.np"
                      className="text-muted-foreground hover:text-primary"
                    >
                      info@TaxCare.com.np
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Sun–Fri: 10:00 AM – 6:00 PM
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-muted/50 overflow-hidden h-80 relative group">
                <iframe
                  src="https://maps.google.com/maps?q=Kathmandu,+Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TaxCare Nepal Office Location"
                ></iframe>
                <a
                  href="https://share.google/t8pjJxbJnT58wnafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-background/90 backdrop-blur text-foreground px-4 py-2 rounded-md shadow-md border border-border text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all flex items-center gap-2 z-10"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
