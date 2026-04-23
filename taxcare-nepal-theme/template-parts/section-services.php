<?php
/**
 * Template part for displaying the Services section
 * 
 * CMS Editable via Custom Post Type 'services' (planned)
 */

$services_title = taxcare_get_field('services_title') ?: 'What We Do';
$services_headline = taxcare_get_field('services_headline') ?: 'Comprehensive Tax & Compliance Services';
$services_desc = taxcare_get_field('services_desc') ?: 'Tailored for individuals and businesses across Nepal';

// Placeholder for featured services (usually would be a WP_Query)
$featured_services = [
    ['title' => 'Corporate Tax Filing', 'slug' => 'corporate-tax-filing', 'tagline' => 'Annual & Periodical', 'description' => 'Expert preparation and filing of corporate income tax returns with full IRD compliance.', 'icon' => 'briefcase', 'badge' => 'Most Popular'],
    ['title' => 'Personal Tax Planning', 'slug' => 'personal-tax-planning', 'tagline' => 'Wealth Optimization', 'description' => 'Strategic tax planning for high-net-worth individuals and salaried professionals.', 'icon' => 'user'],
    ['title' => 'VAT Consulting', 'slug' => 'vat-consulting', 'tagline' => 'Returns & Audits', 'description' => 'Comprehensive VAT management, from monthly returns to handling IRD investigations.', 'icon' => 'file-text'],
    ['title' => 'Audit & Compliance', 'slug' => 'audit-compliance', 'tagline' => 'Statutory & Internal', 'description' => 'Rigorous auditing services ensuring your financial statements meet all regulatory standards.', 'icon' => 'shield-check'],
];

$additional_services = [
    ['title' => 'Accounting & Bookkeeping', 'slug' => 'accounting-bookkeeping', 'tagline' => 'Daily Financial Management'],
    ['title' => 'PAN/VAT Registration', 'slug' => 'pan-vat-registration', 'tagline' => 'New Business Setup'],
    ['title' => 'Payroll Compliance', 'slug' => 'payroll-compliance', 'tagline' => 'Salary & SST Management'],
];
?>

<section class="section-padding bg-muted/30">
    <div class="container-custom">
        <!-- Section Header -->
        <div class="animate-on-scroll mx-auto mb-12 max-w-2xl text-center visible">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <?php echo esc_html($services_title); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                <?php echo esc_html($services_headline); ?>
            </h2>
            <p class="text-lg text-muted-foreground">
                <?php echo esc_html($services_desc); ?>
            </p>
        </div>

        <!-- Featured Services Grid -->
        <div class="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <?php foreach ($featured_services as $i => $service) : ?>
                <a href="<?php echo esc_url(home_url('/service/' . $service['slug'])); ?>" class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                    <?php if (isset($service['badge'])) : ?>
                        <div class="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                            <?php echo esc_html($service['badge']); ?>
                        </div>
                    <?php endif; ?>
                    <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <?php if ($service['icon'] === 'briefcase') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-6 w-6"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <?php elseif ($service['icon'] === 'user') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-6 w-6"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <?php elseif ($service['icon'] === 'file-text') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-6 w-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14.5 2 14.5 7 20 7"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                        <?php elseif ($service['icon'] === 'shield-check') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        <?php endif; ?>
                    </div>
                    <h3 class="mb-1 text-lg font-semibold text-foreground group-hover:text-primary"><?php echo esc_html($service['title']); ?></h3>
                    <p class="mb-3 text-xs font-medium text-primary/70"><?php echo esc_html($service['tagline']); ?></p>
                    <p class="text-sm text-muted-foreground line-clamp-2"><?php echo esc_html($service['description']); ?></p>
                    <div class="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-3.5 w-3.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>

        <!-- Divider -->
        <div class="mb-8 flex items-center gap-4">
            <div class="flex-1 border-t border-border"></div>
            <span class="text-sm text-muted-foreground">Additional Services</span>
            <div class="flex-1 border-t border-border"></div>
        </div>

        <!-- Additional Services Grid -->
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <?php foreach ($additional_services as $i => $service) : ?>
                <a href="<?php echo esc_url(home_url('/service/' . $service['slug'])); ?>" class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-soft">
                    <div class="flex-shrink-0">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="mb-0.5 font-semibold text-foreground group-hover:text-primary"><?php echo esc_html($service['title']); ?></h3>
                        <p class="text-xs text-muted-foreground"><?php echo esc_html($service['tagline']); ?></p>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>

        <!-- CTA -->
        <div class="mt-12 text-center">
            <a href="<?php echo esc_url(home_url('/services')); ?>" class="inline-flex items-center justify-center h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors">
                View All Services
            </a>
        </div>
    </div>
</section>
