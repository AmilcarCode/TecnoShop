// Initialize cart from local storage or as empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  
  // Setup cart modal functionality
  setupCartModal();
  
  // Setup checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }
  
  // Setup clear cart button
  const clearCartBtn = document.getElementById('clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }
});

// Add product to cart
function addToCart(id) {
  const product = products.find(p => p.id === id) || 
                 outlet_products.find(p => p.id === id);
  
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showAddedToCartNotification(product.name);
    renderCartItems();
  }
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
  
  // If on checkout page, also update checkout display
  if (document.getElementById('checkout-list')) {
    renderCheckout();
  }
}

// Clear all items from cart
function clearCart() {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
  
  // If on checkout page, also update checkout display
  if (document.getElementById('checkout-list')) {
    renderCheckout();
  }
}

// Update the cart count display
function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.innerText = cart.length;
  }
}

// Render cart items in the modal
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('cart-total').innerText = '0.00';
    return;
  }
  
  let total = 0;
  cartItemsContainer.innerHTML = '';
  
  cart.forEach((product, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="cart-item-details">
        <h3>${product.name}</h3>
        <div class="cart-item-price">$${product.price.toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${index})">
        <i class="fas fa-trash"></i>
      </button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
    total += product.price;
  });
  
  document.getElementById('cart-total').innerText = total.toFixed(2);
}

// Setup cart modal functionality
function setupCartModal() {
  const cartIcon = document.querySelector('.cart');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.querySelector('.close-modal');
  
  if (!cartIcon || !modal || !closeBtn) return;
  
  // Open modal when clicking cart icon
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    renderCartItems();
  });
  
  // Close modal when clicking X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Show added to cart notification
function showAddedToCartNotification(productName) {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('cart-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'cart-notification';
    document.body.appendChild(notification);
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = '#000';
    notification.style.padding = '15px';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.boxShadow = 'var(--shadow-neon)';
    notification.style.zIndex = '1000';
    notification.style.transition = 'all 0.3s ease';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
  }
  
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span><strong>${productName}</strong> added to your cart</span>
  `;
  
  // Show notification
  setTimeout(() => {
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
  }, 100);
  
  // Hide after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
  }, 3000);
}

// Render checkout page items
function renderCheckout() {
  const checkoutList = document.getElementById('checkout-list');
  const totalElement = document.getElementById('total');
  
  if (!checkoutList || !totalElement) return;
  
  if (cart.length === 0) {
    checkoutList.innerHTML = '<p>Your cart is empty. <a href="index.html">Continue shopping</a></p>';
    totalElement.innerText = '0.00';
    return;
  }
  
  checkoutList.innerHTML = '';
  let total = 0;
  
  cart.forEach((product) => {
    const el = document.createElement('div');
    el.className = 'checkout-item';
    el.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="checkout-item-details">
        <h3>${product.name}</h3>
        <div class="checkout-item-price">$${product.price.toFixed(2)}</div>
      </div>
    `;
    checkoutList.appendChild(el);
    total += product.price;
  });
  
  totalElement.innerText = total.toFixed(2);
}

// Function to handle checkout form submission and order completion
function facturar() {
  if (cart.length === 0) {
    alert('Your cart is empty. Add products before checkout.');
    window.location.href = 'index.html';
    return;
  }
  
  // For this demo, we'll just show a success message and clear the cart
  
  alert('Order completed successfully! Thank you for your purchase.');
  clearCart();
  window.location.href = 'index.html';
}