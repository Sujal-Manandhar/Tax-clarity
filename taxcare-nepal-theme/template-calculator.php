<?php
/**
 * Template Name: Tax Calculator
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <!-- Calculator Header -->
    <section class="bg-primary/5 py-16 md:py-24">
        <div class="container-custom">
            <div class="mx-auto max-w-3xl text-center">
                <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    Interactive Tool
                </div>
                <h1 class="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Income Tax Calculator Nepal
                </h1>
                <p class="text-xl text-muted-foreground">
                    Estimate your tax liability instantly based on the latest IRD tax slabs for Fiscal Year 2080/81 (2023/24).
                </p>
            </div>
        </div>
    </section>

    <!-- Calculator Interface -->
    <section class="section-padding">
        <div class="container-custom">
            <div class="mx-auto max-w-5xl">
                <!-- This div will be populated by the FROZEN React Tax Calculator -->
                <div id="tax-calculator-root" class="min-h-[600px] rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                    <div class="flex items-center justify-center h-full p-20">
                        <div class="text-center">
                            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                            <p class="mt-4 text-muted-foreground font-medium">Loading Tax Calculator...</p>
                        </div>
                    </div>
                </div>
                
                <!-- SEO Content for Calculator Page -->
                <div class="mt-20 prose prose-lg max-w-none border-t border-border pt-16">
                    <div class="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 class="text-2xl font-bold mb-4">How to Use the Tax Calculator</h2>
                            <p>Our Nepal Income Tax Calculator is designed to help both salaried individuals and business owners estimate their tax obligations. Simply enter your annual or monthly income, select your filing status (Individual or Married), and our tool will calculate your tax based on the current progressive tax rates.</p>
                            <ul class="space-y-2 mt-4">
                                <li><strong>Step 1:</strong> Select your assessment period (Monthly or Yearly).</li>
                                <li><strong>Step 2:</strong> Enter your total gross income.</li>
                                <li><strong>Step 3:</strong> Choose your marital status for correct tax slabs.</li>
                                <li><strong>Step 4:</strong> Review your tax summary and download the report.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold mb-4">Tax Slabs & Deductions (FY 2081/82)</h2>
                            <p>Nepal follows a progressive tax system. For individuals, the first Rs. 500,000 is taxed at 1% (Social Security Tax). For married couples, the first slab is Rs. 600,000.</p>
                            
                            <h3 class="text-lg font-bold mt-6 mb-2">Common Deductions & Exemptions:</h3>
                            <ul class="space-y-2 text-sm">
                                <li><strong>SSF Contribution:</strong> Exempts Band 1 income from the 1% Social Security Tax.</li>
                                <li><strong>Life Insurance:</strong> Deductible up to Rs. 40,000 per annum.</li>
                                <li><strong>Medical Insurance:</strong> Deductible up to Rs. 20,000 per annum.</li>
                                <li><strong>Private Building Insurance:</strong> Deductible up to Rs. 5,000 for own property.</li>
                                <li><strong>Retirement Fund:</strong> Deductible up to Rs. 5,00,000 or 1/3 of assessable income.</li>
                                <li><strong>Medical Tax Credit:</strong> Up to Rs. 750 (15% of expenses) credit against tax liability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
