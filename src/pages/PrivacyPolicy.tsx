import { Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 flex items-center gap-4 border-b border-border pb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
                <p className="mt-1 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-left">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  TaxCare Nepal ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our professional services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We may collect personal identity information and financial data necessary to provide our services. This includes, but is not limited to:
                </p>
                <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Personal identification information (Name, email address, phone number)</li>
                  <li>Business registration and PAN/VAT details</li>
                  <li>Financial and tax records required for accounting and filing</li>
                  <li>Information provided through contact forms and consultations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We use the information we collect primarily to provide, maintain, and improve our services. Specifically, we use it to:
                </p>
                <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Prepare and file tax returns and financial statements</li>
                  <li>Communicate with you regarding our services and your accounts</li>
                  <li>Ensure compliance with Nepalese legal and regulatory requirements</li>
                  <li>Improve our website and service offerings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Information Sharing and Disclosure</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may disclose your information only in the following circumstances:
                </p>
                <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To government and regulatory authorities (like the Inland Revenue Department) as required by law for tax filing purposes</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal and financial data against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or request the deletion of your personal information held by us, subject to legal and regulatory requirement regarding data retention for accounting practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact us at: <br />
                  <br />
                  <strong>Email:</strong> info@TaxCare.com.np <br />
                  <strong>Phone:</strong> +9779823405140
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
