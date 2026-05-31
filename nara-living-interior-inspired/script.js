/*
  NARA LIVING - INTERIOR INSPIRED SCRIPT
  EDIT CEPAT:
  1. Ganti nomor WhatsApp di SITE.whatsappNumber.
  2. Ganti gambar utama di SITE.heroImage.
  3. Ganti gambar about di SITE.aboutImage.
  4. Ganti produk di PRODUCTS.
*/

const SITE = {
  whatsappNumber: "6282195842319",
  whatsappMessage: "Halo, saya ingin konsultasi sofa Nara Living.",

  hero: {
    eyebrow: "Interior Sofa Studio",
    title: "Design Your Dream Living Space",
    subtitle:
      "Sofa modern, dekorasi hangat, dan konsultasi custom untuk membuat ruang tamu Anda terasa lebih nyaman dan elegan."
  },

  heroImage: "images/sofa hero.jpg",
  aboutImage: "images/SOFA HERO 2.jpg",

  heroCards: [
    {
      title: "Modern Furniture",
      desc: "Sofa minimalis dan premium untuk ruang modern.",
      image: "images/001.jpg"
    },
    {
      title: "Custom Sofa",
      desc: "Sesuaikan warna, ukuran, bahan, dan bentuk sofa.",
      image: "images/004.jpg"
    },
    {
      title: "Inspired Living",
      desc: "Konsultasi agar ruang tamu terasa lebih nyaman.",
      image: "images/01.jpg"
    }
  ],

  collections: [
    {
      title: "Living Room",
      desc: "Koleksi sofa untuk ruang tamu modern dan elegan.",
      image: "images/001.jpg"
    },
    {
      title: "Family Sofa",
      desc: "Dudukan luas dan empuk untuk keluarga.",
      image: "images/01.jpg"
    },
    {
      title: "Premium Corner",
      desc: "Sofa premium untuk lounge dan ruangan utama.",
      image: "images/-058.jpg"
    },
    {
      title: "Custom Design",
      desc: "Pilihan ukuran, warna, bahan, dan finishing.",
      image: "images/-040.jpg"
    }
  ],

  features: [
    {
      icon: "01",
      title: "Material Berkualitas",
      desc: "Bahan dipilih agar sofa nyaman dipakai dan terlihat rapi di ruangan."
    },
    {
      icon: "02",
      title: "Desain Hangat",
      desc: "Tampilan clean, modern, dan mudah dipadukan dengan interior rumah."
    },
    {
      icon: "03",
      title: "Bisa Custom",
      desc: "Ukuran, warna, bahan, dan detail sofa dapat disesuaikan kebutuhan."
    }
  ],

  testimonials: [
    {
      name: "Rina, Pontianak",
      text: "Sofanya nyaman dan desainnya cocok untuk ruang tamu saya. Tampilannya jadi lebih elegan."
    },
    {
      name: "Andi, Kubu Raya",
      text: "Pelayanannya baik, bisa konsultasi warna dan ukuran sebelum pesan."
    },
    {
      name: "Maya, Pontianak",
      text: "Produk terlihat rapi, empuk, dan sesuai dengan foto katalog. Recommended."
    }
  ],

  steps: [
    {
      title: "Pilih Produk",
      desc: "Lihat katalog dan tentukan model sofa yang paling cocok."
    },
    {
      title: "Konsultasi",
      desc: "Diskusikan ukuran, warna, bahan, budget, dan estimasi pengerjaan."
    },
    {
      title: "Proses Pesanan",
      desc: "Pesanan dibuat sesuai detail yang sudah disepakati."
    },
    {
      title: "Pengiriman",
      desc: "Sofa dikirim ke alamat Anda dengan aman dan rapi."
    }
  ]
};

