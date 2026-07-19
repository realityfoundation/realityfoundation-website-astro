# RealityFoundation Website

Public website for RealityFoundation, built with Astro and Tailwind.  
This repository contains the pages, shared UI components, and careers content used on [realityfoundation.eu](https://realityfoundation.eu).

## Tech stack

- Astro
- Tailwind CSS
- TypeScript
- Firebase Hosting

## Run locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Useful scripts

- `npm run dev` - start local development server
- `npm run build` - build production output into `dist/`
- `npm run preview` - preview the production build locally
- `npm run astro check` - run Astro diagnostics

## Where to edit things

- `src/pages/` - site pages and routes
- `src/components/` - reusable UI blocks
- `src/content/jobs/` - careers role content (markdown frontmatter + body)
- `src/consts.ts` - shared site metadata (title, email, etc.)

## Deployment

Firebase Hosting is configured in `firebase.json` (`dist` output, with `npm run build` predeploy).

Preview deploy:

```bash
firebase hosting:channel:deploy demo
```

Production deploy:

```bash
firebase deploy --only hosting
```

## Contact

For website updates or content changes: `realityfoundation.info@gmail.com`
