document.addEventListener('DOMContentLoaded', () => {
  // Grain
  const grain = document.createElement('div');
  grain.className = 'grain';
  document.body.appendChild(grain);

  // Image fade
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) img.classList.add('loaded');
    else {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => img.classList.add('loaded'));
    }
  });

  // Page transition
  const transitionEl = document.createElement('div');
  transitionEl.className = 'page-transition';
  transitionEl.innerHTML = '<div class="page-transition-inner"></div>';
  document.body.appendChild(transitionEl);

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#') || href.startsWith('javascript')) return;
    if (!href.endsWith('.html')) return;
    link.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      transitionEl.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 650);
    });
  });

  // Loader
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(initReveals, 150);
    }, 2000);
  } else initReveals();

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Reveal
  function initReveals() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // Gallery filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(item => {
        if (f === 'all' || item.dataset.member === f) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => { item.style.display = 'none'; }, 280);
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lbImg.src = img.src.replace('w=600', 'w=1200').replace('w=500', 'w=1200');
      lightbox.classList.add('active');
    });
  });
  lbClose.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('active'); });
});
