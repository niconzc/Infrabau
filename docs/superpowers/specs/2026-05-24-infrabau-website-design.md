# INFRA BAU GmbH — Premium Website Design Spec
**Datum:** 2026-05-24  
**Projekt:** `~/git/infrabau`  
**Stack:** Next.js 15 · TypeScript · TailwindCSS · Framer Motion  
**Deployment:** Static Export (`next export`) → bestehendes Hosting

---

## 1. Projektziel

Komplette Neuentwicklung der Website für INFRA BAU GmbH (infrabau.at) als hochwertige, moderne Weiterentwicklung der bestehenden Website. Kein Rebranding — die bestehende Firmenidentität, Struktur, Projekte und Bilder bleiben erhalten, werden aber auf Premium-Agentur-Niveau umgesetzt.

**Zielgruppe:** Österreichische Gemeinden, Energieversorger, Infrastrukturbetreiber, öffentliche Auftraggeber, B2B-Kunden im DACH-Raum.

**Erfolgskriterium:** Die Website wirkt wie ein etabliertes österreichisches Infrastrukturunternehmen mit modernem Premium-Webauftritt — nicht wie ein KI-Template oder SaaS-Produkt.

---

## 2. Entscheidungen

| Parameter | Entscheidung |
|---|---|
| Inhaltsverwaltung | Statisch / hardcoded (TypeScript Datenschicht) |
| Sprache | Nur Deutsch |
| Deployment | Static Export (`output: 'export'`) |
| Repository | `~/git/infrabau` |
| Hero Layout | Fullscreen Cinematic (dunkel, Text links, Bild rechts, Stats) |
| Projekt-Sektion Homepage | Featured-Projekt groß + 3 kleinere darunter |
| Projektdetailseite | Magazine-Stil: dunkler Header, weißer Inhalt, breite Galerie |
| Architektur | Next.js 15 App Router + TypeScript Datenschicht |
| Typografie | IBM Plex Sans (Headlines + Body) |

---

## 3. Architektur

### Projektstruktur

```
~/git/infrabau/
├── app/
│   ├── layout.tsx                # Root layout (Header, Footer, Framer Provider)
│   ├── page.tsx                  # Startseite
│   ├── leitungsbau/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── betonbau/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── freileitungsbau/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── erdbau-hangsicherung/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── projekte/page.tsx
│   ├── jobs/page.tsx
│   ├── kontakt/page.tsx
│   ├── anfahrt/page.tsx
│   ├── impressum/page.tsx
│   ├── datenschutz/page.tsx
│   └── agb/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky, transparent→solid bei Scroll
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx        # Desktop Nav
│   │   └── MobileMenu.tsx        # Slide-in mobile nav
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── JobsCTA.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── ProjectNav.tsx
│   ├── services/
│   │   ├── ServiceHero.tsx
│   │   └── ServiceProjects.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionLabel.tsx
│       └── AnimatedNumber.tsx
│
├── lib/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   └── jobs.ts
│   └── types.ts
│
├── public/
│   └── (favicon, og-image)
├── next.config.ts
└── tailwind.config.ts
```

### TypeScript Interfaces (`lib/types.ts`)

```ts
export type ProjectCategory =
  | 'leitungsbau'
  | 'betonbau'
  | 'freileitungsbau'
  | 'erdbau-hangsicherung'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  location: string
  client: string
  volume?: string
  period: string
  coverImage: string
  images: string[]
  description: string
  scope: string[]
  featured?: boolean
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  scope: string[]
  heroImage: string
}

export interface Job {
  id: string
  title: string
  type: 'Vollzeit'
  description: string
}
```

### Bilder-Strategie

Alle Bilder werden als externe URLs direkt von `https://infrabau.at/images/...` referenziert. Kein lokaler Download. `next.config.ts`:

```ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
```

Für Bilder ohne bekannte URL wird ein neutraler Platzhalter mit CSS-Gradient verwendet. Service-Hero-Bilder (für Leistungsseiten) verwenden das Cover-Bild des ersten Projekts der jeweiligen Kategorie als Fallback.

Bekannte ANKÖ-Zertifikat-Grafik: `https://infrabau.at/images/ankoe-2020.jpg`

