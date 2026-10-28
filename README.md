# Teruah Global Ministries — Website

A fully responsive Next.js 14 (App Router) website for Teruah Global Ministries, built with
TypeScript and Tailwind CSS. Includes Home, Live, Teachings, Prayer, Events, Give, and Connect
sections in one single-page layout with anchor navigation.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

### Vercel (recommended, zero config)
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**. No environment variables are required.

### Netlify
1. Push to GitHub.
2. Create a new site from Git in Netlify.
3. Build command: `npm run build` — Netlify's Next.js runtime handles the rest automatically.

### Any Node host (Railway, Render, a VPS, etc.)
```bash
npm install
npm run build
npm run start
```
The app listens on port 3000 by default (override with `-p` or the `PORT` env var).

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx         — assembles all sections
  globals.css      — global styles & design tokens
components/
  Header.tsx       — sticky nav + mobile menu
  Hero.tsx         — landing hero
  About.tsx        — welcome + featured message
  Live.tsx         — live stream + service schedule
  Teachings.tsx    — filterable teaching library
  Prayer.tsx       — prayer request + resources
  Events.tsx       — upcoming events
  Give.tsx         — partnership / giving
  Connect.tsx      — social + contact
  Footer.tsx       — footer + app download links
  Emblem.tsx        — logo mark (SVG)
```

## Customizing

- **Colors & fonts:** edit the tokens in `tailwind.config.ts`.
- **Copy & data:** each section component has its own content arrays/text near the top of the
  file (e.g. `TEACHINGS` in `Teachings.tsx`, `EVENTS` in `Events.tsx`) — edit these directly.
- **Live video / forms:** the "Watch Live" button and the prayer/contact forms are currently UI
  placeholders. Wire them up to your streaming provider (YouTube Live, Vimeo, etc.) and a form
  backend (Formspree, a serverless function, your CMS) before going live.
- **Logo:** `components/Emblem.tsx` is a lightweight SVG mark inspired by the globe-and-flame
  branding. Swap in your official logo file if you have one.
