# Pedro Aguiar — Professional Portfolio

A bilingual (Portuguese / English) personal portfolio focused on software engineering, project work, business inquiries, and technical partnerships.

**Live URL after deployment:** https://pedro162.github.io/

This is a **personal professional website**, independent of any future software company or brand.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- Lucide icons
- GitHub Pages with GitHub Actions

## Features

- Responsive, keyboard-accessible navigation
- Portuguese and English copy with a language switcher (saved in localStorage)
- Services, selected public projects, background, and contact CTAs
- Semantic HTML, descriptive metadata, Open Graph fields, sitemap, robots.txt, and favicon
- Static hosting with no required paid service, database, or backend

## Requirements

- Node.js 22+
- npm

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and preview

```bash
npm run typecheck
npm run build
npm run preview
```

The optimized static site is generated in `dist/`.

## Deployment

The workflow `.github/workflows/deploy.yml` builds and publishes on pushes to `main`, or on manual dispatch.

**Repository settings required after merging:**

1. Go to **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Ensure GitHub Actions can run for this repository.
4. Merge the Pull Request once reviewed; the workflow will deploy the `dist/` build.

For this repository's user-site name (`pedro162.github.io`), Vite uses `base: '/'`. If you rename the repository to a project site, change the Vite base path accordingly.

## Updating content

- Update Portuguese/English copy and case links in `src/App.tsx`.
- Update styles in `src/styles.css` and `tailwind.config.cjs`.
- Update contact URLs in the `links` object inside `src/App.tsx`.
- Update metadata in `index.html`, as well as `public/sitemap.xml` and `public/robots.txt`, if the domain changes.

## Privacy and accuracy

Project cards link to public repositories and identify work in progress or technical studies. They do not claim commercial delivery or client results. Avoid adding confidential employer or client information, testimonials without permission, or private credentials.

The contact CTAs open external WhatsApp or the visitor's email client; they do not store personal data or require a paid API. No form submission backend is implemented in this first release.

## Limitations / next improvements

- This version is a single-page site with client-side translation. Search engines may primarily index the default Portuguese version. For independently indexed English/Portuguese pages, add dedicated routes and localized canonical/hreflang metadata.
- Replace project illustration placeholders with real screenshots from your projects after reviewing private data.
- Add actual case studies and verified measurable outcomes when available.
- Generate and commit a package lockfile as a follow-up for fully reproducible installs and switch CI to `npm ci`.
