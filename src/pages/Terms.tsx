import { FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 flex items-center gap-4 border-b border-border pb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
                <p className="mt-1 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-left">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Welcome to TaxCare Nepal. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Services Provided</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  TaxCare Nepal provides tax consultation, accounting, bookkeeping, auditing, company registration, and related financial advisory services. The specific scope of services for each client will be defined in a separate engagement letter or service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Client Responsibilities</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You agree to provide accurate, complete, and timely information necessary for us to perform our services. We are not responsible for any penalties, delays, or additional taxes arising from inaccurate or withheld information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Confidentiality</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We treat all client information as strictly confidential. We will not disclose your personal or financial information to third parties without your explicit consent, except as required by Nepalese law or regulatory authorities.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Fees and Payment</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our fees are based on the complexity and volume of work. Payment terms will be specified in our invoices or service agreements. We reserve the right to suspend services if invoices remain unpaid past their due date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  While we strive for the highest level of accuracy, our services are based on the information you provide and our interpretation of current tax laws. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our maximum liability shall not exceed the fees paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Governing Law</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Changes to Terms</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify clients of any material changes. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Terms;
