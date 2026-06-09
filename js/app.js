// Scroll'u kaydırınca navbar ile header section gizlenecek
let siteHeader = document.querySelector(".site-header");
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY){
        siteHeader.classList.add('hidden');
    } else {
        siteHeader.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
})

const isSubPage = window.location.pathname.includes('/pages/');
const jsonPath = isSubPage ? '../data/products.json' : 'data/products.json';

let bestsellersCard = document.querySelector(".bestsellers-card-container");
let popularCard = document.querySelector(".popular-card-container");
let newsPageCard = document.querySelector(".new-page-product");
let bestsellerPageCard = document.querySelector(".bestseller-page-product");
let facePageCard = document.querySelector(".face-page-product");
let lipsPageCard = document.querySelector(".lips-page-product");
let eyePageCard = document.querySelector(".eye-page-product");

function priceToNumber(priceStr) {
    return parseInt(priceStr.split(',')[0].replace(/[^\d]/g, ''));
}

function renderBestsellers(bestsellersProducts, container) {
    bestsellersProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("bestsellers-card");
        card.innerHTML = `
            <div class="bestsellers-card-image">
                <img src="${product.image}" alt="${product.name}" class="bestsellers-card-image-img">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        container.appendChild(card);

        const img = card.querySelector(".bestsellers-card-image-img");
        card.addEventListener("mouseenter", () => { img.src = product.hoverImage; });
        card.addEventListener("mouseleave", () => { img.src = product.image; });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function renderPopular(popularCardProducts){
    popularCardProducts.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("popular-card");
            card.innerHTML = `
            <div class="popular-card-image">
                <img src="${product.image}" alt="${product.name}" class="popular-card-image-img">
            </div>

            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        popularCard.appendChild(card);

        // image hover olunca görselin değişimi için
        const img = card.querySelector(".popular-card-image-img");

        card.addEventListener("mouseenter" , () => {
            img.src = product.hoverImage; 
        });

        card.addEventListener("mouseleave", () => {
            img.src = product.image;
        });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function renderNews(newsPageProducts){
    newsPageProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
            <div class="news-card-image">
                <img src="${product.image}" alt="${product.name}" class="news-card-image-img">
            </div>

            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        newsPageCard.appendChild(card);

        // image hover olunca görselin değişimi için
        const img = card.querySelector(".news-card-image-img");

        card.addEventListener("mouseenter" , () => {
            img.src = product.hoverImage; 
        });

        card.addEventListener("mouseleave", () => {
            img.src = product.image;
        });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function renderFace(facePageProducts) {
    facePageProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("face-card");
        card.innerHTML = `
            <div class="face-card-image">
                <img src="${product.image}" alt="${product.name}" class="face-card-image-img">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        facePageCard.appendChild(card);

        // image hover olunca görselin değişimi için
        const img = card.querySelector(".popular-card-image-img");

        card.addEventListener("mouseenter" , () => {
            img.src = product.hoverImage; 
        });

        card.addEventListener("mouseleave", () => {
            img.src = product.image;
        });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function rendersLips(lipsPageProducts) {
    lipsPageProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("lips-card");
        card.innerHTML = `
            <div class="lips-card-image">
                <img src="${product.image}" alt="${product.name}" class="lips-card-image-img">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        lipsPageCard.appendChild(card);

        // image hover olunca görselin değişimi için
        const img = card.querySelector(".popular-card-image-img");

        card.addEventListener("mouseenter" , () => {
            img.src = product.hoverImage; 
        });

        card.addEventListener("mouseleave", () => {
            img.src = product.image;
        });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function renderEye(eyePageProducts) {
    eyePageProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("eye-card");
        card.innerHTML = `
            <div class="eye-card-image">
                <img src="${product.image}" alt="${product.name}" class="eye-card-image-img">
            </div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        eyePageCard.appendChild(card);

        // image hover olunca görselin değişimi için
        const img = card.querySelector(".popular-card-image-img");

        card.addEventListener("mouseenter" , () => {
            img.src = product.hoverImage; 
        });

        card.addEventListener("mouseleave", () => {
            img.src = product.image;
        });

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

function renderAllProduct(products, container) {
    let counter = 20;

    function showProducts() {
        container.innerHTML = '';
        products.slice(0,counter).forEach(product => {
            const card = document.createElement("div");
            card.classList.add('all-product-card');
            card.innerHTML = `
                <div class="all-product-card-image">
                    <img src="${product.image}" alt="${product.name}" class="all-product-card-image-img">
                </div>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            container.appendChild(card); 

            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`;
            });
        });

        if(loadMoreBtn && counter >= products.length){
            loadMoreBtn.style.display = 'none';
        }
    }   

    const loadMoreBtn = document.querySelector(".load-more-button");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            counter += 20;
            showProducts();
        });
    }

    showProducts();  // ilk yüklemede ürünle gelsin diye
}


fetch(jsonPath)
    .then(response => response.json())
    .then(products => {
        
        // sepet çizme
        const cartItems = document.querySelector('#cartItems');
        const cartTotal = document.querySelector('#cartTotal');
        const cartCount = document.querySelector('#cartCount');

        function priceToNumber(priceStr) {
            return parseInt(priceStr.split(',')[0].replace(/[^\d]/g, ''));
        }

        function renderCart() {
            if (!cartItems) return;

            const cart = getCart();
            cartItems.innerHTML = '';
            let total = 0;
            let count = 0;

            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return;

                const lineTotal = priceToNumber(product.price) * item.quantity;
                total += lineTotal;
                count += item.quantity;

                const row = document.createElement('div');
                row.classList.add('cart-item');
                row.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <p class="cart-item-name">${product.name}</p>
                        <p class="cart-item-price">${product.price}</p>
                        <div class="cart-item-qty">
                            <button class="cart-qty-minus">−</button>
                            <span>${item.quantity}</span>
                            <button class="cart-qty-plus">+</button>
                        </div>
                    </div>
                    <i class="fa-solid fa-trash cart-item-remove"></i>
                `;
                cartItems.appendChild(row);

                // adet azalt
                row.querySelector('.cart-qty-minus').addEventListener('click', () => {
                    updateQuantity(item.id, item.quantity - 1);
                    renderCart();
                });
                // adet artır
                row.querySelector('.cart-qty-plus').addEventListener('click', () => {
                    updateQuantity(item.id, item.quantity + 1);
                    renderCart();
                });
                // sil
                row.querySelector('.cart-item-remove').addEventListener('click', () => {
                    removeFromCart(item.id);
                    renderCart();
                });
            });

            if (cartTotal) cartTotal.innerText = '₺' + total + ',00';
            if (cartCount) cartCount.innerText = '(' + count + ' öğe)';
        }

        renderCart(); // sayfa açılınca mevcut sepeti göster

        if (bestsellersCard) {
            const bestsellersProducts = products.filter(product => product.isBestSeller === true);
            renderBestsellers(bestsellersProducts,bestsellersCard);
        }

        if (popularCard) {
            const popularCardProducts = products.filter(product => product.isPopular === true);
            renderPopular(popularCardProducts);
        }

        if (newsPageCard) {
            const newsPageProducts = products.filter(product => product.isNew === true);
            renderNews(newsPageProducts);
        }

        if (bestsellerPageCard) {
            const bestsellersProducts = products.filter(p => p.isBestSeller === true);
            renderBestsellers(bestsellersProducts, bestsellerPageCard);
        }

        if(facePageCard){
            const facePageProducts = products.filter(product => product.category === 'face');
            renderFace(facePageProducts);
        }

        if(lipsPageCard){
            const lipsPageProducts = products.filter(product => product.category === 'lips');
            rendersLips(lipsPageProducts);
        }

        if(eyePageCard){
            const eyePageProducts = products.filter(product => product.category === 'eye');
            renderEye(eyePageProducts);
        }

        if (document.querySelector(".all-products-grid")) {
            const container = document.querySelector(".all-products-grid");
            renderAllProduct(products, container); 

            const filterItems = document.querySelectorAll('.filter-item');

            let activeCategory = 'item-all';

            // hem kategori hem fiyat filtresini birlikte uygula
            function applyFilters() {
                let filtered = products;

                if (activeCategory === 'item-eye')
                    filtered = filtered.filter(p => p.category === 'eye');
                else if (activeCategory === 'item-face')
                    filtered = filtered.filter(p => p.category === 'face');
                else if (activeCategory === 'item-lips')
                    filtered = filtered.filter(p => p.category === 'lips');
                else if (activeCategory === 'item-bestseller')
                    filtered = filtered.filter(p => p.isBestSeller === true);

                if (priceMin && priceMax) {
                    const lo = parseInt(priceMin.value);
                    const hi = parseInt(priceMax.value);
                    filtered = filtered.filter(p => {
                        const price = priceToNumber(p.price);
                        return price >= lo && price <= hi;
                    });
                }

                renderAllProduct(filtered, container);
            }

            // kategori tıklama
            filterItems.forEach(item => {
                item.addEventListener('click', () => {
                    filterItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');

                    if (item.classList.contains('item-all')) activeCategory = 'item-all';
                    else if (item.classList.contains('item-eye')) activeCategory = 'item-eye';
                    else if (item.classList.contains('item-face')) activeCategory = 'item-face';
                    else if (item.classList.contains('item-lips')) activeCategory = 'item-lips';
                    else if (item.classList.contains('item-bestseller')) activeCategory = 'item-bestseller';

                    applyFilters();
                });
            });

            // fiyat slider
            const priceMin = document.getElementById('priceMin');
            const priceMax = document.getElementById('priceMax');
            const trackFill = document.getElementById('priceTrackFill');
            const minVal = document.getElementById('priceMinVal');
            const maxVal = document.getElementById('priceMaxVal');

            if (priceMin && priceMax) {
                const MIN = 150, MAX = 300, GAP = 10;

                function updateSlider(e) {
                    let lo = parseInt(priceMin.value);
                    let hi = parseInt(priceMax.value);

                    if (hi - lo < GAP) {
                        if (e && e.target === priceMin) 
                            lo = hi - GAP;
                        else 
                            hi = lo + GAP;
                        priceMin.value = lo;
                        priceMax.value = hi;
                    }

                    // tutamaçlar üst yarıyı geçince sol input'u üste al
                    if (lo > (MIN + MAX) / 2) {
                        priceMin.style.zIndex = 5;
                    } else {
                        priceMin.style.zIndex = 3;
                    }

                    const pctLo = ((lo - MIN) / (MAX - MIN)) * 100;
                    const pctHi = ((hi - MIN) / (MAX - MIN)) * 100;
                    trackFill.style.left = pctLo + '%';
                    trackFill.style.width = (pctHi - pctLo) + '%';
                    minVal.textContent = '₺' + lo;
                    maxVal.textContent = '₺' + hi;

                    applyFilters();
                }

                priceMin.addEventListener('input', updateSlider);
                priceMax.addEventListener('input', updateSlider);
                updateSlider();
            }
        }  
        
        // product page
        if (document.querySelector(".product-container")) {
            const params = new URLSearchParams(window.location.search);
            const id = parseInt(params.get('id'));
 
            const breadcrumbName = document.querySelector('#breadcrumb-name');
            const productImage = document.querySelector('#product-image');
            const productH1 = document.querySelector('#product-h1');
            const productStockCode = document.querySelector('#product-stock-code');
            const productPrice = document.querySelector('#product-price');
            const productDescription = document.querySelector('#product-description');
            const infoProduct = document.querySelector('#info-product');
 
            const product = products.find(p => p.id === id);
 
            if (product) {
                breadcrumbName.innerText = product.name;
                productImage.src = product.image;
                productImage.alt = product.name;
                productH1.innerText = product.name;
                productStockCode.innerText = "Stok kodu: 00" + product.id;
                productPrice.innerText = product.price;
                productDescription.innerText = product.description;
                infoProduct.innerText = product.productInfo;
            }

            //ürün bilgisi / iade / gönderim aç-kapa
            const productDetailsHeader = document.querySelectorAll('.product-details-header');

            productDetailsHeader.forEach(header => {
                header.addEventListener('click' , () => {
                    const content = header.nextElementSibling ;
                    const icon = header.querySelector('i');
                    content.classList.toggle('hidden');
                    icon.classList.toggle('fa-plus');
                    icon.classList.toggle('fa-minus');
                });
            });

            // adet seçici (- / +)
            const qtyInput = document.querySelector('.qty-input');
            const qtyMinus = document.querySelector('.qty-minus');
            const qtyPlus = document.querySelector('.qty-plus');

            qtyPlus.addEventListener('click' , () => {
                qtyInput.value = parseInt(qtyInput.value) + 1;
            });

            qtyMinus.addEventListener('click' , () => {
                if(parseInt(qtyInput.value) > 1){
                    qtyInput.value = parseInt(qtyInput.value) - 1;
                }
            });

            const addToBasket = document.querySelector('.add-to-basket');
            addToBasket.addEventListener('click', () => {
                addToCart(product.id, parseInt(qtyInput.value));
                renderCart();
            });
        } 
})
.catch(err => {
    alert("Ürün yüklenirken hata oluştu",err);
    console.log("HATA:", err);
}); 

