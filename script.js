/*
  SCRIPT WEBSITE NARA LIVING
  Data yang sering diedit sudah dipindahkan ke data.js.
  Edit gambar, produk, harga, dan fitur di data.js saja.
*/

const { SITE, PRODUCTS } = window.NARA_DATA || {};

if (!SITE || !PRODUCTS) {
  throw new Error("data.js belum dimuat. Pastikan <script src="data.js"></script> berada sebelum script.js di index.html");
}

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

function createWhatsappLink(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message || SITE.whatsappMessage)}`;
}

function placeholderImage(title) {
  const safeTitle = String(title || "Nara Living").replace(/[<>&]/g, "");
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
  qs("#heroEyebrow").textContent = SITE.hero.eyebrow;
  qs("#heroTitle").textContent = SITE.hero.title;
  qs("#heroSubtitle").textContent = SITE.hero.subtitle;

  const heroImage = qs("#heroImage");
  heroImage.src = SITE.heroImage;
  setImageFallback(heroImage, "Nara Living Hero");

  const row = qs("#heroCardRow");
  row.innerHTML = SITE.heroCards
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

function renderCollections() {
  const grid = qs("#collectionGrid");
  grid.innerHTML = SITE.collections
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

function renderFeatures() {
  const aboutImage = qs("#aboutImage");
  aboutImage.src = SITE.aboutImage;
  setImageFallback(aboutImage, "Nara Living About");

  qs("#featureList").innerHTML = SITE.features
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

function renderTestimonials() {
  qs("#testimonialGrid").innerHTML = SITE.testimonials
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
  qs("#processGrid").innerHTML = SITE.steps
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

function renderFilters() {
  const categoryFilter = qs("#categoryFilter");
  const categories = [...new Set(PRODUCTS.map((product) => product.category))].sort();

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

  productGrid.innerHTML = "";
  emptyState.style.display = productList.length ? "none" : "block";

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
          <button class="btn-detail" type="button" data-product-id="${product.id}">View Product</button>
          <a class="btn-chat" href="${createWhatsappLink(`Halo, saya tertarik dengan ${product.name}`)}" target="_blank" rel="noopener">Chat</a>
        </div>
      </div>`;

    setImageFallback(card.querySelector("img"), product.name);
    card.querySelector(".btn-detail").addEventListener("click", () => openProductModal(product.id));
    productGrid.appendChild(card);
  });
}

function filterProducts() {
  const searchValue = qs("#searchProduct").value.trim().toLowerCase();
  const categoryValue = qs("#categoryFilter").value;

  const filtered = PRODUCTS.filter((product) => {
    const searchableText = [
      product.name,
      product.category,
      product.price,
      product.shortDesc,
      product.description,
      product.features.join(" ")
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
  qs("#searchProduct").addEventListener("input", filterProducts);
  qs("#categoryFilter").addEventListener("change", filterProducts);
}

function openProductModal(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const productModal = qs("#productModal");
  const modalMainImage = qs("#modalMainImage");
  const modalThumbnails = qs("#modalThumbnails");
  const modalFeatures = qs("#modalFeatures");

  qs("#modalCategory").textContent = product.category;
  qs("#modalTitle").textContent = product.name;
  qs("#modalDescription").textContent = product.description;
  qs("#modalPrice").textContent = product.price;
  qs("#modalWhatsapp").href = createWhatsappLink(`Halo, saya tertarik dengan ${product.name}`);

  modalMainImage.src = product.images[0];
  modalMainImage.alt = product.name;
  setImageFallback(modalMainImage, product.name);

  modalFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("");
  modalThumbnails.innerHTML = "";

  product.images.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.src = image;
    thumb.alt = `${product.name} gambar ${index + 1}`;
    thumb.className = `modal-thumb${index === 0 ? " active" : ""}`;
    setImageFallback(thumb, product.name);

    thumb.addEventListener("click", () => {
      modalMainImage.src = image;
      qsa(".modal-thumb").forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");
    });

    modalThumbnails.appendChild(thumb);
  });

  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const productModal = qs("#productModal");
  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initModal() {
  const productModal = qs("#productModal");
  qs("#closeModal").addEventListener("click", closeProductModal);

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeProductModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProductModal();
  });
}

function initWhatsappLinks() {
  qs("#mainWhatsapp").href = createWhatsappLink();
  qs("#floatingWhatsapp").href = createWhatsappLink();
}

function initRevealAnimation() {
  const elements = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((item) => item.classList.add("visible"));
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

  elements.forEach((item) => observer.observe(item));
}

function initFooterYear() {
  qs("#currentYear").textContent = new Date().getFullYear();
}

function initApp() {
  initHeader();
  renderHero();
  renderCollections();
  renderFeatures();
  renderTestimonials();
  renderProcess();
  renderFilters();
  renderProducts(PRODUCTS);
  initProductSearch();
  initModal();
  initWhatsappLinks();
  initFooterYear();
  initRevealAnimation();
}

document.addEventListener("DOMContentLoaded", initApp);
