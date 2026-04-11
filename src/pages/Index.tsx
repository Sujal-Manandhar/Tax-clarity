import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSteps from "@/components/home/ProcessSteps";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSteps />
      <Industries />
      <Testimonials />
      <CTABanner />
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Contact Tax Clarity Nepal
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch for a free consultation. We'll respond within 24 hours.
              </p>
            </div>
            <ContactPreview />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
