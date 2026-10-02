# 💿 NewJeans Y2K Fan Gallery

Gallery NewJeans tema Y2K yang **langsung siap di-upload ke GitHub Pages**.

## Fitur
- Tab **Members** (foto satu-satu)
- Tab **Group Photos**
- Tab **Albums** (cover album)
- Background music player untuk lagu **Ditto**
- Lightbox (klik foto biar besar)
- Desain Y2K pastel pink + baby blue + glitter

## Cara Pakai Cepat (GitHub Pages)

1. Extract zip ini
2. **Ganti foto** (penting!):
   - Buka file `script.js`
   - Ganti semua link `https://picsum.photos/...` dengan path lokal, contoh:
     ```js
     img: "images/members/minji.jpg"
     ```
   - Taruh foto asli di folder:
     - `images/members/` → foto member
     - `images/albums/` → cover album
3. **Musik Ditto**:
   - Download lagu Ditto (dari sumber legal / punya kamu)
   - Rename jadi `ditto.mp3`
   - Taruh di folder utama (sama dengan `index.html`)
4. Upload **semua file & folder** ke repository GitHub
5. Settings → Pages → Deploy from branch `main` → folder `/ (root)`
6. Selesai! Link: `https://username.github.io/nama-repo`

## Struktur Folder (setelah extract)
```
kpop-gallery/
├── index.html
├── style.css
├── script.js
├── README.md
├── ditto.mp3          ← taruh di sini
└── images/
    ├── members/       ← foto Minji, Hanni, dll
    └── albums/        ← cover album
```

## Contoh ganti foto di script.js
```js
const members = [
  { name: "Minji", role: "Leader", img: "images/members/minji.jpg", caption: "Minji 💙" },
  // ... dst
];
```

## Catatan
- Foto & lagu resmi NewJeans berhak cipta → pakai foto fan / yang kamu punya haknya.
- Placeholder (picsum) hanya untuk demo. Ganti biar tidak "cuma tulisan" / random image.

Made with ♡ for Bunnies 🐰
