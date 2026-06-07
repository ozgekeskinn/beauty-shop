// ================================
// Genel Yardımcı Fonksiyonlar
// ================================

// Fiyatı Türk Lirası formatına çevir
function formatPrice(price) {
  return price.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY'
  });
}

// URL'den query parametresi oku
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Elementi göster / gizle
function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

// Smooth scroll
function scrollToSection(targetId) {
  const el = document.getElementById(targetId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
