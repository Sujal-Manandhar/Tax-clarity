import fs from 'fs';
import path from 'path';

// Paths
const distDir = path.join(process.cwd(), 'dist');
const themeDir = path.join(process.cwd(), 'wp-theme');
const assetsDir = path.join(distDir, 'assets');
const targetAssetsDir = path.join(themeDir, 'assets');

// 1. Ensure target assets directory exists
if (fs.existsSync(targetAssetsDir)) {
    fs.rmSync(targetAssetsDir, { recursive: true, force: true });
}
fs.mkdirSync(targetAssetsDir, { recursive: true });

// 2. Copy Vite assets to wp-theme/assets
const assetFiles = fs.readdirSync(assetsDir);
let jsFile = '';
let cssFile = '';

assetFiles.forEach(file => {
    fs.copyFileSync(path.join(assetsDir, file), path.join(targetAssetsDir, file));
    if (file.endsWith('.js')) jsFile = file;
    if (file.endsWith('.css')) cssFile = file;
});

console.log(`Copied assets: ${jsFile}, ${cssFile}`);

// 3. Write WordPress index.php to host the React App
const indexPhpContent = `<?php
/**
 * React SPA Injection Template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <script>
        window.WP_BASE_URL = "<?php echo parse_url(home_url(), PHP_URL_PATH) ?: '/'; ?>";
    </script>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>`;
fs.writeFileSync(path.join(themeDir, 'index.php'), indexPhpContent);

// 4. Overwrite functions.php to carefully enqueue the newly compiled Vite JS and CSS files
const functionsPhpContent = `<?php
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
    wp_enqueue_style( 'taxclarity-react-css', get_template_directory_uri() . '/assets/${cssFile}', array(), null );

    // Enqueue the React/Vite Compiled JS
    wp_enqueue_script( 'taxclarity-react-js', get_template_directory_uri() . '/assets/${jsFile}', array(), null, true );
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
`;
fs.writeFileSync(path.join(themeDir, 'functions.php'), functionsPhpContent);

// 5. Update style.css to match
const styleCssContent = `/*
Theme Name: Tax Clarity Nepal
Theme URI: https://taxclarity.com.np
Author: Tax Clarity Nepal
Author URI: https://taxclarity.com.np
Description: Custom highly-optimized React headless hybrid theme built for Tax Clarity Nepal. Preserves all SEO intent, schemas, and dynamic mappings.
Version: 1.0.0
License: Proprietary
Text Domain: taxclarity
*/`;
fs.writeFileSync(path.join(themeDir, 'style.css'), styleCssContent);

console.log('WordPress hybrid theme successfully baked with React assets!');
