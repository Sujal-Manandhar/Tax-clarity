<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class( 'min-h-screen flex flex-col antialiased selection:bg-primary/20 bg-background text-foreground' ); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'taxclarity' ); ?></a>

    <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="container-custom">
            <div class="flex h-16 items-center justify-between md:h-20">
                <!-- Logo -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2" rel="home">
                    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <span class="text-lg font-bold text-primary-foreground">TC</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-bold text-foreground"><?php bloginfo( 'name' ); ?></span>
                        <span class="text-xs text-muted-foreground">Nepal</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden items-center gap-1 md:flex">
                    <?php
                    $nav_links = array(
                        'Home'      => home_url('/'),
                        'Services'  => site_url('/services'),
                        'About'     => site_url('/about'),
                        'Resources' => site_url('/resources'),
                        'FAQ'       => site_url('/faq'),
                        'Contact'   => site_url('/contact'),
                    );

                    $current_url = home_url(add_query_arg(array(), $wp->request));
                    
                    foreach ($nav_links as $label => $url) {
                        $is_active = (trailingslashit($current_url) === trailingslashit($url));
                        $classes = 'px-4 py-2 text-sm font-medium transition-colors rounded-md ' . ($is_active ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-accent');
                        echo '<a href="' . esc_url($url) . '" class="' . esc_attr($classes) . '">' . esc_html($label) . '</a>';
                    }
                    ?>
                </nav>

                <!-- Desktop CTA -->
                <div class="hidden items-center gap-3 md:flex">
                    <a href="tel:+9779823405140" class="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span class="hidden lg:inline">+9779823405140</span>
                    </a>
                    <a href="<?php echo esc_url(site_url('/contact')); ?>" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Get Consultation
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent md:hidden" aria-label="Toggle menu">
                    <svg id="menu-icon-bars" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 hidden"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="hidden border-t border-border pb-4 md:hidden">
                <nav class="flex flex-col gap-1 pt-4">
                    <?php
                    foreach ($nav_links as $label => $url) {
                        $is_active = (trailingslashit($current_url) === trailingslashit($url));
                        $classes = 'px-4 py-3 text-sm font-medium transition-colors rounded-md ' . ($is_active ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-accent');
                        echo '<a href="' . esc_url($url) . '" class="' . esc_attr($classes) . '">' . esc_html($label) . '</a>';
                    }
                    ?>
                </nav>
                <div class="mt-4 flex flex-col gap-3 px-4">
                    <a href="tel:+9779823405140" class="flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call +9779823405140
                    </a>
                    <a href="<?php echo esc_url(site_url('/contact')); ?>" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                        Get Consultation
                    </a>
                </div>
            </div>
        </div>
    </header>

    <script>
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            var iconBars = document.getElementById('menu-icon-bars');
            var iconClose = document.getElementById('menu-icon-close');
            
            menu.classList.toggle('hidden');
            iconBars.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });
    </script>
