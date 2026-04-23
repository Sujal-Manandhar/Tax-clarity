<?php
/**
 * The main template file (Blog Archive)
 */

get_header();
?>

<main id="primary" class="site-main flex-1">
    <!-- Blog Header -->
    <header class="bg-primary/5 py-16 md:py-24">
        <div class="container-custom">
            <div class="mx-auto max-w-3xl text-center">
                <h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    Tax Insights & Updates
                </h1>
                <p class="text-xl text-muted-foreground">
                    Stay up to date with the latest tax laws, compliance requirements, and business advice in Nepal.
                </p>
            </div>
        </div>
    </header>

    <!-- Blog Posts Grid -->
    <div class="section-padding">
        <div class="container-custom">
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <?php
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post();
                        ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1'); ?>>
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="aspect-video overflow-hidden">
                                    <?php the_post_thumbnail('large', ['class' => 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-110']); ?>
                                </div>
                            <?php else : ?>
                                <div class="aspect-video bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text text-primary/40"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </div>
                            <?php endif; ?>

                            <div class="flex flex-1 flex-col p-6">
                                <div class="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                                    <?php the_category(', '); ?>
                                    <span class="text-muted-foreground">•</span>
                                    <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                                </div>
                                <h2 class="mb-3 text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <div class="mb-6 flex-1 text-sm text-muted-foreground line-clamp-3">
                                    <?php the_excerpt(); ?>
                                </div>
                                <div class="flex items-center justify-between border-t border-border pt-4">
                                    <span class="text-xs font-bold text-muted-foreground">By <?php the_author(); ?></span>
                                    <a href="<?php the_permalink(); ?>" class="text-xs font-black uppercase tracking-widest text-primary hover:underline">Read More →</a>
                                </div>
                            </div>
                        </article>
                        <?php
                    endwhile;
                else :
                    echo '<div class="col-span-full py-20 text-center">';
                    echo '<p class="text-xl text-muted-foreground italic">No posts found yet. Check back soon for updates.</p>';
                    echo '</div>';
                endif;
                ?>
            </div>

            <!-- Pagination -->
            <div class="mt-16 flex justify-center">
                <?php
                the_posts_pagination(array(
                    'prev_text' => '← Previous',
                    'next_text' => 'Next →',
                    'class'     => 'flex gap-2',
                ));
                ?>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
