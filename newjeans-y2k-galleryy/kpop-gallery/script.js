// NewJeans Y2K Gallery - Ready for GitHub Pages
// Ganti semua link gambar dengan foto di folder images/ sesuai README

const members = [
  { name: "Minji", role: "Leader", img: "https://picsum.photos/seed/minji1/400/520", caption: "Minji 💙" },
  { name: "Hanni", role: "Vocal", img: "https://picsum.photos/seed/hanni1/400/520", caption: "Hanni 🐰" },
  { name: "Danielle", role: "Vocal", img: "https://picsum.photos/seed/danielle1/400/520", caption: "Danielle ✨" },
  { name: "Haerin", role: "Visual", img: "https://picsum.photos/seed/haerin1/400/520", caption: "Haerin 🐱" },
  { name: "Hyein", role: "Maknae", img: "https://picsum.photos/seed/hyein1/400/520", caption: "Hyein 🌸" }
];

const groupPhotos = [
  { name: "NewJeans", role: "Group 2023", img: "https://picsum.photos/seed/njgroup1/600/400", caption: "NewJeans Group Photo" },
  { name: "NewJeans", role: "Y2K Concept", img: "https://picsum.photos/seed/njgroup2/600/400", caption: "Y2K Concept" },
  { name: "NewJeans", role: "Ditto Era", img: "https://picsum.photos/seed/njgroup3/600/400", caption: "Ditto Era" },
  { name: "NewJeans", role: "OMG Era", img: "https://picsum.photos/seed/njgroup4/600/400", caption: "OMG Era" }
];

const albums = [
  { name: "New Jeans", year: "2022", img: "https://picsum.photos/seed/album1/400/400", caption: "1st EP • New Jeans (2022)" },
  { name: "OMG", year: "2023", img: "https://picsum.photos/seed/album2/400/400", caption: "1st Single Album • OMG (2023)" },
  { name: "Get Up", year: "2023", img: "https://picsum.photos/seed/album3/400/400", caption: "2nd EP • Get Up (2023)" },
  { name: "How Sweet", year: "2024", img: "https://picsum.photos/seed/album4/400/400", caption: "How Sweet (2024)" },
  { name: "Supernatural", year: "2024", img: "https://picsum.photos/seed/album5/400/400", caption: "Supernatural (2024)" },
  { name: "Ditto", year: "2022", img: "https://picsum.photos/seed/album6/400/400", caption: "Ditto (Digital Single)" }
];

// Elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");
const tabBtns = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".gallery-section");

// Music
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const volumeSlider = document.getElementById("volume");
let isPlaying = false;

// Render helpers
function createCard(item, isAlbum = false) {
  const card = document.createElement("div");
  card.className = isAlbum ? "card album-card" : "card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/ffb6c1/6b5b95?text=${encodeURIComponent(item.name)}'" />
    <div class="card-info">
      <h3>${item.name}</h3>
      <p>${item.role || item.year || ""}</p>
    </div>
  `;
  card.addEventListener("click", () => openLightbox(item.img, item.caption));
  return card;
}

function renderAll() {
  const membersEl = document.getElementById("members-gallery");
  const groupEl = document.getElementById("group-gallery");
  const albumsEl = document.getElementById("albums-gallery");

  membersEl.innerHTML = "";
  groupEl.innerHTML = "";
  albumsEl.innerHTML = "";

  members.forEach(m => membersEl.appendChild(createCard(m)));
  groupPhotos.forEach(g => groupEl.appendChild(createCard(g)));
  albums.forEach(a => albumsEl.appendChild(createCard(a, true)));
}

// Tabs
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Lightbox
function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
}

closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("active");
});

// Music
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    playBtn.textContent = "▶ Play Ditto";
    playBtn.classList.remove("playing");
  } else {
    bgMusic.play().catch(() => {
      alert("File ditto.mp3 belum ditemukan.\n\nTaruh file lagu Ditto (rename jadi ditto.mp3) di folder yang sama dengan index.html ya!");
    });
    playBtn.textContent = "❚❚ Pause";
    playBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

volumeSlider.addEventListener("input", () => {
  bgMusic.volume = volumeSlider.value;
});
bgMusic.volume = 0.4;

// Init
renderAll();
