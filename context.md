# Portfolio — Project Context

## Owner
**Satish Somarouthu**
Domain: `satishsomarouthu.me`

---

## Stack
| Layer | Choice |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | lucide-react |
| Theming | next-themes (dark/light) |
| Animations | Framer Motion |
| 3D (optional) | @react-three/fiber + @react-three/drei |
| Deployment | Vercel |
| DNS | Namecheap |

---

## Project Structure
```
/
├── app/
│   ├── layout.tsx          # Root layout, ThemeProvider, fonts
│   ├── page.tsx            # Single-page: renders all sections in order
│   └── globals.css
├── components/
│   ├── sections/           # One file per section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── motion/             # Reusable animation wrappers
│   │   ├── Reveal.tsx      # Scroll-triggered reveal
│   │   └── FadeIn.tsx      # Simple fade-in on mount
│   └── ui/                 # shadcn/ui generated components
├── content/                # Static data (no CMS needed)
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
└── lib/
    ├── utils.ts            # cn() and other helpers
    └── constants.ts        # Site-wide constants (name, links, etc.)
```

---

## Sections & Content Plan

### Navbar
- Desktop: smooth-scroll anchor links
- Mobile: shadcn `Sheet` (slide-out drawer)
- Sticky, backdrop blur
- Theme toggle (sun/moon icon)

### Hero
- Name + role + 1–2 line pitch
- CTA buttons: Resume, GitHub, LinkedIn, Contact
- 2–3 highlight metrics (e.g. "100+ leads generated")
- Entrance animation via Framer Motion

### Projects
- Grid of cards
- Each card: outcome bullets, stack badges, GitHub/live links
- shadcn `Dialog` for optional "case study" expanded view
- Hover lift animation

### About
- Short bio paragraph
- 3 "what I do" cards (e.g. Frontend, Backend, Product thinking)

### Experience / Education
- Timeline-style layout
- Cards with company, role, dates, bullet points

### Skills
- shadcn `Tabs` or `Accordion` grouped by category
- Categories: Frontend, Backend, Tools & Infra, etc.

### Contact
- Simple card with email address
- `mailto:` button — no form, no backend needed

### Footer
- Name, copyright year
- Social icon links

---

## Content Files Schema

### `content/projects.ts`
```ts
export type Project = {
  title: string
  description: string
  outcomes: string[]       // bullet points: results/impact
  stack: string[]          // badge labels
  github?: string
  live?: string
  caseStudy?: string       // long markdown or JSX for Dialog
}
```

### `content/experience.ts`
```ts
export type Experience = {
  company: string
  role: string
  start: string            // e.g. "Jan 2023"
  end: string              // e.g. "Present"
  bullets: string[]
}
```

### `content/skills.ts`
```ts
export type SkillGroup = {
  category: string
  items: string[]
}
```

---

## Motion Toolkit

### `Reveal.tsx`
- Wraps children in a `motion.div`
- Triggers fade-up on scroll into viewport (`useInView`)
- Respects `prefers-reduced-motion`

### `FadeIn.tsx`
- Simple opacity 0 → 1 on mount
- Used for Hero entrance

### Motion rules
- Subtle is better: if you notice it every time, it's too much
- Card hover: slight y-lift + shadow increase only
- No bouncy springs on content sections
- Always set `transition: { duration: 0.4 }` max for reveals

---

## Deployment & DNS

### Vercel
- Production branch: `main`
- Preview deployments: enabled
- Auto-deploy on every push to `main`
- Add domain: `satishsomarouthu.me` + `www.satishsomarouthu.me`

### Namecheap DNS Records
| Type | Host | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

- Canonical: `www` → non-www (or vice versa, pick one and stick to it)
- SSL: auto-provisioned by Vercel

---

## SEO & Metadata (do early, not last)
- `app/layout.tsx`: `metadata` export with title, description, OG image
- Favicon: place in `app/favicon.ico`
- `public/robots.txt`
- `app/sitemap.ts` (Next.js built-in sitemap generation)
- OG image: `app/opengraph-image.tsx` or static PNG in `public/`

---

## Analytics
- Enable Vercel Analytics (free tier) — add `<Analytics />` to root layout
- Gives scroll depth, page views, top referrers out of the box

---

## Key Decisions & Rules
1. **No contact form** — mailto only. Keeps it zero-backend.
2. **Single page** — all sections on `/`, smooth scroll nav.
3. **3D: start with Option A** (tilt + animated gradient borders). Only reach for react-three/fiber if there's a concrete visual concept.
4. **Content before polish** — fill `content/*.ts` files before touching animations.
5. **Ship Phase 3 early** — deploy to Vercel before Phase 2 is fully done. Catch env issues early, get a shareable link.
6. **SEO after first deploy** — not last. Takes 30 min and pays off immediately when links are shared.

---

## Phase Checklist
- [ ] Phase 1 — Bootstrap (repo, Next, Tailwind, shadcn, themes)
- [ ] Phase 2 — Core sections (all content live)
- [ ] Phase 3 — CI/CD + Vercel deploy
- [ ] Phase 4 — Framer Motion (Reveal, FadeIn, hover states)
- [ ] Phase 5 — "Wow" layer (tilt + gradient borders first)
- [ ] Phase 6 — Custom domain + DNS
- [ ] Phase 7 — SEO, perf, a11y polish
