# Apex Construction — Building the Future

A stunning, fully responsive, animated promotional website for **Apex Construction**, built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Production-ready and optimized for one-click deployment to **Vercel**.

![Apex Construction](https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features

- **Sticky animated navbar** with scroll-aware styling, active-section highlighting, and an animated mobile hamburger menu.
- **Parallax hero** with animated gradient background, staggered text reveals, and dual CTAs.
- **Services** grid with scroll-in cards, hover elevation, and animated icons.
- **Projects portfolio** with category filters, staggered grid animations, image zoom on hover, and a lightbox modal.
- **About** section with scroll-triggered animated counters and a leadership team grid.
- **Why Choose Us** with six animated feature cards.
- **CEO Message** with an animated quote and CEO signature.
- **Testimonials** auto-rotating carousel with animated star ratings, dots, and arrow controls.
- **Contact** cards for Phone (`tel:`), Email (`mailto:`), and WhatsApp with an animated gradient background.
- **FAQ** accordion, **Footer** with newsletter form + social links, and a **Back-to-Top** button.
- **SEO**: semantic HTML, Open Graph / Twitter meta tags, and JSON-LD structured data.
- **Accessibility**: keyboard focus states, ARIA labels, and `prefers-reduced-motion` support.
- **Performance**: `next/image` optimization, lazy loading, and Google Fonts via `next/font`.

---

## 🎨 Design System

| Token | Value | Usage |
| --- | --- | --- |
| Dark Gray | `#1a1a1a` | Primary background |
| Medium Gray | `#2d2d2d` | Secondary background |
| Border Gray | `#404040` | Borders / dividers |
| Light Gray | `#f5f5f5` | Light surfaces |
| Red Accent | `#d32f2f` / `#e74c3c` | Buttons, highlights, hover |
| White | `#ffffff` | Text on dark |

- **Headings:** Poppins · **Body:** Inter (loaded via `next/font/google`).

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.17+** (Node 20/22/24 all work)
- npm (bundled with Node)

### Installation

```bash
npm install
```

### Environment variables

Copy the example file and adjust as needed:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL for SEO/OG tags | `https://apex-construction.vercel.app` |
| `NEXT_PUBLIC_PHONE` | Contact phone number | `03455371055` |
| `NEXT_PUBLIC_EMAIL` | Contact email | `razaasifraza360@gmail.com` |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number, international format, digits only | `923455371055` |

> All values have sensible fallbacks in `lib/data.js`, so the site works even without a `.env.local`.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository. The framework auto-detects as **Next.js** (config in `vercel.json`).
3. (Optional) Add the environment variables from the table above under **Project → Settings → Environment Variables**.
4. Click **Deploy**. That's it. 🎉

You can also deploy from the CLI:

```bash
npm i -g vercel
vercel
```

---

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind layers, design tokens, utilities
│   ├── layout.js          # Root layout, fonts, SEO metadata
│   └── page.js            # Page composition + JSON-LD structured data
├── components/            # All UI sections (Navbar, Hero, Services, ...)
├── lib/
│   ├── data.js            # All site content (services, projects, team, FAQs, ...)
│   └── motion.js          # Shared Framer Motion variants
├── public/                # Static assets (favicon)
├── next.config.mjs        # Image remote patterns
├── tailwind.config.js     # Theme: colors, fonts, keyframes
└── vercel.json            # Vercel deployment config
```

## ✏️ Editing Content

Nearly all text, images, and data live in **`lib/data.js`** — update services, projects, team members, testimonials, FAQs, and contact details there without touching component code. Images use Unsplash URLs; swap them for your own by editing the `image` fields (add the host to `next.config.mjs` if it's a new domain).

---

## 📄 License

© Apex Construction. All rights reserved.