// chat section 
const chatBtn = document.getElementById('chatBtn');
const chatBox = document.getElementById('chatBox');
const chatClose = document.getElementById('chatClose');

chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('active');
    chatBtn.classList.toggle('hidden');
});

chatClose.addEventListener('click', () => {
    chatBox.classList.remove('active');
    chatBtn.classList.remove('hidden');
});

// basket section
const basket = document.querySelector('.fa-bag-shopping');
const addToBasket = document.querySelector('.add-to-basket');
const buyNow = document.querySelector('.buy-now');
const cardOverlay = document.querySelector('#cartOverlay');
const cardPanel = document.querySelector('#cartPanel');
const cardClose = document.querySelector('#cartClose');

function openCart(){
    cardPanel.classList.add('open');
    cardOverlay.classList.add('open');
    chatBtn.classList.add('hidden');
}

function closeCart(){
    cardPanel.classList.remove('open');
    cardOverlay.classList.remove('open');
    chatBtn.classList.remove('hidden');
}

if(basket) basket.addEventListener('click' , openCart);
if(addToBasket) addToBasket.addEventListener('click' , openCart);
if(buyNow) buyNow.addEventListener('click' , openCart);
 
if(cardClose) cardClose.addEventListener('click' , closeCart);
if(cardOverlay) cardOverlay.addEventListener('click' , closeCart); 

