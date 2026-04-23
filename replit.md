# TaxCare Nepal

A modern React SPA landing page for tax, accounting, and compliance services in Nepal.

## Architecture

**Hybrid Headless Architecture**: React frontend designed to run standalone or as a WordPress theme bundle.

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM v6
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **WordPress Integration**: Custom `package-wp.js` script bundles the Vite build into a WordPress theme

## Project Structure

```
src/
  components/
    ui/         # shadcn/ui base components
    layout/     # Header, Footer, WhatsAppButton
    home/       # Landing page section components
  pages/        # Page-level components (Index, About, Services, Contact, BlogPost)
  hooks/        # Custom React hooks
  lib/          # Utilities and WordPress API client
  data/         # Static/mock data
wp-theme/       # WordPress theme output directory
public/         # Static assets
package-wp.js   # Script to bundle build into WordPress theme
```

## Development

- **Dev server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build` (outputs to `dist/`)
- **WordPress package**: `node package-wp.js` (copies build to `wp-theme/`)

## Deployment

Configured as a static site deployment. The `npm run build` command generates the `dist/` directory which is served directly.
