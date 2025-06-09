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
    date: '2023-04-05T09:30:15',
    recipient: 'FrescoMax',
    description: 'FritzCoins Canjeados',
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
    date: '2023-05-28T18:15:10',
    sender: 'Megamarket',
    description: 'FritzCoins Ganados',
  },
];

// Mock rewards catalog
export const rewards = [
  {
    id: 'reward1',
    name: 'Mayonesa Regular FRITZ 375',
    description: 'La mayonesa que no falla: cremosa, estable y..',
    longDescription: 'La mayonesa que no falla: cremosa, estable y con sabor auténtico. Perfecta para ensaladas, hamburguesas y producto de alto rendimiento.',
    image: 'https://fritzinternational.us/pe/wp-content/uploads/sites/3/2024/05/FRITZ-PRODUCTO-2mayonesa-peru.png',
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
    name: 'Papas Ralladas',
    description: 'Agrega un toque crujiente e irresistible a ..',
    longDescription: 'Agrega un toque crujiente e irresistible a tus hot dogs y hamburguesas. Papas ralladas listas para servir, ideales para tus perros calientes.',
    image: 'https://cdn4.volusion.store/rdkvp-twsuc/v/vspfiles/photos/FRITZ-papas-fritas-ralladas-12-2T.png',
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
    name: 'Salsa de Tomate FRITZ',
    description: 'Salsa de tomate con textura suave y ..',
    longDescription: 'Salsa de tomate con textura suave y sabor casero. Ideal para pastas, pizzas o bases. Rinde más y gusta a todos.',
    image: 'https://mayorhermanosdaza.com/wp-content/uploads/2024/04/SALSA_A_BASE_DE_TOMATE_FRITZ_BOLSA_3.85KG.png',
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
    name: 'Avena Mil',
    description: 'Avena premium rica en fibra, perfecta ..',
    longDescription: 'Avena premium rica en fibra, perfecta para desayunos, postres y recetas funcionales. Alta calidad y rendimiento en panadería, cocina saludable y consumo en el hogar.',
    image: 'https://mibodega.com.ve/wp-content/uploads/2023/01/FRITZ-MIL-AVENA-EN-HOJUELAS-340GR.png.webp',
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
    name: 'Salsas Líquidas FRITZ - Ajo',
    description: 'Salsa de ajo líquida con aroma intenso ..',
    longDescription: 'Salsa de ajo líquida con aroma intenso, lista para usar en carnes, aderezos y pastas. Sabor gourmet al instante.',
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