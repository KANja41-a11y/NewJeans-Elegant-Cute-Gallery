// NewJeans members only - Y2K Gallery
// Ganti foto dengan foto favoritmu sendiri (taruh di folder images/)

const members = [
  {
    name: "Minji",
    role: "Leader",
    img: "https://picsum.photos/seed/minji-y2k/400/500",
    caption: "Minji 💙"
  },
  {
    name: "Hanni",
    role: "Vocal",
    img: "https://picsum.photos/seed/hanni-y2k/400/500",
    caption: "Hanni 🐰"
  },
  {
    name: "Danielle",
    role: "Vocal",
    img: "https://picsum.photos/seed/danielle-y2k/400/500",
    caption: "Danielle ✨"
  },
  {
    name: "Haerin",
    role: "Visual",
    img: "https://picsum.photos/seed/haerin-y2k/400/500",
    caption: "Haerin 🐱"
  },
  {
    name: "Hyein",
    role: "Maknae",
    img: "https://picsum.photos/seed/hyein-y2k/400/500",
    caption: "Hyein 🌸"
  },
  // Extra cards biar gallery lebih penuh (bisa diganti foto lain)
  {
    name: "Minji",
    role: "Y2K Ver.",
    img: "https://picsum.photos/seed/minji2/400/500",
    caption: "Minji • Y2K"
  },
  {
    name: "Hanni",
    role: "Y2K Ver.",
    img: "https://picsum.photos/seed/hanni2/400/500",
    caption: "Hanni • Y2K"
  },
  {
    name: "Danielle",
    role: "Y2K Ver.",
    img: "https://picsum.photos/seed/danielle2/400/500",
    caption: "Danielle • Y2K"
  },
  {
    name: "Haerin",
    role: "Y2K Ver.",
    img: "https://picsum.photos/seed/haerin2/400/500",
    caption: "Haerin • Y2K"
  },
  {
    name: "Hyein",
    role: "Y2K Ver.",
    img: "https://picsum.photos/seed/hyein2/400/500",
    caption: "Hyein • Y2K"
  }
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

// Music
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const volumeSlider = document.getElementById("volume");

let isPlaying = false;

// Render gallery
function renderGallery() {
  gallery.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}" loading="lazy" />
      <div class="card-info">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(member.img, member.caption));
    gallery.appendChild(card);
  });
}

// Lightbox
function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});

// Music controls
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    playBtn.textContent = "▶ Play Ditto";
    playBtn.classList.remove("playing");
  } else {
    bgMusic.play().catch(err => {
      console.log("Musik belum bisa diputar. Pastikan file ditto.mp3 ada di folder yang sama.");
      alert("File ditto.mp3 belum ditemukan.\nTaruh file lagu Ditto (mp3) di folder yang sama dengan index.html ya!");
    });
    playBtn.textContent = "❚❚ Pause";
    playBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

volumeSlider.addEventListener("input", () => {
  bgMusic.volume = volumeSlider.value;
});

// Set initial volume
bgMusic.volume = 0.4;

// Initial render
renderGallery();
