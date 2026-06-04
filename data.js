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

    advantages: [
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

  PRODUCTS: [

    
          {
        id: 1,
        name: "Nara Minimalist",
        category: "Sofa 3 Seater",
        price: "Rp8.900.000",
        shortDesc: "Sofa minimalis 3 dudukan dengan desain bersih dan modern.",
        description:
          "Nara Minimalist adalah sofa 3 seater bergaya minimalis modern dengan bentuk tegas, armrest kotak, dudukan empuk, dan tampilan premium. Cocok untuk ruang tamu modern, apartemen, maupun ruang keluarga yang ingin terlihat rapi dan elegan.",
        images: [
          foto("nara-minimalist.jpg"),
          foto("nara-minimalist.jpg"),
          foto("nara-minimalist.jpg")
        ],
        features: [
          "Tipe Sofa 3 Seater",
          "Desain Minimalis Modern",
          "Armrest kotak elegan",
          "Kain premium tekstur halus",
          "Dudukan empuk dan nyaman",
          "Rangka kuat dan kokoh",
          "Custom warna dan ukuran tersedia"
        ]
      },
    {
      id: 2,
      name: "Sofa Nordic L Cream",
      category: "Sofa L Shape",
      price: "Rp8.800.000",
      shortDesc: "Sofa L modern dengan desain modular dan tampilan bersih.",
      description:
        "Sofa L minimalis dengan desain modular yang nyaman untuk ruang keluarga modern. Menggunakan kain Regatta warna 02 dengan nuansa cream natural yang mudah dipadukan dengan interior rumah.",
      images: [
        foto("sofa-l-nordic-cream.jpg"),
        foto("sofa-l-nordic-cream.jpg"),
        foto("sofa-l-nordic-cream.jpg")
      ],
      features: [
        "Tipe Sofa L Shape",
        "Desain Modular Minimalis",
        "Kain Regatta 02",
        "Warna Cream Natural",
        "Ukuran Custom",
        "Custom warna dan ukuran tersedia"
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