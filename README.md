# 💄 Beauty Shop — Proje Dokümantasyonu

Wix Güzellik Mağazası şablonunun statik HTML/CSS/JS ile klonu.

## 📁 Klasör Yapısı

beauty-shop/
│
├── index.html                  ← Ana sayfa
├── README.md                   ← Proje dokümantasyonu
│
├── pages/                      ← Navbar'daki her sekme için ayrı sayfa
│   ├── all_products.html       ← Tüm ürünler
│   ├── bestseller.html         ← En çok satanlar
│   ├── eye.html                ← Göz ürünleri
│   ├── face.html               ← Yüz ürünleri
│   ├── lips.html               ← Dudak ürünleri
│   └── new.html                ← Yeni ürünler
│
├── css/
│   ├── variables.css           ← Renkler, fontlar, boşluklar (:root)
│   ├── style.css               ← Tüm sayfa stilleri (navbar, hero, footer...)
│   └── responsive.css          ← Mobil ve tablet uyumu (media query'ler)
│
├── js/
│   ├── components/             ← Her sayfada kullanılan ortak bileşenler
│   │   ├── navbar.js           ← Hamburger menü, scroll efekti
│   │   ├── cart.js             ← Sepete ekle, çıkar, güncelle
│   │   ├── slider.js           ← Hero banner görsel geçişi
│   │   └── modal.js            ← Popup pencere açma/kapama
│   ├── app.js                  ← Tüm JS'i bir araya bağlar, her sayfaya eklenir
│   ├── helpers.js              ← Tekrar kullanılan küçük fonksiyonlar (fiyat formatı vb.)
│   └── storage.js              ← Sepet verisini localStorage'da saklar
│
├── data/
│   └── products.json           ← Tüm ürün verisi (isim, fiyat, kategori, görsel)
│
└── assets/
    ├── images/
    │   ├── banners/            ← Sayfa üst banner görselleri
    │   ├── hero/               ← Ana sayfa büyük görsel
    │   ├── icons/              ← Logo, favicon, küçük ikonlar
    │   └── products/           ← Ürün fotoğrafları
    └── fonts/                  ← Özel font dosyaları (.woff2)

## 🚀 Nasıl Başlanır?

1. `index.html` dosyasını tarayıcıda aç
2. CSS sırasına dikkat et: reset → variables → global → bileşen CSS
3. Her HTML sayfasına `main.js` + sayfaya özel JS ekle

## 📌 Geliştirme Sırası (Öneri)

1. `css/variables.css` → renk paletini belirle
2. `css/reset.css` + `css/global.css` → temel stiller
3. `index.html` + `css/navbar.css` + `css/hero.css`
4. `css/products.css` + ürün kartları
5. `pages/shop.html` → ürün listeleme
6. `js/components/cart.js` + `js/utils/storage.js` → sepet
7. `css/responsive.css` → mobil uyum

