// Mock store data
export const stores = [
  {
    id: '1',
    name: 'SuperMax',
    logo: 'https://images.pexels.com/photos/6407542/pexels-photo-6407542.jpeg',
    distance: '1.2 km',
    address: 'Av. Libertador 1234',
    latitude: -34.603722,
    longitude: -58.381592,
    currentPromotion: '¡2x FritzCoins hoy!',
  },
  {
    id: '2',
    name: 'MegaMarket',
    logo: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    distance: '0.8 km',
    address: 'Calle San Martín 567',
    latitude: -34.608722,
    longitude: -58.371592,
    currentPromotion: '5% extra en FritzCoins',
  },
  {
    id: '3',
    name: 'FrescoMax',
    logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
    distance: '2.5 km',
    address: 'Av. Corrientes 4321',
    latitude: -34.605722,
    longitude: -58.391592,
    currentPromotion: '500 FritzCoins extra en compras de $50+',
  },
];

// Mock user data
export const userData = {
  id: 'user123',
  name: 'Juan López',
  email: 'juan@example.com',
  phone: '+54 9 11 2345-6789',
  level: 'Plata',
  levelProgress: 65, // percentage to next level
  balance: 2750, // FritzCoins balance
  pointsToNextLevel: 500,
  joinDate: '15/10/2023',
};

// Mock transaction history
export const transactions = [
  {
    id: 'txn1',
    type: 'earned',
    amount: 350,
    date: '2023-11-15T14:22:30',
    store: 'Salsa Maiz Frasco 240',
    description: 'Compra de Producto Fritz',
  },
  {
    id: 'txn2',
    type: 'redeemed',
    amount: 500,
    date: '2023-11-10T16:45:22',
    store: 'MegaMarket',
    description: 'Puntos Convertidos',
  },
  {
    id: 'txn3',
    type: 'transfer',
    amount: 200,
    date: '2023-11-05T09:30:15',
    recipient: 'María García',
    description: 'Transferencia a María García',
  },
  {
    id: 'txn4',
    type: 'earned',
    amount: 150,
    date: '2023-11-01T11:20:45',
    store: 'Salsa Ahumadita 240',
    description: 'Compra de Producto Fritz',
  },
  {
    id: 'txn5',
    type: 'received',
    amount: 300,
    date: '2023-10-28T18:15:10',
    sender: 'Carlos Rodríguez',
    description: 'Transferencia recibida',
  },
];

// Mock rewards catalog
export const rewards = [
  {
    id: 'reward1',
    name: 'Picante Fritz',
    description: '240g Enciende la chispa del amor con..',
    longDescription: 'Enciende la chispa del amor con la salsa picante Fritz. Su picante intenso y sus especias se equilibran para animar sus comidas y momentos, convirtiendo las cenas cotidianas en asuntos apasionantes.',
    image: 'https://fritzinternational.us/wp-content/uploads/2024/05/FRITZ-PRODUCTO-4-picanteo.png',
    price: 500, // FritzCoins
    discount: '50% desc.',
    originalPrice: '$10.00',
    finalPrice: '$5.00',
    stores: ['Tiendas Mayoristas y Distribuidores'],
    expiry: '31/12/2023',
    category: 'Picantes',
  },
  {
    id: 'reward2',
    name: 'Ahumadita Fritz',
    description: '240g Experimente la calidez de la salsa ..',
    longDescription: 'Experimente la calidez de la salsa Fritz Bacon, elaborada con amor para transformar sus comidas en preciados recuerdos familiares. Su riqueza ahumada añade profundidad y cariño a cada plato, perfecto para reunirse alrededor de la mesa.',
    image: 'https://fritzinternational.us/wp-content/uploads/2024/05/FRITZ-PRODUCTO-2chedd.png',
    price: 750, // FritzCoins
    discount: '30% desc.',
    originalPrice: '$15.00',
    finalPrice: '$10.50',
    stores: ['Tiendas Mayoristas y Distribuidores'],
    expiry: '15/12/2023',
    category: 'Salsas',
  },
  {
    id: 'reward3',
    name: 'Queso Cheddar Fritz',
    description: '45g Abrace el reconfortante abrazo de la salsa..',
    longDescription: 'Abrace el reconfortante abrazo de la salsa Fritz Cheddar, una delicia cremosa hecha para difundir amor con cada cucharada. Ideal para compartir, aporta sonrisas y calidez a tus comidas y reuniones familiares.',
    image: 'https://fritzinternational.us/wp-content/uploads/2024/05/FRITZ-PRODUCTO-3.png',
    price: 1200, // FritzCoins
    discount: '25% desc.',
    originalPrice: '$20.00',
    finalPrice: '$15.00',
    stores: ['Tiendas Mayoristas y Distribuidores'],
    expiry: '31/12/2023',
    category: 'Salsas',
  },
  {
    id: 'reward4',
    name: 'Mayonesa Fritz',
    description: '750g Nuestra mayonesa Fritz te enamorará ..',
    longDescription: 'Nuestra mayonesa Fritz te enamorará en el primer bocado, por su cremosidad, es una excelente acompañante para tus platos y para complementar la felicidad de tus invitados. SIendo esta la receta original de la mayonesa.',
    image: 'https://fritzinternational.us/wp-content/uploads/2024/05/FRITZ-PRODUCTO-2Mayonesamayonesa-copia1.png',
    price: 600, // FritzCoins
    discount: '40% desc.',
    originalPrice: '$12.00',
    finalPrice: '$7.20',
    stores: ['Tiendas Mayoristas y Distribuidores'],
    expiry: '20/12/2023',
    category: 'Bases Saborizadas',
  },
  {
    id: 'reward5',
    name: 'Maíz Fritz',
    description: '240g Deje que la salsa de maíz Fritz ..',
    longDescription: 'Deje que la salsa de maíz Fritz endulce sus reuniones con su sabor hogareño, con un toque especiado. Elaborado para celebrar el amor y la unión, es más que una salsa: es una forma de conectar corazones. Con orgullo venezolano.',
    image: 'https://fritzinternational.us/wp-content/uploads/2024/05/FRITZ-PRODUCTO-2-145x300.png',
    price: 400, // FritzCoins
    discount: '20% desc.',
    originalPrice: '$8.00',
    finalPrice: '$6.40',
    stores: ['Tiendas Mayoristas y Distribuidores'],
    expiry: '10/12/2023',
    category: 'Salsas',
  },
];

// User level benefits
export const levelBenefits = {
  Bronce: [
    'Tasa básica: 1 FritzCoin por $1',
    'Acceso a premios estándar',
    'FritzCoins válidos por 6 meses',
  ],
  Plata: [
    'Tasa mejorada: 1.5 FritzCoins por $1',
    'Acceso a premios premium',
    'FritzCoins válidos por 9 meses',
    'Bonus de cumpleaños: 500 FritzCoins',
  ],
  Oro: [
    'Tasa premium: 2 FritzCoins por $1',
    'Acceso a todos los premios + ofertas exclusivas Oro',
    'FritzCoins válidos por 12 meses',
    'Bonus de cumpleaños: 1000 FritzCoins',
    'Servicio al cliente prioritario',
    'Acceso anticipado a promociones',
  ],
};