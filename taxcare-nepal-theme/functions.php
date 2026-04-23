<?php
/**
 * TaxCare Nepal Theme Functions
 */

if ( ! function_exists( 'taxcare_nepal_setup' ) ) :
    function taxcare_nepal_setup() {
        // Add support for block styles, post thumbnails, etc.
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
        add_theme_support( 'customize-selective-refresh-widgets' );

        // Register navigation menus
        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'taxcare-nepal' ),
            'footer'  => esc_html__( 'Footer Menu', 'taxcare-nepal' ),
        ) );

        // Automate setup on first load (Admin or Front-end)
        if ( ! get_option( 'taxcare_nepal_setup_complete' ) ) {
            taxcare_nepal_full_automation();
            update_option( 'taxcare_nepal_setup_complete', 1 );
            // 4. Set Permalink Structure to /post-name/
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure('/%postname%/');
    
    // 5. Flush rewrite rules to prevent 404s
    flush_rewrite_rules();
}
    }
endif;
add_action( 'after_setup_theme', 'taxcare_nepal_setup' );

/**
 * Enqueue scripts and styles
 */
function taxcare_nepal_scripts() {
    // Enqueue the main Theme Stylesheet
    wp_enqueue_style( 'taxcare-nepal-theme-style', get_stylesheet_uri(), array(), '1.0.0' );

    // Enqueue the main Tailwind styles
    wp_enqueue_style( 'taxcare-nepal-style', get_template_directory_uri() . '/assets/index.css', array(), '1.0.0' );
    
    // Enqueue Google Fonts
    wp_enqueue_style( 'taxcare-nepal-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap', array(), null );

    // Enqueue the main React bundle (which includes the frozen Tax Calculator)
    wp_enqueue_script( 'taxcare-nepal-react-app', get_template_directory_uri() . '/assets/index.js', array(), '1.0.0', true );

    // Pass data to React if needed
    wp_localize_script( 'taxcare-nepal-react-app', 'taxcareData', array(
        'apiUrl' => esc_url_raw( rest_url() ),
        'nonce'  => wp_create_nonce( 'wp_rest' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'taxcare_nepal_scripts' );

/**
 * Add type="module" to React script tag (Required for Vite)
 */
function taxcare_nepal_add_type_attribute($tag, $handle, $src) {
    if ( 'taxcare-nepal-react-app' !== $handle ) {
        return $tag;
    }
    return '<script type="module" src="' . esc_url( $src ) . '"></script>';
}
add_filter('script_loader_tag', 'taxcare_nepal_add_type_attribute', 10, 3);

/**
 * Register Widget Areas
 */
function taxcare_nepal_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 1', 'taxcare-nepal' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here.', 'taxcare-nepal' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">',
        'after_title'   => '</h3>',
    ) );
    // Additional footer sidebars can be registered here
}
add_action( 'widgets_init', 'taxcare_nepal_widgets_init' );

/**
 * Register Custom Post Type: Services
 */
