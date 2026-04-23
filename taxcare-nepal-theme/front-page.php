<?php
/**
 * The template for displaying the front page
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    
    <?php 
    // Hero Section
    get_template_part('template-parts/section-hero'); 

    // About Section
    get_template_part('template-parts/section-about'); 

    // Services Overview
    get_template_part('template-parts/section-services'); 
    ?>

    <!-- Tax Calculator Section (Includes FROZEN React Logic) -->
    <div id="tax-calculator">
        <div id="tax-calculator-root">
            <!-- 
              FROZEN ZONE: 
              The React bundle enqueued in functions.php will mount the 
              Tax Calculator here. All logic, state, and printing functionality 
              is preserved within the React component.
            -->
        </div>
    </div>

    <?php 
    // Why Choose Us
    get_template_part('template-parts/section-why'); 

    // How We Work (Process)
    get_template_part('template-parts/section-process'); 

    // Industries We Serve
    get_template_part('template-parts/section-industries'); 

    // Testimonials
    get_template_part('template-parts/section-testimonials'); 

    // CTA Banner
    get_template_part('template-parts/section-cta'); 

    // Contact Form (Preview)
    echo '<section class="section-padding bg-muted/30">';
    echo '<div class="container-custom">';
    echo '<div class="mx-auto max-w-2xl">';
    get_template_part('template-parts/section-contact');
    echo '</div>';
    echo '</div>';
    echo '</section>';
    ?>

</main>

<?php
get_footer();
