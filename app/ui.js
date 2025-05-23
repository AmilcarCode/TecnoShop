function renderProducts(list, productslist) {
  const container = document.getElementById(productslist);
  if (!container) return;

  container.innerHTML = '';
  list.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <div class="product-price">$${p.price}</div>
      <button onclick="addToCart(${p.id})">Agregar al carrito</button>
    `;
    container.appendChild(el);
  });
}

function searchProducts() {
  const searchInput = document.getElementById('search');
  if (searchInput) { // Solo si existe
      searchInput.addEventListener('input', e => {
          const query = e.target.value.toLowerCase();
          const filtered = products.filter(p => p.name.toLowerCase().includes(query));
          renderProducts(filtered);
      });
  }
}

// Ejecutar solo si estamos en outlet.html
if (document.getElementById('outlet-product-list')) {
    renderProducts(outlet_products, 'outlet-product-list');
}


// Verifica si estamos en checkout.html antes de ejecutar
if (document.getElementById('checkout-list')) {
    renderCheckout();
}


  

document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products, 'product-list');
  searchProducts();
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const dropdowns = document.querySelectorAll('.dropdown');
    
  // Toggle del menú principal
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    });
    
  // Toggle para los dropdowns en móvil
  dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('a');
      
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
        }
      });
    });
  });




