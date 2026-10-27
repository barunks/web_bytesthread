# BytesThread — Company Portfolio Website

The official marketing and portfolio website for **BytesThread**, a fintech software company specialising in high-frequency trading, algorithmic strategies, and low-latency financial systems.

Built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion** and **Three.js**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero with galaxy background, live ticker tape, product overview |
| `/about` | Company story, tech domains, team depth |
| `/hft-fx` | HFT & FX trading systems — co-location, ultra-low latency, transport layer |
| `/ai-trading` | AI-driven trading — strategy explorer, signal stack, risk engine |
| `/crypto` | Crypto trading — arbitrage, on-chain analytics |
| `/portfolio-risk` | BytePulse microservices — portfolio management + risk analytics |
| `/contact` | Contact form |

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** — build tooling
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 14** — page and component animations
- **Three.js / React Three Fiber** — 3D galaxy background
- **React Router DOM 7** — client-side routing
- **Lucide React** — icons

---

## Project Structure

```
src/
├── components/       # Shared UI components (Navbar, Footer, TickerTape, ProductCard, ...)
├── data/             # Centralised content data (content.ts)
├── pages/            # One file per route
└── hooks/            # Custom React hooks
public/
├── images/           # WebP hero/section images
├── videos/           # Background video assets
└── logo.webp         # BytesThread logo
```

---

## Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

---

## Layout Notes

- **Navbar** is `fixed top-0`, height `64px`
- **TickerTape** is `fixed top-16`, height `~36px`
- All pages use `pt-24` (96px) to clear both fixed bars
- Home hero uses `pt-28` (112px)
- All hover interactions use inline styles + `onMouseEnter/onMouseLeave` (Tailwind purges unused dynamic classes)
- Responsive grids use Tailwind breakpoint classes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)

---

## Related Projects

- **BytePulse** — Java 21 microservices backend (portfolio-service, market-data-service, trading-commons, bytepulse-ui-app)
