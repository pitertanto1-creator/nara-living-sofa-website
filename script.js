const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});
/* =========================
   DATA PRODUK SOFA
========================= */

const products = [
  {
    id: 1,
    name: "Sofa Minimalis Nara",
    category: "Minimalis",
    price: "Rp8.900.000",
    shortDesc: "Sofa minimalis elegan untuk ruang tamu modern.",
    description:
      "Sofa Minimalis Nara dirancang untuk ruang tamu modern dengan tampilan elegan, bahan premium, dan pilihan warna yang dapat disesuaikan.",
    images: [
      "images/001.jpg",
      "images/002.jpg",
      "images/003.jpg"
    ],
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
    images: [
      "images/004.jpg",
      "images/005.jpg",
      "images/006.jpg"
    ],
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
    images: [
      "images/01.jpg",
      "images/02.jpg",
      "images/03.jpg"
    ],
    features: [
      "Menggunakan busa berkualitas tinggi",,
      "Bisa custom ukuran",
      "Pilihan bahan kain atau kulit sintetis"
    ]
  },
  {
    id: 4,
    name: "Sofa Chesterfield Classic",
    category: "Sofa Bed",
    price: "Rp11.500.000",
    shortDesc: "Sofa Dengan desain klasik namun berkesan mewah.",
    description:
      "Sofa Chesterfield Classic cocok untuk rumah, apartemen, atau kamar tamu karena dapat digunakan sebagai sofa dan tempat tidur tambahan.",
    images: [
      "images/000.jpg",
      "images/0001.jpg",
      "images/0002.jpg"
    ],
    features: [
      "Kapasitas besar",
      "Desain Mewah dan eksklusif",
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
    images: [
      "images/04.jpg",
      "images/05.jpg",
      "images/06.jpg"
    ],
    features: [
      "Kapasitas besar",
      "Menggunakan Kulit sintetis berkualitas",
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
    images: [
      "images/-022.jpg",
      "images/-023.jpg",
      "images/-024.jpg"
    ],
    features: [
      "Material premium",
      "Finishing mewah",
      "Desain eksklusif",
      "Cocok untuk ruang tamu utama"
    ]
  },
  {
    id: 7,
    name: "Sofa minimalis",
    category: "minimalis",
    price: "Rp5.000.000",
    shortDesc: "Sofa minimalis dengan desain sederhana namun elegan dan ada lekungan disandaran.",
    description:
      "Sofa minimalis dapat disesuaikan dengan kebutuhan ruangan Anda, mulai dari ukuran, warna, bahan, hingga bentuk sofa.",
    images: [
      "images/-040.jpg",
      "images/-041.jpg",
      "images/-042.jpg"
    ],
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
    images: [
      "images/-037.jpg",
      "images/-038.jpg",
      "images/-039.jpg"
    ],
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
    shortDesc: "Sofa warna light grey untuk nuansa hangat.",
    description:
      "Sofa Sectional memberikan kesan hangat dan elegan, cocok untuk ruang tamu, lounge, atau area santai keluarga.",
    images: [
      "images/-058.jpg",
      "images/-059.jpg",
      "images/-060.jpg"
    ],
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
    images: [
      "images/-055.jpg",
      "images/-056.jpg",
      "images/-057.jpg"
    ],
    features: [
      "Warna charcoal modern",
      "Tidak mudah terlihat kotor",
      "Desain tegas",
      "Cocok untuk ruang tamu modern"
    ]
  }
];

/* =========================
   RENDER PRODUK
========================= */

const productGrid = document.getElementById("productGrid");
const searchProduct = document.getElementById("searchProduct");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(productList) {
  productGrid.innerHTML = "";

  if (productList.length === 0) {
    productGrid.innerHTML = "<p>Tidak ada produk yang ditemukan.</p>";
    return;
  }

  productList.forEach(function(product) {
    const productCard = document.createElement("div");
    productCard.className = "product-card-new";

    productCard.innerHTML = `
      <div class="product-card-image">
        <img src="${product.images[0]}" alt="${product.name}">
      </div>

      <div class="product-card-body">
        <span class="product-badge">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.shortDesc}</p>
        <span class="product-card-price">${product.price}</span>

        <div class="product-card-actions">
          <button class="btn-detail" onclick="openProductModal(${product.id})">
            Lihat Detail
          </button>

          <a 
            href="https://wa.me/6282195842319?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}"
            target="_blank"
            class="btn-chat-small"
          >
            Chat
          </a>
        </div>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}

function filterProducts() {
  const searchValue = searchProduct.value.toLowerCase();
  const categoryValue = categoryFilter.value;

  const filteredProducts = products.filter(function(product) {
    const matchSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.shortDesc.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    const matchCategory =
      categoryValue === "all" || product.category === categoryValue;

    return matchSearch && matchCategory;
  });

  renderProducts(filteredProducts);
}

searchProduct.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

renderProducts(products);

/* =========================
   MODAL DETAIL PRODUK
========================= */

const productModal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalPrice = document.getElementById("modalPrice");
const modalWhatsapp = document.getElementById("modalWhatsapp");

function openProductModal(productId) {
  const product = products.find(function(item) {
    return item.id === productId;
  });

  if (!product) return;

  modalMainImage.src = product.images[0];
  modalMainImage.alt = product.name;

  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;

  modalWhatsapp.href =
    "https://wa.me/6282195842319?text=Halo,%20saya%20tertarik%20dengan%20" +
    encodeURIComponent(product.name);

  modalFeatures.innerHTML = "";
  product.features.forEach(function(feature) {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  modalThumbnails.innerHTML = "";
  product.images.forEach(function(image, index) {
    const thumb = document.createElement("img");
    thumb.src = image;
    thumb.alt = product.name + " gambar " + (index + 1);
    thumb.className = "modal-thumb";

    if (index === 0) {
      thumb.classList.add("active");
    }

    thumb.addEventListener("click", function() {
      modalMainImage.src = image;

      document.querySelectorAll(".modal-thumb").forEach(function(item) {
        item.classList.remove("active");
      });

      thumb.classList.add("active");
    });

    modalThumbnails.appendChild(thumb);
  });

  productModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", closeProductModal);

productModal.addEventListener("click", function(event) {
  if (event.target === productModal) {
    closeProductModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeProductModal();
  }
});
console.log("Website SofaKita berhasil dimuat");