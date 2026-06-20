# DT Webstudio — Agentur-Website

Selbstdarstellung von **DT Webstudio** (Webdesign & -entwicklung aus dem Inntal /
Raum Rosenheim). Proben-/Referenzversion.

## Stack

- **Astro 6** (statisch) + **Tailwind 4** (via `@tailwindcss/vite`, Theming in `src/styles/global.css`)
- **Three.js** — 3D-Showpiece im Hero
- Selbst-gehostete Schriften (DSGVO-konform, keine Google-Fonts-Requests):
  **Newsreader** (Display) + **Inter** (Body) unter `public/fonts/`

## Design

- **Editorial Light** · warmes Off-White, Terracotta-Akzent, ruhiger Rhythmus
- Eine 3D-Animation als gezielter Blickfang (Hero), sonst zurückhaltende Scroll-Reveals
- Barrierefrei: semantische Landmarks, korrekte Heading-Ebenen, Skip-Link,
  `prefers-reduced-motion`-sicher, Tastatur-bedienbares Mobile-Menü

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321/dt-webstudio/
npm run build    # statischer Build nach dist/
npm run preview  # Produktions-Build lokal prüfen
```

## Inhalte pflegen

Alle Texte, Leistungen, Ablauf-Schritte, Werte und Referenzen liegen zentral in
[`src/data/site.ts`](src/data/site.ts).

## Vor Veröffentlichung erledigen (TODO)

- Echte Kontaktdaten in `src/data/site.ts` (E-Mail, Telefon, Adresse)
- Impressum & Datenschutz mit echten Angaben füllen (`src/pages/impressum.astro`,
  `src/pages/datenschutz.astro`) — Datenschutz ggf. rechtlich prüfen lassen
- Finale Akzentfarbe in `src/styles/global.css` (`--color-accent`) bestätigen

## Mögliche Ausbaustufe

AI-generierte Hero-Visuals / Hintergrundvideo via **Higgsfield MCP** (läuft über
bestehende Higgsfield-Credits, kein Aufpreis für den MCP).

---

Erstellt von DT Webstudio.
