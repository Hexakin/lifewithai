# Life with AI

Marketing site and starter course for everyday learners in the UK and Europe. Free lessons under `/learn`, and a £39 self-paced course. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

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

No environment variables are required. The public site URL defaults to `https://lifewithai.co.uk`. To override it (canonical links, sitemap, robots):

```bash
NEXT_PUBLIC_SITE_URL=https://lifewithai.co.uk
```

## Deploy

Deploy on Vercel from this repository. The app builds with `npm run build` and does not need Stripe keys, a database, or auth.

Point `lifewithai.co.uk` and `lifewithai.uk` at the Vercel project when DNS is ready. Set `NEXT_PUBLIC_SITE_URL` to the canonical domain if it should not be `https://lifewithai.co.uk`.

Checkout is a preview. The “Get the course — £39” button scrolls to an email form that stays in the browser. It does not store addresses or take payment.

## Design

Warm paper, ink navy, one tomato accent and a highlighter yellow. Headings use Young Serif; body text uses Atkinson Hyperlegible Next, a face designed for low-vision readers, with Atkinson Hyperlegible Mono for labels and example prompts. The colour tokens live in `src/app/globals.css`; shared pieces (buttons, eyebrows, step badges, the container) are in `src/components/ui.tsx`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/course` | Course sales, the four modules, FAQ, checkout preview |
| `/modules` | Permanent redirect to `/course` |
| `/learn` | Free lesson index |
| `/learn/first-month-with-ai` | Module 1 lesson |
| `/learn/work-home-and-money` | Module 2 lesson |
| `/learn/catch-up-without-shame` | Module 3 lesson |
| `/learn/save-hours-every-week` | Module 4 lesson |
| `/learn/how-to-ask-for-a-useful-answer` | How to ask |
| `/learn/what-to-keep-private` | What to keep private |
| `/privacy` | Privacy stub |
| `/terms` | Terms stub |

Unknown URLs use the 404 page. `/sitemap.xml` and `/robots.txt` are generated.
