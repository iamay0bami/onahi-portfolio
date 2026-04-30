# Onahi Ijeh — Portfolio

Personal portfolio website for Onahi Ijeh, Creative Director, Curator & Founder of Afronated.

## Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **Animations:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — zero config needed, `vercel.json` is already set up

## Customisation Checklist

- [ ] Replace placeholder photos in `About` section with real images
- [ ] Update project names + descriptions in `src/components/sections/Portfolio.tsx`
- [ ] Update press/media items in `src/components/sections/Press.tsx`
- [ ] Update email address (`hello@onahiijeh.com`) in `src/components/sections/Contact.tsx`
- [ ] Update social media links in `src/components/sections/Contact.tsx`
- [ ] Update Afronated URL in `src/components/sections/Afronated.tsx`
- [ ] Replace font with a different display serif if desired (currently DM Serif Display)
- [ ] Wire up contact form to a real service (e.g. Resend, Formspree, EmailJS)

## Folder Structure

```
src/
  app/
    layout.tsx        # Root layout, metadata, Lenis init
    page.tsx          # Page assembly
    globals.css       # Design tokens, base styles
  components/
    layout/
      Navbar.tsx      # Sticky nav, role cycling, mobile menu
      SmoothScrollProvider.tsx
    sections/
      Hero.tsx        # Full-screen hero with GSAP entrance
      About.tsx       # Bio + image pair
      Portfolio.tsx   # Project list with cursor hover preview
      Afronated.tsx   # Brand feature section
      Values.tsx      # Key principles + word-by-word quote
      Press.tsx       # Media, talks, appearances
      Contact.tsx     # Email + form + socials
```
