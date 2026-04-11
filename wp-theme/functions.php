<?php
/**
 * Tax Clarity Theme Functions
 */

if ( ! function_exists( 'taxclarity_setup' ) ) :
    function taxclarity_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
    }
endif;
add_action( 'after_setup_theme', 'taxclarity_setup' );

/**
 * Enqueue React App Scripts and Styles
 */
function taxclarity_scripts() {
    // Enqueue the main Theme Stylesheet
    wp_enqueue_style( 'taxclarity-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version') );
    
    // Enqueue the React/Vite Compiled CSS
    wp_enqueue_style( 'taxclarity-react-css', get_template_directory_uri() . '/assets/index-D7zGbgx9.css', array(), null );

    // Enqueue the React/Vite Compiled JS
    wp_enqueue_script( 'taxclarity-react-js', get_template_directory_uri() . '/assets/index-D-psc3f6.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'taxclarity_scripts' );

// Allow modules in script tags (Required for Vite JS)
add_filter('script_loader_tag', 'taxclarity_add_type_attribute' , 10, 3);
function taxclarity_add_type_attribute($tag, $handle, $src) {
    if ( 'taxclarity-react-js' !== $handle ) {
        return $tag;
    }
    return '<script type="module" src="' . esc_url( $src ) . '"></script>';
}

// Ensure WordPress delegates all missing URIs (like /about, /services) to the React Router!
function taxclarity_rewrite_rules() {
    add_rewrite_rule('^.+/?$', 'index.php', 'top');
}
add_action('init', 'taxclarity_rewrite_rules');

function taxclarity_flush_rewrites() {
    taxclarity_rewrite_rules();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'taxclarity_flush_rewrites');
