# Nara Living - Versi Mudah Edit

File yang paling sering diedit sekarang adalah `data.js`.

## Ganti gambar

1. Masukkan foto ke folder `images`.
2. Buka `data.js`.
3. Ganti nama file di bagian `foto("nama-file.jpg")`.

Contoh:

```js
heroImage: foto("hero-baru.jpg"),
```

Untuk produk:

```js
images: [foto("produk-1.jpg"), foto("produk-2.jpg"), foto("produk-3.jpg")],
```

## Ganti fitur produk

Cari produk yang ingin diedit, lalu ubah bagian `features`:

```js
features: [
  "Bisa custom warna",
  "Busa empuk",
  "Rangka kuat",
  "Garansi jahitan"
]
```

## Tambah produk baru

Copy satu blok produk di `PRODUCTS`, lalu ubah:

- `id`
- `name`
- `category`
- `price`
- `shortDesc`
- `description`
- `images`
- `features`

Pastikan `id` tidak sama dengan produk lain.

## Setelah edit

Jalankan:

```bash
git add .
git commit -m "Update gambar dan data website"
git push
```
