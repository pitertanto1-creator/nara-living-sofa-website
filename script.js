/*
  SCRIPT WEBSITE NARA LIVING
  Data yang sering diedit ada di data.js.
  File ini mengatur render tampilan, filter produk, modal, dan WhatsApp.
*/

document.documentElement.classList.add("js-ready");

const DEFAULT_DATA = {
  SITE: {
    whatsappNumber: "6282195842319",
    whatsappMessage: "Halo Nara Living, saya ingin konsultasi sofa.",
    hero: {
      eyebrow: "Interior Sofa Studio",
      title: "Design Your Dream Living Space",
      subtitle: "Sofa modern dan custom untuk rumah yang nyaman dan elegan.",
      primaryButton: "Lihat Katalog",
      secondaryButton: "Konsultasi Gratis",
      badgeTitle: "Custom Ready",
      badgeText: "warna, ukuran, dan bahan"
    },
    heroImage: "images/sofa hero.jpg",
    aboutImage: "images/SOFA HERO 2.jpg",
    heroCards: [],
    categories: [],
    collections: [],
    advantages: [],
    aboutTitle: "Furniture yang Dibuat untuk Nyaman Dipakai Setiap Hari",
    aboutText: "Kami membantu Anda memilih sofa yang cocok dengan kebutuhan ruangan.",
    features: [],
    promo: {
      label: "Promo Spesial",
      title: "Promo Spesial Bulan Ini",
      text: "Dapatkan penawaran khusus untuk produk sofa tertentu.",
      button: "Cek Promo"
    },
    testimonials: [],
    steps: [],
    contact: {
      title: "Siap Membuat Ruang Tamu Lebih Elegan?",
      text: "Klik tombol WhatsApp untuk konsultasi produk."
    }
  },
  PRODUCTS: []
};

const DATA = window.NARA_DATA || DEFAULT_DATA;
const SITE = DATA.SITE || DEFAULT_DATA.SITE;
const PRODUCTS = Array.isArray(DATA.PRODUCTS) ? DATA.PRODUCTS : [];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

function safeText(value, fallback = "") {
  return value == null ? fallback : String(value);
}

