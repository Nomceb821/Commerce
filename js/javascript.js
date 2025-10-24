// ----------------------------------------------------------
// SHOPPING CART LOGIC (works across all pages)
// ----------------------------------------------------------

// Load existing cart or create a new one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart icon count on all pages
function updateCartCount() {
  const cartIcon = document.getElementById("cart");
  if (cartIcon) {
    const count = cart.length;
    cartIcon.innerHTML = `
      <a href="Cart.html" style="color: inherit; text-decoration: none;">
        <i class="fa fa-shopping-cart"></i>
        ${count > 0 ? `<span class="count">(${count})</span>` : ''}
      </a>
    `;
  }
}

// Add item to cart
function addToCart(name, price, image) {
  const item = { name, price, image };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Attach event listeners to “Add to Cart” buttons
const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const itemDiv = e.target.closest(".item");
    const name = itemDiv.querySelector("h4").innerText;
    const priceText = itemDiv.querySelector(".price").innerText.replace("R", "");
    const price = parseFloat(priceText);
    const image = itemDiv.querySelector("img").src;
    addToCart(name, price, image);
  });
});

// Call once when page loads
updateCartCount();