const cartViewButtons = document.querySelectorAll('.cart-view');

cartViewButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = isSubPage ? 'cart.html' : 'pages/cart.html';
    });
});

const promoCode = document.querySelector('.cart-promo-code');
const promoInput = document.querySelector('.cart-promo-input');
if (promoCode && promoInput) {
    promoCode.addEventListener('click', () => {
        promoInput.classList.toggle('hidden');
    });
}

// footer animasyonu

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
    });
});
document.querySelectorAll('.footer-col').forEach(col => {
    observer.observe(col);
})

const filterGroupHeaders = document.querySelectorAll(".filter-group-header");

filterGroupHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling; // hemen altındaki ul
        const icon = header.querySelector('i');
        
        list.classList.toggle('hidden');
        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');
    });
});

const cartPageItems = document.querySelector('#cartPageItems');
const summarySubtotal = document.querySelector('#summarySubtotal');
const summaryTotal = document.querySelector('#summaryTotal');

if (cartPageItems) {
    fetch(jsonPath)
        .then(response => response.json())
        .then(products => {
            renderCartPage(products);
        });
}

function renderCartPage(products) {
    const cart = getCart();

    cartPageItems.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        cartPageItems.innerHTML = `
            <p style="padding: 30px 0; font-weight: 300;">
                Sepetiniz şu anda boş.
            </p>
        `;

        summarySubtotal.innerText = '₺0,00';
        summaryTotal.innerText = '₺0,00';
        return;
    }

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return;

        const productPrice = priceToNumber(product.price);
        const lineTotal = productPrice * item.quantity;

        total += lineTotal;

        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-page-item');

        cartRow.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-page-item-img">

            <div class="cart-page-item-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>

            <div class="cart-page-qty">
                <button class="cart-page-minus">−</button>
                <span>${item.quantity}</span>
                <button class="cart-page-plus">+</button>
            </div>

            <p class="cart-page-item-total">₺${lineTotal},00</p>

            <i class="fa-regular fa-trash-can cart-page-remove"></i>
        `;

        cartPageItems.appendChild(cartRow);

        cartRow.querySelector('.cart-page-minus').addEventListener('click', () => {
            updateQuantity(item.id, item.quantity - 1);
            renderCartPage(products);
        });

        cartRow.querySelector('.cart-page-plus').addEventListener('click', () => {
            updateQuantity(item.id, item.quantity + 1);
            renderCartPage(products);
        });

        cartRow.querySelector('.cart-page-remove').addEventListener('click', () => {
            removeFromCart(item.id);
            renderCartPage(products);
        });
    });

    summarySubtotal.innerText = '₺' + total + ',00';
    summaryTotal.innerText = '₺' + total + ',00';
}

const checkoutButtons = document.querySelectorAll('.cart-checkout, .checkout-btn');

checkoutButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = isSubPage ? 'checkout.html' : 'pages/checkout.html';
    });
});

const checkoutItems = document.querySelector('#checkoutItems');
const checkoutSubtotal = document.querySelector('#checkoutSubtotal');
const checkoutTotal = document.querySelector('#checkoutTotal');
const checkoutCount = document.querySelector('#checkoutCount');

if (checkoutItems) {
    fetch(jsonPath)
        .then(response => response.json())
        .then(products => {
            renderCheckoutPage(products);
        });
}

function renderCheckoutPage(products) {
    const cart = getCart();

    checkoutItems.innerHTML = '';

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        checkoutItems.innerHTML = `
            <p style="font-weight: 300;">Sepetiniz boş.</p>
        `;

        checkoutSubtotal.innerText = '₺0,00';
        checkoutTotal.innerText = '₺0,00';
        checkoutCount.innerText = '(0 öğe)';
        return;
    }

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return;

        const productPrice = priceToNumber(product.price);
        const lineTotal = productPrice * item.quantity;

        total += lineTotal;
        count += item.quantity;

        const row = document.createElement('div');
        row.classList.add('checkout-item');

        row.innerHTML = `
            <div class="checkout-item-img-wrap">
                <span class="checkout-item-quantity">${item.quantity}</span>
                <img src="${product.image}" alt="${product.name}" class="checkout-item-img">
            </div>

            <div class="checkout-item-info">
                <h3>${product.name}</h3>
                <p>Stok kodu: 00${product.id}</p>
            </div>

            <span class="checkout-item-price">₺${lineTotal},00</span>
        `;

        checkoutItems.appendChild(row);
    });

    checkoutSubtotal.innerText = '₺' + total + ',00';
    checkoutTotal.innerText = '₺' + total + ',00';
    checkoutCount.innerText = '(' + count + ' öğe)';
}