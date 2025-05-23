// This file contains the data for the products in the store.
const laptops = [
  { id: 1, name: 'Laptop Gamer RTX 4060', price: 1299, image: '../image/lapto_gamer_4060.jpg' }
];

const mouses = [
  { id: 2, name: 'Mouse RGB', price: 49, image: '../image/mouse_gamer.jpg' }
];

const monitores = [
  { id: 3, name: 'Monitor UltraWide 34"', price: 499, image: '../image/monitor_ultrawide.jpg' },
  { id: 6, name: 'Monitor Curvo 27"', price: 299, image: '../image/monitor_ultrawide.jpg' },
  { id: 7, name: 'Monitor 4K 32"', price: 599, image: '../image/monitor_ultrawide.jpg' }
];

const teclados = [
  { id: 4, name: 'Teclado Mecánico', price: 89, image: '../image/teclado_mecanico.jpg' }
];

const componentes = [
  { id: 5, name: 'Placa de video RTX 4070', price: 699, image: '../image/placa_video_4070.jpg' }
];

const products = [
  ...laptops,
  ...mouses,
  ...monitores,
  ...teclados,
  ...componentes,
];

const outlet_products = [
  { id: 8, name: 'Laptop Gamer RTX 3060', price: 899, image: '../image/lapto_gamer_4060.jpg' },
  { id: 9, name: 'Mouse Inalambrico', price: 29, image: '../image/mouse_gamer.jpg' },
  { id: 10, name: 'Monitor 24"', price: 199, image: '../image/monitor_ultrawide.jpg' },
  { id: 11, name: 'Teclado Inalambrico', price: 39, image: '../image/teclado_mecanico.jpg' },
  ...mouses
];