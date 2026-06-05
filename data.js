function foto(namaFile) {
  return "images/" + namaFile;
}

window.NARA_DATA = {
  SITE: {
    whatsappNumber: "6282195842319",
    whatsappMessage: "Halo Nara Living, saya ingin konsultasi sofa.",

    hero: {
      eyebrow: "NARA LIVING PTK",
      title: "Sofa yang pas, ruang tamu terasa lebih nyaman.",
      subtitle:
        "Pilihan sofa modern dengan desain sederhana, bahan berkualitas, dan bisa disesuaikan untuk rumah Anda.",
      primaryButton: "Konsultasi Sekarang",
      secondaryButton: "Lihat Katalog",
      badgeTitle: "Custom Ready",
      badgeText: "warna, ukuran, dan bahan",

      slides: [
        {
          title: "Sofa yang pas, ruang tamu terasa lebih nyaman.",
          subtitle:
            "Pilihan sofa modern dengan desain sederhana, bahan berkualitas, dan bisa disesuaikan untuk rumah Anda.",
          image: foto("sofa hero.jpg")
        },
        {
          title: "Custom sofa sesuai gaya rumah Anda.",
          subtitle:
            "Pilih ukuran, warna, dan bahan favorit agar sofa terlihat menyatu dengan interior ruangan.",
          image: foto("SOFA HERO 2.jpg")
        },
        {
          title: "Ruang keluarga lebih hangat dan elegan.",
          subtitle:
            "Temukan sofa nyaman untuk bersantai, menerima tamu, dan menikmati waktu bersama keluarga.",
          image: foto("SOFA HERO 3.jpg")
        }
      ]
    },

    heroImage: foto("sofa hero.jpg"),
    aboutImage: foto("SOFA HERO 2.jpg"),

    heroCards: [
      {
        title: "Modern Furniture",
        desc: "Sofa modern untuk ruang tamu elegan.",
        image: foto("nara-minimalist.jpg")
      },
      {
        title: "Custom Sofa",
        desc: "Custom warna, bahan, dan ukuran.",
        image: foto("sofa-l-nordic-cream.jpg")
      },
      {
        title: "Inspired Living",
        desc: "Tampilan ruangan hangat dan nyaman.",
        image: foto("chesterfield-classic.jpg")
      }
    ],

    categories: [
      {
        title: "Sofa Minimalis",
        desc: "Sofa clean dan modern untuk ruang tamu elegan.",
        image: foto("nara-minimalist.jpg")
      },
      {
        title: "Sofa L Shape",
        desc: "Sofa luas untuk ruang keluarga dan area santai.",
        image: foto("sofa-l-nordic-cream.jpg")
      },
      {
        title: "Sofa Premium",
        desc: "Pilihan sofa dengan desain eksklusif dan finishing rapi.",
        image: foto("chesterfield-classic.jpg")
      }
    ],

    collections: [
      {
        title: "Modern Living Room",
        desc: "Inspirasi ruang tamu modern dengan nuansa hangat dan elegan.",
        image: foto("interior-01.jpg")
      },
      {
        title: "Japanese Interior",
        desc: "Ruang santai bergaya natural, simple, dan nyaman.",
        image: foto("interior-02.jpg")
      },
      {
        title: "Family Lounge",
        desc: "Inspirasi area keluarga dengan sofa luas dan nyaman.",
        image: foto("interior-03.jpg")
      },
      {
        title: "Premium Corner",
        desc: "Tampilan ruang tamu premium dengan tata sofa yang rapi.",
        image: foto("interior-04.jpg")
      }
    ],

      advantages: [
        {
          icon: "🛡️",
          title: "Kualitas Terbaik",
          desc: "Material premium dan tahan lama."
        },
        {
          icon: "🛋️",
          title: "Desain Minimalis",
          desc: "Tampilan elegan, cocok untuk semua ruang."
        },
        {
          icon: "🎨",
          title: "Banyak Pilihan",
          desc: "Warna dan bahan bisa disesuaikan."
        },
        {
          icon: "🚚",
          title: "Pengiriman Aman",
          desc: "Sofa dikirim dengan aman dan rapi."
        }
      ],

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
    icon: "🛋️",
    title: "Pilih Produk",
    desc: "Pilih sofa yang sesuai dengan kebutuhan dan gaya ruangan Anda."
  },
  {
    icon: "💬",
    title: "Hubungi Kami",
    desc: "Konsultasikan ukuran, warna, dan bahan melalui WhatsApp."
  },
  {
    icon: "📋",
    title: "Proses Pesanan",
    desc: "Pesanan diproses sesuai detail dan kesepakatan."
  },
  {
    icon: "🚚",
    title: "Pengiriman",
    desc: "Sofa dikirim ke alamat Anda dengan aman."
  }
  ],

    contact: {
      title: "Siap Membuat Ruang Tamu Lebih Elegan?",
      text: "Klik tombol WhatsApp untuk konsultasi produk, ukuran, warna, bahan, dan estimasi harga."
    }
  },

  PRODUCTS: [
    {
      id: 1,
      name: "Nara Minimalist",
      category: "Sofa 3 2 1 Seater",
      price: "Rp8.900.000",
      shortDesc: "Sofa minimalis 3 dudukan dengan desain bersih dan modern.",
      description:
        "Nara Minimalist adalah sofa set design minimalis modern dengan bentuk tegas, armrest kotak, dudukan empuk, dan tampilan premium. Cocok untuk ruang tamu modern, apartemen, maupun ruang keluarga.",
      images: [
        foto("nara-minimalist.jpg"),
        foto("nara-minimalist.jpg"),
        foto("nara-minimalist.jpg")
      ],
      features: [
        "Desain Minimalis Modern",
        "Armrest kotak elegan",
        "Kain premium tekstur halus",
        "Dudukan empuk dan nyaman",
        "Custom warna dan ukuran tersedia"
      ]
    },
    {
      id: 2,
      name: " Nordic ",
      category: "Sofa L Shape",
      price: "Rp8.800.000",
      shortDesc: "Sofa L modern dengan desain modular dan tampilan bersih.",
      description:
        "Sofa Nordic L Cream hadir dengan bentuk L yang nyaman untuk ruang keluarga. Desainnya bersih, modern, dan mudah dipadukan dengan interior natural maupun minimalis.",
      images: [
        foto("sofa-l-nordic-cream.jpg"),
        foto("sofa-l-nordic-cream.jpg"),
        foto("sofa-l-nordic-cream.jpg")
      ],
      features: [
        "Tipe Sofa L Shape",
        "Desain Modular Minimalis",
        "Warna Cream Natural",
        "Dudukan luas dan nyaman",
        "Cocok untuk ruang keluarga",
        "Custom warna dan ukuran tersedia"
      ]
    },

    {
      id: 4,
      name: "Nara Aruna",
      category: "Sofa Rounded",
      price: "Rp5.500.000",
      shortDesc: "Sofa rounded premium dengan bentuk lembut dan modern.",
      description:
        "Nara Aruna hadir dengan desain rounded yang lembut, elegan, dan modern. Bentuk melengkungnya memberikan kesan hangat serta premium untuk ruang tamu estetik maupun lounge.",
      images: [
        foto("nara-aruna.jpg"),
        foto("nara-aruna.jpg"),
        foto("nara-aruna.jpg")
      ],
      features: [
        "Desain rounded modern",
        "Bentuk lembut dan elegan",
        "Kain premium tekstur halus",
        "Dudukan luas dan nyaman",
        "Cocok untuk ruang estetik",
        "Custom warna tersedia"
      ]
    },
    {
      id: 5,
      name: "Nara Modern",
      category: "Sofa Lounge",
      price: "Rp8.750.000",
      shortDesc: "Sofa lounge modern dengan desain clean dan nyaman.",
      description:
        "Nara Modern Lounge dirancang dengan bentuk clean, dudukan tebal, dan tampilan modern. Cocok untuk ruang keluarga, ruang santai, maupun ruang tamu dengan konsep minimalis.",
      images: [
        foto("nara-modern-lounge.jpg"),
        foto("nara-modern-lounge.jpg"),
        foto("nara-modern-lounge.jpg")
      ],
      features: [
        "Desain modern clean",
        "Dudukan tebal dan nyaman",
        "Armrest empuk",
        "Kain premium lembut",
        "Cocok untuk ruang keluarga",
        "Custom ukuran dan warna tersedia"
      ]
    },
    {
      id: 6,
      name: "Sofa Modular Cloud",
      category: "Modular Sofa",
      price: "Rp12.500.000",
      shortDesc: "Sofa modular modern dengan dudukan luas dan desain premium.",
      description:
        "Sofa Modular Cloud merupakan sofa modular premium dengan desain simetris, dudukan ekstra luas, dan kenyamanan maksimal. Cocok untuk ruang keluarga besar dan interior modern.",
      images: [
        foto("sofa-modular-cloud.jpg"),
        foto("sofa-modular-cloud.jpg"),
        foto("sofa-modular-cloud.jpg")
      ],
      features: [
        "Desain modular modern",
        "Dudukan ekstra luas",
        "Busa premium empuk",
        "Rangka kuat",
        "Cocok untuk ruang keluarga besar",
        "Custom warna tersedia"
      ]
    },
    {
      id: 7,
      name: "Sofa Scandinavian",
      category: "Sofa Scandinavian",
      price: "Rp9.200.000",
      shortDesc: "Sofa bergaya Scandinavian dengan tampilan simpel dan hangat.",
      description:
        "Sofa Scandinavian menawarkan desain sederhana, proporsi rapi, dan warna netral yang mudah menyatu dengan interior modern, japandi, maupun natural living.",
      images: [
        foto("sofa-scandinavian.jpg"),
        foto("sofa-scandinavian.jpg"),
        foto("sofa-scandinavian.jpg")
      ],
      features: [
        "Gaya Scandinavian modern",
        "Warna netral dan hangat",
        "Dudukan nyaman",
        "Desain simpel dan bersih",
        "Cocok untuk interior Japandi",
        "Custom bahan dan warna tersedia"
      ]
    },
    {
      id: 8,
      name: "Sofa Corner Premium",
      category: "Sofa Corner",
      price: "Rp14.900.000",
      shortDesc: "Sofa corner ekstra panjang untuk ruang keluarga besar.",
      description:
        "Sofa Corner Premium memiliki desain corner ekstra panjang dengan kapasitas duduk luas. Cocok untuk ruang tamu besar, ruang keluarga, atau area lounge premium.",
      images: [
        foto("sofa-corner-premium.jpg"),
        foto("sofa-corner-premium.jpg"),
        foto("sofa-corner-premium.jpg")
      ],
      features: [
        "Desain corner ekstra panjang",
        "Dudukan lebar dan nyaman",
        "Cocok untuk keluarga besar",
        "Kain premium lembut",
        "Bisa custom ukuran",
        "Pilihan warna tersedia"
      ]
    },
    {
      id: 9,
      name: "Nara Signature",
      category: "Sofa Premium",
      price: "Rp15.500.000",
      shortDesc: "Sofa premium dengan tampilan eksklusif dan finishing rapi.",
      description:
        "Nara Signature adalah koleksi sofa premium dengan desain eksklusif, kenyamanan maksimal, dan detail finishing yang rapi. Cocok untuk ruang utama, lounge, maupun hunian premium.",
      images: [
        foto("nara-signature.jpg"),
        foto("nara-signature.jpg"),
        foto("nara-signature.jpg")
      ],
      features: [
        "Koleksi premium Nara Living",
        "Finishing detail dan rapi",
        "Bahan kain premium",
        "Dudukan empuk dan kokoh",
        "Cocok untuk ruang utama",
        "Custom warna dan ukuran tersedia"
      ]
    }
  ]
};