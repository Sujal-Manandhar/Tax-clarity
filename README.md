# TaxCare Nepal - Hybrid React/WordPress Theme

TaxCare Nepal is a specialized tax, accounting, and compliance services landing page designed for businesses in Nepal. 

This repository contains an advanced **Hybrid Headless Architecture**. It features a blazing-fast Single Page Application (SPA) built with React, Vite, and Tailwind CSS, all seamlessly bundled into an installable **WordPress Theme** so you retain full control over your backend via `wp-admin`.

## 🚀 Features
- **Lightning Fast Performance:** Served natively as a compiled React Single-Page Application (SPA).
- **SEO & Schema Optimized:** Fully loaded with structured JSON-LD `Article` and `FAQPage` schema data, dynamic OpenGraph injection, and keyword-targeted meta tags per page.
- **Conversion Focused Funnels:** 5x internal CTA density, sticky headers, and mobile-optimized layouts.
- **Dynamic WordPress Subdirectory Support:** Advanced browser router configurations dynamically read WordPress permalinks to resolve `basename` issues universally.
- **Headless WordPress API Ready:** Real-time data syncs with your WordPress backend via the WP REST API (`src/lib/wordpress.ts`).

---

## 💻 Tech Stack
- React 18
- Vite
- Tailwind CSS 3
- React Router DOM
- `lucide-react` for SVG icons

---

## 🛠️ Local Development (Frontend)

To modify the design, change text, or update React components, you run the frontend entirely detached from WordPress.

1. Ensure you have **Node.js** installed.
2. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. View your changes securely at `http://localhost:8080`.

---

## 📦 Building & Packaging for WordPress

When you are satisfied with your local React edits, you bundle the entire React application into a `.zip` file that is natively compatible with WordPress theme uploading.

1. First, compile the Vite application into static HTML/JS/CSS assets:
   ```bash
   npm run build
   ```
2. Next, run the custom WordPress packaging script. This script strips Vite's output and binds it to native WordPress PHP template files (`functions.php`, `index.php`), while preserving dynamic rewrite hooks:
   ```bash
   node package-wp.js
   ```
3. Finally, compress the generated `wp-theme` folder into a zip file named `tax-clarity-theme.zip`. *(If using PowerShell)*:
   ```powershell
   Compress-Archive -Path "wp-theme\*" -DestinationPath "tax-clarity-theme.zip" -Force
   ```

### 📤 Uploading to WordPress
1. Log into your WordPress admin portal (`yoursite.com/wp-admin`).
2. Navigate to **Appearance > Themes > Add New > Upload Theme**.
3. Upload the freshly packaged **`tax-clarity-theme.zip`**.
4. **Important**: Go to **Settings > Permalinks** and ensure your permalink structure is set to **Post name**. This forces WordPress to delegate URLs to the React Router.

---

## 🔌 Using the WordPress Backend (Headless API)

To pull data (like Blog Posts or Authored Content) directly from your WordPress database into the React Frontend, you edit the API connection file:

**Target File:** `src/lib/wordpress.ts`

Update the `WORDPRESS_API_URL` to point strictly to your live domain's JSON endpoint:
```typescript
const WORDPRESS_API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";
```
Once deployed, the `fetchWordPressPosts()` function can be securely utilized globally across your React layout to serve rich backend content natively.

---

*Property of TaxCare Nepal.*
