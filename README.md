# K. Senthilkumar — Portfolio Site

Personal engineering portfolio for K. Senthilkumar, Technical Manager (Welding & Quality Specialist, Oil & Gas), built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Structure

- `app/` — routes, layout, and global styles
- `components/` — page sections (Hero, About, Expertise, Experience, Credentials, Contact, etc.)
- `lib/resume-data.ts` — all resume content (profile, experience, certifications, standards). Edit this file to update the site's content.
- `public/resume.pdf` — downloadable CV (personal identifying details such as DOB, passport number, and marital status have been redacted from the version served here).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploying on Vercel

1. Push this repository to GitHub (already set up if you're reading this from the repo).
2. In [Vercel](https://vercel.com/new), import the repository — the Next.js framework preset is detected automatically, no configuration needed.
3. Deploy. Every push to the main branch will trigger a new deployment.

To update site content (experience, certifications, contact details), edit `lib/resume-data.ts` and redeploy.
