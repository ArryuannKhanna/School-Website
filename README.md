# PM SHRI GSSS Dagshai — School Website

Next.js (App Router, TypeScript) website for PM SHRI Government Senior Secondary School, Dagshai, District Solan, Himachal Pradesh.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | Content |
|---|---|
| `/` | Home: hero, quick facts, notice board, highlights, latest news, gallery preview |
| `/about` | History of Dagshai, PM SHRI, vision & mission, values, facilities, Principal's message |
| `/admissions` | Process, documents, eligibility table, benefits, enquiry form |
| `/news`, `/news/[slug]` | News & notices with category filter, and individual articles |
| `/faculty` | Principal plus staff grid with department filter |
| `/gallery` | Photo catalogue with category filter and lightbox (keyboard ← → Esc) |

## Editing content

All content is in **`lib/data.ts`** — school details, news, faculty and gallery. Search for `TODO` to find placeholders (phone, email, PIN, staff names) that need real values.

**Adding photos:** put images in `public/gallery/` and set `src: "/gallery/photo.jpg"` on the gallery item. Items without `src` show a coloured placeholder.

**Adding news:** add an object to the `news` array with a unique `slug`; it appears on the home page, notice board and news page automatically.

## Admission enquiry form

`app/api/enquiry/route.ts` validates submissions but currently only logs them to the server console. Connect it to email (e.g. Resend), Google Sheets or a database before going live.

## Deploy

Works on Vercel out of the box (`vercel` or import the repo at vercel.com).