function createWhatsappLink(message) {
  const number = SITE.whatsappNumber || DEFAULT_DATA.SITE.whatsappNumber;
  const text = message || SITE.whatsappMessage || DEFAULT_DATA.SITE.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function placeholderImage(title) {
  const safeTitle = safeText(title, "Nara Living").replace(/[<>&]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#fffaf3"/>
          <stop offset="100%" stop-color="#e6d2bd"/>
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="url(#g)"/>
      <rect x="120" y="275" width="660" height="115" rx="45" fill="#8c5a32" opacity="0.16"/>
      <rect x="190" y="220" width="520" height="135" rx="45" fill="#8c5a32" opacity="0.24"/>
      <circle cx="724" cy="196" r="56" fill="#df8848" opacity="0.24"/>
      <text x="450" y="505" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#3c2516">${safeTitle}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setImageFallback(img, title) {
  if (!img) return;
  img.addEventListener("error", function handleError() {
    img.removeEventListener("error", handleError);
    img.src = placeholderImage(title);
  });
}

function setText(selector, text) {
  const element = qs(selector);
  if (element) element.textContent = safeText(text, element.textContent);
}

function initHeader() {
  const menuToggle = qs("#menuToggle");
  const navMenu = qs("#navMenu");
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    const isActive = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isActive));
  });

  qsa(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderHero() {
  setText("#heroEyebrow", SITE.hero?.eyebrow);
  setText("#heroTitle", SITE.hero?.title);
  setText("#heroSubtitle", SITE.hero?.subtitle);
  setText("#heroPrimaryButton", SITE.hero?.primaryButton);
  setText("#heroSecondaryButton", SITE.hero?.secondaryButton);
  setText("#heroBadgeTitle", SITE.hero?.badgeTitle);
  setText("#heroBadgeText", SITE.hero?.badgeText);

  const heroImage = qs("#heroImage");
  if (heroImage && SITE.heroImage) {
    heroImage.src = SITE.heroImage;
    setImageFallback(heroImage, "Nara Living Hero");
  }

  const row = qs("#heroCardRow");
  if (!row) return;

  row.innerHTML = (SITE.heroCards || [])
    .map(
      (item) => `
        <article class="hero-mini-card reveal visible">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>`
    )
    .join("");

  row.querySelectorAll("img").forEach((img) => setImageFallback(img, img.alt));
}

function renderCategories() {
  const grid = qs("#kategoriGrid");
  if (!grid) return;

  grid.innerHTML = (SITE.categories || [])
    .map(
      (item) => `
        <article class="kategori-card reveal">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>`
    )
    .join("");

  grid.querySelectorAll("img").forEach((img) => setImageFallback(img, img.alt));
}

function renderCollections() {
  const grid = qs("#collectionGrid");
  if (!grid) return;

  grid.innerHTML = (SITE.collections || [])
    .map(
      (item) => `
        <article class="collection-card reveal">
          <div class="collection-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="collection-body">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>`
    )
    .join("");

  grid.querySelectorAll("img").forEach((img) => setImageFallback(img, img.alt));
}

function renderAdvantages() {
  const grid = qs("#keunggulanGrid");
  if (!grid) return;

  grid.innerHTML = (SITE.advantages || [])
    .map(
      (item) => `
        <article class="keunggulan-card reveal">
          <div class="keunggulan-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>`
    )
    .join("");
}

function renderAbout() {
  setText("#aboutTitle", SITE.aboutTitle);
  setText("#aboutText", SITE.aboutText);

  const aboutImage = qs("#aboutImage");
  if (aboutImage && SITE.aboutImage) {
    aboutImage.src = SITE.aboutImage;
    setImageFallback(aboutImage, "Nara Living About");
  }

  const featureList = qs("#featureList");
  if (!featureList) return;

  featureList.innerHTML = (SITE.features || [])
    .map(
      (item) => `
        <article class="feature-item">
          <div class="feature-icon">${item.icon}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>`
    )
    .join("");
}

function renderPromo() {
  setText("#promoLabel", SITE.promo?.label);
  setText("#promoTitle", SITE.promo?.title);
  setText("#promoText", SITE.promo?.text);
  setText("#promoButton", SITE.promo?.button);
}

function renderTestimonials() {
  const grid = qs("#testimonialGrid");
  if (!grid) return;

  grid.innerHTML = (SITE.testimonials || [])
    .map(
      (item) => `
        <article class="testimonial-card reveal">
          <div class="stars">★★★★★</div>
          <p>"${item.text}"</p>
          <div class="customer">- ${item.name}</div>
        </article>`
    )
    .join("");
}

function renderProcess() {
  const grid = qs("#processGrid");
  if (!grid) return;

  grid.innerHTML = (SITE.steps || [])
    .map(
      (item, index) => `
        <article class="process-item">
          <span class="process-number">${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </article>`
    )
    .join("");
}

function renderContact() {
  setText("#contactTitle", SITE.contact?.title);
  setText("#contactText", SITE.contact?.text);

  const mainWhatsapp = qs("#mainWhatsapp");
  const floatingWhatsapp = qs("#floatingWhatsapp");
  const link = createWhatsappLink();

  if (mainWhatsapp) mainWhatsapp.href = link;
  if (floatingWhatsapp) floatingWhatsapp.href = link;
}

function renderFilters() {
  const categoryFilter = qs("#categoryFilter");
  if (!categoryFilter) return;

  const categories = [...new Set(PRODUCTS.map((product) => product.category).filter(Boolean))].sort();
  categoryFilter.innerHTML = `<option value="all">Semua Kategori</option>`;

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderProducts(productList) {
  const productGrid = qs("#productGrid");
  const emptyState = qs("#emptyState");
  if (!productGrid) return;

  productGrid.innerHTML = "";
  if (emptyState) emptyState.style.display = productList.length ? "none" : "block";

  productList.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const image = product.images && product.images.length ? product.images[0] : "";

    card.innerHTML = `
      <div class="product-image">
        <img src="${image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <span class="product-badge">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.shortDesc}</p>
        <span class="product-price">${product.price}</span>
        <div class="product-actions">
          <button class="btn-detail" type="button" data-product-id="${product.id}">Lihat Detail</button>
          <a class="btn-chat" href="${createWhatsappLink(`Halo, saya tertarik dengan ${product.name}`)}" target="_blank" rel="noopener">Chat</a>
        </div>
      </div>`;

    setImageFallback(card.querySelector("img"), product.name);
    card.querySelector(".btn-detail").addEventListener("click", () => openProductModal(product.id));
    productGrid.appendChild(card);
  });
}

