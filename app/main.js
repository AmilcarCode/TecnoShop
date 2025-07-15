// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Render products on main page
  if (document.getElementById('product-list')) {
    renderProducts(products, 'product-list');
  }
  
  // Render outlet products on outlet page
  if (document.getElementById('outlet-product-list')) {
    renderProducts(outlet_products, 'outlet-product-list', 0); // Show all outlet products
  }
  
  // If on checkout page, render checkout items
  if (document.getElementById('checkout-list')) {
    renderCheckout();
  }
  
  
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Setup contact form
  setupContactForm();
  
  // Setup smooth scroll for anchor links
  setupSmoothScroll();
  
  // Setup checkout form if on checkout page
  setupCheckoutForm();
  
  // Setup scroll animations
  // Commented out as it might cause issues in some browsers
  setupScrollAnimations();
});

// Setup smooth scrolling for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or dropdown toggle in mobile view
      if (href === '#' || (window.innerWidth <= 992 && this.parentElement.classList.contains('dropdown'))) {
        return;
      }
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Offset for header height
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mainNav = document.getElementById('main-nav');
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });
}

// Setup checkout form validation and submission
function setupCheckoutForm() {
  const checkoutForm = document.getElementById('checkout-form');
  if (!checkoutForm) return;
  
  // Credit card input formatting
  const cardInput = document.getElementById('card-number');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      let formattedValue = '';
      
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      
      e.target.value = formattedValue.slice(0, 19); // Limit to 16 digits + 3 spaces
    });
  }
  
  // Expiry date formatting (MM/YY)
  const expiryInput = document.getElementById('expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      
      e.target.value = value.slice(0, 5);
    });
  }
  
  // CVV - numbers only and max length 4
  const cvvInput = document.getElementById('cvv');
  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });
  }
  
  // Form submission
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    facturar();
  });
}