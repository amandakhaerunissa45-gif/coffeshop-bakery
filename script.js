// =============================================
//  COFFE SHOP — script.js
// =============================================

// Mobile nav toggle
const toggle    = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
toggle.addEventListener('click', () => mobileNav.classList.toggle('open'));

function closeMobile() {
  mobileNav.classList.remove('open');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => observer.observe(el));

// Toast helper
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// Buy Now button
function addToCart(name) {
  showToast('🛒 ' + name + ' added to cart!');
}

// Contact form submit
function submitForm(e) {
  e.preventDefault();
  showToast("✅ Message sent! We'll be in touch soon.");
  e.target.reset();
}

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--peach)' : '';
  });
}, { passive: true });
