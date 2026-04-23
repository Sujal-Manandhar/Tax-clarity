<?php
/**
 * The template for displaying all pages
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Page Header -->
            <header class="bg-primary/5 py-16 md:py-24">
                <div class="container-custom">
                    <div class="mx-auto max-w-3xl text-center">
                        <h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            <?php the_title(); ?>
                        </h1>
                        <?php if ( has_excerpt() ) : ?>
                            <p class="text-xl text-muted-foreground">
                                <?php echo get_the_excerpt(); ?>
                            </p>
                        <?php endif; ?>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <div class="section-padding">
                <div class="container-custom">
                    <div class="mx-auto max-w-4xl">
                        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline">
                            <?php
                            the_content();
                            
                            // If content is empty, show a placeholder
                            if ( empty( get_the_content() ) ) :
                                echo '<div class="rounded-xl border-2 border-dashed border-border p-12 text-center">';
                                echo '<p class="text-muted-foreground italic">No content has been added to this page yet. Please edit this page in the WordPress admin area to add content.</p>';
                                echo '</div>';
                            endif;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
