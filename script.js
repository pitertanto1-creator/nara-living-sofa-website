const DATA = window.NARA_DATA;
const SITE = DATA.SITE;
const PRODUCTS = DATA.PRODUCTS;

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalFeatures = document.getElementById("modalFeatures");
const modalImage = document.getElementById("modalImage");
const modalWa = document.getElementById("modalWa");

function waLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setWhatsappLinks() {
  document.querySelectorAll(".wa-link").forEach((link) => {
    link.href = waLink();
  });
}

let currentHeroSlide = 0;
let heroSliderTimer = null;

function getHeroSlides() {
  if (SITE.hero && Array.isArray(SITE.hero.slides) && SITE.hero.slides.length) {
    return SITE.hero.slides;
  }

  return [
    {
      title: "Sofa yang pas, ruang tamu terasa lebih nyaman.",
      subtitle:
        "Pilihan sofa modern dengan desain sederhana, bahan berkualitas, dan bisa disesuaikan untuk rumah Anda.",
      image: SITE.heroImage
    }
  ];
}

function formatHeroTitle(title) {
  const cleanTitle = title.trim().toLowerCase();

  if (cleanTitle.includes("sofa yang pas")) {
    return `
      <span>Sofa yang pas,</span>
      <span>ruang tamu terasa</span>
      <span>lebih nyaman.</span>
    `;
  }

  if (cleanTitle.includes("custom sofa")) {
    return `
      <span>Custom sofa</span>
      <span>sesuai gaya</span>
      <span>rumah Anda.</span>
    `;
  }

  if (cleanTitle.includes("ruang keluarga")) {
    return `
      <span>Ruang keluarga</span>
      <span>lebih hangat</span>
      <span>dan elegan.</span>
    `;
  }

  return `
    <span>${title}</span>
  `;
}

function renderHeroSlide(index) {
  const slides = getHeroSlides();
  const slide = slides[index];

  const heroImage = document.getElementById("heroImage");
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const heroEyebrow = document.getElementById("heroEyebrow");

  if (heroImage) {
    heroImage.classList.remove("is-active");

    setTimeout(() => {
      heroImage.src = slide.image;
      heroImage.classList.add("is-active");
    }, 120);
  }

  if (heroTitle) {
    heroTitle.classList.remove("text-in");

    setTimeout(() => {
      heroTitle.innerHTML = formatHeroTitle(slide.title);
      heroTitle.classList.add("text-in");
    }, 120);
  }

  if (heroSubtitle) {
    heroSubtitle.classList.remove("text-in");

    setTimeout(() => {
      heroSubtitle.textContent = slide.subtitle;
      heroSubtitle.classList.add("text-in");
    }, 160);
  }

  if (heroEyebrow) {
    heroEyebrow.textContent = SITE.hero.eyebrow || "NARA LIVING";
  }

  renderHeroDots();
}

function renderHeroDots() {
  const dots = document.getElementById("heroDots");
  if (!dots) return;

  const slides = getHeroSlides();

  dots.innerHTML = slides
    .map(
      (_, index) => `
        <button 
          type="button"
          class="${index === currentHeroSlide ? "active" : ""}"
          aria-label="Buka slide ${index + 1}"
          data-slide="${index}">
        </button>
      `
    )
    .join("");

  dots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentHeroSlide = Number(button.dataset.slide);
      renderHeroSlide(currentHeroSlide);
      restartHeroSlider();
    });
  });
}

function nextHeroSlide() {
  const slides = getHeroSlides();
  currentHeroSlide = (currentHeroSlide + 1) % slides.length;
  renderHeroSlide(currentHeroSlide);
}

function prevHeroSlide() {
  const slides = getHeroSlides();
  currentHeroSlide = (currentHeroSlide - 1 + slides.length) % slides.length;
  renderHeroSlide(currentHeroSlide);
}

function startHeroSlider() {
  heroSliderTimer = setInterval(nextHeroSlide, 5200);
}

function restartHeroSlider() {
  clearInterval(heroSliderTimer);
  startHeroSlider();
}

function bindHeroSliderButtons() {
  const next = document.getElementById("heroNext");
  const prev = document.getElementById("heroPrev");

  if (next) {
    next.addEventListener("click", () => {
      nextHeroSlide();
      restartHeroSlider();
    });
  }

  if (prev) {
    prev.addEventListener("click", () => {
      prevHeroSlide();
      restartHeroSlider();
    });
  }
}

function renderHero() {
  renderHeroSlide(currentHeroSlide);
  bindHeroSliderButtons();
  startHeroSlider();
}