const PRODUCTS = [
  {
    id: 1,
    name: "Sofa Minimalis Nara",
    category: "Minimalis",
    price: "Rp8.900.000",
    shortDesc: "Sofa minimalis elegan untuk ruang tamu modern.",
    description:
      "Sofa Minimalis Nara dirancang untuk ruang tamu modern dengan tampilan elegan, bahan premium, dan pilihan warna yang dapat disesuaikan.",
    images: ["images/001.jpg", "images/002.jpg", "images/003.jpg"],
    features: [
      "Bisa custom warna",
      "Bahan premium",
      "Jahitan rapi",
      "Cocok untuk ruang tamu modern"
    ]
  },
  {
    id: 2,
    name: "Sofa Aruna Cream",
    category: "Minimalis",
    price: "Rp6.700.000",
    shortDesc: "Sofa cream lembut dengan desain hangat dan bersih.",
    description:
      "Sofa Aruna Cream cocok untuk interior bernuansa natural, minimalis, dan modern. Warna cream memberikan kesan luas dan nyaman.",
    images: ["images/004.jpg", "images/005.jpg", "images/006.jpg"],
    features: [
      "Warna cream elegan",
      "Busa empuk",
      "Rangka kuat",
      "Mudah dipadukan dengan dekorasi rumah"
    ]
  },
  {
    id: 3,
    name: "Sofa L Minimalis",
    category: "Keluarga",
    price: "Rp7.800.000",
    shortDesc: "Sofa L Minimalis dengan desain luas untuk keluarga.",
    description:
      "Sofa L Minimalis dibuat untuk kebutuhan keluarga yang menginginkan sofa luas, nyaman, dan cocok untuk ruang santai bersama.",
    images: ["images/01.jpg", "images/02.jpg", "images/03.jpg"],
    features: [
      "Menggunakan busa berkualitas tinggi",
      "Bisa custom ukuran",
      "Pilihan bahan kain atau kulit sintetis"
    ]
  },
  {
    id: 4,
    name: "Sofa Chesterfield Classic",
    category: "Premium",
    price: "Rp11.500.000",
    shortDesc: "Sofa dengan desain klasik namun berkesan mewah.",
    description:
      "Sofa Chesterfield Classic cocok untuk rumah, apartemen, atau kantor karena menghadirkan kesan klasik, mewah, dan nyaman.",
    images: ["images/000.jpg", "images/0001.jpg", "images/0002.jpg"],
    features: [
      "Kapasitas besar",
      "Desain mewah dan eksklusif",
      "Cocok untuk kantor dan ruang tamu"
    ]
  },
  {
    id: 5,
    name: "Sofa Oscar",
    category: "Keluarga",
    price: "Rp6.250.000",
    shortDesc: "Sofa besar untuk ruang keluarga nyaman.",
    description:
      "Sofa Oscar memiliki ukuran besar dengan dudukan empuk, cocok untuk ruang keluarga dan momen berkumpul bersama.",
    images: ["images/04.jpg", "images/05.jpg", "images/06.jpg"],
    features: [
      "Kapasitas besar",
      "Menggunakan kulit sintetis berkualitas",
      "Bahan kuat",
      "Cocok untuk keluarga"
    ]
  },
  {
    id: 6,
    name: "Sofa Comfort",
    category: "Premium",
    price: "Rp8.900.000",
    shortDesc: "Sofa premium dengan finishing mewah.",
    description:
      "Sofa Premium Comfort menghadirkan tampilan mewah dengan material pilihan dan finishing yang detail untuk ruangan elegan.",
    images: ["images/-022.jpg", "images/-023.jpg", "images/-024.jpg"],
    features: [
      "Material premium",
      "Finishing mewah",
      "Desain eksklusif",
      "Cocok untuk ruang tamu utama"
    ]
  },
  {
    id: 7,
    name: "Sofa Minimalis Curved",
    category: "Minimalis",
    price: "Rp5.000.000",
    shortDesc: "Sofa minimalis dengan lekukan sandaran yang elegan.",
    description:
      "Sofa Minimalis Curved dapat disesuaikan dengan kebutuhan ruangan Anda, mulai dari ukuran, warna, bahan, hingga bentuk sofa.",
    images: ["images/-040.jpg", "images/-041.jpg", "images/-042.jpg"],
    features: [
      "Custom ukuran",
      "Custom warna",
      "Custom bahan",
      "Konsultasi desain"
    ]
  },
  {
    id: 8,
    name: "Sofa Minimalis Grey",
    category: "Minimalis",
    price: "Rp9.650.000",
    shortDesc: "Sofa abu-abu netral untuk interior modern.",
    description:
      "Sofa Minimalis Grey hadir dengan warna netral yang mudah dipadukan dengan berbagai konsep interior rumah.",
    images: ["images/-037.jpg", "images/-038.jpg", "images/-039.jpg"],
    features: [
      "Warna netral",
      "Desain modern",
      "Mudah dipadukan",
      "Nyaman untuk ruang kecil"
    ]
  },
  {
    id: 9,
    name: "Sofa Sectional",
    category: "Premium",
    price: "Rp7.200.000",
    shortDesc: "Sofa light grey untuk nuansa hangat.",
    description:
      "Sofa Sectional memberikan kesan hangat dan elegan, cocok untuk ruang tamu, lounge, atau area santai keluarga.",
    images: ["images/-058.jpg", "images/-059.jpg", "images/-060.jpg"],
    features: [
      "Warna light grey elegan",
      "Bahan lembut",
      "Cocok untuk lounge",
      "Tampilan hangat"
    ]
  },
  {
    id: 10,
    name: "Sofa Charcoal Clambin",
    category: "Keluarga",
    price: "Rp13.150.000",
    shortDesc: "Sofa charcoal modern untuk tampilan tegas.",
    description:
      "Sofa Charcoal Modern cocok untuk interior modern dengan karakter warna yang tegas, elegan, dan mudah dirawat.",
    images: ["images/-055.jpg", "images/-056.jpg", "images/-057.jpg"],
    features: [
      "Warna charcoal modern",
      "Tidak mudah terlihat kotor",
      "Desain tegas",
      "Cocok untuk ruang tamu modern"
    ]
  }
];

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
