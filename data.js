/*
  DATA WEBSITE NARA LIVING
  File ini dibuat agar kamu mudah edit gambar, fitur, harga, dan teks website.

  Cara pakai gambar:
  1. Masukkan foto ke folder images.
  2. Panggil dengan foto("nama-file.jpg")
  3. Contoh: foto("sofa-baru-1.jpg")
*/

function foto(namaFile) {
  return "images/" + namaFile;
}

window.NARA_DATA = {
  SITE: {
    whatsappNumber: "6282195842319",
    whatsappMessage: "Halo Nara Living, saya ingin konsultasi sofa.",

    hero: {
      eyebrow: "Interior Sofa Studio",
      title: "Design Your Dream Living Space",
      subtitle:
        "Sofa modern, dekorasi hangat, dan konsultasi custom untuk membuat ruang tamu Anda terasa lebih nyaman dan elegan.",
      primaryButton: "Lihat Katalog",
      secondaryButton: "Konsultasi Gratis",
      badgeTitle: "Custom Ready",
      badgeText: "warna, ukuran, dan bahan"
    },

    /* GANTI GAMBAR HERO DI SINI */
    heroImage: foto("sofa hero.jpg"),
    aboutImage: foto("SOFA HERO 2.jpg"),

    /* CARD KECIL DI BAWAH HERO */
    heroCards: [
      {
        title: "Modern Furniture",
        desc: "Sofa modern untuk ruang tamu elegan.",
        image: foto("001.jpg")
      },
      {
        title: "Custom Sofa",
        desc: "Custom warna, bahan, dan ukuran.",
        image: foto("004.jpg")
      },
      {
        title: "Inspired Living",
        desc: "Tampilan ruangan hangat dan nyaman.",
        image: foto("SOFA HERO 3.jpg")
      }
    ],

    /* KATEGORI SOFA */
    categories: [
      {
        title: "Sofa Minimalis",
        desc: "Cocok untuk rumah modern, apartemen, dan ruangan kecil.",
        image: foto("001.jpg")
      },
      {
        title: "Sofa Keluarga",
        desc: "Nyaman untuk ruang tamu dan area kumpul keluarga.",
        image: foto("01.jpg")
      },
      {
        title: "Sofa Premium",
        desc: "Desain mewah dengan material pilihan dan finishing rapi.",
        image: foto("-022.jpg")
      }
    ],

    /* KOLEKSI / INSPIRASI INTERIOR */
    collections: [
      {
        title: "Living Room",
        desc: "Sofa nyaman untuk ruang tamu keluarga.",
        image: foto("SOFA HERO 3.jpg")
      },
      {
        title: "Minimalist Space",
        desc: "Pilihan sofa clean untuk interior modern.",
        image: foto("004.jpg")
      },
      {
        title: "Family Corner",
        desc: "Ruang santai yang hangat dan fungsional.",
        image: foto("04.jpg")
      },
      {
        title: "Premium Lounge",
        desc: "Kesan elegan untuk ruang utama.",
        image: foto("-058.jpg")
      }
    ],

    /* KEUNGGULAN UTAMA */
    advantages: [
      {
        icon: "✦",
        title: "Bahan Berkualitas",
        desc: "Menggunakan material pilihan yang kuat, nyaman, dan cocok untuk pemakaian harian."
      },
      {
        icon: "▣",
        title: "Desain Modern",
        desc: "Model sofa mudah dipadukan dengan berbagai gaya interior rumah."
      },
      {
        icon: "✓",
        title: "Bisa Custom",
        desc: "Ukuran, warna, dan bahan bisa disesuaikan dengan kebutuhan ruangan."
      },
      {
        icon: "↗",
        title: "Konsultasi Mudah",
        desc: "Bisa konsultasi lewat WhatsApp sebelum menentukan produk yang cocok."
      }
    ],

    /* ABOUT / FITUR DETAIL */
    aboutTitle: "Furniture yang Dibuat untuk Nyaman Dipakai Setiap Hari",
    aboutText:
      "Kami membantu Anda memilih sofa yang cocok dengan ukuran ruangan, gaya interior, dan kebutuhan keluarga. Mulai dari sofa minimalis, sofa keluarga, sampai custom warna dan bahan.",
    features: [
      {
        icon: "🛋️",
        title: "Nyaman untuk Harian",
        desc: "Dudukan empuk dan bentuk sofa dibuat untuk aktivitas keluarga setiap hari."
      },
      {
        icon: "🎨",
        title: "Pilihan Warna & Bahan",
        desc: "Anda bisa menyesuaikan tampilan sofa dengan konsep interior rumah."
      },
      {
        icon: "📏",
        title: "Ukuran Bisa Disesuaikan",
        desc: "Cocok untuk rumah kecil, ruang tamu besar, kantor, atau lounge."
      }
    ],

    promo: {
      label: "Promo Spesial",
      title: "Promo Spesial Bulan Ini",
      text: "Dapatkan penawaran khusus untuk produk sofa tertentu dan konsultasi custom sesuai kebutuhan ruangan.",
      button: "Cek Promo"
    },

    testimonials: [
      {
        text: "Sofanya nyaman dan desainnya cocok untuk ruang tamu saya.",
        name: "Rina, Pontianak"
      },
      {
        text: "Pelayanannya baik, bisa konsultasi warna dan ukuran sebelum pesan.",
        name: "Andi, Kubu Raya"
      },
      {
        text: "Katalognya jelas, pilihan warna dan modelnya juga bagus.",
        name: "Maya, Pontianak"
      },
      {
        text: "Hasil sofa terlihat rapi dan sesuai dengan konsep rumah.",
        name: "Dian, Sungai Raya"
      }
    ],

    steps: [
      {
        title: "Pilih Produk",
        desc: "Pilih sofa yang sesuai dengan kebutuhan dan gaya ruangan Anda."
      },
      {
        title: "Hubungi Kami",
        desc: "Konsultasikan ukuran, warna, dan bahan melalui WhatsApp."
      },
      {
        title: "Proses Pesanan",
        desc: "Pesanan diproses sesuai detail dan kesepakatan."
      },
      {
        title: "Pengiriman",
        desc: "Sofa dikirim ke alamat Anda dengan aman."
      }
    ],

    contact: {
      title: "Siap Membuat Ruang Tamu Lebih Elegan?",
      text: "Klik tombol WhatsApp untuk konsultasi produk, ukuran, warna, bahan, dan estimasi harga."
    }
  },

  /*
    DATA PRODUK
    Untuk ganti gambar produk, ubah bagian images.
    Untuk ganti fitur produk, ubah bagian features.
  */
  PRODUCTS: [
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
        "Pilihan bahan kain atau kulit sintetis",
        "Cocok untuk ruang keluarga"
      ]
    },
    {
      id: 4,
      name: "Sofa Chesterfield Classic",
      category: "Sofa Bed",
      price: "Rp11.500.000",
      shortDesc: "Sofa dengan desain klasik namun berkesan mewah.",
      description:
        "Sofa Chesterfield Classic cocok untuk rumah, apartemen, atau kamar tamu karena dapat digunakan sebagai sofa dan tempat tidur tambahan.",
      images: [foto("000.jpg"), foto("0001.jpg"), foto("0002.jpg")],
      features: [
        "Kapasitas besar",
        "Desain mewah dan eksklusif",
        "Cocok untuk kantor dan ruang tamu",
        "Finishing detail"
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
      shortDesc: "Sofa warna light grey untuk nuansa hangat.",
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
  ]
};
