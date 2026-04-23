<?php
/**
 * Template part for displaying the Testimonials section
 * 
 * CMS Editable via Custom Post Type 'testimonials' or ACF (planned)
 */

$testimonials_title = taxcare_get_field('testimonials_title') ?: 'Client Stories';
$testimonials_headline = taxcare_get_field('testimonials_headline') ?: 'What Our Clients Say';
$testimonials_desc = taxcare_get_field('testimonials_desc') ?: 'Trusted by businesses across Nepal for reliable tax and accounting services';

$testimonials = taxcare_get_field('testimonials_items') ?: [
    [
        'name' => 'Rajesh Sharma',
        'role' => 'SME Owner',
        'company' => 'Sharma Traders Pvt. Ltd.',
        'quote' => 'TaxCare Nepal made our VAT filings simple and always on time. Their team is professional and really understands Nepal\'s tax requirements.',
        'rating' => 5,
        'avatarColor' => 'bg-blue-500',
        'image' => null,
        'facebook' => '#',
        'linkedin' => null,
        'website' => null,
    ],
    [
        'name' => 'Abhishek Adhikari',
        'role' => 'Himalaya Krishi Founder',
        'company' => 'Himalaya Krishi',
        'quote' => 'Professional, responsive, and very clear with guidance. They helped us register our company and set up proper bookkeeping from day one.',
        'rating' => 5,
        'avatarColor' => 'bg-emerald-500',
        'image' => get_template_directory_uri() . '/avatars/abhishek-adhikar.png',
        'facebook' => '#',
        'linkedin' => '#',
        'website' => '#',
    ],
    [
        'name' => 'Sujal Manandhar',
        'role' => 'Manager',
        'company' => 'Dakshina Oil Factory',
        'quote' => 'I used to stress about tax deadlines every month. Now with TaxCare Nepal handling everything, I can focus on my business with peace of mind.',
        'rating' => 4.5,
        'avatarColor' => 'bg-orange-500',
        'image' => get_template_directory_uri() . '/avatars/sj.png',
        'facebook' => '#',
        'linkedin' => '#',
        'website' => '#',
    ],
];

function render_stars($rating) {
    $stars_html = '';
    for ($i = 0; $i < 5; $i++) {
        $filled = $i < floor($rating);
        $half = !$filled && $i < $rating;
        $stars_html .= '<span class="relative inline-flex h-4 w-4">';
        $stars_html .= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-4 w-4 text-yellow-300/30"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
        if ($filled || $half) {
            $width = $half ? '50%' : '100%';
            $stars_html .= '<span class="absolute inset-0 overflow-hidden" style="width: ' . $width . '">';
            $stars_html .= '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-4 w-4 fill-yellow-300 text-yellow-300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
            $stars_html .= '</span>';
        }
        $stars_html .= '</span>';
    }
    return $stars_html;
}

function get_initials($name) {
    $parts = explode(' ', trim($name));
    $first = mb_substr($parts[0], 0, 1, 'UTF-8');
    $last = count($parts) > 1 ? mb_substr($parts[count($parts) - 1], 0, 1, 'UTF-8') : '';
    return strtoupper($first . $last);
}
?>

<section class="section-padding gradient-hero text-white">
    <div class="container-custom">
        <!-- Section Header -->
        <div class="animate-on-scroll mx-auto mb-12 max-w-2xl text-center visible">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <?php echo esc_html($testimonials_title); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
                <?php echo esc_html($testimonials_headline); ?>
            </h2>
            <p class="text-lg text-white/70">
                <?php echo esc_html($testimonials_desc); ?>
            </p>
        </div>

        <!-- Static Grid for WP (Slider JS can be added later) -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <?php foreach ($testimonials as $testimonial) : ?>
                <div class="flex h-full flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                    <!-- Quote icon -->
                    <div class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote h-5 w-5 text-yellow-300"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                    </div>

                    <!-- Stars -->
                    <div class="mb-4 flex gap-1">
                        <?php echo render_stars($testimonial['rating']); ?>
                    </div>

                    <!-- Quote -->
                    <p class="mb-6 flex-1 text-white/85 leading-relaxed">
                        <?php echo esc_html($testimonial['quote']); ?>
                    </p>

                    <!-- Divider -->
                    <div class="mb-4 border-t border-white/10"></div>

                    <!-- Author -->
                    <div class="flex items-center gap-3">
                        <?php if (!empty($testimonial['image'])) : ?>
                            <img src="<?php echo esc_url($testimonial['image']); ?>" alt="<?php echo esc_attr($testimonial['name']); ?>" class="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-white/30">
                        <?php else : ?>
                            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full <?php echo esc_attr($testimonial['avatarColor']); ?> text-sm font-bold text-white ring-2 ring-white/30">
                                <?php echo esc_html(get_initials($testimonial['name'])); ?>
                            </div>
                        <?php endif; ?>

                        <div class="min-w-0 flex-1">
                            <div class="truncate text-sm font-semibold text-white">
                                <?php echo esc_html($testimonial['name']); ?>
                            </div>
                            <div class="truncate text-xs text-white/55">
                                <?php echo esc_html($testimonial['role']); ?>, <?php echo esc_html($testimonial['company']); ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
