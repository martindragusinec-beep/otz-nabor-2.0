# 🎨 Favicons & OG Image

Tento adresář obsahuje všechny favicon soubory a Open Graph (OG) image pro sociální sítě.

## 📁 Vytvořené soubory:

### **Favicons:**
- ✅ `/public/favicon.svg` - Hlavní SVG favicon (48x48)
- ✅ `/public/favicon-32x32.svg` - Malá verze (32x32)
- ✅ `/public/apple-touch-icon.svg` - Apple iOS ikona (180x180)

### **Open Graph Image:**
- ✅ `/public/og-image.html` - HTML template pro generování OG image
- ⚠️ **TODO:** Vygeneruj `/public/og-image.png` (1200x630px)

---

## 🚀 Jak vygenerovat OG image:

### **Metoda 1: Screenshot z prohlížeče**

1. Otevři `/public/og-image.html` v prohlížeči
2. Nastav rozlišení okna na **1200x630px**
3. Udělej screenshot (nebo použij DevTools)
4. Ulož jako `/public/og-image.png`

### **Metoda 2: Online nástroj**

Použij jeden z těchto nástrojů:
- 🎨 **Figma** - Export jako PNG 1200x630
- 🌐 **Canva** - Custom size 1200x630
- 🖼️ **OG Image Generator** - https://og-image.vercel.app/

### **Metoda 3: Puppeteer (automaticky)**

```bash
# Install puppeteer
npm install -D puppeteer

# Create script to generate PNG
node scripts/generate-og-image.js
```

---

## ✅ Meta tagy jsou nastaveny

V `/index.html` jsou již přidány všechny meta tagy:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://kariera.domidomi.cz/og-image.png" />

<!-- Twitter Card -->
<meta property="twitter:image" content="https://kariera.domidomi.cz/og-image.png" />

<!-- Favicons -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
```

---

## 🎯 Design specifikace:

### **Favicon:**
- **Barva pozadí:** `#E30A1A` (DOMIDOMI červená)
- **Ikona:** Bílá šipka (zjednodušené logo)
- **Formát:** SVG (škálovatelné)

### **OG Image (1200x630):**
- **Pozadí:** Tmavý gradient `#111928` → `#1F2937`
- **Logo:** DOMIDOMI bílé logo
- **Headline:** "Staň se obchodníkem až 200 000 Kč / měsíc"
- **Stats:** 200K+ měsíční výdělek, 100% férová provize, 0 Kč vstupní náklady
- **CTA:** "Mám zájem" tlačítko

---

## 📊 Testování:

### **Favicons:**
1. Otevři web v prohlížeči
2. Zkontroluj záložku prohlížeče - měla by mít červenou ikonu

### **OG Image:**
1. Sdílej URL na Facebooku/LinkedInu
2. Použij Facebook Debugger: https://developers.facebook.com/tools/debug/
3. Použij Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## 🔄 Next steps:

1. ✅ Favicons vytvořeny
2. ✅ Meta tagy přidány
3. ⚠️ **TODO:** Vygeneruj `og-image.png` ze souboru `og-image.html`
4. ⚠️ **TODO:** Nahraj `og-image.png` do `/public/`
5. ⚠️ **TODO:** Commitni a push na Vercel

```bash
git add public/
git commit -m "Add favicons and OG image"
git push origin main
```
