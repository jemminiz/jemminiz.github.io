# jemminiz.github.io

Personal site, built with [Astro](https://astro.build), Vue islands and Tailwind CSS 4.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes static files to dist/
```

## Editing content

- **Projects:** add or edit a Markdown file in `src/content/projects/`. The frontmatter holds the name, year, stack, link and sort order, and the body is the one-line description.
- **Combat robots:** add or edit a Markdown file in `src/content/robots/`. `status` is `building`, `active` or `retired`.
- **Experience and links:** these are in `src/pages/index.astro` and `src/lib/site.ts`.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
