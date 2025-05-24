function renderProducts(list, productslist, itemsToRender = 10) {  // Valor por defecto: 10
  const container = document.getElementById(productslist);
  if (!container) return;

  container.innerHTML = '';

  // 1. Copia y baraja el array 
  const shuffledList = [...list];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  // 2. Determina cuántos productos renderizar
  const productCount = itemsToRender === 0 ? shuffledList.length : itemsToRender;
  const productsToRender = shuffledList.slice(0, productCount);

  // 3. Renderiza
  productsToRender.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="product-image-container">
        <img src="${p.image}" alt="${p.name}" />
        ${p.isOutlet ? '<div class="outlet-badge">OUTLET</div>' : ''}
      </div>
      <h3>${p.name}</h3>
      <div class="product-price">$${p.price}</div>
      <button onclick="addToCart(${p.id})">Agregar al carrito</button>
    `;
    container.appendChild(el);
  });
}

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
}

// Ejecutar solo si estamos en outlet.html
if (document.getElementById('outlet-product-list')) {
    renderProducts(outlet_products, 'outlet-product-list', 0);
}


// Verifica si estamos en checkout.html antes de ejecutar
if (document.getElementById('checkout-list')) {
    renderCheckout();
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