function filterProducts() {
  const searchElement = qs("#searchProduct");
  const categoryElement = qs("#categoryFilter");

  const searchValue = (searchElement?.value || "").trim().toLowerCase();
  const categoryValue = categoryElement?.value || "all";

  const filtered = PRODUCTS.filter((product) => {
    const searchableText = [
      product.name,
      product.category,
      product.price,
      product.shortDesc,
      product.description,
      Array.isArray(product.features) ? product.features.join(" ") : ""
    ]
      .join(" ")
      .toLowerCase();

    const matchSearch = searchableText.includes(searchValue);
    const matchCategory = categoryValue === "all" || product.category === categoryValue;

    return matchSearch && matchCategory;
  });

  renderProducts(filtered);
}

function initProductSearch() {
  const searchProduct = qs("#searchProduct");
  const categoryFilter = qs("#categoryFilter");

  if (searchProduct) searchProduct.addEventListener("input", filterProducts);
  if (categoryFilter) categoryFilter.addEventListener("change", filterProducts);
}

function openProductModal(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const productModal = qs("#productModal");
  const modalMainImage = qs("#modalMainImage");
  const modalThumbnails = qs("#modalThumbnails");
  const modalFeatures = qs("#modalFeatures");

  setText("#modalCategory", product.category);
  setText("#modalTitle", product.name);
  setText("#modalDescription", product.description);
  setText("#modalPrice", product.price);

  const modalWhatsapp = qs("#modalWhatsapp");
  if (modalWhatsapp) modalWhatsapp.href = createWhatsappLink(`Halo, saya tertarik dengan ${product.name}`);

  const images = Array.isArray(product.images) ? product.images : [];
  if (modalMainImage) {
    modalMainImage.src = images[0] || placeholderImage(product.name);
    modalMainImage.alt = product.name;
    setImageFallback(modalMainImage, product.name);
  }

  if (modalFeatures) {
    modalFeatures.innerHTML = (product.features || []).map((feature) => `<li>${feature}</li>`).join("");
  }

  if (modalThumbnails) {
    modalThumbnails.innerHTML = "";
    images.forEach((image, index) => {
      const thumb = document.createElement("img");
      thumb.src = image;
      thumb.alt = `${product.name} gambar ${index + 1}`;
      thumb.className = `modal-thumb${index === 0 ? " active" : ""}`;
      setImageFallback(thumb, product.name);

      thumb.addEventListener("click", () => {
        if (modalMainImage) modalMainImage.src = image;
        modalThumbnails.querySelectorAll(".modal-thumb").forEach((item) => item.classList.remove("active"));
        thumb.classList.add("active");
      });

      modalThumbnails.appendChild(thumb);
    });
  }

  if (productModal) {
    productModal.classList.add("active");
    productModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }
}

function closeProductModal() {
  const productModal = qs("#productModal");
  if (!productModal) return;

  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initModal() {
  const closeModal = qs("#closeModal");
  const productModal = qs("#productModal");

  if (closeModal) closeModal.addEventListener("click", closeProductModal);

  if (productModal) {
    productModal.addEventListener("click", (event) => {
      if (event.target === productModal) closeProductModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProductModal();
  });
}

function initRevealAnimation() {
  const elements = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initYear() {
  const year = qs("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
}

function initWebsite() {
  initHeader();
  renderHero();
  renderCategories();
  renderCollections();
  renderAdvantages();
  renderAbout();
  renderPromo();
  renderTestimonials();
  renderProcess();
  renderContact();
  renderFilters();
  renderProducts(PRODUCTS);
  initProductSearch();
  initModal();
  initYear();
  initRevealAnimation();
}

document.addEventListener("DOMContentLoaded", initWebsite);
