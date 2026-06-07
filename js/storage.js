// ================================
// localStorage Yardımcıları
// Sepet verisini tarayıcıda saklar
// ================================

const CART_KEY = 'beautyshop_cart';

// Sepeti getir
function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

// Sepeti kaydet
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Sepete ürün ekle
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  updateCartCount();
}

// Sepetten ürün çıkar
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
}

// Sepet ikonundaki sayıyı güncelle
function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = total;
}

// Sayfa yüklenince sayacı güncelle
document.addEventListener('DOMContentLoaded', updateCartCount);
