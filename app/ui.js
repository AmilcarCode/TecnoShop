// Render product list
function renderProducts(list, containerId, itemsToRender = 8) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  // Shuffle products for random display
  const shuffledList = [...list];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  // Determine how many products to render
  const productCount = itemsToRender === 0 ? shuffledList.length : Math.min(itemsToRender, shuffledList.length);
  const productsToRender = shuffledList.slice(0, productCount);

  // Render products
  productsToRender.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="product-image-container">
        <img src="${p.image}" alt="${p.name}" />
        ${
          p.isOutlet
            ? `<div class="outlet-badge">${p.condition || 'OUTLET'}</div>`
            : p.discount
            ? `<div class="outlet-badge discount-badge">-${p.discount}%</div>`
            : ''
        }
      </div>
      <h3>${p.name}</h3>
      <div class="product-price">$${p.price.toFixed(2)}</div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(el);
  });
}

// Search products functionality
function searchProducts() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;

  searchInput.addEventListener('input', e => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = query 
      ? products.filter(p => p.name.toLowerCase().includes(query))
      : products; // Si no hay query, usa el array completo

    // Si el campo está vacío (query = ""), muestra 10 aleatorios. 
    // Si hay búsqueda, muestra todos los resultados (0 = todos)
    renderProducts(filtered, 'product-list', query ? 0 : 10);
  });

  document.querySelectorAll('.search-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const searchTerm = this.dataset.search;
      const searchInput = document.getElementById('search');

      if (searchInput) {
      searchInput.value = searchTerm;

        // Si el enlace es "Productos" (sin término de búsqueda)
        if (!searchTerm) {
          renderProducts(products, 'product-list', 0); // Mostrar todos
        } else {
          searchInput.dispatchEvent(new Event('input')); // 🔥 Activa el filtrado
        }
    }
    });
  });
}

// Ejecutar solo si estamos en outlet.html
if (document.getElementById('outlet-product-list')) {
    renderProducts(outlet_products, 'outlet-product-list', 0);
}

const discountsBtn = document.getElementById('discounts');
if (discountsBtn) {
  discountsBtn.addEventListener('click', function(event) {
    renderProducts(discount_products, 'product-list', 0); // Mostrá todos los productos con descuento
  });
}


// Verifica si estamos en checkout.html antes de ejecutar
if (document.getElementById('checkout-list')) {
    renderCheckout();
}

// Setup mobile navigation
function setupMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }
  
  // Handle mobile dropdowns
  if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      
      if (link) {
        link.addEventListener('click', function(e) {
          // Only prevent default and toggle on mobile
          if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Close other open dropdowns
            dropdowns.forEach(d => {
              if (d !== dropdown && d.classList.contains('active')) {
                d.classList.remove('active');
              }
            });
          }
        });
      }
    });
  }
}

// Setup contact form submission
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      let message = 'Thank you for contacting us! We will get back to you soon.';
      
      // In a real application, you would send this data to a server
      alert(message);
      contactForm.reset();
    });
  }
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
}

// Animation on scroll
function setupScrollAnimations() {
  // Add fade-in effect to elements as they scroll into view
  const animateElements = document.querySelectorAll('.product, .hero-content, .banner-content');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animateElements.forEach(el => {
    // Set initial styles
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products, 'product-list'); // Render products
  searchProducts();
  
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const dropdowns = document.querySelectorAll('.dropdown');
  
  // Only add event listeners if elements exist
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  } else {
    console.warn('Menu toggle or main nav element not found');
  }
    
  // Toggle for mobile dropdowns
  if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      
      if (link) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
          }
        });
      }
    });
  }
});