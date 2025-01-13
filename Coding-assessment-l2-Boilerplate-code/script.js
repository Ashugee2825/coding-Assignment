const cartItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    quantity: 1,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
];

// Render the cart items
function renderCart() {
  const cartTable = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  let subtotal = 0;

  cartTable.innerHTML = "";
  cartItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${item.image}" alt="${item.name}" style="width: 50px;"> 
        ${item.name}
      </td>
      <td>Rs. ${item.price.toFixed(2)}</td>
      <td>
        <input type="number" value="${item.quantity}" min="1" 
        onchange="updateQuantity(${item.id}, this.value)">
      </td>
      <td>Rs. ${(item.price * item.quantity).toFixed(2)}</td>
    `;

    cartTable.appendChild(row);
    subtotal += item.price * item.quantity;
  });

  subtotalEl.textContent = `Rs. ${subtotal.toFixed(2)}`;
  totalEl.textContent = `Rs. ${subtotal.toFixed(2)}`;
}

// Update quantity of a product
function updateQuantity(id, quantity) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity = parseInt(quantity);
    renderCart();
  }
}

// Initialize cart rendering
renderCart();
