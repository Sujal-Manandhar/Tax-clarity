<?php
/**
 * Template part for displaying the About section
 * 
 * CMS Editable via ACF (planned)
 */

$about_title = taxcare_get_field('about_title') ?: 'About TaxCare Nepal';
$about_headline = taxcare_get_field('about_headline') ?: 'Nepal\'s Trusted Partner in <span class="text-primary">Tax & Compliance</span>';
$about_desc1 = taxcare_get_field('about_desc1') ?: 'Founded by seasoned Chartered Accountants, TaxCare Nepal was built on one mission: making tax and financial compliance straightforward for every Nepali business and individual.';
$about_desc2 = taxcare_get_field('about_desc2') ?: 'With deep expertise in Nepal\'s IRD regulations, VAT framework, and corporate tax law, our team handles your compliance with precision — so you never miss a deadline or face an unexpected penalty.';

$stats = taxcare_get_field('about_stats') ?: [
    ['icon' => 'users', 'value' => '500+', 'label' => 'Happy Clients', 'color' => 'text-primary'],
    ['icon' => 'clock', 'value' => '10+', 'label' => 'Years Experience', 'color' => 'text-green-600'],
    ['icon' => 'check-circle', 'value' => '98%', 'label' => 'Filing Accuracy', 'color' => 'text-yellow-600'],
    ['icon' => 'award', 'value' => '24hr', 'label' => 'Response Time', 'color' => 'text-primary'],
];

$features = taxcare_get_field('about_features') ?: [
    'IRD-certified tax professionals',
    'Transparent, flat-rate pricing',
    'Dedicated client relationship manager',
];
?>

<section class="section-padding bg-background">
    <div class="container-custom">
        <div class="grid items-center gap-12 lg:grid-cols-2">
            <!-- Left: Stats Grid -->
            <div class="order-2 lg:order-1">
                <div class="grid grid-cols-2 gap-4">
                    <?php foreach ($stats as $i => $stat) : ?>
                        <div class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                            <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10">
                                <?php if ($stat['icon'] === 'users') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 <?php echo esc_attr($stat['color']); ?>"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <?php elseif ($stat['icon'] === 'clock') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-6 w-6 <?php echo esc_attr($stat['color']); ?>"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <?php elseif ($stat['icon'] === 'check-circle') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle h-6 w-6 <?php echo esc_attr($stat['color']); ?>"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <?php elseif ($stat['icon'] === 'award') : ?>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-6 w-6 <?php echo esc_attr($stat['color']); ?>"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                <?php endif; ?>
                            </div>
                            <div class="text-3xl font-bold text-foreground"><?php echo esc_html($stat['value']); ?></div>
                            <div class="mt-1 text-sm text-muted-foreground"><?php echo esc_html($stat['label']); ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Right: Content -->
            <div class="animate-on-scroll order-1 lg:order-2 visible">
                <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    <?php echo esc_html($about_title); ?>
                </div>
                <h2 class="mb-5 text-3xl font-bold text-foreground md:text-4xl">
                    <?php echo $about_headline; ?>
                </h2>
                <p class="mb-4 text-muted-foreground">
                    <?php echo esc_html($about_desc1); ?>
                </p>
                <p class="mb-6 text-muted-foreground">
                    <?php echo esc_html($about_desc2); ?>
                </p>
                <ul class="mb-8 space-y-3">
                    <?php foreach ($features as $feature) : ?>
                        <li class="flex items-center gap-3 text-sm text-foreground">
                            <div class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle h-3.5 w-3.5 text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <?php echo esc_html($feature); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    Learn More About Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
    </div>
</section>
