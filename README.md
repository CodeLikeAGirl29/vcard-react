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
Projects, Contact — that switches sections without scrolling the whole page.

- `app/layout.js` — fonts (Fraunces, Public Sans, JetBrains Mono) + global shell
- `app/page.js` — manages active tab state, renders Sidebar + the current tab
- `components/Sidebar.jsx` — profile card + tab navigation (the sidebar)
- `components/AboutTab.jsx` — thesis, bio, impact metrics
- `components/ResumeTab.jsx` — experience, education, skills
- `components/ProjectsTab.jsx` — case studies + projects grid
- `components/Contact.jsx` — contact form (opens the visitor's email client)
- `data/resume.js` — your content, single source of truth

## Deploying

Push to GitHub and import into Vercel, or run `npm run build && npm run start`.
