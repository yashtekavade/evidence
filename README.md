# Yashvardhan Tekavade — Portfolio

A static React + Vite portfolio built around three ideas: **Work, Journey, and Writing**.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `/` — cinematic introduction + selected work + writing + journey
- `/projects` — project archive with filters
- `/projects/:slug` — project detail
- `/timeline` — June 2025 → September 2026 technical journey
- `/posts` — Substack writing index
- `/about` — profile, experience, education, stack
- `/resume` — resume page

The site is intentionally backend-free. Content lives in `src/data/site.ts` so new projects, posts, and timeline chapters can be added without changing page architecture.