function renderAdvantages() {
  const panel = document.getElementById("advantagePanel");
  if (!panel) return;

  const items = [
    {
      icon: "🛡",
      title: "Kualitas Terbaik",
      desc: "Material premium dan tahan lama."
    },
    {
      icon: "✎",
      title: "Desain Minimalis",
      desc: "Tampilan elegan, cocok untuk semua ruang."
    },
    {
      icon: "◌",
      title: "Banyak Pilihan",
      desc: "Warna dan bahan bisa disesuaikan."
    },
    {
      icon: "▱",
      title: "Pengiriman Aman",
      desc: "Sofa dikirim dengan aman dan rapi."
    }
  ];

  panel.innerHTML = items
    .map(
      (item) => `
        <article>
          <div class="icon">${item.icon}</div>
          <div class="feature-text">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const selectedProducts = PRODUCTS.slice(0, 4);

  grid.innerHTML = selectedProducts
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.images[0]}" alt="${product.name}" />
          <div>
            <h3>${product.name}</h3>
            <strong>${product.price}</strong>
            <button 
              type="button"
              data-product-id="${product.id}">
              Lihat Detail →
            </button>
          </div>
        </article>
      `
    )
    .join("");

  bindProductButtons();
}

function renderCollections() {
  const grid = document.getElementById("collectionGrid");
  if (!grid) return;

  grid.innerHTML = SITE.collections
    .map(
      (item) => `
        <article class="collection-card">
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAbout() {
  const aboutImage = document.getElementById("aboutImage");
  const aboutTitle = document.getElementById("aboutTitle");
  const aboutText = document.getElementById("aboutText");
  const aboutFeatures = document.getElementById("aboutFeatures");

  if (aboutImage) aboutImage.src = SITE.aboutImage;
  if (aboutTitle) aboutTitle.textContent = SITE.aboutTitle;
  if (aboutText) aboutText.textContent = SITE.aboutText;

  if (aboutFeatures) {
    aboutFeatures.innerHTML = SITE.features
      .map(
        (feature) => `
          <article>
            <span>${feature.icon}</span>
            <div>
              <h3>${feature.title}</h3>
              <p>${feature.desc}</p>
            </div>
          </article>
        `
      )
      .join("");
  }
}

function renderSteps() {
  const row = document.getElementById("processRow");
  if (!row) return;

  const icons = ["☏", "▤", "☑", "▱"];

  row.innerHTML = SITE.steps
    .map((step, index) => {
      const item = `
        <article>
          <span class="number">${index + 1}</span>
          <div class="step-icon">${icons[index] || "○"}</div>
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </article>
      `;

      return index < SITE.steps.length - 1 ? item + `<div class="line"></div>` : item;
    })
    .join("");
}

function renderPromo() {
  const promoLabel = document.getElementById("promoLabel");
  const promoTitle = document.getElementById("promoTitle");
  const promoText = document.getElementById("promoText");
  const promoButton = document.getElementById("promoButton");

  if (!SITE.promo) return;

  if (promoLabel) promoLabel.textContent = SITE.promo.label;
  if (promoTitle) promoTitle.textContent = SITE.promo.title;
  if (promoText) promoText.textContent = SITE.promo.text;
  if (promoButton) {
    promoButton.textContent = SITE.promo.button;
    promoButton.href = waLink(`Halo Nara Living, saya ingin cek promo sofa.`);
  }
}

function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;

  grid.innerHTML = SITE.testimonials
    .map(
      (item) => `
        <article class="testimonial-card">
          <p>“${item.text}”</p>
          <strong>${item.name}</strong>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  const contactTitle = document.getElementById("contactTitle");
  const contactText = document.getElementById("contactText");

  if (SITE.contact) {
    if (contactTitle) contactTitle.textContent = SITE.contact.title;
    if (contactText) contactText.textContent = SITE.contact.text;
  }
}

function bindMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    const active = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(active));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindProductButtons() {
  document.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.productId);
      const product = PRODUCTS.find((item) => item.id === productId);

      if (!product) return;

      modalTitle.textContent = product.name;
      modalPrice.textContent = product.price;
      modalDesc.textContent = product.description;
      modalImage.src = product.images[0];

      modalFeatures.innerHTML = product.features
        .map((feature) => `<li>${feature}</li>`)
        .join("");

      modalWa.href = waLink(`Halo Nara Living, saya tertarik dengan ${product.name}.`);

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

function bindModal() {
  if (modalClose) modalClose.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  renderHero();
  renderAdvantages();
  renderProducts();
  renderCollections();
  renderAbout();
  renderSteps();
  renderPromo();
  renderTestimonials();
  renderContact();

  setWhatsappLinks();
  bindMenu();
  bindModal();
  setYear();
}

document.addEventListener("DOMContentLoaded", init);