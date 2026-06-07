# 💄 Beauty Shop - Noelle Güzellik Mağazası

Bu proje, Wix üzerinde yer alan bir güzellik / kozmetik mağazası şablonundan ilham alınarak HTML, CSS ve JavaScript ile geliştirilmiş statik bir e-ticaret arayüzüdür. Projede amaç; hazır bir web site tasarımını inceleyerek benzer bir arayüzü sıfırdan oluşturmak, ürün verilerini JSON dosyası üzerinden yönetmek ve JavaScript ile dinamik olarak sayfaya aktarmaktır. Proje içerisinde ana sayfa, ürün kategorileri, en çok satanlar, yeni ürünler ve ürün hover etkileşimleri gibi temel e-ticaret arayüz bileşenleri bulunmaktadır.

---

## 📚 İçindekiler

- [📌 Projenin Amacı](#-projenin-amacı)
- [🛍️ Proje İçeriği](#️-proje-içeriği)
- [🧩 Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [📁 Proje Klasör Yapısı](#-proje-klasör-yapısı)
- [📄 Sayfalar](#-sayfalar)
- [🎨 Ana Sayfa Bölümleri](#-ana-sayfa-bölümleri)
  - [1. Header ve Üst Bar](#1-header-ve-üst-bar)
  - [2. Navbar](#2-navbar)
  - [3. Hero Section](#3-hero-section)
  - [4. En Çok Satanlar Bölümü](#4-en-çok-satanlar-bölümü)
  - [5. Tanıtım / Promo Bölümü](#5-tanıtım--promo-bölümü)
  - [6. Çok Arananlar Bölümü](#6-çok-arananlar-bölümü)
  - [7. Kategori Keşfet Bölümü](#7-kategori-keşfet-bölümü)
  - [8. İndirim Bölümü](#8-indirim-bölümü)
  - [9. Hakkımızda Bölümü](#9-hakkımızda-bölümü)
  - [10. Instagram Alanı](#10-instagram-alanı)
  - [11. E-posta Kayıt Bölümü](#11-e-posta-kayıt-bölümü)
  - [12. Footer](#12-footer)
- [🧠 JavaScript Kullanımı](#-javascript-kullanımı)
  - [Ürünleri JSON’dan Çekme](#ürünleri-jsondan-çekme)
- [🧾 JSON Ürün Yapısı](#-json-ürün-yapısı)
- [🖱️ Ürün Hover Etkileşimi](#️-ürün-hover-etkileşimi)
- [🔍 Ürün Filtreleme Mantığı](#-ürün-filtreleme-mantığı)
- [🧭 Scroll Etkileşimi](#-scroll-etkileşimi)
- [💬 Sohbet Kutusu](#-sohbet-kutusu)
- [🎞️ Footer Animasyonu](#️-footer-animasyonu)
- [🎯 Projede Öğrenilen Konular](#-projede-öğrenilen-konular)
- [🚀 Proje Nasıl Çalıştırılır?](#-proje-nasıl-çalıştırılır)
  - [1. Projeyi indirin veya klonlayın](#1-projeyi-indirin-veya-klonlayın)
  - [2. Proje klasörüne girin](#2-proje-klasörüne-girin)
  - [3. Projeyi çalıştırın](#3-projeyi-çalıştırın)
- [📌 Geliştirilebilecek Özellikler](#-geliştirilebilecek-özellikler)
- [👩‍💻 Geliştirici](#-geliştirici)
- [📝 Not](#-not)

---

## 📌 Projenin Amacı

Bu projenin temel amacı, modern bir kozmetik mağazası arayüzünü HTML, CSS ve JavaScript kullanarak geliştirmektir. Projede özellikle şu konular üzerinde çalışılmıştır:

- Gerçek bir web site şablonunun analiz edilmesi
- Header, navbar, hero section, ürün kartları ve footer gibi temel arayüz bölümlerinin oluşturulması
- Ürün bilgilerinin statik HTML yerine JSON dosyasında tutulması
- JSON verilerinin JavaScript ile okunup DOM üzerinden sayfaya basılması
- Ürün kartlarında hover durumunda görsel değişimi yapılması
- Kategori sayfalarının ürün verilerine göre dinamik doldurulması
- Scroll hareketine bağlı header gizleme/gösterme işlemi
- Responsive tasarıma uygun dosya yapısının hazırlanması

---

## 🛍️ Proje İçeriği

Projede kozmetik mağazası için aşağıdaki bölümler hazırlanmıştır:

- Üst bilgilendirme barı
- Navbar menüsü
- Hero section
- En çok satan ürünler alanı
- Tanıtım / kampanya bölümü
- Çok aranan ürünler alanı
- Kategori keşfetme bölümü
- İndirim bölümü
- Hakkımızda bölümü
- Instagram görsel alanı
- E-posta kayıt bölümü
- Footer
- Sohbet kutusu
- Kategori ve ürün listeleme sayfaları

---

## 🧩 Kullanılan Teknolojiler

Projede kullanılan temel teknolojiler şunlardır:

| Teknoloji | Kullanım Amacı |
|---|---|
| HTML5 | Sayfa iskeletinin oluşturulması |
| CSS3 | Görsel tasarım, layout ve responsive düzen |
| JavaScript | Dinamik ürün listeleme ve kullanıcı etkileşimleri |
| JSON | Ürün verilerinin saklanması |
| Font Awesome | İkon kullanımı |
| Google Fonts | Yazı tipi kullanımı |
| Bootstrap | Yardımcı sınıflar ve temel responsive destek |

---

## 📁 Proje Klasör Yapısı

```text
beauty-shop/
│
├── index.html
├── README.md
│
├── assets/
│   └── images/
│       ├── banners/
│       ├── hero/
│       ├── icons/
│       └── products/
│
├── css/
│   ├── variables.css
│   ├── style.css
│   └── responsive.css
│
├── data/
│   └── products.json
│
├── js/
│   ├── app.js
│   ├── helpers.js
│   ├── storage.js
│   └── components/
│       ├── cart.js
│       ├── modal.js
│       ├── navbar.js
│       └── slider.js
│
└── pages/
    ├── all_products.html
    ├── bestseller.html
    ├── eye.html
    ├── face.html
    ├── lips.html
    └── new.html
```

---

## 📄 Sayfalar

Projede ana sayfa dışında farklı ürün listeleme sayfaları da bulunmaktadır.

| Sayfa               | Açıklama                                           |
| ------------------- | -------------------------------------------------- |
| `index.html`        | Ana sayfa                                          |
| `all_products.html` | Tüm ürünlerin listelendiği sayfa                   |
| `bestseller.html`   | En çok satan ürünlerin listelendiği sayfa          |
| `new.html`          | Yeni ürünlerin listelendiği sayfa                  |
| `face.html`         | Yüz kategorisindeki ürünlerin listelendiği sayfa   |
| `lips.html`         | Dudak kategorisindeki ürünlerin listelendiği sayfa |
| `eye.html`          | Göz kategorisindeki ürünlerin listelendiği sayfa   |

---

## 🎨 Ana Sayfa Bölümleri

### 1. Header ve Üst Bar

Sayfanın en üst kısmında arama alanı, indirim duyurusu ve sosyal medya ikonları bulunmaktadır. Bu bölümde kullanıcıya:

* Arama alanı
* İndirim bildirimi
* Instagram, Facebook, YouTube ve X ikonları

sunulmuştur.

---

### 2. Navbar

Navbar alanında marka adı ve sayfa bağlantıları bulunmaktadır. Navbar bağlantıları:

* Tüm Ürünler
* Yeni
* En Çok Satanlar
* Yüz
* Dudak
* Göz

Ayrıca giriş ikonu ve alışveriş çantası ikonu da navbar içerisinde yer almaktadır.

---

### 3. Hero Section

Hero section, ana sayfanın ilk büyük görsel alanıdır. Bu bölümde marka atmosferini yansıtan büyük bir görsel, başlık, açıklama ve “Satın Al” butonu bulunmaktadır. Hero bölümünde amaç, kullanıcının siteye girdiği anda dikkatini çekmek ve mağazanın kozmetik temasını güçlü bir şekilde yansıtmaktır.

---

### 4. En Çok Satanlar Bölümü

Bu bölümde `products.json` dosyasında `isBestSeller` değeri `true` olan ürünler JavaScript ile filtrelenerek sayfaya aktarılmaktadır. Her ürün kartında:

* Ürün görseli
* Ürün adı
* Ürün fiyatı
* Hover durumunda değişen ürün görseli

bulunmaktadır.

---

### 5. Tanıtım / Promo Bölümü

Bu bölümde siyah arka plana sahip bir tanıtım alanı ve yanında büyük bir ruj görseli bulunmaktadır. Promo section, siteye daha profesyonel ve mağaza temalı bir görünüm kazandırmak için eklenmiştir.

---

### 6. Çok Arananlar Bölümü

Bu bölümde `products.json` dosyasında `isPopular` değeri `true` olan ürünler listelenmektedir. Bu yapı sayesinde ürünler HTML içerisinde tek tek yazılmamış, JavaScript ile JSON verileri üzerinden dinamik olarak oluşturulmuştur.

---

### 7. Kategori Keşfet Bölümü

Bu bölümde kullanıcılar farklı ürün kategorilerine yönlendirilmektedir. Kategoriler:

* Göz
* Yüz
* Dudak

Her kategori, görsel kart yapısı ile sunulmuştur.

---

### 8. İndirim Bölümü

İndirim bölümünde kullanıcıya belirli bir kampanya kodu ile indirim fırsatı sunulmaktadır. Bu alan, e-ticaret sitelerinde sık kullanılan kampanya tanıtım bölümlerine örnek olarak hazırlanmıştır.

---

### 9. Hakkımızda Bölümü

Bu bölümde Noelle markası için kısa bir tanıtım metni yer almaktadır. Amaç, markanın cilt bakımına ve güzellik anlayışına verdiği önemi kullanıcıya aktarmaktır.

---

### 10. Instagram Alanı

Instagram section içerisinde birden fazla görsel grid yapısıyla gösterilmiştir. Görsellerin üzerine gelindiğinde overlay alanı ile sosyal medya metinleri görüntülenmektedir.

---

### 11. E-posta Kayıt Bölümü

Kullanıcıların özel fırsatlardan haberdar olması için e-posta kayıt alanı hazırlanmıştır.

---

### 12. Footer

Footer bölümünde alışveriş, yardım ve marka bağlantıları gibi alanlara yer verilmiştir. Ayrıca footer elemanlarında scroll ile görünür olduğunda animasyon efekti uygulanmıştır.

---

## 🧠 JavaScript Kullanımı

Projede JavaScript temel olarak ürün verilerini yönetmek ve sayfa etkileşimlerini oluşturmak için kullanılmıştır.

### Ürünleri JSON’dan Çekme

* Ürün bilgileri `data/products.json` dosyasında tutulmaktadır. JavaScript tarafında bu dosya `fetch()` ile okunur. 
* Ana sayfa ve alt sayfalar farklı klasör konumlarında olduğu için JSON yolu dinamik olarak belirlenmiştir.

```javascript
const isSubPage = window.location.pathname.includes('/pages/');
const jsonPath = isSubPage ? '../data/products.json' : 'data/products.json';
```

Bu yapı sayesinde hem ana sayfada hem de `pages/` klasörü içindeki sayfalarda aynı JavaScript dosyası kullanılabilmektedir.

---

## 🧾 JSON Ürün Yapısı

Her ürün için JSON dosyasında temel bilgiler tutulmaktadır. Örnek ürün yapısı:

```json
{
  "id": 1,
  "name": "Siyah Güç Göz Kalemi",
  "price": "₺150,00",
  "image": "../assets/images/products/eye_pencil.png",
  "hoverImage": "../assets/images/products/eye_pencil_hover.png",
  "category": "eye",
  "isBestSeller": true,
  "isPopular": false,
  "isNew": false
}
```

Bu yapı sayesinde ürünler şu kriterlere göre filtrelenebilir:

| Alan           | Açıklama                                                                |
| -------------- | ----------------------------------------------------------------------- |
| `category`     | Ürünün kategorisini belirtir. Örneğin: `eye`, `face`, `lips`            |
| `isBestSeller` | Ürünün en çok satanlar bölümünde gösterilip gösterilmeyeceğini belirtir |
| `isPopular`    | Ürünün çok arananlar bölümünde gösterilip gösterilmeyeceğini belirtir   |
| `isNew`        | Ürünün yeni ürünler sayfasında gösterilip gösterilmeyeceğini belirtir   |
| `image`        | Ürünün normal görsel yolunu tutar                                       |
| `hoverImage`   | Hover durumunda gösterilecek görsel yolunu tutar                        |

---

## 🖱️ Ürün Hover Etkileşimi

Ürün kartlarında kullanıcı mouse ile kartın üzerine geldiğinde ürün görseli değişmektedir. Bu işlem JavaScript ile yapılmıştır. Her ürünün normal görseli `image`, hover görseli ise `hoverImage` alanında tutulmaktadır. Mantık şu şekildedir:

```text
Mouse ürün kartının üzerine gelir
↓
Normal ürün görseli hover görseli ile değiştirilir
↓
Mouse karttan ayrılır
↓
Görsel tekrar eski haline döner
```

Bu özellik ürün kartlarına daha dinamik ve profesyonel bir görünüm kazandırmıştır.

---

## 🔍 Ürün Filtreleme Mantığı

Projede ürünler JSON içerisindeki alanlara göre filtrelenmektedir. Örneğin:

* En çok satan ürünler için `isBestSeller === true`
* Çok aranan ürünler için `isPopular === true`
* Yeni ürünler için `isNew === true`
* Yüz ürünleri için `category === "face"`
* Dudak ürünleri için `category === "lips"`
* Göz ürünleri için `category === "eye"`

Bu yöntem, ürünleri doğrudan HTML içerisine yazmak yerine daha yönetilebilir bir veri yapısı oluşturmayı sağlamıştır.

---

## 🧭 Scroll Etkileşimi

Sayfada scroll hareketine göre header alanı gizlenip tekrar gösterilmektedir. Kullanıcı aşağı doğru kaydırdığında header yukarı doğru gizlenir. Yukarı doğru kaydırdığında tekrar görünür hale gelir. Bu yapı, kullanıcıya daha geniş bir içerik alanı sunmak ve modern web sitelerindeki scroll davranışını taklit etmek için eklenmiştir.

---

## 💬 Sohbet Kutusu

Projede sağ alt kısımda bir sohbet butonu yer almaktadır. Kullanıcı butona tıkladığında sohbet kutusu açılır, kapatma butonuna tıkladığında ise kapanır. Bu özellik gerçek e-ticaret sitelerinde sık kullanılan canlı destek arayüzüne benzer bir kullanıcı deneyimi oluşturmak için hazırlanmıştır.

---

## 🎞️ Footer Animasyonu

Footer kolonları için `IntersectionObserver` kullanılmıştır. Footer alanı ekranda görünür hale geldiğinde ilgili kolonlara animasyon class’ı eklenir. Bu sayede footer bölümü kullanıcı sayfanın sonuna geldiğinde daha canlı bir şekilde görüntülenir.

---

## 🎯 Projede Öğrenilen Konular

Bu proje geliştirilirken aşağıdaki konular üzerinde pratik yapılmıştır:

* HTML ile semantik sayfa yapısı oluşturma
* CSS ile layout tasarımı yapma
* Flexbox kullanımı
* Görsel hizalama ve ürün kartı tasarımı
* Hover efektleri
* JavaScript ile DOM manipülasyonu
* `fetch()` ile JSON dosyasından veri çekme
* JSON verilerini filtreleme
* Dinamik ürün kartı oluşturma
* Sayfa konumuna göre veri yolu belirleme
* Scroll event kullanımı
* IntersectionObserver kullanımı
* Çok sayfalı statik web sitesi yapısı kurma

---

## 🚀 Proje Nasıl Çalıştırılır?

Projeyi çalıştırmak için herhangi bir backend veya veritabanı kurulumuna gerek yoktur.

### 1. Projeyi indirin veya klonlayın

```bash
git clone <repo-linki>
```

### 2. Proje klasörüne girin

```bash
cd beauty-shop
```

### 3. Projeyi çalıştırın

Projeyi en sağlıklı şekilde çalıştırmak için Visual Studio Code üzerinde **Live Server** eklentisi kullanılabilir.

```text
index.html dosyasına sağ tıkla
↓
Open with Live Server
```

> Not: Ürünler `products.json` dosyasından `fetch()` ile çekildiği için projeyi doğrudan dosya olarak açmak yerine Live Server ile çalıştırmak daha sağlıklıdır.

---

## 📌 Geliştirilebilecek Özellikler

Proje ilerleyen aşamalarda aşağıdaki özelliklerle geliştirilebilir:

* Sepete ürün ekleme sistemi
* Sepet toplam tutarı hesaplama
* Ürün detay modalı
* Mobil hamburger menü
* Ürün arama özelliği
* Kategoriye göre filtreleme
* LocalStorage ile sepet verilerini saklama
* Favori ürünler sistemi
* Form validasyonu
* Responsive tasarımın daha detaylı geliştirilmesi

---

## 👩‍💻 Geliştirici

Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilen bir frontend arayüz çalışmasıdır. 

**Geliştirici:** Özge Keskin

---

## 📝 Not

Bu proje eğitim ve pratik amaçlı geliştirilmiştir. Tasarım sürecinde bir Wix güzellik mağazası şablonu referans alınmış, proje HTML, CSS ve JavaScript ile yeniden oluşturulmuştur.