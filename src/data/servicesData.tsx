import {
  Building2,
  User,
  Receipt,
  ClipboardCheck,
  BookOpen,
  CreditCard,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  badge?: string;
  pricing: {
    note: string;
    tiers: { label: string; price: string; desc: string }[];
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "corporate-tax-filing",
    title: "Corporate Tax Filing",
    shortTitle: "Corporate Tax",
    icon: Building2,
    tagline: "Accurate. Compliant. On Time.",
    badge: "Most Popular",
    description:
      "We handle all aspects of corporate income tax filing for your company — from preparing financial statements to submitting accurate returns to the Inland Revenue Department (IRD) of Nepal. Our team ensures every deduction is maximized and every deadline is met.",
    benefits: [
      "Full IRD compliance for corporate income tax returns",
      "Accurate computation of taxable income & allowable deductions",
      "Proactive deadline reminders to avoid penalties",
      "Representation in case of IRD queries or assessments",
      "Year-round advisory on tax-saving strategies",
      "Digital filing and acknowledgment tracking",
    ],
    process: [
      { step: "Document Collection", desc: "Gather financial statements, invoices, and prior-year returns." },
      { step: "Tax Computation", desc: "Calculate taxable income, deductions, and applicable tax rate." },
      { step: "Review & Sign-off", desc: "Client reviews the draft return before submission." },
      { step: "IRD Submission", desc: "We file electronically and share the acknowledgment receipt." },
      { step: "Ongoing Support", desc: "We handle any IRD notices or follow-up queries." },
    ],
    faqs: [
      { q: "When is the corporate tax deadline in Nepal?", a: "Advance tax is due quarterly; the final return must be filed within 3 months of fiscal year-end (Ashwin/Kartik)." },
      { q: "What documents do I need to provide?", a: "Trial balance, profit & loss statement, balance sheet, bank statements, and any prior-year notices from IRD." },
      { q: "Do you handle multiple fiscal years?", a: "Yes — we can handle back-filing for up to 5 previous fiscal years." },
    ],
    pricing: {
      note: "Pricing is based on your company's annual turnover and complexity. All plans include IRD e-filing, acknowledgment, and one year of follow-up support.",
      tiers: [
        { label: "Small Business", price: "NPR 8,000+", desc: "Turnover up to NPR 50 lakh. Sole proprietorships & small Pvt Ltd." },
        { label: "Mid-size Company", price: "NPR 20,000+", desc: "Turnover NPR 50 lakh – 5 crore. Full accounts + tax return." },
        { label: "Large Enterprise", price: "Custom Quote", desc: "Turnover above NPR 5 crore, group companies, or listed entities." },
      ],
    },
  },
  {
    slug: "personal-tax-planning",
    title: "Personal Tax Planning",
    shortTitle: "Personal Tax",
    icon: User,
    tagline: "Minimize Liability. Maximize Savings.",
    description:
      "Our personal tax planning service helps salaried employees, freelancers, and self-employed professionals in Nepal optimize their tax position. We analyze your income sources and legally minimize your tax liability while keeping you fully compliant.",
    benefits: [
      "Personalized income tax calculation for individuals",
      "Identification of eligible deductions (insurance, donations, retirement funds)",
      "PAN registration and maintenance support",
      "Advance tax computation and quarterly filing",
      "Tax planning aligned with life events (marriage, property purchase, etc.)",
      "Confidential handling of all personal financial data",
    ],
    process: [
      { step: "Income Assessment", desc: "Review all income sources — salary, rental, investment, freelance." },
      { step: "Deduction Analysis", desc: "Identify every eligible deduction and exemption." },
      { step: "Plan Presentation", desc: "We present a clear tax plan with potential savings highlighted." },
      { step: "Return Filing", desc: "Accurate filing of your personal income tax return with IRD." },
      { step: "Confirmation", desc: "You receive acknowledgment and a summary of your tax position." },
    ],
    faqs: [
      { q: "Who needs to file a personal income tax return in Nepal?", a: "Anyone with annual income exceeding NPR 4 lakh (basic exemption), including salaried individuals with multiple income sources." },
      { q: "Can you help me reduce my personal tax?", a: "Yes — through legal deductions like life insurance premiums, remote area allowance, and approved retirement fund contributions." },
      { q: "What if I have income from abroad?", a: "We handle foreign income declaration and help you claim applicable double-taxation relief under Nepal's tax treaties." },
    ],
    pricing: {
      note: "Flat-fee personal tax planning — no surprises. Includes return filing with IRD and a digital acknowledgment copy.",
      tiers: [
        { label: "Salaried Individual", price: "NPR 2,500", desc: "Single employer, standard deductions, PAN maintenance." },
        { label: "Multiple Income Sources", price: "NPR 5,000", desc: "Rental, investment, or freelance income in addition to salary." },
        { label: "Business Owner / NRN", price: "NPR 10,000+", desc: "Self-employed, foreign income, or complex asset portfolio." },
      ],
    },
  },
  {
    slug: "vat-consulting",
    title: "GST/VAT Consulting",
    shortTitle: "VAT Consulting",
    icon: Receipt,
    tagline: "VAT Made Simple for Nepal Businesses.",
    description:
      "Navigating Nepal's VAT framework can be complex. Our GST/VAT consulting service covers everything from initial registration and threshold assessment to monthly return filing, reconciliation, and IRD audit support.",
    benefits: [
      "VAT registration with IRD within the statutory timeline",
      "Monthly VAT return preparation and e-filing",
      "Input tax credit reconciliation",
      "Advisory on VAT-exempt vs. taxable supplies",
      "Handling of VAT refund claims",
      "Support during IRD VAT audits and assessments",
    ],
    process: [
      { step: "Threshold Assessment", desc: "Determine if your business meets the VAT registration threshold." },
      { step: "Registration", desc: "Complete VAT registration with IRD and obtain your VAT certificate." },
      { step: "Monthly Filing Setup", desc: "Set up systems for tracking taxable sales and purchase invoices." },
      { step: "Return Filing", desc: "Prepare and file monthly VAT returns accurately and on time." },
      { step: "Reconciliation", desc: "Match VAT records with financial statements quarterly." },
    ],
    faqs: [
      { q: "What is the VAT threshold in Nepal?", a: "Businesses with annual turnover exceeding NPR 50 lakh for goods or NPR 20 lakh for services must register for VAT." },
      { q: "How often must VAT returns be filed?", a: "Monthly — VAT returns are due by the 25th of each following month." },
      { q: "Can you help with VAT refund claims?", a: "Yes — we assist exporters and eligible businesses with preparing and tracking VAT refund applications." },
    ],
    pricing: {
      note: "Monthly retainer plans ensure your VAT filings are never late. One-time registration fee applies for new VAT registrations.",
      tiers: [
        { label: "VAT Registration", price: "NPR 5,000", desc: "One-time fee for new IRD VAT registration including all documents." },
        { label: "Monthly Filing Retainer", price: "NPR 3,000/mo", desc: "Monthly VAT return preparation, e-filing, and input tax reconciliation." },
        { label: "Full VAT Management", price: "NPR 6,000/mo", desc: "Filing + reconciliation + advisory + IRD query handling." },
      ],
    },
  },
  {
    slug: "audit-compliance",
    title: "Audit & Compliance",
    shortTitle: "Audit",
    icon: ClipboardCheck,
    tagline: "Independent. Thorough. Trusted.",
    description:
      "Our audit and compliance services give stakeholders confidence in your financial reporting. From statutory audits required under Nepal's Companies Act to internal process audits, our CA-led team delivers rigorous, independent assessments.",
    benefits: [
      "Statutory audit under Nepal Companies Act 2063",
      "Tax audit and representation before IRD",
      "Internal control review and recommendations",
      "NGO/INGO compliance and audit support",
      "Audit of cooperative and financial institutions",
      "Written audit opinion and management letter",
    ],
    process: [
      { step: "Engagement Planning", desc: "Define audit scope, timeline, and key risk areas." },
      { step: "Document Review", desc: "Examine financial records, ledgers, and supporting documents." },
      { step: "Field Work", desc: "Test transactions, verify balances, and assess internal controls." },
      { step: "Draft Report", desc: "Present draft findings to management for response." },
      { step: "Final Opinion", desc: "Issue signed audit report with management letter." },
    ],
    faqs: [
      { q: "Is a statutory audit mandatory for all companies?", a: "Yes — all private limited companies registered under Nepal's Companies Act 2063 must have annual statutory audits." },
      { q: "How long does an audit take?", a: "Typically 2–4 weeks depending on the size and complexity of your business." },
      { q: "Do you handle NGO/INGO audits?", a: "Yes — we specialize in NGO/INGO audits including Social Welfare Council reporting requirements." },
    ],
    pricing: {
      note: "Audit fees are determined after an initial scope call. All fees include the signed audit report, management letter, and one revision cycle.",
      tiers: [
        { label: "Small Company / NGO", price: "NPR 25,000+", desc: "Turnover up to NPR 1 crore. Includes statutory audit opinion." },
        { label: "Mid-size Company", price: "NPR 60,000+", desc: "Turnover NPR 1–10 crore. Statutory audit + management letter." },
        { label: "Large / Listed Entity", price: "Custom Quote", desc: "Complex entities, group audits, INGO, or cooperative institutions." },
      ],
    },
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortTitle: "Accounting",
    icon: BookOpen,
    tagline: "Clean Books. Clear Insights.",
    description:
      "Accurate books are the foundation of every successful business. Our accounting and bookkeeping service keeps your records organized, up-to-date, and ready for tax filing, investor review, or loan applications.",
    benefits: [
      "Daily/weekly/monthly bookkeeping in Tally or Xero",
      "Bank reconciliation and ledger maintenance",
      "Monthly financial statements (P&L, balance sheet)",
      "Accounts payable and receivable management",
      "Fixed asset register and depreciation schedules",
      "Year-end closing and audit-ready file preparation",
    ],
    process: [
      { step: "Software Setup", desc: "Set up or migrate your accounting software with a proper chart of accounts." },
      { step: "Data Entry", desc: "Record all transactions — invoices, payments, receipts, and journals." },
      { step: "Reconciliation", desc: "Match bank statements with books and resolve discrepancies." },
      { step: "Reporting", desc: "Deliver monthly financial statements and management reports." },
      { step: "Year-end Close", desc: "Finalize accounts and prepare files for audit and tax filing." },
    ],
    faqs: [
      { q: "Which accounting software do you use?", a: "We primarily use Tally ERP and can also work with Xero, QuickBooks, or your existing system." },
      { q: "Can you take over existing messy books?", a: "Yes — we offer a clean-up service to bring historical records up to date before regular bookkeeping begins." },
      { q: "Do I get regular financial reports?", a: "Yes — you receive monthly profit & loss statements, balance sheets, and cash-flow summaries." },
    ],
    pricing: {
      note: "Monthly retainer pricing based on transaction volume. All plans include monthly P&L, balance sheet, and bank reconciliation.",
      tiers: [
        { label: "Starter", price: "NPR 5,000/mo", desc: "Up to 100 transactions/month. Ideal for freelancers & small shops." },
        { label: "Growth", price: "NPR 12,000/mo", desc: "Up to 400 transactions/month. SMEs with regular invoicing & payments." },
        { label: "Enterprise", price: "Custom Quote", desc: "High-volume businesses, multi-branch, or complex inventory management." },
      ],
    },
  },
  {
    slug: "pan-vat-registration",
    title: "PAN / VAT Registration",
    shortTitle: "PAN / VAT Reg.",
    icon: CreditCard,
    tagline: "Get Registered. Get Started.",
    description:
      "Every business and individual in Nepal needs a Permanent Account Number (PAN) to operate legally and file taxes. Our service handles PAN registration for individuals and businesses, as well as VAT registration with the IRD.",
    benefits: [
      "PAN registration for individuals and businesses",
      "VAT registration with IRD within 7 working days",
      "Document preparation and IRD liaison",
      "PAN update or transfer services",
      "E-filing setup and portal training",
      "Certificate collection and handover",
    ],
    process: [
      { step: "Document Checklist", desc: "We provide a clear list of documents required for your entity type." },
      { step: "Application Preparation", desc: "We prepare and review all forms before submission." },
      { step: "IRD Submission", desc: "We submit on your behalf and liaise with IRD officers." },
      { step: "Follow-up", desc: "We track the application status and resolve any queries." },
      { step: "Certificate Delivery", desc: "PAN/VAT certificate delivered to you digitally and physically." },
    ],
    faqs: [
      { q: "How long does PAN registration take?", a: "Typically 3–5 working days for online registration; slightly longer for paper-based applications." },
      { q: "Can a foreigner get a PAN in Nepal?", a: "Yes — foreign nationals conducting business or earning income in Nepal must obtain a PAN." },
      { q: "What is the cost for VAT registration?", a: "IRD does not charge a fee for VAT registration; our service fee covers document preparation and liaison." },
    ],
    pricing: {
      note: "One-time fixed fees. IRD government charges (if any) are billed separately at cost. No hidden charges.",
      tiers: [
        { label: "Individual PAN", price: "NPR 1,500", desc: "PAN registration for salaried individuals, freelancers, or property owners." },
        { label: "Business PAN + VAT", price: "NPR 5,000", desc: "Combined PAN and VAT registration for Pvt Ltd, partnership, or proprietorship." },
        { label: "PAN Update / Transfer", price: "NPR 2,000", desc: "Update address, name, or transfer PAN between tax offices." },
      ],
    },
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & Compliance",
    shortTitle: "Payroll",
    icon: Users,
    tagline: "Pay Right. Stay Compliant.",
    description:
      "Managing payroll in Nepal involves SSF, CIT, TDS on salary, and labor law compliance. Our payroll service handles end-to-end payroll processing so your employees are paid accurately and on time, every time.",
    benefits: [
      "Monthly payroll calculation including TDS, SSF, and CIT",
      "Salary slip generation for all employees",
      "TDS deposit and annual TDS reconciliation (Form 3)",
      "Social Security Fund (SSF) registration and contribution management",
      "Leave and benefit tracking",
      "Labor law compliance advisory",
    ],
    process: [
      { step: "Employee Onboarding", desc: "Collect employee data and set up payroll structure." },
      { step: "Monthly Processing", desc: "Calculate gross pay, deductions (TDS, SSF, CIT, loans), and net pay." },
      { step: "Payslip Distribution", desc: "Generate and distribute digital payslips to all employees." },
      { step: "Tax Deposit", desc: "Deposit TDS with IRD and SSF contributions by statutory deadlines." },
      { step: "Annual Reconciliation", desc: "Prepare Form 3 (annual TDS return) for all employees." },
    ],
    faqs: [
      { q: "What deductions are mandatory on employee salaries?", a: "TDS on salary, Employee Provident Fund (EPF), and Social Security Fund (SSF) contributions are mandatory." },
      { q: "What is the SSF contribution rate?", a: "Employees contribute 11% and employers contribute 20% of basic salary to the Social Security Fund." },
      { q: "Do you handle payroll for part-time or contractual staff?", a: "Yes — we handle all employment types including permanent, part-time, and contractual workers." },
    ],
    pricing: {
      note: "Monthly retainer pricing per number of employees. Includes payslips, TDS deposit, SSF contributions, and Form 3 at year-end.",
      tiers: [
        { label: "Small Team (1–10 staff)", price: "NPR 4,000/mo", desc: "Full payroll processing, payslips, TDS, and SSF for up to 10 employees." },
        { label: "Mid-size (11–50 staff)", price: "NPR 8,000/mo", desc: "Payroll for 11–50 employees with leave tracking and compliance reporting." },
        { label: "Large Team (50+ staff)", price: "Custom Quote", desc: "Enterprise payroll with HR system integration and priority support." },
      ],
    },
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