---

## 4. Visual Design System

### Farbpalette (Tailwind Tokens)

| Token | Hex | Verwendung |
|---|---|---|
| `infra-navy` | `#0D1F3C` | Navigation, Header, dunkle Sections |
| `infra-blue` | `#1D4ED8` | Akzent, CTAs, Links |
| `infra-steel` | `#111827` | Hintergründe, Hero, dunkle Karten |
| `infra-mist` | `#F8FAFC` | Helle Sections, Projektseiten-Inhalt |
| `infra-concrete` | `#6B7280` | Fließtext, Labels, Metadaten |
| `infra-light` | `#6EA8FE` | Highlight-Labels auf dunklem BG |
| `infra-border` | `#1E2230` | Trennlinien auf dunklem BG |

### Typografie

- **Schriftart:** IBM Plex Sans (Google Fonts) — Headlines + Body
- **Headlines:** 700–800 weight, -0.02em tracking, große Schriftgrade
- **Labels/Kategorien:** 600 weight, 0.12–0.18em tracking, uppercase, 11–13px
- **Body:** 400–500 weight, 1.7 line-height, `infra-concrete`
- **Zahlen/Stats:** 800 weight, sehr groß, weiß oder navy

### Komponenten-Stil

- Buttons: `border-radius: 2px` — technisch, nicht soft
- Hover: subtile Helligkeit oder Border-Farbe — kein Scale-Bounce
- Projekt-Cards: Border statt Box-Shadow auf dunklem BG
- Kein Box-Shadow-Stacking

### Framer Motion — Animationen

| Typ | Konfiguration |
|---|---|
| Fade-in beim Scroll | `opacity 0→1, y: 20→0, duration: 0.6s, ease: easeOut` |
| Stagger Children | `delayChildren: 0.1s, staggerChildren: 0.08s` |
| Hero Einblendung | `opacity 0→1, duration: 1s, delay: 0.3s` |
| Hover Projekt-Bild | `scale: 1.02` auf `<img>` innen, nicht auf Card |
| Zahlen-Animation | `useInView + useMotionValue, ease: easeOut, 1.5s` |

Kein Parallax-Scrolling, keine Path-Animationen, keine Slide-Ins mit großem Offset.

---

## 5. Seitenstruktur

### Startseite (`/`)

1. **HeroSection** — 100vh, dunkles Bild, Claim links, Stats rechts unten, CTA
2. **ServicesGrid** — 4 Leistungsbereiche als dunkle Kacheln
3. **ProjectsSection** — 1 Featured-Projekt (groß) + 3 kleinere darunter
4. **AboutSection** — Gründungsgeschichte 2012, Werte, ANKÖ-Zertifikat
5. **StatsSection** — Animierte Zahlen: Gründungsjahr, Projekte, Leistungsbereiche
6. **JobsCTA** — 3 offene Stellen kompakt, Link zu /jobs
7. **Footer**

### Leistungsseiten (`/leitungsbau`, `/betonbau`, etc.)

1. ServiceHero — 65vh, Kategoriebild, Titel, Kurzbeschreibung
2. Leistungsübersicht — technische Stichpunkte (was wird gebaut)
3. Projektliste — alle Projekte dieser Kategorie
4. Kontakt-CTA

### Projektdetailseite (`/[kategorie]/[slug]`)

1. Dunkler Hero — Projektname, Kategorie, Ort (65vh)
2. Meta-Leiste — Auftraggeber / Volumen / Zeitraum / Kategorie
3. Inhalt — Beschreibung + Leistungsumfang als Liste (zweispaltig auf Desktop)
4. Vollbreite Galerie — Originalbilder von infrabau.at
5. Projekt-Navigation — vorheriges / nächstes Projekt

### Projekte-Übersicht (`/projekte`)

- Filter-Tabs: Alle / Leitungsbau / Betonbau / Freileitungsbau / Erdbau
- 3-spaltige Card-Grid mit hover-Overlay
- Alle Kategorien zusammen

### Jobs (`/jobs`)

- Hero mit Recruiting-Headline
- 3 Stellenkarten: Titel, Vollzeit-Badge, Bewerben-Link
- Bewerbung via `mailto:office@infrabau.at`

