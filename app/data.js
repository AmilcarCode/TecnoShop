// This file contains the data for the products in the store.
let lastId = 0;

function generateId() {
  return ++lastId;
}

const laptops = [
  { id: generateId(), name: 'Laptop Gamer RTX 4060', price: 1299, image: '../image/lapto_gamer_4060.jpg' }
];

const mouses = [
  { id: generateId(), name: 'Mouse RGB', price: 49, image: '../image/mouse_gamer.jpg' }
];

const monitores = [
  { id: generateId(), name: 'Monitor UltraWide 34"', price: 499, image: '../image/monitor_ultrawide.jpg' },
  { id: generateId(), name: 'Monitor Curvo 27"', price: 299, image: '../image/monitor_ultrawide.jpg' },
  { id: generateId(), name: 'Monitor 4K 32"', price: 599, image: '../image/monitor_ultrawide.jpg' }
];

const teclados = [
  { id: generateId(), name: 'Teclado Mecánico', price: 89, image: '../image/teclado_mecanico.jpg' }
];

const componentes = [
  { id: generateId(), name: 'Placa de video RTX 4070', price: 699, image: '../image/placa_video_4070.jpg' }
];

const outlet_products = [
  { id: generateId(), name: 'Laptop Gamer RTX 3060', price: 899, image: '../image/lapto_gamer_4060.jpg' },
  { id: generateId(), name: 'Mouse Inalambrico', price: 29, image: '../image/mouse_gamer.jpg' },
  { id: generateId(), name: 'Monitor 24"', price: 199, image: '../image/monitor_ultrawide.jpg' },
  { id: generateId(), name: 'Teclado Inalambrico', price: 39, image: '../image/teclado_mecanico.jpg' },
  
];

const products = [
  ...laptops,
  ...mouses,
  ...monitores,
  ...teclados,
  ...componentes,
  ...outlet_products
];

