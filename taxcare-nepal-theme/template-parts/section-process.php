<?php
/**
 * Template part for displaying the Process steps section
 * 
 * CMS Editable via ACF (planned)
 */

$process_title = taxcare_get_field('process_title') ?: 'Our Process';
$process_headline = taxcare_get_field('process_headline') ?: 'How We Work';
$process_desc = taxcare_get_field('process_desc') ?: 'A simple, transparent process designed to make your experience stress-free';

$steps = taxcare_get_field('process_steps') ?: [
    ['number' => '01', 'title' => 'Consultation', 'description' => 'We understand your needs and assess your current compliance status.'],
    ['number' => '02', 'title' => 'Documentation', 'description' => 'Collect required documents with a clear checklist tailored to your case.'],
    ['number' => '03', 'title' => 'Filing & Compliance', 'description' => 'Accurate filing and proactive deadline management to keep you compliant.'],
    ['number' => '04', 'title' => 'Ongoing Support', 'description' => 'Continuous guidance for audits, updates, and future planning.'],
];
?>

<section class="section-padding bg-muted/30">
    <div class="container-custom">
        <!-- Section Header -->
        <div class="animate-on-scroll mx-auto mb-12 max-w-2xl text-center visible">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <?php echo esc_html($process_title); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                <?php echo esc_html($process_headline); ?>
            </h2>
            <p class="text-lg text-muted-foreground">
                <?php echo esc_html($process_desc); ?>
            </p>
        </div>

        <!-- Steps -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <?php foreach ($steps as $index => $step) : ?>
                <div class="animate-on-scroll animate-on-scroll-delay-<?php echo $index + 1; ?> visible relative">
                    <!-- Connector Line -->
                    <?php if ($index < count($steps) - 1) : ?>
                        <div class="absolute left-1/2 top-10 hidden h-px w-full border-t-2 border-dashed border-primary/20 lg:block"></div>
                    <?php endif; ?>

                    <div class="relative flex flex-col items-center text-center">
                        <!-- Number -->
                        <div class="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg ring-4 ring-primary/20 transition-transform duration-300 hover:scale-105">
                            <?php echo esc_html($step['number']); ?>
                        </div>
                        <!-- Content -->
                        <h3 class="mb-2 text-lg font-semibold text-foreground">
                            <?php echo esc_html($step['title']); ?>
                        </h3>
                        <p class="text-sm text-muted-foreground"><?php echo esc_html($step['description']); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
