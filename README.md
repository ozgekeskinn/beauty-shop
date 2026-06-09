# 💄 Beauty Shop - Noelle Kozmetik Mağazası

Beauty Shop, **Noelle** isimli kurgusal bir kozmetik markası için HTML, CSS ve JavaScript kullanılarak geliştirilmiş statik bir e-ticaret web sitesi arayüzüdür. Proje; ürün listeleme, kategori filtreleme, ürün detay sayfası, sağdan açılan mini sepet paneli, ayrı alışveriş sepeti sayfası ve ödeme sayfası gibi temel e-ticaret akışlarını içerir.

Bu proje hazırlanırken Wix tabanlı modern bir kozmetik mağazası tasarımı referans alınmış; ancak arayüz, sayfa yapısı, ürün verileri, sepet yönetimi ve JavaScript etkileşimleri sıfırdan geliştirilmiştir.

---

## 📚 İçindekiler

- [Projenin Amacı](#-projenin-amacı)
- [Proje Özeti](#-proje-özeti)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Proje Klasör Yapısı](#-proje-klasör-yapısı)
- [Sayfalar](#-sayfalar)
- [Ana Sayfa Yapısı](#-ana-sayfa-yapısı)
- [Ürün Listeleme Mantığı](#-ürün-listeleme-mantığı)
- [Ürün Detay Sayfası](#-ürün-detay-sayfası)
- [Sepet Sistemi](#-sepet-sistemi)
- [Alışveriş Sepeti Sayfası](#-alışveriş-sepeti-sayfası)
- [Ödeme Sayfası](#-ödeme-sayfası)
- [JSON Ürün Veri Yapısı](#-json-ürün-veri-yapısı)
- [JavaScript Dosyalarının Görevleri](#-javascript-dosyalarının-görevleri)
- [CSS ve Tasarım Yapısı](#-css-ve-tasarım-yapısı)
- [Responsive Tasarım](#-responsive-tasarım)
- [Proje Nasıl Çalıştırılır?](#-proje-nasıl-çalıştırılır)
- [Projede Öğrenilen Konular](#-projede-öğrenilen-konular)
- [Geliştirilebilecek Özellikler](#-geliştirilebilecek-özellikler)
- [Geliştirici](#-geliştirici)

---

## 📌 Projenin Amacı

Bu projenin temel amacı, gerçek bir e-ticaret sitesinde bulunan temel arayüz ve kullanıcı akışlarını HTML, CSS ve JavaScript ile uygulamaktır. Proje kapsamında özellikle şu konular üzerinde çalışılmıştır:

- Modern bir kozmetik mağazası arayüzü oluşturmak
- HTML ile düzenli ve anlamlı sayfa yapıları kurmak
- CSS Grid ve Flexbox ile sayfa yerleşimleri oluşturmak
- JavaScript ile JSON dosyasından ürün verilerini çekmek
- Ürünleri kategori, yeni ürün ve çok satan ürün durumlarına göre listelemek
- Ürün kartlarında hover görsel değişimi yapmak
- Ürün detay sayfasını URL parametresine göre dinamik doldurmak
- Kullanıcının sepete ürün ekleyebilmesini sağlamak
- Sepet verilerini `localStorage` üzerinde saklamak
- Sağdan açılan mini sepet paneli oluşturmak
- Ayrı bir sepet sayfası ve ödeme sayfası oluşturmak
- Sepet toplamını, ürün adetlerini ve sipariş özetini dinamik hesaplamak
- Responsive tasarıma uygun bir yapı kurmak

---

## 🛍️ Proje Özeti

Beauty Shop projesi, kozmetik ürünlerinin tanıtıldığı ve satın alma akışının simüle edildiği statik bir web sitesidir. Projede herhangi bir gerçek backend, ödeme altyapısı veya kullanıcı üyelik sistemi bulunmamaktadır. Bunun yerine ürün verileri `products.json` dosyasında tutulur ve JavaScript ile sayfalara dinamik olarak aktarılır.

Kullanıcı site üzerinde ürünleri inceleyebilir, kategorilere göre ürün listelerini görüntüleyebilir, ürün detay sayfasına gidebilir, istediği ürünü sepete ekleyebilir, sepet panelinden ürün adedini değiştirebilir, sepet sayfasına geçebilir ve ödeme ekranında sipariş özetini görüntüleyebilir.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
| --- | --- |
| HTML5 | Sayfa iskeletlerinin oluşturulması |
| CSS3 | Tasarım, grid/flex yerleşim, animasyon ve responsive yapı |
| JavaScript | Dinamik ürün listeleme, sepet işlemleri, yönlendirmeler ve etkileşimler |
| JSON | Ürün verilerinin saklanması |
| LocalStorage | Sepet verilerinin tarayıcıda tutulması |
| Font Awesome | İkon kullanımı |
| Google Fonts | Tipografi |
| Bootstrap CDN | Temel yardımcı stiller ve responsive altyapı desteği |

---

## 📁 Proje Klasör Yapısı

```text
beauty-shop/
│
├── assets/
│   └── images/
│       ├── banners/
│       │   ├── about.avif
│       │   ├── collection_eye.avif
│       │   ├── collection_face.avif
│       │   ├── collection_lips.avif
│       │   ├── discount_image.avif
│       │   ├── insta1.jpg
│       │   ├── insta2.jpg
│       │   ├── insta3.jpg
│       │   ├── insta4.jpg
│       │   ├── insta5.jpg
│       │   └── promo_lipstick.avif
│       │
│       ├── hero/
│       │   ├── all_products_page.avif
│       │   ├── bestseller_page.avif
│       │   ├── eye_page.avif
│       │   ├── face_page.avif
│       │   ├── header.avif
│       │   ├── lips_page.avif
│       │   └── new_page.avif
│       │
│       ├── icons/
│       │   ├── facebook.png
│       │   ├── instagram.png
│       │   ├── twitter.png
│       │   └── youtube.png
│       │
│       └── products/
│           └── Ürün görselleri
│
├── css/
│   ├── responsive.css
│   ├── style.css
│   └── variables.css
│
├── data/
│   └── products.json
│
├── js/
│   ├── app.js
│   └── storage.js
│
├── pages/
│   ├── all_products.html
│   ├── bestseller.html
│   ├── cart.html
│   ├── checkout.html
│   ├── eye.html
│   ├── face.html
│   ├── lips.html
│   ├── new.html
│   └── product.html
│
├── index.html
└── README.md
```

---

## 📄 Sayfalar

### `index.html`

Projenin ana sayfasıdır. Kullanıcı ilk olarak bu sayfada marka tanıtımı, kampanya alanı, ürün vitrinleri, kategori yönlendirmeleri ve footer alanı ile karşılaşır. Ana sayfada bulunan bölümler:

- Header ve üst duyuru barı
- Navbar
- Hero section
- En çok satan ürünler
- Promo / kampanya bölümü
- Popüler ürünler
- Kategori keşif alanı
- İndirim bölümü
- Hakkımızda alanı
- Instagram görsel alanı
- E-posta kayıt bölümü
- Footer
- Chat widget
- Sağdan açılan mini sepet paneli

---

### `all_products.html`

Tüm ürünlerin listelendiği sayfadır. Ürünler `products.json` dosyasından alınır ve JavaScript ile sayfaya basılır. Bu sayfada:

- Tüm ürünler grid yapısında listelenir.
- Kategori filtresi kullanılabilir.
- Fiyat aralığı filtreleme alanı bulunur.
- Daha fazla ürün gösterme mantığı uygulanır.

---

### `new.html`

Yeni ürünlerin listelendiği sayfadır. JSON verisinde `isNew: true` olan ürünler bu sayfada gösterilir.

---

### `bestseller.html`

En çok satan ürünlerin listelendiği sayfadır. JSON verisinde `isBestSeller: true` olan ürünler bu sayfada gösterilir.

---

### `face.html`

Yüz kategorisindeki ürünlerin listelendiği sayfadır. JSON verisinde `category: "face"` olan ürünler bu sayfada gösterilir.

---

### `lips.html`

Dudak kategorisindeki ürünlerin listelendiği sayfadır. JSON verisinde `category: "lips"` olan ürünler bu sayfada gösterilir.

---

### `eye.html`

Göz kategorisindeki ürünlerin listelendiği sayfadır. JSON verisinde `category: "eye"` olan ürünler bu sayfada gösterilir.

---

### `product.html`

Ürün detay sayfasıdır. Kullanıcı herhangi bir ürün kartına tıkladığında ürünün id bilgisi URL parametresi olarak bu sayfaya gönderilir. Örnek URL:

```text
pages/product.html?id=2
```

Sayfa açıldığında JavaScript bu id değerini okur, ilgili ürünü `products.json` dosyasında bulur ve ürün detaylarını dinamik olarak sayfaya yerleştirir. Bu sayfada:

- Ürün görseli
- Ürün adı
- Stok kodu
- Fiyat
- Ürün açıklaması
- Ürün bilgisi
- İade politikası
- Gönderim bilgisi
- Adet seçici
- Sepete ekle butonu
- Hemen satın al butonu
- Sağdan açılan sepet paneli bulunur.

---

### `cart.html`

Alışveriş sepeti sayfasıdır. Sağdan açılan mini sepet panelindeki **Sepeti Görüntüle** butonuna tıklanınca kullanıcı bu sayfaya yönlendirilir. Bu sayfada:

- Sepetteki ürünler listelenir.
- Ürün adedi artırılıp azaltılabilir.
- Ürün sepetten silinebilir.
- Ara toplam ve toplam fiyat hesaplanır.
- Promosyon kodu ve not alanı görsel olarak bulunur.
- Ödemeye geç butonu ile ödeme sayfasına yönlendirme yapılır.

---

### `checkout.html`

Ödeme sayfasıdır. Sepet panelindeki **Ödeme** butonu veya sepet sayfasındaki **Ödemeye Geç** butonu ile bu sayfaya gidilir. Bu sayfada:

- Sade ödeme başlığı bulunur.
- Kullanıcıya ödeme ile ilgili bilgilendirme mesajı gösterilir.
- Sipariş özeti sağ tarafta listelenir.
- Sepetteki ürünler küçük görsellerle gösterilir.
- Ürün adetleri, stok kodları ve ürün toplamları görüntülenir.
- Ara toplam, kargo ve toplam bilgileri hesaplanır.
- Güvenli ödeme alanı gösterilir.

---

## 🏠 Ana Sayfa Yapısı

Ana sayfa, kozmetik mağazası hissini güçlendirmek için görsel ağırlıklı bölümlerden oluşur.

### Header ve Üst Bar

Sayfanın en üst kısmında arama alanı, indirim duyurusu ve sosyal medya ikonları bulunur. Header alanı sabit konumlandırılmıştır ve scroll hareketine göre gizlenip tekrar gösterilir.

### Navbar

Navbar içinde marka adı ve kategori bağlantıları bulunur. Navbar bağlantıları:

- Tüm Ürünler
- Yeni
- En Çok Satanlar
- Yüz
- Dudak
- Göz

Sağ tarafta giriş ikonu ve sepet ikonu yer alır. Sepet ikonuna tıklandığında sağdan açılan mini sepet paneli görüntülenir.

### Hero Section

Ana sayfanın ilk büyük görsel alanıdır. Yeni ürün tanıtımı yapılır ve kullanıcı ürünleri incelemeye yönlendirilir.

### En Çok Satanlar Bölümü

JSON verisinden `isBestSeller` değeri `true` olan ürünler alınır ve kart yapısı ile gösterilir.

### Promo Bölümü

Siyah arka planlı, görsel ve metin içeren kampanya / tanıtım bölümüdür.

### Popüler Ürünler

JSON verisinde `isPopular: true` olan ürünler listelenir.

### Kategori Keşif Bölümü

Yüz, dudak ve göz kategorilerine yönlendirme sağlayan görsel kartlardan oluşur.

### İndirim Bölümü

Kampanya mesajı içeren sabit arka plan görselli bölümdür.

### Hakkımızda Bölümü

Markanın tarzını ve mağaza kimliğini tanıtan metinsel bölümdür.

### Instagram Alanı

Sosyal medya hissi vermek için kullanılan görsel grid alanıdır. Hover durumunda görseller üzerinde overlay görünür.

### E-posta Kayıt Bölümü

Kullanıcıların özel fırsatlar için e-posta adresi bırakabileceği tasarımsal form alanıdır.

### Footer

Footer bölümünde alışveriş bağlantıları, mağaza bilgileri, politika bağlantıları, müşteri hizmetleri bilgileri ve sosyal medya ikonları bulunur.

---

## 🧠 Ürün Listeleme Mantığı

Projede ürün kartları statik olarak HTML içine tek tek yazılmamıştır. Bunun yerine ürünler `data/products.json` dosyasında tutulur ve JavaScript ile ilgili sayfalara dinamik olarak basılır. Bu yaklaşım sayesinde:

- Ürün eklemek kolaylaşır.
- Aynı veri farklı sayfalarda tekrar kullanılabilir.
- Kategori sayfaları otomatik oluşturulabilir.
- Ürün detay sayfası tek bir HTML dosyası üzerinden çalışabilir.
- Sepet ve ödeme ekranlarında aynı ürün verisi kullanılabilir.

Örneğin bir ürün kartına tıklandığında kullanıcı şu şekilde detay sayfasına yönlendirilir:

```text
product.html?id=ürünId
```

Daha sonra ürün detay sayfası bu `id` değerini kullanarak doğru ürünü bulur.

---

## 📦 Ürün Detay Sayfası

Ürün detay sayfası tek bir HTML dosyası üzerinden tüm ürünler için çalışır. Sayfa, URL üzerinden gelen `id` parametresine göre ürün bilgilerini doldurur. Ürün detay sayfasındaki temel akış:

1. URL parametresi okunur.
2. `products.json` dosyasındaki ürünler çekilir.
3. URL'deki id ile eşleşen ürün bulunur.
4. Ürün adı, fiyatı, stok kodu, görseli ve açıklaması sayfaya yazdırılır.
5. Kullanıcı adet seçer.
6. Sepete ekle butonuna basınca ürün localStorage üzerindeki sepete eklenir.
7. Sağdan mini sepet paneli açılır.

---

## 🛒 Sepet Sistemi

Projede sepet işlemleri `localStorage` ile yönetilir. Bu sayede kullanıcı sayfa değiştirince sepet verileri kaybolmaz. Sepet işlemleri `js/storage.js` dosyasında tanımlanmıştır. Temel fonksiyonlar:

| Fonksiyon | Görevi |
| --- | --- |
| `getCart()` | LocalStorage içindeki sepet verisini okur |
| `saveCart(cart)` | Sepeti localStorage içine kaydeder |
| `addToCart(id, quantity)` | Sepete ürün ekler veya mevcut ürünün adedini artırır |
| `removeFromCart(id)` | Ürünü sepetten kaldırır |
| `updateQuantity(id, quantity)` | Ürün adedini günceller |

Sepet verisi localStorage içinde şu mantıkla tutulur:

```json
[
  {
    "id": 2,
    "quantity": 3
  }
]
```

Burada `id`, ürünün JSON dosyasındaki id değerini; `quantity` ise sepette kaç adet olduğunu ifade eder.

---

## 🧺 Mini Sepet Paneli

Mini sepet paneli, kullanıcı sepet ikonuna veya ürün detay sayfasındaki sepete ekle butonuna bastığında sağ taraftan açılır. Mini sepet panelinde:

- Sepetteki ürün görseli
- Ürün adı
- Ürün fiyatı
- Adet artırma / azaltma butonları
- Ürün silme ikonu
- Promosyon kodu alanı
- Tahmini toplam fiyat
- Ödeme butonu
- Sepeti görüntüle butonu bulunur.

Mini sepet panelindeki yönlendirmeler:

| Buton | Yönlendirme |
| --- | --- |
| Ödeme | `checkout.html` |
| Sepeti Görüntüle | `cart.html` |

---

## 🧾 Alışveriş Sepeti Sayfası

`cart.html`, mini sepet panelinin daha geniş ve düzenli sayfa versiyonudur. Kullanıcı burada sepetindeki tüm ürünleri daha detaylı olarak görür. Bu sayfada ürünler sol tarafta listelenir, sağ tarafta ise sipariş özeti bulunur. Sepet sayfasında yapılan işlemler:

- Ürün adedi azaltma
- Ürün adedi artırma
- Ürün silme
- Ara toplam hesaplama
- Toplam fiyat hesaplama
- Ödemeye geçiş

Adet artırılıp azaltıldığında localStorage güncellenir ve sepet sayfası yeniden render edilir.

---

## 💳 Ödeme Sayfası

`checkout.html`, ödeme adımını temsil eden sade bir sayfadır. Bu projede gerçek ödeme entegrasyonu yapılmamıştır. Bunun yerine Wix referansındaki yapıya benzer şekilde kullanıcıya ödeme yapılamadığına dair bilgilendirme mesajı gösterilir. Ödeme sayfasında sipariş özeti dinamik olarak localStorage içindeki sepet verisinden oluşturulur. Gösterilen bilgiler:

- Ürün adı
- Ürün görseli
- Ürün adedi
- Stok kodu
- Ürün satır toplamı
- Ara toplam
- Kargo bilgisi
- Genel toplam
- Güvenli ödeme bilgisi

---

## 🧾 JSON Ürün Veri Yapısı

Ürünler `data/products.json` dosyasında dizi yapısında tutulur. Örnek ürün yapısı:

```json
{
  "id": 2,
  "name": "Mat Gül Kurusu Ruj",
  "price": "₺150,00",
  "image": "../assets/images/products/lipstick.png",
  "hoverImage": "../assets/images/products/lipstick_hover.png",
  "category": "lips",
  "isBestSeller": true,
  "isPopular": false,
  "isNew": false,
  "description": "Ürün açıklaması",
  "productInfo": "Ürün bilgisi"
}
```

Alanların görevleri:

| Alan | Açıklama |
| --- | --- |
| `id` | Ürünün benzersiz kimlik numarası |
| `name` | Ürün adı |
| `price` | Ürün fiyatı |
| `image` | Ürün ana görseli |
| `hoverImage` | Hover sırasında gösterilecek ürün görseli |
| `category` | Ürün kategorisi |
| `isBestSeller` | Ürünün çok satan olup olmadığını belirtir |
| `isPopular` | Ürünün popüler ürün olup olmadığını belirtir |
| `isNew` | Ürünün yeni ürün olup olmadığını belirtir |
| `description` | Ürün detay sayfasındaki açıklama |
| `productInfo` | Accordion içinde gösterilen ürün bilgisi |

---

## ⚙️ JavaScript Dosyalarının Görevleri

### `app.js`

Projenin ana JavaScript dosyasıdır. Sayfa üzerindeki dinamik işlemlerin büyük bölümü bu dosyada yönetilir. Başlıca görevleri:

- Header'ın scroll ile gizlenip gösterilmesi
- JSON ürün verilerinin çekilmesi
- Ana sayfa ürün kartlarının oluşturulması
- Popüler ve çok satan ürünlerin filtrelenmesi
- Kategori sayfalarının doldurulması
- Tüm ürünler sayfasında kategori ve fiyat filtreleme işlemleri
- Ürün kartına tıklanınca detay sayfasına yönlendirme
- Ürün detay sayfasını URL parametresine göre doldurma
- Ürün bilgisi, iade politikası ve gönderim bilgisi accordion yapısı
- Adet artırma / azaltma işlemleri
- Mini sepet panelinin açılıp kapanması
- Sepet ürünlerinin render edilmesi
- Cart sayfasının render edilmesi
- Checkout sayfasının render edilmesi
- Chat widget açma / kapama işlemi
- Footer animasyonu
- Filtre grup başlıklarının açılıp kapanması

---

### `storage.js`

Sepet verisinin localStorage üzerinde saklanmasını sağlayan dosyadır. Bu dosya sayesinde sepet bilgileri sayfalar arasında korunur. Kullanıcı ürün detay sayfasından sepete ürün ekledikten sonra sepet sayfasına veya ödeme sayfasına geçtiğinde aynı ürünler görüntülenmeye devam eder.

---

## 🎨 CSS ve Tasarım Yapısı

Projede CSS yapısı üç ana dosyaya ayrılmıştır:

| Dosya | Görev |
| --- | --- |
| `variables.css` | Renk ve genel değişken tanımları |
| `style.css` | Ana tasarım, sayfa yerleşimleri, ürün kartları, sepet ve checkout stilleri |
| `responsive.css` | Mobil ve tablet ekranlara uyum sağlayan medya sorguları |

### `variables.css`

Bu dosyada projede tekrar kullanılan renk değerleri değişken olarak tanımlanır. Böylece tasarımda renk değişikliği gerektiğinde tek bir noktadan düzenleme yapılabilir. Örnek kullanım:

```css
background-color: var(--color-navbar);
color: var(--color-white);
```

### `style.css`

Projedeki ana stiller burada yer alır. Header, navbar, hero section, ürün kartları, kategori sayfaları, ürün detay sayfası, sepet paneli, cart sayfası, checkout sayfası, footer ve chat widget bu dosyada stillendirilmiştir.

### `responsive.css`

Farklı ekran boyutlarında grid yapılarının tek sütuna düşmesi, menü ve ürün kartlarının daha küçük ekranlara uyum sağlaması gibi düzenlemeler bu dosyada yapılır.

---

## 📱 Responsive Tasarım

Proje masaüstü görünüm ağırlıklı hazırlanmış olsa da responsive CSS dosyası ile tablet ve mobil ekranlara uyum sağlamak için gerekli düzenlemeler yapılmıştır. Responsive yapı kapsamında:

- Ürün grid sayıları ekran boyutuna göre azaltılır.
- Cart sayfası küçük ekranlarda tek sütuna düşer.
- Checkout sayfası küçük ekranlarda alt alta görünür.
- Görsel alanlar taşma yapmayacak şekilde düzenlenir.
- Form ve buton genişlikleri mobil ekrana uygun hale getirilir.

---

## 💬 Chat Widget

Projede sağ alt köşede sabit duran bir sohbet butonu bulunur. Kullanıcı bu butona tıkladığında chat kutusu açılır. Kapatma ikonuna basıldığında tekrar kapanır. Bu yapı gerçek bir mesajlaşma altyapısına bağlı değildir. Arayüz ve kullanıcı etkileşimi amacıyla hazırlanmıştır.

---

## 🧭 Scroll Etkileşimi

Header alanı scroll hareketine göre gizlenip tekrar görünür. Kullanıcı aşağı kaydırdığında header gizlenir, yukarı kaydırdığında tekrar görünür. Bu işlem JavaScript ile `window.scrollY` değeri takip edilerek yapılır.

---

## 🧮 Fiyat Hesaplama Mantığı

Ürün fiyatları JSON dosyasında metin olarak tutulur:

```text
₺150,00
```

Toplam hesaplama yapılabilmesi için bu değer JavaScript içinde sayıya çevrilir. Bunun için `priceToNumber()` fonksiyonu kullanılır. Bu fonksiyon fiyat metnindeki para birimi ve noktalama karakterlerini temizleyerek fiyatı sayısal değere dönüştürür. Böylece ürün adedi ile çarpılarak satır toplamı ve genel toplam hesaplanabilir.

---

## 🚀 Proje Nasıl Çalıştırılır?

Bu proje statik bir HTML, CSS ve JavaScript projesidir. Kurulum için Node.js, npm veya backend sunucusu gerekmez.

### 1. Projeyi indirin veya klonlayın

```bash
git clone <repo-linki>
```

veya GitHub üzerinden ZIP olarak indirip klasöre çıkarın.

### 2. Proje klasörüne girin

```bash
cd beauty-shop
```

### 3. Projeyi çalıştırın

Projeyi açmak için `index.html` dosyasını tarayıcıda çalıştırabilirsiniz. Ancak JSON dosyası `fetch()` ile okunduğu için bazı tarayıcılarda doğrudan dosya açma yöntemi sorun çıkarabilir. Bu nedenle VS Code üzerinden **Live Server** eklentisi ile çalıştırılması önerilir.

VS Code ile çalıştırma adımları:

1. Proje klasörünü VS Code ile açın.
2. Live Server eklentisini kurun.
3. `index.html` dosyasına sağ tıklayın.
4. **Open with Live Server** seçeneğine tıklayın.

---

## 🎯 Projede Öğrenilen Konular

Bu proje kapsamında aşağıdaki konular uygulamalı olarak çalışılmıştır:

- HTML sayfa yapısı oluşturma
- CSS ile modern arayüz tasarlama
- CSS Grid kullanımı
- Flexbox kullanımı
- Sabit header yapısı
- Hover efektleri
- Responsive tasarım
- JavaScript ile DOM manipülasyonu
- JSON dosyasından veri çekme
- `fetch()` kullanımı
- URL parametresi okuma
- Dinamik ürün detay sayfası oluşturma
- LocalStorage kullanımı
- Sepet sistemi geliştirme
- Ürün adet güncelleme
- Sepetten ürün silme
- Sipariş toplamı hesaplama
- Mini sepet paneli oluşturma
- Ayrı cart ve checkout sayfaları oluşturma
- Sayfalar arası yönlendirme
- Basit chat widget tasarımı
- Footer animasyonu

---

## 🧪 Proje Akışı

Kullanıcının site içinde izleyebileceği temel akış şu şekildedir:

```text
Ana Sayfa
   ↓
Kategori veya Ürün Kartı
   ↓
Ürün Detay Sayfası
   ↓
Sepete Ekle
   ↓
Mini Sepet Paneli
   ↓
Sepeti Görüntüle
   ↓
Alışveriş Sepeti Sayfası
   ↓
Ödemeye Geç
   ↓
Checkout Sayfası
```

Bu akış, temel bir e-ticaret sitesinde bulunan ürün inceleme ve satın alma sürecini simüle eder.

---

## 📌 Geliştirilebilecek Özellikler

Proje statik bir arayüz olarak geliştirilmiştir. İlerleyen aşamalarda aşağıdaki özellikler eklenebilir:

- Gerçek kullanıcı giriş sistemi
- Backend API bağlantısı
- Veritabanı entegrasyonu
- Gerçek ödeme sistemi
- Ürün arama fonksiyonunun aktif hale getirilmesi
- Ürün favorileme sistemi
- Promosyon kodu doğrulama
- Sepette kargo ücreti hesaplama
- Sipariş oluşturma ve sipariş geçmişi
- Stok kontrol sistemi
- Admin paneli
- Ürün ekleme / güncelleme / silme işlemleri
- Mobil hamburger menü
- Ürün sıralama seçenekleri
- Daha gelişmiş filtreleme sistemi
- Form validasyonları

---

## 👩‍💻 Geliştirici

Bu proje, web geliştirme pratiği yapmak ve modern bir e-ticaret arayüzünü HTML, CSS ve JavaScript ile oluşturmak amacıyla geliştirilmiştir.

**Geliştirici:** Özge Keskin

---

## 📝 Not

Bu proje eğitim ve portfolyo amacıyla hazırlanmıştır. Gerçek ödeme işlemi, gerçek kullanıcı üyeliği veya canlı sipariş yönetimi içermez. Ürünler ve marka bilgileri proje senaryosu kapsamında kurgusal olarak kullanılmıştır.
