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
    });
}

fetch(jsonPath)
    .then(response => response.json())
    .then(products => {
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
        
})
.catch(err => {
    alert("Ürün yüklenirken hata oluştu",err);
}); 

// chat section 
const chatBtn = document.getElementById('chatBtn');
const chatBox = document.getElementById('chatBox');
const chatClose = document.getElementById('chatClose');

chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatBox.classList.remove('active');
});

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