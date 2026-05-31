/*
  DATA WEBSITE NARA LIVING
  ========================
  INI FILE UTAMA UNTUK EDIT CEPAT.

  Cara ganti gambar:
  - Upload gambar ke folder images.
  - Tulis nama filenya saja di foto("nama-file.jpg").
  - Contoh: foto("sofa-baru.jpg").

  Cara ganti fitur produk:
  - Edit array features pada produk.
  - Tambah/hapus baris fitur sesuai kebutuhan.

  Jangan ubah kode di bawah bagian "JANGAN DIUBAH" kalau tidak perlu.
*/

const FOLDER_GAMBAR = "images/";
const foto = (namaFile) => FOLDER_GAMBAR + namaFile;

const SITE = {
  whatsappNumber: "6282195842319",
  whatsappMessage: "Halo, saya ingin konsultasi sofa Nara Living.",

  hero: {
    eyebrow: "Interior Sofa Studio",
    title: "Design Your Dream Living Space",
    subtitle:
      "Sofa modern, dekorasi hangat, dan konsultasi custom untuk membuat ruang tamu Anda terasa lebih nyaman dan elegan."
  },

  heroImage: foto("sofa hero.jpg"),
  aboutImage: foto("SOFA HERO 2.jpg"),

  heroCards: [
    {
      title: "Modern Furniture",
      desc: "Sofa minimalis dan premium untuk ruang modern.",
      image: foto("001.jpg")
    },
    {
      title: "Custom Sofa",
      desc: "Sesuaikan warna, ukuran, bahan, dan bentuk sofa.",
      image: foto("004.jpg")
    },
    {
      title: "Inspired Living",
      desc: "Konsultasi agar ruang tamu terasa lebih nyaman.",
      image: foto("01.jpg")
    }
  ],

  collections: [
    {
      title: "Living Room",
      desc: "Koleksi sofa untuk ruang tamu modern dan elegan.",
      image: foto("001.jpg")
    },
    {
      title: "Family Sofa",
      desc: "Dudukan luas dan empuk untuk keluarga.",
      image: foto("01.jpg")
    },
    {
      title: "Premium Corner",
      desc: "Sofa premium untuk lounge dan ruangan utama.",
      image: foto("-058.jpg")
    },
    {
      title: "Custom Design",
      desc: "Pilihan ukuran, warna, bahan, dan finishing.",
      image: foto("-040.jpg")
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
    images: [foto("001.jpg"), foto("002.jpg"), foto("003.jpg")],
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
    images: [foto("004.jpg"), foto("005.jpg"), foto("006.jpg")],
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
    images: [foto("01.jpg"), foto("02.jpg"), foto("03.jpg")],
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
    images: [foto("000.jpg"), foto("0001.jpg"), foto("0002.jpg")],
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
    images: [foto("04.jpg"), foto("05.jpg"), foto("06.jpg")],
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
    images: [foto("-022.jpg"), foto("-023.jpg"), foto("-024.jpg")],
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
    images: [foto("-040.jpg"), foto("-041.jpg"), foto("-042.jpg")],
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
    images: [foto("-037.jpg"), foto("-038.jpg"), foto("-039.jpg")],
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
    images: [foto("-058.jpg"), foto("-059.jpg"), foto("-060.jpg")],
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
    images: [foto("-055.jpg"), foto("-056.jpg"), foto("-057.jpg")],
    features: [
      "Warna charcoal modern",
      "Tidak mudah terlihat kotor",
      "Desain tegas",
      "Cocok untuk ruang tamu modern"
    ]
  }
];



/* JANGAN DIUBAH */
window.NARA_DATA = { SITE, PRODUCTS };
