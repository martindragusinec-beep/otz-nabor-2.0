# 🌐 Nastavení vlastní domény `www.kariera.domidomi.cz/obchodnik`

## ✅ CO JSEM ZMĚNIL V KÓDU:

### **1️⃣ React Router** (`/src/app/routes.tsx`)
```tsx
// Root path (/) → automaticky redirectuje na /obchodnik
{
  path: "/",
  element: <Navigate to="/obchodnik" replace />,
},
{
  path: "/obchodnik",  // ← Hlavní landing page
  Component: Home,
},
```

### **2️⃣ Vercel.json** - Redirecty
```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "/obchodnik",
      "permanent": false
    }
  ]
}
```

### **3️⃣ Meta tagy** (`index.html`)
```html
<meta property="og:url" content="https://www.kariera.domidomi.cz/obchodnik" />
<meta property="twitter:url" content="https://www.kariera.domidomi.cz/obchodnik" />
```

---

## 🔧 CO MUSÍŠ UDĚLAT NA VERCELU:

### **Krok 1: Přidej doménu s `www`**

1. Jdi na **Vercel Dashboard**
2. Vyber svůj projekt
3. **Settings** → **Domains**
4. Klikni **"Add Domain"**
5. Zadej: `www.kariera.domidomi.cz`
6. Klikni **"Add"**

### **Krok 2: Nastav DNS záznamy**

Vercel ti ukáže co potřebuješ přidat v DNS:

#### **Možnost A: CNAME (doporučeno)**
```
Type: CNAME
Name: www.kariera
Value: cname.vercel-dns.com
```

#### **Možnost B: A záznamy**
```
Type: A
Name: www.kariera
Value: 76.76.21.21
```

---

## 📋 DNS ZÁZNAMY U REGISTRÁTORA:

Jdi na **doménu domidomi.cz** (u registrátora) a přidej:

### **Pro `www.kariera.domidomi.cz`:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www.kariera | cname.vercel-dns.com | 3600 |

### **Pro redirect z `kariera.domidomi.cz` na `www.kariera.domidomi.cz`:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | kariera | cname.vercel-dns.com | 3600 |

> **📌 DŮLEŽITÉ:** Vercel automaticky přidá SSL certifikát (HTTPS) po propagaci DNS (5-60 minut).

---

## 🔄 REDIRECT LOGIKA:

Po nastavení budou fungovat všechny tyto varianty:

```
kariera.domidomi.cz              → www.kariera.domidomi.cz/obchodnik
kariera.domidomi.cz/obchodnik    → www.kariera.domidomi.cz/obchodnik
www.kariera.domidomi.cz          → www.kariera.domidomi.cz/obchodnik
www.kariera.domidomi.cz/obchodnik → www.kariera.domidomi.cz/obchodnik ✅
```

**Finální URL:** `https://www.kariera.domidomi.cz/obchodnik` ✅

---

## 🚀 DEPLOY ZMĚN:

```bash
# Commitni změny
git add .
git commit -m "Add /obchodnik route and www subdomain support"
git push origin main
```

**Vercel automaticky re-deployuje** (~2 minuty)

---

## ✅ TESTOVÁNÍ:

### **Po propagaci DNS (5-60 minut):**

1. **Test URL:**
   ```
   https://www.kariera.domidomi.cz/obchodnik
   ```

2. **Test redirectu:**
   ```
   https://www.kariera.domidomi.cz/  → redirectuje na /obchodnik ✅
   ```

3. **Test HTTPS:**
   - Zelený zámek v prohlížeči ✅
   - SSL certifikát od Vercel ✅

4. **Test formuláře:**
   - Otevři formulář
   - Vyplň a odešli
   - Zkontroluj webhook: `https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6`

---

## 🛠️ VERCEL NASTAVENÍ (detailed):

### **V Vercel Dashboard:**

#### **1. Settings → Domains:**
```
Production Domain:
  ✅ www.kariera.domidomi.cz

Redirect:
  ✅ kariera.domidomi.cz → www.kariera.domidomi.cz
```

#### **2. Settings → Environment Variables** (pokud máš):
```
VITE_WEBHOOK_URL = https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6
```

#### **3. Settings → General:**
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## 🐛 TROUBLESHOOTING:

### **Problém 1: DNS_PROBE_FINISHED_NXDOMAIN**
**Řešení:**
- Čekej 5-60 minut na DNS propagaci
- Zkontroluj DNS záznamy: https://dnschecker.org/
- Zkus `flush DNS cache`: 
  ```bash
  # Windows
  ipconfig /flushdns
  
  # Mac
  sudo dscacheutil -flushcache
  ```

### **Problém 2: 403 Forbidden**
**Řešení:**
- Vercel ještě nedokončil SSL setup
- Čekej 5-10 minut po DNS propagaci

### **Problém 3: 404 Not Found na `/obchodnik`**
**Řešení:**
- Zkontroluj že změny jsou deploynuté na Vercelu
- Zkontroluj **Vercel Deployment Logs**

---

## 📊 VERCEL DOMAIN SETTINGS:

Po úspěšném nastavení uvidíš v **Vercel → Domains**:

```
✅ www.kariera.domidomi.cz (Production)
   SSL: Active
   Configured: CNAME → cname.vercel-dns.com

✅ kariera.domidomi.cz (Redirect to www)
   Redirect to: www.kariera.domidomi.cz
   SSL: Active
```

---

## 🎯 FINÁLNÍ CHECKLIST:

- [x] ✅ React Router: hlavní route změněna na `/obchodnik`
- [x] ✅ Vercel.json: redirect z `/` na `/obchodnik`
- [x] ✅ Meta tagy: URL aktualizovány na `www.kariera.domidomi.cz/obchodnik`
- [ ] ⏳ DNS: Přidej CNAME záznam `www.kariera → cname.vercel-dns.com`
- [ ] ⏳ Vercel: Přidaj doménu `www.kariera.domidomi.cz`
- [ ] ⏳ Commit & Push: `git push origin main`
- [ ] ⏳ Testuj: `https://www.kariera.domidomi.cz/obchodnik`

---

## 💡 BONUS: Redirect non-www → www (optional)

Pokud chceš aby **všechny varianty** redirectovaly na `www` verzi:

### **V Vercel Dashboard → Settings → Domains:**

1. Přidej obě domény:
   - `www.kariera.domidomi.cz` (Production)
   - `kariera.domidomi.cz` (Redirect to www)

2. Vercel automaticky nastaví redirect:
   ```
   http://kariera.domidomi.cz → https://www.kariera.domidomi.cz
   https://kariera.domidomi.cz → https://www.kariera.domidomi.cz
   ```

---

**Máš otázky nebo potřebuješ pomoct s DNS nastavením?** 🤔
