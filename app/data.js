let lastId = 0;

function generateId() {
  return ++lastId;
}

const laptops = [
  { id: generateId(), name: 'Gamer Laptop RTX 4060', price: 1299, image: 'https://http2.mlstatic.com/D_NQ_NP_893201-MLA84043092161_042025-O.webp' },
  { id: generateId(), name: 'Ultrabook Laptop i7', price: 999, image: 'https://http2.mlstatic.com/D_851740-MLA83766281705_042025-O.jpg' },
  { id: generateId(), name: 'Laptop Ryzen 7', price: 899, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgf9t4V9-r1kDsH7UlUZ8EwqE3tts2_mKp1Q&s' },
  { id: generateId(), name: 'Student Laptop', price: 549, image: 'https://http2.mlstatic.com/D_NQ_NP_819680-MLA85876525545_062025-O.webp' },
  { id: generateId(), name: 'Graphic Design Laptop', price: 1399, image: 'https://m.media-amazon.com/images/I/41LQNFtCcGL._AC_.jpg' }
];

const mouses = [
  { id: generateId(), name: 'RGB Mouse', price: 49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6tTF10Vc5xA4JzHF7jWVd20ilZeXHBoupA&s' },
  { id: generateId(), name: 'Logitech Wireless Mouse', price: 39, image: 'https://www.mastecnologia.com.ar/images/productos/16657-1.png?1657894905' },
  { id: generateId(), name: 'Ergonomic Vertical Mouse', price: 59, image: 'https://http2.mlstatic.com/D_NQ_NP_691914-MLA52164350495_102022-O.webp' },
  { id: generateId(), name: 'PRO Gaming Mouse', price: 79, image: 'https://m.media-amazon.com/images/I/613D0OyR+TL._UF894,1000_QL80_.jpg' },
  { id: generateId(), name: 'Basic USB Mouse', price: 15, image: 'https://http2.mlstatic.com/D_NQ_NP_743104-MLA41522025753_042020-O.webp' }
];

const monitores = [
  { id: generateId(), name: 'UltraWide Monitor 34"', price: 499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROea6gTyFtKsubFy2Ss9VVVq0j0n4rzwEVpg&s' },
  { id: generateId(), name: 'Curved Monitor 27"', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKQP-iJP6NiEFsddE5caE6ZEiMUNHDDZB1g&s' },
  { id: generateId(), name: '4K Monitor 32"', price: 599, image: 'https://m.media-amazon.com/images/I/714-x9KGuFL._UF894,1000_QL80_.jpg' },
  { id: generateId(), name: '1080p Monitor 24"', price: 179, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJ8Sk4dIeummcP5p82qjAhQeB9nn2VbBx-g&s' },
  { id: generateId(), name: 'IPS Monitor 27"', price: 229, image: 'https://http2.mlstatic.com/D_NQ_NP_787935-MLA76493686307_052024-O.webp' }
];

const teclados = [
  { id: generateId(), name: 'Mechanical Keyboard', price: 89, image: 'https://acdn-us.mitiendanube.com/stores/001/231/930/products/825604-mla49278211665_032022-f1-0cbdca14bfebbca6da16488277952773-1024-1024.jpg' },
  { id: generateId(), name: 'Logitech Wireless Keyboard', price: 69, image: 'https://www.heavenimagenes.com/heavencommerce/2c39c04b-1d55-4d49-81c9-0ed39463cdd8/images/v2/LOGITECH/2006132128414930_01_large.jpg' }
];

const componentes = [
  { id: generateId(), name: 'RTX 4070 Graphics Card', price: 699, image: 'https://casatecno.com.ar/img/Public/1108/86345-producto-imagen-2024-09-21-121615078.jpg' },
  { id: generateId(), name: 'Ryzen 9 7900X Processor', price: 549, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoAUZ_3Gp--PpM4zZQr2Z4qmbHN-NSzU8mg&s' },
  { id: generateId(), name: '16GB DDR5 RAM', price: 129, image: 'https://logg.api.cygnus.market/static/logg/Global/Memoria_RAM_DDR5_CORSAIR_VENGEANCE_RGB_DDR5_64GB_2x32GB_5600MHz_CL40_Negro/5aca6d9278b24954be66c6d18a4b781e.webp' },
  { id: generateId(), name: '1TB NVMe SSD', price: 139, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ABFpg6G7AawyQVnIDOp2LQd_YwpoVpTKXQ&s' },
  { id: generateId(), name: '750W Modular Power Supply', price: 99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-B6ldMogBsHIRJRnrDuE222Jd7Xy53dFU6Q&s' }
];

const outlet_products = [
  { id: generateId(), name: 'Gamer Laptop RTX 3060', price: 899, image: 'https://http2.mlstatic.com/D_NQ_NP_742906-MLU70139717871_062023-O.webp', isOutlet: true },
  { id: generateId(), name: 'Wireless Mouse', price: 29, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeFWQZISWMCVWNGqWWhOKOwab5wmnvVkJtQ&s', isOutlet: true },
  { id: generateId(), name: 'Monitor 24"', price: 199, image: 'https://images.fravega.com/f1000/32397e21c5240c13f2d32ad3842cd3e8.jpg', isOutlet: true, condition: "Open Box" },
  { id: generateId(), name: 'Wireless Keyboard', price: 39, image: 'https://http2.mlstatic.com/D_NQ_NP_960862-MLA86042471048_062025-O.webp', isOutlet: true, condition: "Refurbished" }
];

const discount_products = [
  { id: generateId(), name: 'Gamer Laptop RTX 4060', price: 1299, image: 'https://pronotebooks.com.ar/wp-content/uploads/2024/10/acer-nitro-v-300x300.webp', discount: 10 },
  { id: generateId(), name: 'UltraWide Monitor 34"', price: 499, image: 'https://http2.mlstatic.com/D_NQ_NP_825786-MLA52445480836_112022-O.webp', discount: 15 },
  { id: generateId(), name: 'Mechanical Keyboard', price: 89, image: 'https://spacegamer.com.ar/img/Public/1058/93879-producto-1.jpg', discount: 20 },
  { id: generateId(), name: 'RTX 4090 Graphics Card', price: 699, image: 'https://asset.msi.com/resize/image/global/product/product_1718332747721db5dc65b39bc39288c0e7a443a005.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png', discount: 25 }
];


const products = [
  ...laptops,
  ...mouses,
  ...monitores,
  ...teclados,
  ...componentes,
  ...outlet_products,
  ...discount_products
];