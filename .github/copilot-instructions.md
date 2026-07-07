# Copilot Instructions for RealityFoundation Website

## Build & Development Commands

```bash
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build production site to ./public/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI commands (e.g., npm run astro check)
```

**Code formatting**: Prettier is configured with Astro and Tailwind plugins. Run before committing:
```bash
npx prettier --write src/
```

## Architecture

### Tech Stack
- **Framework**: Astro 6 (file-based routing, static site generation)
- **Styling**: Tailwind CSS v4 with Vite integration
- **Language**: TypeScript (loosely typed where sensible)
- **Fonts**: IBM Plex Mono (headings/code), Geist (body text) - auto-loaded via Astro font providers
- **Sitemap**: @astrojs/sitemap automatically generates sitemap.xml

### Directory Structure
```
src/
├── pages/          # File-based routing (*.astro → routes)
├── components/     # Reusable Astro components
├── layouts/        # Layout wrapper components
├── styles/         # Global CSS (Tailwind @import)
├── content/        # Markdown content files for pages
├── assets/         # Images and static assets
└── consts.ts       # Site configuration & metadata
```

### Key Concepts

**File-based Routing**: Every `.astro` file in `src/pages/` becomes a route:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/blog/[slug].astro` → `/blog/:slug`

**Layout Pattern**: Pages wrap content with `Layout.astro`:
```astro
---
import Layout from "@/layouts/Layout.astro";
---
<Layout title="Page Title" description="Meta description">
  {/* Page content */}
</Layout>
```

**Site Metadata**: Centralized in `src/consts.ts`:
```typescript
export const SITE = {
  URL: "https://realityfoundation.eu",
  TITLE: "RealityFoundation",
  DESCRIPTION: "...",
};
```
Update this when changing site branding, domain, or contact info.

## Conventions & Patterns

### Styling
- **Tailwind utilities**: Use Tailwind classes for all styling (e.g., `flex`, `gap-4`, `text-lg`)
- **Responsive typography**: Font sizes use `clamp()` for fluid scaling:
  - `text-xs`: `clamp(0.8rem, 0.7rem + 0.25vw, 0.875rem)`
  - `text-base`: `clamp(1.1rem, 0.95rem + 0.25vw, 1.125rem)`
  - `text-hero`: `clamp(2.75rem, 0.5rem + 6vw, 5rem)`
- **Custom colors**: Use CSS variables via Tailwind (e.g., `text-primary`, `bg-secondary`)
  - `primary` → `var(--color-primary)` (bright green by default)
  - `secondary` → `var(--color-secondary)` (muted gray)

### Component Conventions
- **Naming**: PascalCase (e.g., `Hero.astro`, `RealityFoundationHome.astro`)
- **Structure**: Astro fence (frontmatter) at top, JSX/markup below
- **Props**: Use TypeScript interfaces for component props
- **Imports**: Use `@/` alias for imports from `src/` (e.g., `import "@/consts"`)

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg` (Tailwind defaults)
- Example: `class="text-sm md:text-base lg:text-lg"` (scales with viewport)

### Content Pages
Markdown files in `/content/` (e.g., `HOME.md`, `ABOUT.md`) are referenced in components and converted to HTML. Keep markdown simple; style via component wrapper.

## High-DPI & Mobile Considerations

This site uses **fluid font sizing with `clamp()`** to properly render on high-DPI devices (retina screens). Font sizes automatically scale based on viewport width, ensuring text is readable on all devices without jarring jumps. **Do not use fixed pixel values for font sizes**—always use the predefined Tailwind size utilities or `clamp()`.

## Deployment

Site deploys to Firebase Hosting via CI/CD. Check `firebase.json` and `.github/workflows/` for deployment configuration. The `dist/` folder is the production output from `npm run build`.

## Collaboration preferences

**Dev server workflow**: A dev server is always running locally. Do not run `npm run build` or restart it—changes are hot-reloaded. If changes aren't reflecting, ask before taking action.

**Git commits**: Do not commit anything. Only write code and let the user handle all git operations.

**Uncertainty**: When in doubt about design decisions, functionality, or scope, ask the user first. Do not invent or assume preferences.
