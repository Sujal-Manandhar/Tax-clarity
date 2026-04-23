<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <!-- Post Header -->
            <header class="bg-primary/5 py-16 md:py-24">
                <div class="container-custom">
                    <div class="mx-auto max-w-3xl text-center">
                        <div class="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                            <?php the_category(', '); ?>
                            <span class="text-muted-foreground">•</span>
                            <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                        </div>
                        <h1 class="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            <?php the_title(); ?>
                        </h1>
                        <div class="flex items-center justify-center gap-3">
                            <div class="h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            <span class="text-sm font-bold text-muted-foreground">Written by <?php the_author(); ?></span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Featured Image -->
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="container-custom -mt-12 md:-mt-16">
                    <div class="mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
                        <?php the_post_thumbnail('full', ['class' => 'h-full w-full object-cover']); ?>
                    </div>
                </div>
            <?php endif; ?>

            <!-- Post Content -->
            <div class="section-padding">
                <div class="container-custom">
                    <div class="mx-auto max-w-3xl">
                        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:underline prose-img:rounded-2xl">
                            <?php the_content(); ?>
                        </div>

                        <!-- Post Footer -->
                        <footer class="mt-16 border-t border-border pt-10">
                            <div class="flex flex-wrap items-center justify-between gap-6">
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-bold text-muted-foreground">Tags:</span>
                                    <div class="flex flex-wrap gap-2">
                                        <?php the_tags('<span class="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">', '</span><span class="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">', '</span>'); ?>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4">
                                    <span class="text-sm font-bold text-muted-foreground">Share:</span>
                                    <div class="flex gap-2">
                                        <a href="#" class="h-9 w-9 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                        </a>
                                        <a href="#" class="h-9 w-9 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

            <!-- Related Posts Section (Placeholder) -->
            <section class="bg-muted/30 py-20">
                <div class="container-custom text-center">
                    <h2 class="mb-10 text-3xl font-bold">More Insights</h2>
                    <div class="flex justify-center">
                        <a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>" class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
                            View All Blog Posts
                        </a>
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
