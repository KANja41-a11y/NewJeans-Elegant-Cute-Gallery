# 💿 NewJeans Y2K Fan Gallery

Gallery NewJeans tema Y2K + animasi + kursor custom kelinci 🐰.

## 📁 Di mana taruh file?

Setelah extract zip, struktur foldernya seperti ini:

```
kpop-gallery/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── ditto.mp3                  ← TARUH LAGU DITTO DI SINI (folder utama)
│
└── images/
    ├── members/               ← TARUH FOTO MEMBER DI SINI
    │   ├── minji.jpg
    │   ├── hanni.jpg
    │   ├── danielle.jpg
    │   ├── haerin.jpg
    │   └── hyein.jpg
    │
    └── albums/                ← TARUH COVER ALBUM DI SINI
        ├── newjeans.jpg
        ├── omg.jpg
        ├── getup.jpg
        └── ...
```

### Ringkas:
| File                  | Taruh di mana?                          |
|-----------------------|-----------------------------------------|
| **ditto.mp3**         | Folder utama (sama dengan index.html)   |
| Foto member (Minji dll) | `images/members/`                     |
| Cover album           | `images/albums/`                        |

## Cara ganti foto di script.js

Buka `script.js`, ganti bagian `img:` seperti ini:

```js
const members = [
  { name: "Minji", role: "Leader", img: "images/members/minji.jpg", caption: "Minji 💙" },
  { name: "Hanni", role: "Vocal",  img: "images/members/hanni.jpg", caption: "Hanni 🐰" },
  // ... dst
];
```

Sama untuk groupPhotos dan albums.

## Fitur saat ini
- Tab Members / Group Photos / Albums
- Background music Ditto (Play / Pause + volume)
- Kursor custom kelinci 🐰 yang ikut gerak
- Animasi: kartu masuk, judul bounce, hati berdetak, bintang melayang, cover album berputar pelan, tombol musik pulse

## Upload ke GitHub Pages
1. Upload semua isi folder (termasuk `ditto.mp3` dan folder `images/`)
2. Settings → Pages → Deploy from branch `main` → root
3. Selesai

Made with ♡ for Bunnies 🐰
