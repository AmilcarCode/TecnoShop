let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart-count').innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.innerText = cart.length;
});

function facturar() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Primero debe agregar productos al carrito');
    window.location.href = '../pages/index.html';
    return;
  }
  // Aquí continua el código para facturar
  // Por ejemplo, mostrar la factura o limpiar carrito
  alert('Factura generada. Gracias por su compra.');
  localStorage.removeItem('cart');
  window.location.href = '../pages/index.html';
}


const checkoutList = document.getElementById('checkout-list');
const totalElement = document.getElementById('total');

function renderCheckout() {
    const checkoutList = document.getElementById('checkout-list');
    if (!checkoutList) return; // Salir si no existe
    
    checkoutList.innerHTML = '';
    let total = 0;
    cart.forEach(product => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <div class="product-price">$${product.price}</div>
    `;
    checkoutList.appendChild(el);
    total += product.price;
    });
      totalElement.innerText = total.toFixed(2);
    }

    renderCheckout();