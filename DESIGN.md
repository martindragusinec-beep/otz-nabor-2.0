# DOMIDOMI OTZ — Design dokumentace (Landing)

Dokument popisuje vizuální systém, strukturu stránky a UX pravidla pro náborový web obchodně-technických zástupců. Cíl: **čistý prémiový vzhled 2026**, **lidský tón**, **silná konverze** do formuláře.

---

## 1. Principy

- **Čistota před šumem** — jeden typ karty, konzistentní radiusy a stíny.
- **Důvěra před agresí** — motion podporuje čtení, ne konkuruje mu.
- **Konverze** — každá hlavní sekce vede k CTA nebo k formuláři.
- **Reální lidé** — fotky a příběhy místo stockové sterility (placeholdery dočasně).

---

## 2. Barevná paleta

| Token / použití | Hex | Poznámka |
|-----------------|-----|----------|
| Pozadí dark (hero, dark sekce) | `#0c111d` | Primární tmavá |
| Pozadí dark alt | `#111928`, `#0a0f18` | Sekce / karty |
| Primární brand (CTA, akcent) | `#E30A1A` | Červená DOMIDOMI |
| Pozadí light sekcí | `#FAFBFC` | Světlý „paper“ |
| Bordery | `#EEF2F6`, `#E8EDF3` | Jemné oddělení |
| Text primární (light bg) | `#0f172a` | Nadpisy |
| Text sekundární | `#475569`, `#64748B` | Body, eyebrow |
| Úspěch / výdělek (accent) | `#c8f28d`, `#a3e635`, `#84cc16` | Trust, progress bar |
| Žlutá (grafy, provize) | `#facc15`, `#fde68a` | Důkazové karty |

**Kontrast:** nadpisy a CTA musí splnit čitelnost na tmavém i světlém pozadí.

---

## 3. Typografie

- **Font stack:** systémový sans (projekt: `font-sans` / Tailwind).
- **Nadpisy:** `font-semibold`, negativní tracking `tracking-[-0.02em]`, řádkování ~1.08–1.15.
- **Eyebrow:** malé caps, `uppercase`, `tracking-[0.2em]`, barva `#64748B` (na světlém).
- **Body:** ~15–16px, `leading-relaxed`, sekundární barva pro podnadpisy.

**Hierarchie:** eyebrow → H2 → odstavec → CTA. Bez zbytečných velikostí navíc.

---

## 4. Layout a grid

- **Max šířka obsahu:** `1200px` (`max-w-[1200px]`), horizontální padding `px-4` → `lg:px-16`.
- **Karty:** `rounded-2xl` až `rounded-3xl` podle důležitosti.
- **Oddělovače sekcí:** jemná gradientová linka (`SectionTransition`) — ne každá sekce, jen klíčové přechody.

---

## 5. Komponenty (UI)

### CTA tlačítka
- Primární: červená výplň, bílý text, šipka v kruhu na desktopu; na mobilu šipka vedle textu.
- Sekundární: outline / ghost podle kontextu.

### Formulář (modal + inline)
- **Modal:** tmavší overlay, obsah dominantní, zavření viditelné a centrované.
- **Kroky:** trh → zkušenosti → řidičák → kontakt.
- **Finální CTA:** „Odeslat a rezervovat termín pohovoru“.
- Mobil: menší typografie u odpovědí, přehledná výška, žádné ořezávání.

### Karty (benefity, proof, příběhy)
- Světlé: bílé pozadí, border `#E8EDF3`, jemný stín při hoveru.
- Tmavé (příběhy): `#111827`, gradient přes fotku do textu.

---

## 6. Motion (wow, ale čistě)

| Prvek | Chování |
|--------|---------|
| Scroll progress | Tenký horní pás (červená → lime), `useSpring` |
| Hero | Parallax pozadí + jemný posun obsahu při scrollu v sekci |
| Reveal | Spring vstup při scrollu (`Reveal`) |
| Stagger | Děti po sobě (`Stagger` + `RevealChild`, scale 0.96 → 1) |
| Section spotlight | Velké číslo sekce + jemný orb vázaný na scroll |
| Přístupnost | `prefers-reduced-motion`: zjednodušit nebo vypnout animace |

**Pravidlo:** žádné nekonečné rušivé animace textu; max jemný float u klíčových vizuálů.

---

## 7. Struktura stránky (pořadí)

1. **Header** — logo, sticky.
2. **Hero** — headline, sub, trust box, CTA, media placeholder.
3. **Benefity** — 5 USP (přesné copy z briefu).
4. **Výdělek / proof** — graf, člověk, provize, citát.
5. **CTA** (světlý blok).
6. **Ekosystém** — kruhový vizuál + text + CTA.
7. **Příběhy** — 3 sloupce, fotka + jméno + citát.
8. **Stabilita** — mapa ČR/SK, mezinárodní skupina, carousel.
9. **CTA** (tmavý blok).
10. **Inline formulář** — stejná logika jako modal.
11. **FAQ**
12. **Footer**

---

## 8. Copy — povinné texty (nezkracovat bez schválení)

- Hero H1, sub, CTA, trust box — viz produktový brief.
- 5 USP bodů — doslovně.
- Formulář: nadpis a kroky — viz brief.
- Tón: lidský, ne korporátní; žádné „fake sliby“.

---

## 9. Assety

- Fotky: reálné záběry z terénu (postupně nahradit placeholdery).
- Logo DOMIDOMI v hlavičce.
- Mapa: SVG obrys ČR + body poboček (inventované pozice dle zadání).
- OG obrázek: `og-image` pro sdílení.

---

## 10. Technické poznámky

- **Build:** Vite + React + Tailwind v4.
- **Motion:** `motion/react` (scroll, spring, parallax).
- **Formulář:** webhook + volitelně reCAPTCHA v3 + GTM event při odeslání.
- **SEO:** `index.html` — title „DOMIDOMI OTZ“, meta description sjednocená s OG/Twitter.

---

## 11. Kontrolní checklist před releasem

- [ ] Všechny CTA vedou na formulář (modal nebo scroll na inline).
- [ ] Mobil: čitelnost formuláře a zavření modalu.
- [ ] Kontrast textu na tmavých sekcích.
- [ ] Obrázky lazy-load, rozumné velikosti.
- [ ] Reduced motion respektován.
- [ ] GTM / měření konverzí zapojeno dle produkce.

---

*Poslední aktualizace dokumentu: v souladu s aktuálním stavem repozitáře (DOMIDOMI OTZ landing).*
