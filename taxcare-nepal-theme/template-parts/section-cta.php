<?php
/**
 * Template part for displaying the CTA Banner section
 * 
 * CMS Editable via ACF (planned)
 */

$cta_badge = taxcare_get_field('cta_badge') ?: 'Free Initial Consultation';
$cta_headline = taxcare_get_field('cta_headline') ?: 'Get Expert Tax Help Today';
$cta_desc = taxcare_get_field('cta_desc') ?: 'Talk to a tax professional and get a clear plan for your compliance. Zero obligation — just clarity.';

$whatsapp_number = "9779823405140";
$whatsapp_message = rawurlencode("Hello! I'd like to get expert tax help from TaxCare Nepal.");
$whatsapp_url = "https://wa.me/{$whatsapp_number}?text={$whatsapp_message}";
?>

<section class="relative overflow-hidden section-padding bg-primary">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.8" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
    </div>
    <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
    <div class="absolute -bottom-10 left-1/4 h-48 w-48 rounded-full bg-white/5 blur-3xl"></div>

    <div class="container-custom relative">
        <div class="animate-on-scroll mx-auto max-w-3xl text-center visible">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <?php echo esc_html($cta_badge); ?>
            </div>
            <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
                <?php echo esc_html($cta_headline); ?>
            </h2>
            <p class="mb-8 text-lg text-white/80">
                <?php echo esc_html($cta_desc); ?>
            </p>
            <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-yellow-400 font-semibold text-gray-900 shadow-lg hover:bg-yellow-300 transition-colors">
                    Book Free Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="tel:+9779823405140" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Call Now
                </a>
                <a href="<?php echo esc_url($whatsapp_url); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-green-500 text-white hover:bg-green-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-4 w-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
