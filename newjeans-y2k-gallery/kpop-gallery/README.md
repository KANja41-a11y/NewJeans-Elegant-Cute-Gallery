# 💿 NewJeans Y2K Fan Gallery

Gallery khusus **NewJeans** dengan tema **Y2K** (early 2000s aesthetic).

## Fitur
- Tema Y2K: pastel pink, baby blue, glitter, floating stars & hearts
- Hanya member NewJeans (Minji, Hanni, Danielle, Haerin, Hyein)
- Lightbox (klik foto biar full)
- Background music player untuk lagu **Ditto**
- Responsive (bagus di HP)

## Cara Pakai

1. Extract zip
2. **Penting untuk musik**:  
   Taruh file `ditto.mp3` di folder yang sama dengan `index.html`  
   (download sendiri dari sumber legal / punya kamu)
3. Buka `index.html` di browser

## Cara Upload ke GitHub Pages

1. Buat repository baru (contoh: `newjeans-y2k-gallery`)
2. Upload semua file (termasuk `ditto.mp3` kalau mau musiknya nyala online)
3. Settings → Pages → Deploy from branch `main` → folder `/ (root)`
4. Link: `https://username.github.io/newjeans-y2k-gallery`

## Cara Ganti Foto

Buka `script.js`, cari array `members`.

Contoh:
```js
{
  name: "Minji",
  role: "Leader",
  img: "images/minji1.jpg",   // ← ganti ke foto kamu
  caption: "Minji 💙"
}
```

Buat folder `images/` lalu masukin foto favoritmu.

---
Made with ♡ for Bunnies  
NewJeans forever 🐰
