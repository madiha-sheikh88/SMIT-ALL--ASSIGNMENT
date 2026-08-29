
// Cart items are stored as an array of objects
let cart = [];
 

function getProducts() {
  const cards = document.querySelectorAll(".card");
  const products = [];
 
  cards.forEach((card, index) => {
    const titleEl = card.querySelector(".card-title");
    const priceEl = card.querySelector(".card-body p span:first-child");
    const imgEl = card.querySelector(".card-img-top");
    const cartIconEl = card.querySelector(".card-body p span:last-child svg");
 
    if (!titleEl || !priceEl || !imgEl) return;
 
    const name = titleEl.textContent.trim();
    // "Rs. 5000" -> 5000
    const price = parseInt(priceEl.textContent.replace(/[^\d]/g, ""), 10);
    const image = imgEl.getAttribute("src");
    const id = `product-${index}`; // simple unique id based on position
 
    products.push({ id, name, price, image });
 
    // Clicking the little cart icon inside the card adds that product
    if (cartIconEl) {
      cartIconEl.style.cursor = "pointer";
      cartIconEl.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart({ id, name, price, image });
      });
    }
  });
 
  return products;
}
 
// ---------- 3. CART LOGIC ----------
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
 
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
 
  saveCart();
  renderCart();
  openCart(); // show the panel so the user sees what happened
}
 
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}
 
function changeQty(id, delta) {
  const item = cart.find((item) => item.id === id);
  if (!item) return;
 
  item.qty += delta;
 
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    renderCart();
  }
}
 
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
 
// ---------- 4. RENDER CART UI ----------
function renderCart() {
  const container = document.getElementById("cart-items-container");
  const totalEl = document.getElementById("cart-total");
  const countEl = document.querySelector(".cart-item-count");
 
  // Empty state
  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">Your cart is empty.</p>`;
    totalEl.textContent = "Rs. 0";
    countEl.textContent = "0";
    return;
  }
 
  // Build each line item
  container.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-line-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h6>${item.name}</h6>
          <p>Rs. ${item.price.toLocaleString()}</p>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">&times;</button>
      </div>
    `
    )
    .join("");
 
  // Totals + badge count
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
 
  totalEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;
  countEl.textContent = totalQty;
}
 
// ---------- 5. CART PANEL OPEN/CLOSE ----------
// toggleCart() is already called from the HTML via onclick,
// so we keep that exact function name.
function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("active");
  document.getElementById("cart-overlay").classList.toggle("active");
}
 
function openCart() {
  document.getElementById("cart-panel").classList.add("active");
  document.getElementById("cart-overlay").classList.add("active");
}
 
// ---------- 6. NAVBAR SCROLL EFFECT (uses existing .scrolled CSS) ----------
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
 
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
 
// ---------- 7. INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  renderCart();
  initNavbarScroll();
});
 