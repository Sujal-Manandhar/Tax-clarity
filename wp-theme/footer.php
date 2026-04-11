    <footer class="border-t border-border bg-muted/30 mt-auto">
        <div class="container-custom section-padding pt-16 pb-8">
            <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                
                <!-- Company Info -->
                <div class="space-y-4">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <span class="text-lg font-bold text-primary-foreground">TC</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg font-bold text-foreground">Tax Clarity Nepal</span>
                            <span class="text-xs text-muted-foreground">Nepal</span>
                        </div>
                    </a>
                    <p class="text-sm text-muted-foreground">
                        Your trusted partner in tax, accounting, and compliance services in Nepal.
                    </p>
                    <div class="flex gap-4 pt-2">
                        <a href="https://www.facebook.com/profile.php?id=61567220103659" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
                    <ul class="space-y-3">
                        <?php
                        $footer_links = array(
                            'Home' => home_url('/'),
                            'Services' => site_url('/services'),
                            'About Us' => site_url('/about'),
                            'Resources' => site_url('/resources'),
                            'FAQ' => site_url('/faq'),
                            'Contact' => site_url('/contact')
                        );
                        foreach($footer_links as $label => $url) {
                            echo '<li><a href="'.esc_url($url).'" class="text-sm text-muted-foreground transition-colors hover:text-primary">'.esc_html($label).'</a></li>';
                        }
                        ?>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold text-foreground">Our Services</h3>
                    <ul class="space-y-3">
                        <?php
                        $services = array(
                            "Tax Filing & Returns",
                            "VAT Registration",
                            "Accounting & Bookkeeping",
                            "Company Registration",
                            "Audit & Advisory",
                            "Payroll Services"
                        );
                        foreach($services as $service) {
                            echo '<li><a href="'.esc_url(site_url('/services')).'" class="text-sm text-muted-foreground transition-colors hover:text-primary">'.esc_html($service).'</a></li>';
                        }
                        ?>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span class="text-sm text-muted-foreground">Kathmandu, Nepal<br /></span>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 flex-shrink-0 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <a href="tel:+9779823405140" class="text-sm text-muted-foreground transition-colors hover:text-primary">+9779823405140</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 flex-shrink-0 text-primary"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <a href="mailto:info@taxclarity.com.np" class="text-sm text-muted-foreground transition-colors hover:text-primary">info@taxclarity.com.np</a>
                        </li>
                    </ul>
                    <p class="mt-4 text-sm text-muted-foreground">
                        <span class="font-medium">Hours:</span><br />Sun–Fri: 10:00 AM – 6:00 PM
                    </p>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                <p class="text-sm text-muted-foreground">
                    &copy; <?php echo date('Y'); ?> Tax Clarity Nepal. All rights reserved.
                </p>
                <div class="flex gap-6">
                    <a href="<?php echo esc_url(site_url('/privacy-policy')); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Privacy Policy</a>
                    <a href="<?php echo esc_url(site_url('/terms')); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
