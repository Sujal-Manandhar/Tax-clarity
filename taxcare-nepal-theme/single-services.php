<?php
/**
 * The template for displaying all single services
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Hero Section -->
            <section class="relative overflow-hidden bg-primary/5 py-16 md:py-24">
                <div class="container-custom relative z-10">
                    <div class="mx-auto max-w-3xl text-center">
                        <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            Service Details
                        </div>
                        <h1 class="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            <?php the_title(); ?>
                        </h1>
                        <?php if ( has_excerpt() ) : ?>
                            <p class="text-xl text-muted-foreground">
                                <?php echo get_the_excerpt(); ?>
                            </p>
                        <?php endif; ?>
                    </div>
                </div>
            </section>

            <!-- Content Section -->
            <section class="section-padding">
                <div class="container-custom">
                    <div class="mx-auto max-w-4xl">
                        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline">
                            <?php
                            the_content();
                            ?>
                        </div>
                        
                        <!-- CTA -->
                        <div class="mt-16 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
                            <h2 class="mb-4 text-2xl font-bold md:text-3xl">Ready to get started with <?php the_title(); ?>?</h2>
                            <p class="mb-8 text-primary-foreground/80">Contact us today for a free consultation and let our experts help you.</p>
                            <div class="flex flex-wrap justify-center gap-4">
                                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-accent">
                                    Book a Consultation
                                </a>
                                <a href="tel:+9779823405140" class="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
