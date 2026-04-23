<?php
/**
 * Template part for displaying the Why Choose Us section
 * 
 * CMS Editable via ACF (planned)
 */

$why_title = taxcare_get_field('why_title') ?: 'Why Choose Us';
$why_headline = taxcare_get_field('why_headline') ?: 'Why TaxCare Nepal';
$why_desc = taxcare_get_field('why_desc') ?: 'We\'re committed to making tax and compliance simple, so you can focus on what matters — growing your business.';

$reasons = taxcare_get_field('why_reasons') ?: [
    ['title' => 'Experienced Tax Professionals', 'description' => 'Our team has years of experience navigating Nepal\'s tax landscape.'],
    ['title' => 'Transparent Pricing', 'description' => 'No hidden fees. Clear pricing upfront for all our services.'],
    ['title' => 'Confidential & Secure', 'description' => 'Your financial data is protected with strict confidentiality protocols.'],
    ['title' => 'Timely Compliance', 'description' => 'Never miss a deadline with our proactive compliance management.'],
    ['title' => 'Nepal Regulation Expertise', 'description' => 'Deep understanding of local tax laws and IRD requirements.'],
];

$stats = taxcare_get_field('why_stats') ?: [
    ['icon' => 'users', 'value' => '500+', 'label' => 'Clients Served', 'color' => 'bg-primary/10 text-primary'],
    ['icon' => 'award', 'value' => '10+', 'label' => 'Years Experience', 'color' => 'bg-green-50 text-green-600'],
    ['icon' => 'trending-up', 'value' => '98%', 'label' => 'On-time Filing', 'color' => 'bg-yellow-50 text-yellow-600'],
    ['icon' => 'clock', 'value' => '24hr', 'label' => 'Response Time', 'color' => 'bg-primary/10 text-primary'],
];
?>

<section class="section-padding bg-background">
    <div class="container-custom">
        <!-- Section Header -->
        <div class="animate-on-scroll mx-auto mb-12 max-w-2xl text-center visible">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <?php echo esc_html($why_title); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                <?php echo esc_html($why_headline); ?>
            </h2>
            <p class="text-lg text-muted-foreground">
                <?php echo esc_html($why_desc); ?>
            </p>
        </div>

        <!-- Stats Row -->
        <div class="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <?php foreach ($stats as $i => $stat) : ?>
                <div class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible rounded-2xl border border-border p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full <?php echo esc_attr($stat['color']); ?>">
                        <?php if ($stat['icon'] === 'users') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <?php elseif ($stat['icon'] === 'award') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-6 w-6"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        <?php elseif ($stat['icon'] === 'trending-up') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-6 w-6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        <?php elseif ($stat['icon'] === 'clock') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-6 w-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <?php endif; ?>
                    </div>
                    <div class="text-3xl font-bold text-foreground"><?php echo esc_html($stat['value']); ?></div>
                    <div class="mt-1 text-sm text-muted-foreground"><?php echo esc_html($stat['label']); ?></div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Reasons Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <?php foreach ($reasons as $i => $reason) : ?>
                <div class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-card">
                    <div class="flex-shrink-0">
                        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-primary/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle h-5 w-5 text-green-600 transition-colors group-hover:text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="mb-1 font-semibold text-foreground"><?php echo esc_html($reason['title']); ?></h3>
                        <p class="text-sm text-muted-foreground"><?php echo esc_html($reason['description']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
