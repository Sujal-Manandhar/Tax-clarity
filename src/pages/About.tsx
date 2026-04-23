import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Target, Eye, Shield, Heart, Users, CheckCircle,
  Award, Clock, Lightbulb, Star, Linkedin,
  FileCheck, Globe, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in every client engagement and financial decision.", color: "bg-blue-50 text-blue-600" },
  { icon: Target, title: "Accuracy", description: "Precision in every calculation, filing, and advisory recommendation — zero tolerance for errors.", color: "bg-green-50 text-green-600" },
  { icon: Heart, title: "Confidentiality", description: "Your financial data is protected with bank-grade protocols and strict non-disclosure agreements.", color: "bg-red-50 text-red-600" },
  { icon: Users, title: "Client-First", description: "Every decision is guided by what is best for you — not what's easiest for us.", color: "bg-purple-50 text-purple-600" },
];


const teamMembers = [
  {
    initials: "RK",
    name: "Rajendra K.C.",
    title: "Founder & Managing CA",
    credentials: "CA (Nepal), M.Com (Finance)",
    bio: "15+ years in Nepali tax law, IRD representation, and corporate audit. Expert in corporate tax structuring and IRD dispute resolution.",
    linkedin: "https://linkedin.com/",
    facebook: "https://www.facebook.com/profile.php?id=61567220103659",
    specialties: ["Corporate Tax", "Audit", "IRD Representation"],
  },
  {
    initials: "SP",
    name: "Sunita Pandey",
    title: "Senior Accountant & VAT Lead",
    credentials: "ACCA (Part), BBS (Accounting)",
    bio: "8+ years specializing in VAT compliance, bookkeeping, and financial reporting for SMEs and NGOs in Nepal.",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    specialties: ["VAT Compliance", "Bookkeeping", "NGO Accounting"],
  },
  {
    initials: "BT",
    name: "Bikash Tamang",
    title: "Payroll & Compliance Specialist",
    credentials: "BBA (Finance), SSF Certified",
    bio: "Expert in Nepal's labor law, SSF contributions, TDS on salary, and payroll compliance for companies with 5 to 500+ employees.",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
    specialties: ["Payroll", "SSF", "Labor Compliance"],
  },
];

const certifications = [
  { icon: FileCheck, title: "IRD Registered Tax Agent", desc: "Authorized to represent clients before the Inland Revenue Department." },
  { icon: Award, title: "ICAN Member Firm", desc: "Recognized by the Institute of Chartered Accountants of Nepal." },
  { icon: BookOpen, title: "FNCCI Affiliated", desc: "Member of the Federation of Nepalese Chambers of Commerce and Industry." },
  { icon: Globe, title: "Social Welfare Council", desc: "Authorized auditor for NGO/INGO organizations registered with SWC." },
];

const differentiators = [
  {
    icon: Clock,
    title: "Deadline Guarantee",
    description: "We've maintained a 100% on-time filing record across 10 years. If we miss a deadline due to our fault, we cover the penalty — no questions asked.",
  },
  {
    icon: Lightbulb,
    title: "Proactive Advisory",
    description: "We don't just file and disappear. You receive regular tax-saving tips, regulatory updates, and strategic advice relevant to your business.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Every engagement starts with a written quote. No surprises, no hidden fees — you always know exactly what you're paying for and why.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero pb-20 pt-16 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80">
              Est. 2014 · Kathmandu, Nepal
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">About TaxCare Nepal</h1>
            <p className="text-lg text-white/80">
              A decade of trusted tax, accounting, and compliance expertise — built on integrity, accuracy, and an unwavering commitment to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </div>
              <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
                Built on a Belief That Everyone Deserves Clear Financial Guidance
              </h2>
              <p className="mb-4 text-muted-foreground">
                In 2014, Rajendra K.C. — a Chartered Accountant with a decade of experience at major Nepali audit firms — noticed a gap: Nepal's small business owners were paying unnecessary penalties, missing deadlines, and overpaying taxes simply because they lacked access to affordable professional help.
              </p>
              <p className="mb-4 text-muted-foreground">
                He founded TaxCare Nepal with a straightforward mission: make tax and compliance simple, affordable, and genuinely stress-free for every individual and business in Nepal. No jargon, no surprises — just clear, expert guidance.
              </p>
              <p className="mb-6 text-muted-foreground">
                A decade later, that mission still drives everything we do. From a solo practice in Putalisadak to a team of 8 professionals serving 500+ clients nationwide, TaxCare Nepal has grown into one of Kathmandu's most trusted accounting firms.
              </p>
              <Button asChild className="gap-2">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Clients Served", icon: Users, color: "text-primary" },
                { value: "10+", label: "Years Experience", icon: Clock, color: "text-green-600" },
                { value: "98%", label: "On-time Filing Rate", icon: CheckCircle, color: "text-yellow-600" },
                { value: "4.9★", label: "Google Rating", icon: Star, color: "text-primary" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">
                To make tax and compliance simple, stress-free, and accessible for every individual and business in Nepal. We believe professional financial guidance should not be a luxury — it should be within reach of every entrepreneur, freelancer, and organization.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">
                To be Nepal's most trusted tax and accounting partner — recognized for uncompromising accuracy, deep expertise in Nepali law, and a client experience that makes complex compliance feel effortless. We aim to set the standard for professional integrity in Nepal's accounting sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              The People Behind TC Nepal
            </div>
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
            <p className="text-muted-foreground">Experienced professionals dedicated to your financial clarity.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card-hover">
                {/* Avatar */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <div className="flex gap-2">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                      <Globe className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <h3 className="mb-0.5 font-bold text-foreground">{member.name}</h3>
                <p className="mb-1 text-sm font-medium text-primary">{member.title}</p>
                <p className="mb-3 text-xs text-muted-foreground">{member.credentials}</p>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span key={s} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              What We Stand For
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-card">
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${value.color}`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Credentials & Affiliations
            </div>
            <h2 className="text-3xl font-bold text-foreground">Certified & Accredited</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <cert.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground text-sm">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Difference
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">What Makes Us Different</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-all hover:shadow-card-hover">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <d.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{d.title}</h3>
                <p className="text-muted-foreground">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="mb-8 text-lg text-white/80">
              Join 500+ businesses and individuals who trust TaxCare Nepal with their finances.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 bg-yellow-400 font-semibold text-gray-900 hover:bg-yellow-300">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" className="gap-2 border border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
