# 🚀 VERCEL DEPLOYMENT CHECKLIST

## ✅ Připravené soubory pro Vercel

### Základní konfigurace
- ✅ `/package.json` - NPM dependencies a build skripty
- ✅ `/vercel.json` - Vercel konfigurace (SPA routing)
- ✅ `/vite.config.ts` - Vite build konfigurace
- ✅ `/tsconfig.json` - TypeScript konfigurace
- ✅ `/.gitignore` - Git ignore soubory
- ✅ `/.nvmrc` - Node.js verze (18)

### Entry points
- ✅ `/index.html` - HTML šablona
- ✅ `/src/main.tsx` - React entry point
- ✅ `/src/app/App.tsx` - Root komponenta

### Routing
- ✅ `/src/app/routes.tsx` - React Router konfigurace
- ✅ `/vercel.json` rewrites pro SPA

### Assety
- ✅ Všechny `figma:asset` odkazy odstraněny
- ✅ Obrázky nahrazeny Unsplash URL
- ✅ SVG komponenty funkční

## 📦 Build Commands

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

## 🔍 Pre-deployment kontrola

### 1. Lokální build test
```bash
npm install
npm run build
npm run preview
```

### 2. Zkontroluj build output
- Build složka: `dist/`
- Index.html v dist/ ✅
- Assets v dist/assets/ ✅

### 3. Zkontroluj routing
- Homepage `/` funguje ✅
- Privacy policy `/podminky-ochrany-osobnich-udaju` funguje ✅
- 404 fallback na index.html ✅

## 🌐 Vercel Deployment Steps

### Option 1: GitHub Integration (Doporučeno)

1. **Push na GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for Vercel"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import do Vercel**
   - Jdi na https://vercel.com/new
   - Vyber svůj GitHub repo
   - Klikni "Import"
   - Vercel automaticky detekuje nastavení

3. **Deploy**
   - Klikni "Deploy"
   - Počkej 2-3 minuty
   - ✅ Hotovo!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

## 🎯 Po deploymentu zkontroluj

- [ ] Homepage se načítá správně
- [ ] Formulář funguje
- [ ] Routing mezi stránkami funguje
- [ ] Obrázky se načítají
- [ ] Animace fungují
- [ ] Mobilní verze vypadá dobře
- [ ] Webhook odeslání funguje (pokud nastaveno)

## 🔧 Možné problémy a řešení

### Problem: "react-scripts: command not found"
**Řešení**: ✅ Opraveno - používáme Vite místo CRA

### Problem: "figma:asset not found"
**Řešení**: ✅ Opraveno - všechny nahrazeny Unsplash URL

### Problem: 404 on page refresh
**Řešení**: ✅ Opraveno - vercel.json rewrites nastaveny

### Problem: Build fails - missing dependencies
**Řešení**: Zkontroluj package.json a spusť `npm install`

## 📊 Environment Variables (pokud potřeba)

V Vercel Dashboard → Settings → Environment Variables:

```
VITE_WEBHOOK_URL=https://your-webhook-url.com
```

## 🎉 Gratulujeme!

Tvoje aplikace je připravená na Vercel deployment!

**Next steps:**
1. Push na GitHub
2. Import do Vercel
3. Deploy
4. Share link! 🚀

---

**Pro support:** Kontaktuj vývojáře
