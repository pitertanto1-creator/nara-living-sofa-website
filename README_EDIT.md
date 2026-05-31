# Panduan Edit Cepat Website Nara Living

Versi ini mengembalikan fitur lengkap yang sebelumnya ada, tetapi tetap memakai desain baru yang lebih modern.

## File yang sering diedit

Edit data website di:

```txt
data.js
```

File `script.js` tidak perlu diedit kecuali ingin mengubah cara kerja website.

## Cara ganti gambar hero

Buka `data.js`, cari:

```js
heroImage: foto("sofa hero.jpg"),
```

Ganti nama file sesuai gambar di folder `images`:

```js
heroImage: foto("hero-baru.jpg"),
```

## Cara ganti gambar produk

Cari produk yang ingin diganti, lalu ubah bagian `images`:

```js
images: [foto("001.jpg"), foto("002.jpg"), foto("003.jpg")],
```

Contoh:

```js
images: [foto("sofa-baru-1.jpg"), foto("sofa-baru-2.jpg"), foto("sofa-baru-3.jpg")],
```

## Cara ganti fitur produk

Cari bagian `features`:

```js
features: [
  "Bisa custom warna",
  "Bahan premium",
  "Jahitan rapi"
]
```

Ubah teksnya sesuai kebutuhan.

## Cara ganti ukuran gambar

Buka `style.css`, bagian atas ada:

```css
--hero-image-height: 560px;
--product-image-height: 265px;
--modal-image-height: 430px;
```

Ubah angkanya sesuai kebutuhan.

## Gambar terpotong atau tidak?

Di `style.css`:

```css
--product-image-fit: cover;
```

- `cover` = gambar memenuhi card dan terlihat rapi, tapi bisa terpotong.
- `contain` = gambar utuh, tapi bisa ada ruang kosong.

## Upload ke GitHub

Setelah edit file, jalankan:

```bash
git add .
git commit -m "Update website Nara Living"
git push origin main
```

## Struktur folder yang benar

```txt
Nara website/
├── images/
├── index.html
├── data.js
├── script.js
├── style.css
├── README_EDIT.md
└── netlify.toml
```

Jangan hapus folder `images`.
