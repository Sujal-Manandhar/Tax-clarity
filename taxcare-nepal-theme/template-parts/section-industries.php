<?php
/**
 * Template part for displaying the Industries section
 * 
 * CMS Editable via ACF (planned)
 */

$industries_title = taxcare_get_field('industries_title') ?: 'Who We Serve';
$industries_headline = taxcare_get_field('industries_headline') ?: 'Industries We Serve';
$industries_desc = taxcare_get_field('industries_desc') ?: 'Tailored solutions for diverse business types across Nepal';

$industries = taxcare_get_field('industries') ?: [
    ['icon' => 'building-2', 'name' => 'SMEs', 'description' => 'Small & medium enterprises'],
    ['icon' => 'rocket', 'name' => 'Startups', 'description' => 'Early-stage companies'],
    ['icon' => 'heart', 'name' => 'NGOs', 'description' => 'Non-profits & charities'],
    ['icon' => 'briefcase', 'name' => 'Freelancers', 'description' => 'Independent professionals'],
    ['icon' => 'globe', 'name' => 'Import/Export', 'description' => 'Trade businesses'],
    ['icon' => 'store', 'name' => 'Retail', 'description' => 'Shops & e-commerce'],
];
?>

<section class="section-padding bg-background">
    <div class="container-custom">
        <!-- Section Header -->
        <div class="animate-on-scroll mx-auto mb-12 max-w-2xl text-center visible">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <?php echo esc_html($industries_title); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                <?php echo esc_html($industries_headline); ?>
            </h2>
            <p class="text-lg text-muted-foreground">
                <?php echo esc_html($industries_desc); ?>
            </p>
        </div>

        <!-- Industries Grid -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <?php foreach ($industries as $i => $industry) : ?>
                <div class="animate-on-scroll animate-on-scroll-delay-<?php echo $i + 1; ?> visible group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                    <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <?php if ($industry['icon'] === 'building-2') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2 h-7 w-7"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                        <?php elseif ($industry['icon'] === 'rocket') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket h-7 w-7"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-2.91a2.18 2.18 0 0 0-3.09-.09Z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"></path><path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2"></path><path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5"></path></svg>
                        <?php elseif ($industry['icon'] === 'heart') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-7 w-7"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        <?php elseif ($industry['icon'] === 'briefcase') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-7 w-7"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <?php elseif ($industry['icon'] === 'globe') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-7 w-7"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20"></path><path d="M2 12h20"></path></svg>
                        <?php elseif ($industry['icon'] === 'store') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store h-7 w-7"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path></svg>
                        <?php endif; ?>
                    </div>
                    <div>
                        <div class="font-semibold text-foreground"><?php echo esc_html($industry['name']); ?></div>
                        <div class="mt-0.5 text-xs text-muted-foreground"><?php echo esc_html($industry['description']); ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
