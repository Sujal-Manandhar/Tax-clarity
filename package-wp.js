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
 * TaxCare Theme Functions
 */

if ( ! function_exists( 'TaxCare_setup' ) ) :
    function TaxCare_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
    }
endif;
add_action( 'after_setup_theme', 'TaxCare_setup' );

/**
 * Enqueue React App Scripts and Styles
 */
function TaxCare_scripts() {
    // Enqueue the main Theme Stylesheet
    wp_enqueue_style( 'TaxCare-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version') );
    
    // Enqueue the React/Vite Compiled CSS
    wp_enqueue_style( 'TaxCare-react-css', get_template_directory_uri() . '/assets/${cssFile}', array(), null );

    // Enqueue the React/Vite Compiled JS
    wp_enqueue_script( 'TaxCare-react-js', get_template_directory_uri() . '/assets/${jsFile}', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'TaxCare_scripts' );

// Allow modules in script tags (Required for Vite JS)
add_filter('script_loader_tag', 'TaxCare_add_type_attribute' , 10, 3);
function TaxCare_add_type_attribute($tag, $handle, $src) {
    if ( 'TaxCare-react-js' !== $handle ) {
        return $tag;
    }
    return '<script type="module" src="' . esc_url( $src ) . '"></script>';
}

// Ensure WordPress delegates all missing URIs (like /about, /services) to the React Router!
function TaxCare_rewrite_rules() {
    add_rewrite_rule('^.+/?$', 'index.php', 'top');
}
add_action('init', 'TaxCare_rewrite_rules');

function TaxCare_flush_rewrites() {
    TaxCare_rewrite_rules();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'TaxCare_flush_rewrites');
`;
fs.writeFileSync(path.join(themeDir, 'functions.php'), functionsPhpContent);

// 5. Update style.css to match
const styleCssContent = `/*
Theme Name: TaxCare Nepal
Theme URI: https://TaxCare.com.np
Author: TaxCare Nepal
Author URI: https://TaxCare.com.np
Description: Custom highly-optimized React headless hybrid theme built for TaxCare Nepal. Preserves all SEO intent, schemas, and dynamic mappings.
Version: 1.0.0
License: Proprietary
Text Domain: TaxCare
*/`;
fs.writeFileSync(path.join(themeDir, 'style.css'), styleCssContent);

console.log('WordPress hybrid theme successfully baked with React assets!');
