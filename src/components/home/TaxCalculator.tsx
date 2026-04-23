import React, { useState, useEffect, useMemo } from "react";
import { Calculator, Info, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// --- Types ---
type TaxpayerStatus = "single" | "couple";
type Gender = "male" | "female";
type IncomeType = "salary" | "business" | "pension";

interface Band {
  w: number;
  r: number;
  lbl: string;
  color: string;
}

// --- Constants ---
const BANDS_SINGLE: Band[] = [
  { w: 500000, r: 0.01, lbl: "Band 1 — First Rs 5,00,000", color: "bg-emerald-100 text-emerald-700" },
  { w: 200000, r: 0.10, lbl: "Band 2 — Next Rs 2,00,000", color: "bg-blue-100 text-blue-700" },
  { w: 300000, r: 0.20, lbl: "Band 3 — Next Rs 3,00,000", color: "bg-amber-100 text-amber-700" },
  { w: 1000000, r: 0.30, lbl: "Band 4 — Next Rs 10,00,000", color: "bg-orange-100 text-orange-700" },
  { w: 3000000, r: 0.36, lbl: "Band 5 — Next Rs 30,00,000", color: "bg-red-100 text-red-700" },
  { w: Infinity, r: 0.39, lbl: "Band 6 — Above Rs 50,00,000", color: "bg-rose-100 text-rose-700" },
];

const BANDS_COUPLE: Band[] = [
  { w: 600000, r: 0.01, lbl: "Band 1 — First Rs 6,00,000", color: "bg-emerald-100 text-emerald-700" },
  { w: 200000, r: 0.10, lbl: "Band 2 — Next Rs 2,00,000", color: "bg-blue-100 text-blue-700" },
  { w: 300000, r: 0.20, lbl: "Band 3 — Next Rs 3,00,000", color: "bg-amber-100 text-amber-700" },
  { w: 900000, r: 0.30, lbl: "Band 4 — Next Rs 9,00,000", color: "bg-orange-100 text-orange-700" },
  { w: 3000000, r: 0.36, lbl: "Band 5 — Next Rs 30,00,000", color: "bg-red-100 text-red-700" },
  { w: Infinity, r: 0.39, lbl: "Band 6 — Above Rs 50,00,000", color: "bg-rose-100 text-rose-700" },
];

const TaxCalculator = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // State
  const [status, setStatus] = useState<TaxpayerStatus>("single");
  const [gender, setGender] = useState<Gender>("male");
  const [incomeType, setIncomeType] = useState<IncomeType>("salary");
  const [grossIncome, setGrossIncome] = useState<number>(0);
  
  // Deductions
  const [hasSSF, setHasSSF] = useState(false);
  const [hasLifeIns, setHasLifeIns] = useState(false);
  const [lifeInsVal, setLifeInsVal] = useState<number>(0);
  const [hasMedIns, setHasMedIns] = useState(false);
  const [medInsVal, setMedInsVal] = useState<number>(0);
  const [hasBldIns, setHasBldIns] = useState(false);
  const [bldInsVal, setBldInsVal] = useState<number>(0);
  const [hasRetirement, setHasRetirement] = useState(false);
  const [retirementVal, setRetirementVal] = useState<number>(0);
  const [hasMedExpenses, setHasMedExpenses] = useState(false);
  const [medExpensesVal, setMedExpensesVal] = useState<number>(0);

  const [results, setResults] = useState<any>(null);

  // Helper: Format Currency
  const formatRs = (n: number) => 
    new Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      maximumFractionDigits: 0,
    }).format(n).replace("NPR", "Rs");

  // Input Formatting Helpers
  const formatInput = (val: number | string) => {
    if (val === "" || val === 0) return "";
    const num = typeof val === "string" ? parseFloat(val.replace(/,/g, "")) : val;
    if (isNaN(num)) return "";
    return new Intl.NumberFormat("en-NP").format(num);
  };

  const handleInputChange = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (rawValue === "") {
      setter(0);
      return;
    }
    const num = parseFloat(rawValue);
    if (!isNaN(num)) {
      setter(num);
    }
  };

  // Calculate Tax Logic
  const calculateTax = () => {
    if (grossIncome <= 0) return;

    const isCouple = status === "couple";
    const isSalary = incomeType === "salary";
    const isFemale = gender === "female";
    const ssfOn = isSalary && hasSSF;
    const isSoleProp = incomeType === "business";
    const isPension = incomeType === "pension";
    const band1Zero = ssfOn || isSoleProp || isPension;

    // Deductions
    const dLife = hasLifeIns ? Math.min(lifeInsVal, 40000) : 0;
    const dMed = hasMedIns ? Math.min(medInsVal, 20000) : 0;
    const dBld = hasBldIns ? Math.min(bldInsVal, 5000) : 0;
    
    const assessableBeforeRet = Math.max(0, grossIncome - dLife - dMed - dBld);
    const dRet = hasRetirement ? Math.min(retirementVal, 500000, assessableBeforeRet / 3) : 0;
    
    const totalDed = dLife + dMed + dBld + dRet;
    const taxableIncome = Math.max(0, grossIncome - totalDed);

    // Bands
    const bands = isCouple ? BANDS_COUPLE : BANDS_SINGLE;
    let rem = taxableIncome;
    let preTax = 0;
    const bandRows: any[] = [];

    for (let i = 0; i < bands.length; i++) {
      if (rem <= 0) break;
      const b = bands[i];
      const slice = b.w === Infinity ? rem : Math.min(rem, b.w);
      if (slice <= 0) continue;

      let rate = b.r;
      let rateLbl = (rate * 100).toFixed(0) + "%";
      let colorClass = b.color;

      if (i === 0 && band1Zero) {
        rate = 0;
        rateLbl = ssfOn ? "0% (SSF Exempt)" : (isPension ? "0% (Pension Exempt)" : "0% (No SST)");
        colorClass = "bg-gray-100 text-gray-600";
      } else if (rate === 0.01) {
        rateLbl = "1% (SST)";
      }

      const sliceTax = slice * rate;
      preTax += sliceTax;
      rem -= slice;
      bandRows.push({ 
        lbl: b.lbl, 
        slice, 
        rateLbl, 
        colorClass, 
        tax: sliceTax 
      });
    }

    // Credits
    const femaleCredit = (isFemale && isSalary) ? preTax * 0.10 : 0;
    const taxAfterFemale = Math.max(0, preTax - femaleCredit);
    const medTaxCredit = hasMedExpenses ? Math.min(750, medExpensesVal * 0.15, taxAfterFemale) : 0;

    const totalCredits = femaleCredit + medTaxCredit;
    const finalTax = Math.max(0, preTax - totalCredits);
    const effectiveRate = grossIncome > 0 ? (finalTax / grossIncome) * 100 : 0;
    const takeHome = grossIncome - finalTax;

    setResults({
      finalTax,
      monthlyTax: finalTax / 12,
      effectiveRate,
      takeHome,
      taxableIncome,
      grossIncome,
      totalDed,
      preTax,
      femaleCredit,
      medTaxCredit,
      totalCredits,
      bandRows,
      deductions: [
        { name: "Life Insurance", val: dLife },
        { name: "Medical Insurance", val: dMed },
        { name: "Building Insurance", val: dBld },
        { name: "Retirement Fund", val: dRet },
        { name: "Medical Tax Credit", val: medTaxCredit },
      ].filter(d => d.val > 0)
    });
  };

  return (
    <section id="tax-calculator" className="section-padding bg-muted/30 scroll-mt-20 print:bg-white print:p-0 print:m-0 print:block" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container-custom print:max-w-full print:p-0 print:m-0">
        <div className={`animate-on-scroll text-center mb-12 print:hidden ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Calculator className="h-4 w-4" />
            Nepal Tax Calculator FY 2081-82
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Estimate Your Income Tax
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our professional-grade calculator to understand your tax liability, 
            deductions, and net take-home pay based on the latest Nepal tax laws.
          </p>
        </div>

        {/* Print Header */}
        <div className="hidden print:flex flex-col mb-8 border-b-2 border-primary pb-6 w-full">
          <div className="flex justify-between items-end w-full">
            <div>
              <h1 className="text-3xl font-bold text-primary">TaxCare Nepal</h1>
              <p className="text-sm font-semibold text-gray-600 mt-1">Professional Income Tax Assessment Report</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Fiscal Year 2081-82 (2024-25)</p>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Assessment Date: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block print:w-full">
          {/* Input Panel */}
          <div className="lg:col-span-5 space-y-6 print:hidden">
            <Card className="border-primary/10 shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                <CardTitle className="text-base font-bold flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[11px] font-black text-white shadow-sm">1</span>
                  Taxpayer Profile
                </CardTitle>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Marital Status</Label>
                    <RadioGroup value={status} onValueChange={(v) => setStatus(v as TaxpayerStatus)} className="flex gap-4">
                      <div className="flex items-center space-x-2 group">
                        <RadioGroupItem value="single" id="s-single" className="border-primary/30" />
                        <Label htmlFor="s-single" className="text-sm font-semibold cursor-pointer group-hover:text-primary transition-colors">Individual</Label>
                      </div>
                      <div className="flex items-center space-x-2 group">
                        <RadioGroupItem value="couple" id="s-couple" className="border-primary/30" />
                        <Label htmlFor="s-couple" className="text-sm font-semibold cursor-pointer group-hover:text-primary transition-colors">Married</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Gender Selection</Label>
                    <RadioGroup value={gender} onValueChange={(v) => setGender(v as Gender)} className="flex gap-4">
                      <div className="flex items-center space-x-2 group">
                        <RadioGroupItem value="male" id="g-male" className="border-primary/30" />
                        <Label htmlFor="g-male" className="text-sm font-semibold cursor-pointer group-hover:text-primary transition-colors">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2 group">
                        <RadioGroupItem value="female" id="g-female" className="border-primary/30" />
                        <Label htmlFor="g-female" className="text-sm font-semibold cursor-pointer group-hover:text-primary transition-colors">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Income Source Type</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["salary", "business", "pension"].map((type) => (
                      <Button
                        key={type}
                        variant={incomeType === type ? "default" : "outline"}
                        size="sm"
                        className={`capitalize h-10 text-xs font-bold transition-all ${incomeType === type ? "shadow-md shadow-primary/20 scale-[1.02]" : "hover:bg-primary/5 hover:border-primary/30"}`}
                        onClick={() => {
                          setIncomeType(type as IncomeType);
                          if (type !== "salary") setHasSSF(false);
                        }}
                      >
                        {type === "business" ? "Business" : type}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                <CardTitle className="text-base font-bold flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[11px] font-black text-white shadow-sm">2</span>
                  Income Details
                </CardTitle>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Label htmlFor="gross-income" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Gross Annual Income (NPR)</Label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-border pr-3 pointer-events-none group-focus-within:border-primary/30 transition-colors">
                      <span className="text-sm font-bold text-muted-foreground group-focus-within:text-primary">Rs</span>
                    </div>
                    <Input
                      id="gross-income"
                      type="text"
                      placeholder="e.g. 1,200,000"
                      className="pl-16 h-12 text-base font-bold bg-muted/20 border-transparent hover:border-border focus:bg-white transition-all"
                      value={formatInput(grossIncome)}
                      onChange={handleInputChange(setGrossIncome)}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground italic">Tip: Enter your total income before any taxes or deductions.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2.5 text-muted-foreground">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted-foreground/20 text-[11px] font-black text-muted-foreground">3</span>
                  Deductions & Exemptions
                </CardTitle>
              </div>
              <CardContent className="p-4 space-y-4">
                {incomeType === "salary" && (
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
                    <Checkbox id="chk-ssf" checked={hasSSF} onCheckedChange={(v) => setHasSSF(!!v)} className="mt-1" />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="chk-ssf" className="text-sm font-bold cursor-pointer">I contribute to the Social Security Fund (SSF)</Label>
                      <p className="text-xs text-muted-foreground">Exempts Band 1 income from the 1% Social Security Tax</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {/* Life Insurance */}
                  <div className="flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="chk-life" checked={hasLifeIns} onCheckedChange={(v) => setHasLifeIns(!!v)} className="mt-1" />
                      <div className="grid gap-1.5 leading-none flex-1">
                        <Label htmlFor="chk-life" className="text-sm font-bold cursor-pointer">Life insurance premium paid</Label>
                        <p className="text-[11px] text-muted-foreground">Deductible: actual premium or Rs 40,000 — whichever is lower</p>
                      </div>
                    </div>
                    {hasLifeIns && (
                      <div className="ml-8 mt-1 relative animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">Rs</span>
                        <Input 
                          type="text" 
                          className="h-10 pl-9 text-sm font-bold" 
                          placeholder="Annual Premium Amount"
                          value={formatInput(lifeInsVal)}
                          onChange={handleInputChange(setLifeInsVal)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Medical Insurance */}
                  <div className="flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="chk-med" checked={hasMedIns} onCheckedChange={(v) => setHasMedIns(!!v)} className="mt-1" />
                      <div className="grid gap-1.5 leading-none flex-1">
                        <Label htmlFor="chk-med" className="text-sm font-bold cursor-pointer">Medical / health insurance premium</Label>
                        <p className="text-[11px] text-muted-foreground">Deductible: actual premium or Rs 20,000 — whichever is lower</p>
                      </div>
                    </div>
                    {hasMedIns && (
                      <div className="ml-8 mt-1 relative animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">Rs</span>
                        <Input 
                          type="text" 
                          className="h-10 pl-9 text-sm font-bold" 
                          placeholder="Annual Premium Amount"
                          value={formatInput(medInsVal)}
                          onChange={handleInputChange(setMedInsVal)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Building Insurance */}
                  <div className="flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="chk-bld" checked={hasBldIns} onCheckedChange={(v) => setHasBldIns(!!v)} className="mt-1" />
                      <div className="grid gap-1.5 leading-none flex-1">
                        <Label htmlFor="chk-bld" className="text-sm font-bold cursor-pointer">Private building insurance (own property)</Label>
                        <p className="text-[11px] text-muted-foreground">Deductible: actual premium or Rs 5,000 — whichever is lower</p>
                      </div>
                    </div>
                    {hasBldIns && (
                      <div className="ml-8 mt-1 relative animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">Rs</span>
                        <Input 
                          type="text" 
                          className="h-10 pl-9 text-sm font-bold" 
                          placeholder="Annual Premium Amount"
                          value={formatInput(bldInsVal)}
                          onChange={handleInputChange(setBldInsVal)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Retirement Fund */}
                  <div className="flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="chk-ret" checked={hasRetirement} onCheckedChange={(v) => setHasRetirement(!!v)} className="mt-1" />
                      <div className="grid gap-1.5 leading-none flex-1">
                        <Label htmlFor="chk-ret" className="text-sm font-bold cursor-pointer">Contribution to Approved Retirement Fund</Label>
                        <p className="text-[11px] text-muted-foreground">Deductible: lower of actual, Rs 5,00,000, or 1/3 of assessable income</p>
                      </div>
                    </div>
                    {hasRetirement && (
                      <div className="ml-8 mt-1 relative animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">Rs</span>
                        <Input 
                          type="text" 
                          className="h-10 pl-9 text-sm font-bold" 
                          placeholder="Actual Annual Contribution"
                          value={formatInput(retirementVal)}
                          onChange={handleInputChange(setRetirementVal)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Medical Expenses */}
                  <div className="flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="chk-medexp" checked={hasMedExpenses} onCheckedChange={(v) => setHasMedExpenses(!!v)} className="mt-1" />
                      <div className="grid gap-1.5 leading-none flex-1">
                        <Label htmlFor="chk-medexp" className="text-sm font-bold cursor-pointer">Medical expenses (for Medical Tax Credit)</Label>
                        <p className="text-[11px] text-muted-foreground">Credit = lower of: Rs 750, 15% of actual medical expenses, or tax liability (Sec. 51)</p>
                      </div>
                    </div>
                    {hasMedExpenses && (
                      <div className="ml-8 mt-1 relative animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">Rs</span>
                        <Input 
                          type="text" 
                          className="h-10 pl-9 text-sm font-bold" 
                          placeholder="Actual Annual Medical Expenses"
                          value={formatInput(medExpensesVal)}
                          onChange={handleInputChange(setMedExpensesVal)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" onClick={calculateTax}>
                  Calculate My Tax
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7 print:w-full">
            {results ? (
              <div className="space-y-6 animate-fade-in print:space-y-4">
                {/* Hero Results */}
                <div className="bg-primary rounded-2xl p-6 text-white shadow-xl shadow-primary/20 print:shadow-none print:border print:border-primary/20 print:bg-primary/5 print:text-primary">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center print:grid-cols-2">
                    <div>
                      <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-1 print:text-primary/70">Total Tax Payable</p>
                      <h3 className="text-4xl font-bold mb-1 print:text-primary">{formatRs(results.finalTax)}</h3>
                      <p className="text-primary-foreground/70 text-sm print:text-primary/60">{formatRs(results.monthlyTax)} per month</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-l border-white/10 pl-6 print:border-primary/20">
                      <div>
                        <p className="text-white/60 text-[10px] uppercase font-semibold print:text-primary/60">Effective Rate</p>
                        <p className="text-xl font-bold text-yellow-300 print:text-primary">{results.effectiveRate.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-[10px] uppercase font-semibold print:text-primary/60">Take-home</p>
                        <p className="text-xl font-bold print:text-primary">{formatRs(results.takeHome)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:grid-cols-4">
                  <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm print:shadow-none print:border-gray-200">
                    <p className="text-muted-foreground text-[10px] uppercase font-bold mb-1">Gross</p>
                    <p className="text-sm font-semibold">{formatRs(results.grossIncome)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm print:shadow-none print:border-gray-200">
                    <p className="text-muted-foreground text-[10px] uppercase font-bold mb-1">Deductions</p>
                    <p className="text-sm font-semibold text-rose-600">-{formatRs(results.totalDed)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm print:shadow-none print:border-gray-200">
                    <p className="text-muted-foreground text-[10px] uppercase font-bold mb-1">Taxable</p>
                    <p className="text-sm font-semibold">{formatRs(results.taxableIncome)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm print:shadow-none print:border-gray-200">
                    <p className="text-muted-foreground text-[10px] uppercase font-bold mb-1">Credits</p>
                    <p className="text-sm font-semibold text-emerald-600">{results.totalCredits > 0 ? formatRs(results.totalCredits) : "None"}</p>
                  </div>
                </div>

                {/* Band Table */}
                <Card className="border-primary/10 print:border-gray-200 print:shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Tax Band Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left border-bottom text-muted-foreground text-xs">
                            <th className="pb-3 font-medium">Band</th>
                            <th className="pb-3 font-medium text-right">Income in Band</th>
                            <th className="pb-3 font-medium text-center">Rate</th>
                            <th className="pb-3 font-medium text-right">Tax</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {results.bandRows.map((row: any, i: number) => (
                            <tr key={i} className="group hover:bg-muted/30 transition-colors">
                              <td className="py-3 text-xs">{row.lbl}</td>
                              <td className="py-3 text-right font-medium">{formatRs(row.slice)}</td>
                              <td className="py-3 text-center">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.colorClass} print:bg-transparent print:p-0`}>
                                  {row.rateLbl}
                                </span>
                              </td>
                              <td className="py-3 text-right font-bold">{formatRs(row.tax)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Professional Note */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 items-start print:bg-transparent print:border-gray-200">
                  <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5 print:hidden" />
                  <div className="text-xs text-amber-800 leading-relaxed print:text-gray-600">
                    <p className="font-bold mb-1 uppercase tracking-wider print:text-gray-800">Note for FY 2081-82:</p>
                    This calculation is based on the Income Tax Act, 2058 and updated rates for the current fiscal year. 
                    While we strive for 100% accuracy, this is an estimate. For complex business income or foreign tax credits, 
                    we recommend a professional consultation.
                  </div>
                </div>

                {/* Final CTA */}
                <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                  <Button asChild className="flex-1 bg-primary h-12">
                    <a href="/contact">Book Professional Audit</a>
                  </Button>
                  <Button variant="outline" className="flex-1 h-12" onClick={() => window.print()}>
                    Download Report (PDF)
                  </Button>
                </div>

                {/* Print Footer */}
                <div className="hidden print:block mt-12 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Contact Us</h3>
                      <div className="space-y-2 text-[10px] text-gray-600">
                        <p className="flex items-start gap-2">
                          <span className="font-semibold text-primary">Location:</span>
                          Putalisadak, Kathmandu, Bagmati Province, Nepal
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-primary">Phone:</span>
                          +977 9823405140
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-primary">Email:</span>
                          info@TaxCare.com.np
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">Business Hours</h3>
                      <div className="space-y-1 text-[10px] text-gray-600">
                        <p>Sun – Fri: 10:00 AM – 6:00 PM</p>
                        <p>Saturday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center text-[9px] text-gray-400">
                    &copy; {new Date().getFullYear()} TaxCare Nepal. All rights reserved.
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white border border-dashed border-muted-foreground/20 rounded-2xl print:hidden">
                <div className="bg-muted h-20 w-20 rounded-full flex items-center justify-center mb-6">
                  <Calculator className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Calculation Results</h3>
                <p className="text-muted-foreground max-w-sm">
                  Enter your income and profile details on the left to see your detailed tax breakdown.
                </p>
                <div className="mt-8 space-y-4 w-full max-w-xs">
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4 mx-auto" />
                  <div className="h-4 bg-muted animate-pulse rounded w-full" />
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2 mx-auto" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