function taxcare_nepal_register_services_cpt() {
    $labels = array(
        'name'                  => _x( 'Services', 'Post Type General Name', 'taxcare-nepal' ),
        'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'taxcare-nepal' ),
        'menu_name'             => __( 'Services', 'taxcare-nepal' ),
        'name_admin_bar'        => __( 'Service', 'taxcare-nepal' ),
        'archives'              => __( 'Service Archives', 'taxcare-nepal' ),
        'attributes'            => __( 'Service Attributes', 'taxcare-nepal' ),
        'parent_item_colon'     => __( 'Parent Service:', 'taxcare-nepal' ),
        'all_items'             => __( 'All Services', 'taxcare-nepal' ),
        'add_new_item'          => __( 'Add New Service', 'taxcare-nepal' ),
        'add_new'               => __( 'Add New', 'taxcare-nepal' ),
        'new_item'              => __( 'New Service', 'taxcare-nepal' ),
        'edit_item'             => __( 'Edit Service', 'taxcare-nepal' ),
        'update_item'           => __( 'Update Service', 'taxcare-nepal' ),
        'view_item'             => __( 'View Service', 'taxcare-nepal' ),
        'view_items'            => __( 'View Services', 'taxcare-nepal' ),
        'search_items'          => __( 'Search Service', 'taxcare-nepal' ),
        'not_found'             => __( 'Not found', 'taxcare-nepal' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'taxcare-nepal' ),
        'featured_image'        => __( 'Featured Image', 'taxcare-nepal' ),
        'set_featured_image'    => __( 'Set featured image', 'taxcare-nepal' ),
        'remove_featured_image' => __( 'Remove featured image', 'taxcare-nepal' ),
        'use_featured_image'    => __( 'Use as featured image', 'taxcare-nepal' ),
        'insert_into_item'      => __( 'Insert into service', 'taxcare-nepal' ),
        'uploaded_to_this_item' => __( 'Uploaded to this service', 'taxcare-nepal' ),
        'items_list'            => __( 'Services list', 'taxcare-nepal' ),
        'items_list_navigation' => __( 'Services list navigation', 'taxcare-nepal' ),
        'filter_items_list'     => __( 'Filter services list', 'taxcare-nepal' ),
    );
    $args = array(
        'label'                 => __( 'Service', 'taxcare-nepal' ),
        'description'           => __( 'TaxCare Nepal Services', 'taxcare-nepal' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'taxonomies'            => array( 'category' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-rest-api',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'rewrite'               => array( 'slug' => 'service' ),
    );
    register_post_type( 'services', $args );
}
add_action( 'init', 'taxcare_nepal_register_services_cpt', 0 );

/**
 * Safe wrapper for ACF get_field to prevent fatal errors
 */
function taxcare_get_field($selector, $post_id = false, $format_value = true) {
    if (function_exists('get_field')) {
        return get_field($selector, $post_id, $format_value);
    }
    return false;
}

/**
 * Automate theme setup: Pages, Front Page, Permalinks, and Menus
 */
function taxcare_nepal_full_automation() {
    // 1. Create Core Pages
    $pages = array(
        'Home'      => array('path' => 'home', 'template' => 'front-page.php', 'content' => ''),
        'About'     => array('path' => 'about', 'template' => 'page.php', 'content' => '
            <h2>Our Mission</h2>
            <p>At TaxCare Nepal, our mission is to simplify the complex world of tax and compliance for individuals and businesses across Nepal. We believe that professional tax guidance should be accessible, transparent, and reliable.</p>
            
            <h2>Who We Are</h2>
            <p>Founded by a team of seasoned Chartered Accountants, we bring years of deep expertise in Nepal\'s Inland Revenue Department (IRD) regulations, VAT framework, and corporate tax laws. Our team is dedicated to helping you navigate the regulatory landscape with confidence.</p>
            
            <h2>Our Core Values</h2>
            <ul>
                <li><strong>Integrity:</strong> We maintain the highest standards of professional ethics in all our dealings.</li>
                <li><strong>Precision:</strong> We ensure that every filing and report is accurate and compliant with the latest regulations.</li>
                <li><strong>Client-First:</strong> Your business growth and compliance are our top priorities.</li>
            </ul>'),
        'Services'  => array('path' => 'services', 'template' => 'template-services.php', 'content' => ''),
        'Blog'      => array('path' => 'blog', 'template' => 'index.php', 'content' => '
            <h2>Tax Insights & Compliance Updates</h2>
            <p>Stay informed with the latest tax regulations, business news, and compliance requirements in Nepal. Our experts share their knowledge to help you navigate the financial landscape.</p>'),
        'Contact'   => array('path' => 'contact', 'template' => 'template-contact.php', 'content' => ''),
        'Calculator' => array('path' => 'calculator', 'template' => 'template-calculator.php', 'content' => '
            <p>Use our free tax calculator to estimate your income tax, VAT, and other compliance-related costs in Nepal. Our calculator is updated with the latest IRD tax slabs for the current fiscal year.</p>'),
        'FAQ'       => array('path' => 'faq', 'template' => 'page.php', 'content' => '
            <div class="space-y-6">
                <div>
                    <h3 class="font-bold text-lg mb-2">What documents do I need for PAN registration?</h3>
                    <p class="text-muted-foreground">For individuals, you need a citizenship copy and two passport-sized photos. For businesses, you need registration documents, rent agreement, and citizenship of the proprietor/directors.</p>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-2">How often do I need to file VAT returns?</h3>
                    <p class="text-muted-foreground">In Nepal, VAT returns must be filed monthly within 25 days of the following month. Failure to do so results in penalties and interest.</p>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-2">Do you provide audit services?</h3>
                    <p class="text-muted-foreground">Yes, we provide statutory audits, internal audits, and tax audits through our partner firms of Chartered Accountants.</p>
                </div>
            </div>'),
        'Terms'     => array('path' => 'terms', 'template' => 'page.php', 'content' => '
            <p>By using our services, you agree to the following terms and conditions. TaxCare Nepal provides advisory and compliance services based on the information provided by the client.</p>
            <h3>Service Scope</h3>
            <p>Our services include tax preparation, filing, and advisory based on Nepal\'s current regulations. We rely on the accuracy of the data provided by our clients.</p>'),
        'Privacy Policy' => array('path' => 'privacy-policy', 'template' => 'page.php', 'content' => '
            <p>Your privacy is important to us. TaxCare Nepal is committed to protecting the confidentiality of all client data and financial information.</p>
            <h3>Data Usage</h3>
            <p>Information collected is used solely for the purpose of providing tax and compliance services as requested by the client.</p>'),
    );

    foreach ($pages as $title => $data) {
        $existing_page = get_page_by_path($data['path']);
        if (!$existing_page) {
            // Check by title as well just in case
            $existing_page = get_page_by_title($title, OBJECT, 'page');
        }

        if (!$existing_page) {
            $page_id = wp_insert_post(array(
                'post_title'    => $title,
                'post_name'     => $data['path'],
                'post_status'   => 'publish',
                'post_type'     => 'page',
                'post_content'  => $data['content'],
            ));
            
            if ($page_id) {
                if ($data['template'] !== 'page.php') {
                    update_post_meta($page_id, '_wp_page_template', $data['template']);
                }
                
                // Set SEO Meta Descriptions
                $meta_desc = "";
                if ($title === 'Home') $meta_desc = "Expert tax, accounting, and compliance services in Nepal. Trusted Chartered Accountants for IRD, VAT, and corporate law.";
                if ($title === 'Calculator') $meta_desc = "Free Nepal Income Tax Calculator. Estimate your tax liability based on the latest IRD tax slabs for FY 2080/81.";
                if ($title === 'Services') $meta_desc = "Comprehensive tax and accounting services in Nepal. VAT, Audit, Corporate Tax, and Business Registration.";
                
                if (!empty($meta_desc)) {
                    update_post_meta($page_id, 'meta_description', $meta_desc);
                }
            }

            // Set Static Front Page if 'Home' is created
            if ($title === 'Home') {
                update_option('show_on_front', 'page');
                update_option('page_on_front', $page_id);
            }

            // Set Blog Page if 'Blog' is created
            if ($title === 'Blog') {
                update_option('page_for_posts', $page_id);
                
                // Create a sample blog post
                wp_insert_post(array(
                    'post_title'    => 'New Income Tax Slabs for FY 2081/82',
                    'post_content'  => 'The Government of Nepal has announced the new income tax slabs for the upcoming fiscal year. This guide provides a detailed breakdown of the changes and how they affect individuals and businesses...',
                    'post_status'   => 'publish',
                    'post_type'     => 'post',
                    'post_author'   => 1,
                    'post_category' => array(1)
                ));
            }
        }
    }

    // 2. Set Permalinks to 'Post name'
    if (get_option('selection_structure') !== '/%postname%/') {
        global $wp_rewrite;
        $wp_rewrite->set_permalink_structure('/%postname%/');
        $wp_rewrite->flush_rules();
    }

    // 3. Trigger Menu Automation
    taxcare_nepal_auto_setup_menus();

    // 4. Create Service Items (Seed Data) to prevent "Hallucination"
    taxcare_nepal_seed_services();
}

/**
 * Seed initial services to prevent 404s and "Hallucination"
 */
function taxcare_nepal_seed_services() {
    $services = array(
        'corporate-tax-filing'  => array('title' => 'Corporate Tax Filing', 'desc' => 'Expert preparation and filing of corporate income tax returns with full IRD compliance.'),
        'personal-tax-planning' => array('title' => 'Personal Tax Planning', 'desc' => 'Strategic tax planning for high-net-worth individuals and salaried professionals.'),
        'vat-consulting'        => array('title' => 'VAT Consulting', 'desc' => 'Comprehensive VAT management, from monthly returns to handling IRD investigations.'),
        'audit-compliance'      => array('title' => 'Audit & Compliance', 'desc' => 'Rigorous auditing services ensuring your financial statements meet all regulatory standards.'),
        'accounting-bookkeeping'=> array('title' => 'Accounting & Bookkeeping', 'desc' => 'Daily financial management and reporting for your business.'),
        'pan-vat-registration'  => array('title' => 'PAN/VAT Registration', 'desc' => 'Quick and hassle-free business registration services in Nepal.'),
        'payroll-compliance'    => array('title' => 'Payroll Compliance', 'desc' => 'Accurate salary processing and social security tax management.'),
    );

    foreach ($services as $slug => $data) {
        $existing = get_page_by_path($slug, OBJECT, 'services');
        if (!$existing) {
            wp_insert_post(array(
                'post_title'    => $data['title'],
                'post_name'     => $slug,
                'post_content'  => $data['desc'] . "\n\n" . 'Full service details coming soon. Please contact us for more information.',
                'post_status'   => 'publish',
                'post_type'     => 'services',
                'post_excerpt'  => $data['desc'],
            ));
        }
    }
}

/**
 * Automate menu creation and assignment on theme activation
 */
function taxcare_nepal_auto_setup_menus() {
    $menu_name = 'Nav';
    $menu_exists = wp_get_nav_menu_object($menu_name);

    // If it doesn't exist, let's create it
    if (!$menu_exists) {
        $menu_id = wp_create_nav_menu($menu_name);
    } else {
        $menu_id = $menu_exists->term_id;
    }

    // Always ensure these items are in the menu to prevent human interaction
    $menu_items = wp_get_nav_menu_items($menu_id);
    if (empty($menu_items)) {
        // We skip Home and Services because they are hardcoded as a Mega Menu in header.php
        $pages_to_add = array(
            'about'          => __('About'),
            'blog'           => __('Blog'),
            'contact'        => __('Contact'),
            'faq'            => __('FAQ'),
            'privacy-policy' => __('Privacy'),
        );

        foreach ($pages_to_add as $path => $label) {
            $page = get_page_by_path($path);
            if ($page) {
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title'     => $label,
                    'menu-item-object-id' => $page->ID,
                    'menu-item-object'    => 'page',
                    'menu-item-status'    => 'publish',
                    'menu-item-type'      => 'post_type',
                ));
            } else {
                // If page doesn't exist, add as custom link placeholder to keep UI consistent
                wp_update_nav_menu_item($menu_id, 0, array(
                    'menu-item-title'  => $label,
                    'menu-item-url'    => home_url('/' . $path),
                    'menu-item-status' => 'publish',
                    'menu-item-type'   => 'custom',
                ));
            }
        }
    }

    // MANDATORY: Force assign to locations every time dashboard is loaded
    $locations = get_theme_mod('nav_menu_locations');
    $locations['primary'] = $menu_id;
    $locations['footer'] = $menu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

/**
 * Filter menu items to remove duplicates that are hardcoded in header.php
 */
function taxcare_nepal_filter_primary_menu_items($items, $args) {
    if ($args->theme_location === 'primary') {
        foreach ($items as $key => $item) {
            // Remove 'Home' and 'Services' from the dynamic menu to avoid duplication with hardcoded mega menu
            if (in_array(strtolower($item->title), array('home', 'services'))) {
                unset($items[$key]);
            }
        }
    }
    return $items;
}
add_filter('wp_get_nav_menu_items', 'taxcare_nepal_filter_primary_menu_items', 10, 2);

/**
 * Proactive Admin Notice for Required Plugins
 */
function taxcare_nepal_admin_notices() {
    if (!function_exists('get_field')) {
        ?>
        <div class="notice notice-warning is-dismissible">
            <p><strong>TaxCare Nepal Theme:</strong> This theme requires the <strong>Advanced Custom Fields (ACF)</strong> plugin to enable dynamic content editing. Please <a href="<?php echo esc_url(admin_url('plugin-install.php?tab=search&s=Advanced+Custom+Fields')); ?>">install it here</a>.</p>
        </div>
        <?php
    }
}
add_action('admin_notices', 'taxcare_nepal_admin_notices');

