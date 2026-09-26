# Life with AI

Free, plain-English lessons on everyday AI for people in the UK and Europe, and a home for the apps I build. Lessons live under `/learn`, apps under `/apps`. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

Domains (DNS later): [lifewithai.co.uk](https://lifewithai.co.uk) and [lifewithai.uk](https://lifewithai.uk).

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run lint` runs ESLint.

No environment variables are required (see `.env.example` for the optional ones). The public site URL defaults to `https://lifewithai.co.uk`. To override it (canonical links, sitemap, robots):

```bash
NEXT_PUBLIC_SITE_URL=https://lifewithai.co.uk
```

## Deploy

Deploy on Vercel from this repository. The app builds with `npm run build` and does not need a database or auth.

Point `lifewithai.co.uk` and `lifewithai.uk` at the Vercel project when DNS is ready. Set `NEXT_PUBLIC_SITE_URL` to the canonical domain if it should not be `https://lifewithai.co.uk`.

Environment variables live in the Vercel project settings; redeploy after changing them, because pages are built statically.

- `BUTTONDOWN_API_KEY` turns on the email signup. Subscribers get Buttondown’s confirmation email before they are added. Without the key, the signup band shows a “list opens soon” note instead of a form.
- `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` add the ownership meta tags for Google Search Console and Bing Webmaster Tools.

## Adding content

- **A lesson:** add an entry to `src/lib/lessons.ts`. The array order is the reading order, and each lesson links to the next. The sitemap picks it up automatically.
- **An app:** add or update an entry in `src/lib/apps.ts`. Set `status: "released"` and `href` to the store link when it ships.

## Design

Warm paper, ink navy, one tomato accent and a highlighter yellow. Headings use Young Serif; body text uses Atkinson Hyperlegible Next, a face designed for low-vision readers, with Atkinson Hyperlegible Mono for labels and example prompts. The colour tokens live in `src/app/globals.css`; shared pieces (buttons, eyebrows, step badges, the container) are in `src/components/ui.tsx`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/learn` | Free lesson index |
| `/learn/[slug]` | One lesson (slugs in `src/lib/lessons.ts`) |
| `/apps` | Apps, in the works and released |
| `/about` | Who I am |
| `/course`, `/modules` | Permanent redirects to `/learn` (the paid course was withdrawn) |
| `/privacy` | Privacy (draft) |
| `/terms` | Terms (draft) |

Unknown URLs use the 404 page. `/sitemap.xml` and `/robots.txt` are generated.
