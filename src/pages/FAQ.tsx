import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What documents do I need for tax filing?", a: "You'll need income details, expense records, invoices, bank statements, and any VAT/PAN records. Our team will provide a clear checklist based on your specific situation." },
  { q: "Do you support VAT registration?", a: "Yes, we guide you through the entire VAT registration process, from eligibility assessment to IRD submission, and provide ongoing monthly/quarterly compliance support." },
  { q: "Can you manage bookkeeping monthly?", a: "Absolutely. We offer monthly bookkeeping packages that include transaction recording, reconciliation, and financial reporting tailored to your business needs." },
  { q: "What are your service charges?", a: "Our pricing is transparent and depends on the complexity of services required. Contact us for a free consultation and customized quote." },
  { q: "How long does company registration take?", a: "Typically 7-14 business days depending on the company type and document readiness. We handle all paperwork and follow-ups with the Company Registrar's Office." },
  { q: "Do you handle audit support?", a: "Yes, we provide comprehensive audit preparation and support, ensuring your books are in order and representing your interests during the audit process." },
  { q: "Can NRNs use your services?", a: "Yes, we assist Non-Resident Nepalis with tax obligations, property transactions, and business registrations in Nepal." },
  { q: "What are the tax filing deadlines in Nepal?", a: "Income tax returns are typically due within 3 months after fiscal year end (mid-October). VAT returns are due monthly by the 25th. We track all deadlines for you." },
];

const FAQ = () => {
  return (
    <Layout>
      <main className="min-h-screen pt-24 pb-16">
        <section className="bg-gradient-to-b from-primary/5 to-background pb-16">
          <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Quick answers about tax, VAT, accounting, and compliance in Nepal.</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
        </section>
      </main>
    </Layout>
  );
};

export default FAQ;
