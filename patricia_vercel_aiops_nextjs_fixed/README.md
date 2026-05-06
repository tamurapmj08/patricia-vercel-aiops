# Patricia AI Ops Portfolio — Vercel / Next.js Version

This is an app-like Next.js version of the portfolio for Vercel.

## Features
- Dynamic project case study pages: `/projects/[slug]`
- Interactive project filters
- Next.js API route for inquiry submissions: `/api/inquiry`
- Vercel Analytics component ready
- Google Calendar booking CTA
- Mobile-friendly layout
- Confidential project screenshots blurred/sanitized

## Local setup
```bash
npm install
npm run dev
```

## Optional lead forwarding
Add `FORM_ENDPOINT` in Vercel Environment Variables if you want `/api/inquiry` to forward submissions to Formspree, Make, Zapier, Airtable, or another webhook.