### Kontakt (`/kontakt`)

- Adresse + Telefon + E-Mail prominent (primäres Ziel der Seite)
- Google Maps iframe (kein API-Key)
- Kontaktformular: einfaches HTML-Formular ohne Backend — Submit öffnet den E-Mail-Client via `mailto:office@infrabau.at`. Kein Server-Side Processing. Alternativ: Felder weglassen und nur `<a href="mailto:">` als CTA zeigen.

### Impressum / Datenschutz / AGB

- Einfache Text-Seiten, einheitliches Layout

---

## 6. Projektdaten (bekannte Projekte)

### Leitungsbau
- Erweiterung WVA St. Veit Ringleitung Wimm
- WVA Radstadt BA 02
- Kanal Grünwaldkopf
- A1 Telekom HWS Alpenstraße (`os_imagegallery_109`, 16 Bilder)
- ABA Bischofshofen BA 25 und WVA BA 26
- ABA & WVA Palting BA 02
- Aufschließung Zehmemoos Bürmoos
- Aufschließung BB Inkoba Lengau
- Radstadt V Südtirolersiedlung Kanalumlegungen
- Hallwang RW-Kanal Tuffernstraße
- Kanalsanierung 2013 Hüttau
- Kanalsanierung Seekarhaus Obertauern

### Betonbau
- Containerschulanlage Schulzentrum Radstadt
- Erneuerung Ennsbrücke Radstadt
- MOTION06 Lengau
- A1 West Autobahn km 276,72–275,51
- A10 Tauern Autobahn Parkplatzertüchtigung Hohenwerfen

### Freileitungsbau
- 380/110-kV Limbergleitung UW Kaprun
- APG Wald/Pinzgau
- 110-kV-Leitung Einbindung Ybbsfeld II
- 110-kV-BSL St. Johann – Uttendorf M242–M262
- 110-kV-Leitung Schwarzach – Klammstein M185–M197
- Mastfundierung BSL Lend
- EVN Bruck/Leitha
- 110-kV-Leitung 184/1,2 St. Peter–Braunau–Ranshofen
- 110-kV-Leitung 111/1 Reißeck–Landskron
- APG-Fundamentsanierungen 2013

### Erdbau / Hangsicherung
- Außenanlage Raika Friedburg
- Sanierung Josef-Moosbrucker-Weg Salzburg
- Hangsicherung Buchberg Bischofshofen
- APG Gröbming (`os_imagegallery_115`, 6 Bilder)
- LASH & LIFT Lengau

---

## 7. SEO

| Seite | Title-Tag |
|---|---|
| Startseite | `Tiefbau Salzburg \| INFRA BAU GmbH` |
| Leitungsbau | `Leitungsbau Salzburg \| INFRA BAU GmbH` |
| Betonbau | `Betonbau Salzburg \| INFRA BAU GmbH` |
| Freileitungsbau | `Freileitungsbau Österreich \| INFRA BAU GmbH` |
| Erdbau | `Erdbau & Hangsicherung Salzburg \| INFRA BAU GmbH` |
| Projekte | `Referenzprojekte \| INFRA BAU GmbH` |
| Projekt-Detail | `[Projektname] \| [Kategorie] \| INFRA BAU GmbH` |

**Keywords:** Tiefbau Salzburg, Leitungsbau Salzburg, Infrastruktur Österreich, Betonbau Salzburg, Erdbau Eugendorf, Freileitungsbau Österreich, Hangsicherung Salzburg

---

## 8. Mobile

- Sticky Header mit Hamburger-Menü
- MobileMenu als Slide-in (volle Höhe, dunkel)
- Hero: Claim stacked, Stats 2×2 Grid
- Projekte: 1-spaltig statt 3-spaltig
- Galerie: horizontal scrollbar

---

## 9. Unternehmensdaten

```
INFRA BAU GmbH
Nordstraße 5, 5301 Eugendorf, Austria
T +43 6225 87160-0
F +43 6225 87160-90
office@infrabau.at

Gegründet: 2012
Gründer: Ing. Wolfgang Ellmer & Bmst. Ing. Herbert Sulzberger
ANKÖ-zertifiziert
```
