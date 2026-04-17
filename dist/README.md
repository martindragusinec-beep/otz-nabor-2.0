# 📁 Public Assets Guide

Tato složka obsahuje **statické soubory** které jsou dostupné přímo z root URL.

## 📂 Struktura

```
/public/
  └── images/          ← Sem dávej všechny obrázky
      ├── hero-bg.jpg
      ├── team-photo.jpg
      └── ...
```

---

## ✅ Jak používat obrázky v kódu

### 1️⃣ **S klasickým `<img>` tagem:**

```tsx
<img 
  src="/images/hero-bg.jpg" 
  alt="Hero pozadí" 
  className="w-full h-auto"
/>
```

### 2️⃣ **S `ImageWithFallback` komponentou:** (doporučeno)

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="/images/hero-bg.jpg" 
  alt="Hero pozadí" 
  className="w-full h-auto"
/>
```

### 3️⃣ **V CSS jako background:**

```css
.hero {
  background-image: url('/images/hero-bg.jpg');
}
```

---

## 🎯 Doporučené názvy souborů

- **Hero sekce:** `hero-bg.jpg`, `hero-mobile.jpg`
- **Portfolio:** `portfolio-1.jpg`, `portfolio-2.jpg`
- **Team:** `team-photo.jpg`
- **Logos:** `logo-main.png`, `logo-white.png`

**Pravidla:**
- ✅ Malá písmena
- ✅ Pomlčky místo mezer (`hero-bg.jpg` ne `hero bg.jpg`)
- ✅ Popisné názvy
- ✅ Optimalizuj obrázky před nahráním (WebP, JPG < 500KB)

---

## 📦 Deployment

Po přidání obrázků do `/public/images/`:

```bash
git add public/images/
git commit -m "Add local images"
git push origin main
```

Vercel automaticky nahraje všechny soubory z `/public/` složky.

---

## 🚀 Příklad nahrazení Unsplash URL

**PŘED (Unsplash):**
```tsx
<img src="https://images.unsplash.com/photo-..." alt="Hero" />
```

**PO (Lokální):**
```tsx
<img src="/images/hero-bg.jpg" alt="Hero" />
```
