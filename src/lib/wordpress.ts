/**
 * Headless WordPress Connection Module
 * This file connects your React Frontend to your WordPress Backend (wp-admin).
 * 
 * Instructions:
 * 1. Install WordPress on your host (e.g. hostinger, local, etc)
 * 2. Update the WORDPRESS_API_URL below to your new WordPress domain.
 * 3. Any blog posts you publish in your wp-admin will appear here!
 */

const WORDPRESS_API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

export interface WPPost {
    id: number;
    slug: string;
    date: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
        'wp:term'?: Array<Array<{ name: string }>>;
    };
}

/**
 * Fetch all published posts from the WordPress Backend
 */
export async function fetchWordPressPosts(): Promise<WPPost[]> {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`);
        if (!response.ok) throw new Error("Failed to fetch posts from WordPress");
        return response.json();
    } catch (error) {
        console.error("WordPress API Error:", error);
        return [];
    }
}

/**
 * Fetch a single post from the WordPress Backend by its exact Slug
 */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
        if (!response.ok) throw new Error("Failed to fetch post from WordPress");
        
        const posts = await response.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error("WordPress API Error:", error);
        return null;
    }
}
