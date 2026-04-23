<?php
/**
 * Template Name: Services Listing
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <?php 
    // Reuse the Services Overview template part
    get_template_part('template-parts/section-services'); 

    // Reuse CTA Banner
    get_template_part('template-parts/section-cta');
    ?>
</main>

<?php
get_footer();
