<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <?php
    $meta_description = taxcare_get_field('meta_description') ?: 'TaxCare Nepal provides expert tax, accounting, and compliance services for individuals and businesses in Nepal. Trusted Chartered Accountants for IRD, VAT, and corporate law.';
    $meta_keywords = taxcare_get_field('meta_keywords') ?: 'Tax Nepal, VAT Nepal, Accounting Services Kathmandu, Business Registration Nepal, IRD Filing, Tax Calculator Nepal';
    ?>
    <meta name="description" content="<?php echo esc_attr($meta_description); ?>">
    <meta name="keywords" content="<?php echo esc_attr($meta_keywords); ?>">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?>">
    <meta property="og:description" content="<?php echo esc_attr($meta_description); ?>">
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/screenshot.png'); ?>">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo esc_url(get_permalink()); ?>">
    <meta property="twitter:title" content="<?php wp_title('|', true, 'right'); ?>">
    <meta property="twitter:description" content="<?php echo esc_attr($meta_description); ?>">
    <meta property="twitter:image" content="<?php echo esc_url(get_template_directory_uri() . '/screenshot.png'); ?>">

    <?php wp_head(); ?>
    <style>
        /* CRITICAL PRINT FIX: Hide everything by default when printing */
        @media print {
            body * {
                visibility: hidden !important;
            }
            /* Show ONLY the tax calculator section and its children */
            #tax-calculator, #tax-calculator * {
                visibility: visible !important;
            }
            /* Position the calculator at the very top of the page */
            #tax-calculator {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                background: white !important;
            }
            /* Hide the calculator's internal "Download" and "Book Audit" buttons in the PDF */
            .print\:hidden {
                display: none !important;
            }
        }
    </style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site min-h-screen flex flex-col">
    <header id="masthead" class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
        <div class="container-custom">
            <div class="flex h-16 items-center justify-between md:h-20">
                <!-- Logo -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2">
                    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-md">
                        <span class="text-lg font-bold text-primary-foreground">TC</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-base font-bold text-foreground leading-tight">TaxCare Nepal</span>
                        <span class="text-xs text-muted-foreground">Kathmandu, Nepal</span>
                    </div>
                </a>

                <!-- Navigation -->
                <div class="hidden flex-1 items-center justify-center md:flex">
                    <nav id="site-navigation" class="flex items-center gap-1 rounded-full border border-border/50 bg-muted/30 p-1 backdrop-blur-sm">
                        <!-- Home -->
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                            Home
                        </a>

                        <!-- Services Mega Menu -->
                        <div class="relative group" id="services-dropdown">
                            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                                Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200 group-hover:rotate-180"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>

                            <!-- Mega Dropdown Content (Bridge added to prevent hover gap) -->
                            <div class="absolute left-1/2 top-full z-50 w-[580px] -translate-x-1/2 pt-[10px] opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                                <div class="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                                    <div class="p-4">
                                        <p class="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                            Our Services
                                        </p>
                                        <div class="grid grid-cols-2 gap-1">
                                            <?php
                                            $services = [
                                                ['slug' => 'corporate-tax-filing', 'title' => 'Corporate Tax', 'tagline' => 'Accurate. Compliant. On Time.', 'icon' => 'building-2'],
                                                ['slug' => 'personal-tax-planning', 'title' => 'Personal Tax', 'tagline' => 'Minimize Liability. Maximize...', 'icon' => 'user'],
                                                ['slug' => 'vat-consulting', 'title' => 'VAT Consulting', 'tagline' => 'VAT Made Simple for Nepal...', 'icon' => 'receipt'],
                                                ['slug' => 'audit-compliance', 'title' => 'Audit', 'tagline' => 'Independent. Thorough. Trusted.', 'icon' => 'clipboard-check'],
                                                ['slug' => 'accounting-bookkeeping', 'title' => 'Accounting', 'tagline' => 'Clean Books. Clear Insights.', 'icon' => 'book-open'],
                                                ['slug' => 'pan-vat-registration', 'title' => 'PAN / VAT Reg.', 'tagline' => 'Get Registered. Get Started.', 'icon' => 'credit-card'],
                                                ['slug' => 'payroll-compliance', 'title' => 'Payroll', 'tagline' => 'Pay Right. Stay Compliant.', 'icon' => 'users'],
                                            ];

                                            foreach ($services as $s) :
                                            ?>
                                                <a href="<?php echo esc_url( home_url( '/service/' . $s['slug'] ) ); ?>" class="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5">
                                                    <div class="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                        <?php if ($s['icon'] == 'building-2') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                                                        <?php elseif ($s['icon'] == 'user') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                        <?php elseif ($s['icon'] == 'receipt') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
                                                        <?php elseif ($s['icon'] == 'clipboard-check') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                                                        <?php elseif ($s['icon'] == 'book-open') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                    <?php elseif ($s['icon'] == 'credit-card') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                                                        <?php elseif ($s['icon'] == 'users') : ?>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                        <?php endif; ?>
                                                    </div>
                                                    <div class="flex-1">
                                                        <div class="text-sm font-semibold text-foreground group-hover:text-primary leading-none mb-1">
                                                            <?php echo esc_html($s['title']); ?>
                                                        </div>
                                                        <div class="text-[11px] text-muted-foreground leading-tight line-clamp-1"><?php echo esc_html($s['tagline']); ?></div>
                                                    </div>
                                                </a>
                                            <?php endforeach; ?>
                                        </div>
                                        <div class="mt-3 border-t border-border pt-3">
                                            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="flex items-center justify-center rounded-xl bg-primary/5 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary/10">
                                                View All Services →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- About -->
                        <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                            About
                        </a>

                        <!-- Blog -->
                        <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                            Blog
                        </a>

                        <!-- FAQ -->
                        <a href="<?php echo esc_url( home_url( '/faq' ) ); ?>" class="rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                            FAQ
                        </a>

                        <!-- Contact -->
                        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="rounded-full px-4 py-2 text-sm font-medium transition-colors text-foreground/70 hover:bg-background hover:text-primary hover:shadow-sm">
                            Contact
                        </a>
                    </nav>
                </div>

                <!-- Desktop CTA -->
                <div class="hidden items-center gap-4 md:flex">
                    <a href="tel:+9779823405140" class="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span class="hidden lg:inline">+977 9823405140</span>
                    </a>
                    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
                        Book a Consultation
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" aria-label="Toggle Menu" class="md:hidden flex h-12 w-12 items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                    <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                    <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x hidden"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Drawer -->
        <div id="mobile-drawer" class="fixed inset-y-0 right-0 z-[60] w-full max-w-xs transform translate-x-full bg-background shadow-xl transition-transform duration-300 ease-in-out md:hidden border-l border-border">
            <div class="flex items-center justify-between border-b border-border px-5 py-4">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2">
                    <div class="flex h-8 w-8 items-center justify-center rounded bg-primary">
                        <span class="text-xs font-bold text-primary-foreground">TC</span>
                    </div>
                    <span class="text-sm font-bold text-foreground">TaxCare Nepal</span>
                </a>
                <button id="mobile-drawer-close" aria-label="Close Menu" class="flex h-12 w-12 items-center justify-center text-muted-foreground hover:bg-accent rounded-md transition-colors">
                    <svg xmlns="http://www.s3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <nav class="px-2 py-4">
                <!-- Mobile Home -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-accent transition-colors">
                    Home
                </a>

                <!-- Mobile Services Accordion -->
                <div class="flex flex-col">
                    <button id="mobile-services-toggle" class="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-accent transition-colors">
                        <span>Services</span>
                        <svg id="mobile-services-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                    </button>
                    <div id="mobile-services-menu" class="hidden flex-col gap-0.5 border-l-2 border-primary/20 ml-6 pl-3 pb-2 transition-all duration-300">
                        <?php
                        $services = [
                            ['slug' => 'corporate-tax-filing', 'title' => 'Corporate Tax', 'icon' => 'building-2'],
                            ['slug' => 'personal-tax-planning', 'title' => 'Personal Tax', 'icon' => 'user'],
                            ['slug' => 'vat-consulting', 'title' => 'VAT Consulting', 'icon' => 'receipt'],
                            ['slug' => 'audit-compliance', 'title' => 'Audit', 'icon' => 'clipboard-check'],
                            ['slug' => 'accounting-bookkeeping', 'title' => 'Accounting', 'icon' => 'book-open'],
                            ['slug' => 'pan-vat-registration', 'title' => 'PAN / VAT Reg.', 'icon' => 'credit-card'],
                            ['slug' => 'payroll-compliance', 'title' => 'Payroll', 'icon' => 'users'],
                        ];
                        foreach ($services as $s) :
                        ?>
                            <a href="<?php echo esc_url( home_url( '/service/' . $s['slug'] ) ); ?>" class="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary">
                                <?php if ($s['icon'] == 'building-2') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2 text-primary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                                <?php elseif ($s['icon'] == 'user') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <?php elseif ($s['icon'] == 'receipt') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt text-primary"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
                                <?php elseif ($s['icon'] == 'clipboard-check') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check text-primary"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                                <?php elseif ($s['icon'] == 'book-open') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                <?php elseif ($s['icon'] == 'credit-card') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card text-primary"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                                <?php elseif ($s['icon'] == 'users') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <?php endif; ?>
                                <?php echo esc_html($s['title']); ?>
                            </a>
                        <?php endforeach; ?>
                        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="mt-1 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5">
                            All Services →
                        </a>
                    </div>
                </div>

                <!-- Mobile Calculator -->
                <a href="<?php echo esc_url( home_url( '/calculator' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground/90 hover:bg-primary/5 hover:text-primary transition-colors">
                    Calculator
                </a>

                <!-- Mobile About -->
                <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground/90 hover:bg-primary/5 hover:text-primary transition-colors">
                    About
                </a>

                <!-- Mobile Blog -->
                <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground/90 hover:bg-primary/5 hover:text-primary transition-colors">
                    Blog
                </a>

                <!-- Mobile FAQ -->
                <a href="<?php echo esc_url( home_url( '/faq' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground/90 hover:bg-primary/5 hover:text-primary transition-colors">
                    FAQ
                </a>

                <!-- Mobile Contact -->
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="flex w-full items-center rounded-md px-4 py-3 text-base font-medium text-foreground/90 hover:bg-primary/5 hover:text-primary transition-colors">
                    Contact
                </a>
            </nav>
            
            <!-- Mobile Drawer Footer -->
            <div class="border-t border-border px-4 py-6 space-y-4">
                <a href="tel:+9779823405140" class="flex items-center justify-center gap-3 rounded-xl border border-border py-4 text-sm font-bold text-foreground/90 transition-colors hover:border-primary hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-5 w-5 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Call +977 9823405140
                </a>
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="flex items-center justify-center rounded-xl bg-primary py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
                    Get Consultation
                </a>
            </div>
        </div>
        <!-- Backdrop -->
        <div id="drawer-backdrop" class="fixed inset-0 z-50 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"></div>
    </header>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const close = document.getElementById('mobile-drawer-close');
        const drawer = document.getElementById('mobile-drawer');
        const backdrop = document.getElementById('drawer-backdrop');

        function toggleDrawer() {
            const isOpen = drawer.classList.contains('translate-x-0');
            if (isOpen) {
                drawer.classList.replace('translate-x-0', 'translate-x-full');
                backdrop.classList.replace('opacity-100', 'opacity-0');
                backdrop.classList.add('pointer-events-none');
                document.body.style.overflow = '';
            } else {
                drawer.classList.replace('translate-x-full', 'translate-x-0');
                backdrop.classList.replace('opacity-0', 'opacity-100');
                backdrop.classList.remove('pointer-events-none');
                document.body.style.overflow = 'hidden';
            }
        }

        toggle.addEventListener('click', toggleDrawer);
        close.addEventListener('click', toggleDrawer);
        backdrop.addEventListener('click', toggleDrawer);

        // --- Mobile Services Accordion ---
        const servicesToggle = document.getElementById('mobile-services-toggle');
        const servicesMenu = document.getElementById('mobile-services-menu');
        const servicesIcon = document.getElementById('mobile-services-icon');

        if (servicesToggle) {
            servicesToggle.addEventListener('click', function() {
                const isHidden = servicesMenu.classList.contains('hidden');
                if (isHidden) {
                    servicesMenu.classList.remove('hidden');
                    servicesMenu.classList.add('flex');
                    servicesIcon.classList.add('rotate-180');
                } else {
                    servicesMenu.classList.add('hidden');
                    servicesMenu.classList.remove('flex');
                    servicesIcon.classList.remove('rotate-180');
                }
            });
        }

        // --- Intersection Observer for Animations ---
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    });
    </script>

