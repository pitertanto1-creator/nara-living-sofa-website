# Nara Living - Interior Inspired Theme

Desain ini dibuat ulang dengan gaya modern furniture/interior seperti contoh referensi: hero besar, card kategori mengambang, section koleksi, katalog produk, about, testimoni, dan CTA WhatsApp.

## File yang perlu di-upload ke GitHub

Replace file lama dengan file ini:

- `index.html`
- `style.css`
- `script.js`
- `README_EDIT.md`
- `netlify.toml`

Jangan hapus folder `images` lama karena desain ini masih memakai gambar dari folder tersebut.

## Cara ganti gambar utama

Buka `script.js`, cari:

```js
heroImage: "images/sofa hero.jpg",
aboutImage: "images/SOFA HERO 2.jpg",
```

Ganti dengan nama file baru, contoh:

```js
heroImage: "images/hero-baru.jpg",
aboutImage: "images/about-baru.jpg",
```

Pastikan file gambarnya ada di folder `images`.

## Cara ganti gambar produk

Buka `script.js`, cari bagian `PRODUCTS`, lalu edit:

```js
images: ["images/001.jpg", "images/002.jpg", "images/003.jpg"],
```

Contoh:

```js
images: ["images/sofa-nara-1.jpg", "images/sofa-nara-2.jpg", "images/sofa-nara-3.jpg"],
```

## Cara ubah ukuran gambar

Buka `style.css`, cari bagian `:root`:

```css
--hero-image-height: 560px;
--collection-image-height: 210px;
--product-image-height: 260px;
--modal-image-height: 430px;
```

Perbesar atau perkecil angka `px` sesuai kebutuhan.

## Cara agar gambar tidak terpotong

Di `style.css`, bagian `:root`, ubah:

```css
--product-image-fit: cover;
```

menjadi:

```css
--product-image-fit: contain;
```

`cover` membuat gambar penuh dan rapi, tapi bisa terpotong. `contain` membuat gambar terlihat utuh, tapi mungkin ada ruang kosong.

## Cara update ke GitHub

Dari folder repository:

```bash
git add .
git commit -m "Redesign website interior inspired"
git push origin main
```

Netlify akan otomatis deploy ulang jika repo GitHub sudah tersambung.
