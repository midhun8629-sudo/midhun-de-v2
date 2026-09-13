# midhun.de

Personal semiconductor thermal and multiphysics portfolio for **Midhun Mohanan**.

The site is intentionally focused: About me, Vision, Projects and Contact. It uses a dark editorial layout, scroll-linked portrait zoom, restrained text reveals and a gently moving globe/data-centre image.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

Next.js exports the static site to `out/`. This is the directory to publish with Cloudflare Pages.

## Add the portrait

1. Export the final photograph as WebP.
2. Name it `midhun-portrait.webp`.
3. Upload it to `public/midhun-portrait.webp`.

No code change is needed. Until that file exists, the page automatically displays `public/midhun-portrait-placeholder.svg`.

For the intended composition, use a vertical side portrait with Midhun looking toward the camera. Leave some negative space around the face so the crop remains effective on desktop and mobile.

## Main content files

- `components/midhun-home.tsx` — page structure, copy and project list
- `app/globals.css` — layout, visual system and animation
- `config/index.ts` — metadata, site URL and contact details
- `public/globe-datacenter.webp` — vision-section artwork
- `public/midhun-portrait-placeholder.svg` — temporary portrait artwork

## Cloudflare Pages settings

- Framework preset: **Next.js (Static HTML Export)**, or none
- Build command: `npm run build`
- Build output directory: `out`
- Node.js: 20 or newer

Use a Cloudflare preview URL first. Connect `midhun.de` only after the preview is approved.

## Attribution

This repository was forked from [Modern Next Portfolio](https://github.com/sanidhyy/next-portfolio) by Sanidhya Kumar Verma and remains under the included MIT License. The homepage design and personal content in this fork have been replaced for midhun.de.
