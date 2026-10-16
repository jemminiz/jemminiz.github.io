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

Cloudflare Pages (project `portfolio-emminizer`) builds every push with `npm run build` and serves `dist/`. Pull requests get preview deployments. The Node version comes from `.node-version`.
