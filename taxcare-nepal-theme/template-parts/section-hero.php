<?php
/**
 * Template part for displaying the Hero section
 * 
 * CMS Editable via ACF (planned)
 */

$hero_badge = taxcare_get_field('hero_badge') ?: 'Trusted by 500+ businesses in Nepal';
$hero_headline = taxcare_get_field('hero_headline') ?: 'Smart Tax Solutions for <span class="relative inline-block"><span class="relative z-10 text-yellow-300">Individuals & Businesses</span><span class="absolute inset-x-0 bottom-1 z-0 h-3 bg-yellow-400/20 blur-sm" /></span>';
$hero_subheadline = taxcare_get_field('hero_subheadline') ?: 'We simplify tax, accounting, and compliance so you can focus on growth. Expert guidance tailored to Nepal\'s regulatory requirements.';
?>

<section class="relative overflow-hidden gradient-hero text-white">
    <!-- SVG Financial Pattern Background -->
    <div class="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.8" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>

    <!-- Decorative glow blobs -->
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div class="absolute right-0 top-0 h-80 w-80 rounded-full bg-green-400/15 blur-3xl"></div>
        <div class="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl"></div>
    </div>

    <div class="container-custom relative py-20 md:py-28 lg:py-36">
        <div class="mx-auto max-w-4xl text-center">
            <!-- Badge -->
            <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-sm">
                <span class="flex h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                <span class="text-white/90"><?php echo esc_html($hero_badge); ?></span>
            </div>

            <!-- Headline -->
            <h1 class="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                <?php echo $hero_headline; ?>
            </h1>

            <!-- Subheadline -->
            <p class="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
                <?php echo esc_html($hero_subheadline); ?>
            </p>

            <!-- CTAs -->
            <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-yellow-400 font-semibold text-gray-900 shadow-lg hover:bg-yellow-300 transition-colors">
                    Book Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
                <a href="<?php echo esc_url(home_url('/services')); ?>" class="inline-flex items-center justify-center h-11 px-8 rounded-md border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
                    Explore Services
                </a>
                <button onclick="document.getElementById('tax-calculator').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator h-4 w-4"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                    Tax Calculator
                </button>
            </div>

            <!-- Trust Elements -->
            <div class="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div class="flex items-center gap-2 text-sm text-white/75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-5 w-5 text-green-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    <span>100% Confidential</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-white/75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-5 w-5 text-green-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>On-time Compliance</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-white/75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle h-5 w-5 text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Expert Professionals</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Scroll Down Indicator -->
    <button
        onclick="window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })"
        aria-label="Scroll down"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white/90"
    >
        <span class="text-xs tracking-widest">SCROLL</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 animate-bounce"><path d="m6 9 6 6 6-6"></path></svg>
    </button>
</section>
