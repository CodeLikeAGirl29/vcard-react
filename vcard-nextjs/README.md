# Resume / Case Study Site

A Next.js (App Router) + Tailwind rebuild of a personal resume-and-case-study page.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Everything you need to change lives in **`data/resume.js`** — name, contact info,
thesis line, impact metrics, experience, case studies, skills, and education.
Replace every `[bracketed]` placeholder, then the whole site updates.

## Structure

This follows the classic **vCard layout**: a fixed profile sidebar (photo, name,
social links, download-CV button) next to a tabbed content area — About, Resume,
Projects, Blog, Contact — that switches sections without scrolling the whole page.

- `app/layout.js` — fonts (Fraunces, Public Sans, JetBrains Mono) + global shell
- `app/page.js` — manages active tab state, renders Sidebar + the current tab
- `app/blog/[slug]/page.js` — full, individually-shareable page per blog post
- `components/Sidebar.jsx` — profile photo/avatar + tab navigation + social icons
- `components/AboutTab.jsx` — thesis, bio, impact metrics, tech stack icons
- `components/ResumeTab.jsx` — experience, education, skills, certifications
- `components/ProjectsTab.jsx` — projects grid with thumbnails
- `components/BlogTab.jsx` — post preview cards with cover images
- `components/Thumbnail.jsx` — shared image component; shows a soft gradient
  placeholder instead of a broken-image icon until a real file exists at the path
- `data/resume.js` — your info, single source of truth
- `data/posts.js` — your blog posts, single source of truth

## Adding real images

Drop files into `public/` at the paths already referenced in the data files —
the placeholders will be replaced automatically, no code changes needed:

- **Profile photo:** `public/profile.jpg` (referenced as `resume.photo`)
- **Project screenshots:** `public/projects/<name>.png` (see `image` field on
  each entry in `data/resume.js`)
- **Blog covers:** `public/blog/<slug>.jpg` (see `cover` field on each entry in
  `data/posts.js`)

Until a file exists at a given path, that spot shows a neutral placeholder
instead of a broken image — safe to ship before your real assets are ready.

## Deploying

Push to GitHub and import into Vercel, or run `npm run build && npm run start`.
