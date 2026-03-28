# DOMIDOMI - Náborová Landing Page

Moderní, responzivní a vysoce konverzní náborová landing page pro DOMIDOMI s komplexním 7-krokovým náborovým formulářem.

## 🚀 Deployment na Vercel

### Rychlý start

1. **Push kódu na GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import do Vercel**
   - Jdi na [vercel.com](https://vercel.com)
   - Klikni na "Add New Project"
   - Importuj svůj GitHub repository
   - Vercel automaticky detekuje Vite nastavení

3. **Build nastavení** (automaticky detekováno):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### ✅ Webhook URL nakonfigurována

Make.com webhook je již nakonfigurován v kódu:
```
https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6
```

Webhook automaticky přijímá data z obou formulářů:
- **Hero formulář** - `source: "hero_form"`
- **LeadBanner formulář** - `source: "lead_banner_form"`
- **RecruitmentForm** - `source: "recruitment_form"`

## 📦 Lokální vývoj

```bash
# Instalace dependencies
npm install

# Spuštění dev serveru
npm run dev

# Build pro produkci
npm run build

# Preview produkčního buildu
npm run preview
```

## 🛠️ Tech Stack

- **React 18.3** - UI framework
- **Vite 6** - Build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Styling
- **Motion** - Animace
- **Lucide React** - Ikony

## 📁 Struktura projektu

```
/
├── src/
│   ├── app/
│   │   ├── components/     # React komponenty
│   │   ├── App.tsx         # Root komponenta
│   │   └── routes.tsx      # Routing konfigurace
│   ├── imports/            # Figma exporty (SVG)
│   ├── styles/             # CSS soubory
│   └── main.tsx            # Entry point
├── index.html              # HTML šablona
├── vite.config.ts          # Vite konfigurace
├── vercel.json             # Vercel konfigurace
└── package.json            # Dependencies
```

## ✨ Hlavní featury

- ✅ **7-krokový formulář** s automatickým postupem
- ✅ **Progress bar** s validací jednotlivých kroků
- ✅ **Webhook integrace** pro odesílání dat
- ✅ **Propojení Hero a LeadBanner** formulářů
- ✅ **Sticky CTA lišta** pro maximální konverzi
- ✅ **Profesionální stránka podmínek** ochrany osobních údajů
- ✅ **Pixel-perfect design** podle Figma návrhů
- ✅ **Plně responzivní** - mobile-first přístup

## 🎨 Design systém

- **Max šířka kontejnerů**: 1280px
- **Primární barva (CTA)**: #E30A1A (červená)
- **Sekundární barva (zvýraznění)**: #F7D52C (žlutá)
- **Text**: #111928 (tmavá)
- **Pozadí**: #F9FAFB (světlá)

## 🔗 Důležité stránky

- `/` - Hlavní landing page
- `/podminky-ochrany-osobnich-udaju` - Privacy policy

## 📱 Kontakt & Support

Pro technické dotazy nebo úpravy kontaktujte vývojáře.

---

**Vytvořeno s ❤️ pro DOMIDOMI**