const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-105004.jpeg',
      favorite: true,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-279618.jpeg',
      compare: true,
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-279746.jpeg',
      favorite: true,
      compare: true,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-775219.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-932095.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-1571471.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-1866149.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2082092.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2258083.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2647714.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2762247.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-3771691.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-3932930.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-6480198.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-6510974.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-6580396.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-7746471.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-7821342.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-8989344.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-9968385.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-10758469.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-14002096.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-14656123.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-1080696.jpeg',
      favorite: false,
      isSelected: false,
    },
    {
      id: 'bristique-1',
      name: 'Bristique 1',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-96940.jpeg',
      favorite: true,
      isSelected: false,
    },
    {
      id: 'bristique-2',
      name: 'Bristique 2',
      category: 'chair',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-220749.jpeg',
      compare: true,
      isSelected: false,
    },
    {
      id: 'bristique-3',
      name: 'Bristique 3',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-276534.jpeg',
      favorite: true,
      compare: true,
      isSelected: false,
    },
    {
      id: 'bristique-4',
      name: 'Bristique 4',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-923192.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-5',
      name: 'Bristique 5',
      category: 'chair',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-930390.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-6',
      name: 'Bristique 6',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-1321290.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-7',
      name: 'Bristique 7',
      category: 'chair',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-2179214.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-8',
      name: 'Bristique 8',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-2180883.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-9',
      name: 'Bristique 9',
      category: 'chair',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2258083.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-10',
      name: 'Bristique 10',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-2606612.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-11',
      name: 'Bristique 11',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/bed/pexels-photo-2762247.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-12',
      name: 'Bristique 12',
      category: 'chair',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-2747070.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-13',
      name: 'Bristique 13',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-3705539.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-14',
      name: 'Bristique 14',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-4210805.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-15',
      name: 'Bristique 15',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-8082560.jpeg',
      isSelected: false,
    },
    {
      id: 'bristique-16',
      name: 'Bristique 16',
      category: 'chair',
      price: 30,
      oldPrice: 37,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/chair/pexels-photo-8581051.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-1',
      name: 'Sofa 1',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-269129.jpeg',
      favorite: true,
      isSelected: false,
    },
    {
      id: 'sofa-2',
      name: 'Sofa 2',
      category: 'sofa',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-269218.jpeg',
      compare: true,
      isSelected: false,
    },
    {
      id: 'sofa-3',
      name: 'Sofa 3',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-275484.jpeg',
      favorite: true,
      compare: true,
      isSelected: false,
    },
    {
      id: 'sofa-4',
      name: 'Sofa 4',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-1362385.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-5',
      name: 'Sofa 5',
      category: 'sofa',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-1543447.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-6',
      name: 'Sofa 6',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-1571470.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-7',
      name: 'Sofa 7',
      category: 'sofa',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-1643383.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-8',
      name: 'Sofa 8',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-3209045.jpeg',
      isSelected: false,
    },
    {
      id: 'sofa-9',
      name: 'Sofa 9',
      category: 'sofa',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/sofa/pexels-photo-1918291.jpeg',
      isSelected: false,
    },
    {
      id: 'table-1',
      name: 'Table 1',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-631411.jpeg',
      favorite: true,
      isSelected: false,
    },
    {
      id: 'table-2',
      name: 'table 2',
      category: 'table',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-827528.jpeg',
      compare: true,
      isSelected: false,
    },
    {
      id: 'table-3',
      name: 'table 3',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-890669.jpeg',
      favorite: true,
      compare: true,
      isSelected: false,
    },
    {
      id: 'table-4',
      name: 'table 4',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-1008692.jpeg',
      isSelected: false,
    },
    {
      id: 'table-5',
      name: 'table 5',
      category: 'table',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-1080696.jpeg',
      isSelected: false,
    },
    {
      id: 'table-6',
      name: 'table 6',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-2092058.jpeg',
      isSelected: false,
    },
    {
      id: 'table-7',
      name: 'table 7',
      category: 'table',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-2376971.jpeg',
      isSelected: false,
    },
    {
      id: 'table-8',
      name: 'table 8',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-2451264.jpeg',
      isSelected: false,
    },
    {
      id: 'table-9',
      name: 'table 9',
      category: 'table',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/table/pexels-photo-3144581.jpeg',
      isSelected: false,
    },
    {
      id: 'dining-1',
      name: 'Dining 1',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/dining/pexels-photo-262978.jpeg',
      favorite: true,
      isSelected: false,
    },
    {
      id: 'dining-2',
      name: 'Dining 2',
      category: 'dining',
      price: 30,
      oldPrice: 42,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/dining/pexels-photo-299348.jpeg',
      compare: true,
      isSelected: false,
    },
    {
      id: 'dining-3',
      name: 'Dining 3',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/dining/pexels-photo-941861.jpeg',
      favorite: true,
      compare: true,
      isSelected: false,
    },
    {
      id: 'dining-4',
      name: 'Dining 4',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/dining/pexels-photo-1395967.jpeg',
      isSelected: false,
    },
    {
      id: 'dining-5',
      name: 'Dining 5',
      category: 'dining',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '/images/products/dining/pexels-photo-3184188.jpeg',
      isSelected: false,
    },
  ],
  cart: {
    products: [],
  },

  brands: {
    firstBrand: '/images/brands/logo1.avif',
    secondBrand: '/images/brands/logo2.avif',
    thirdBrand: '/images/brands/logo3.avif',
    fourthBrand: '/images/brands/logo4.avif',
    fifthBrand: '/images/brands/logo5.avif',
  },
  promotions: {
    firstBoxImage: '/images/sectionPromotions/first-box.jpeg',
    firstBoxTitle: 'GUEST ROOM',
    firstBoxFurniture: 'SOFA',
    firstBoxDiscount: '-30%',
    secondBoxImage: '/images/sectionPromotions/second-box.jpg',
    secondBoxTitle: 'DINNER',
    secondBoxFutniture: 'CHAIRS',
    secondBoxText: 'COLLECTION',
    secondBoxPrice: '$100.00',
    thirdBoxImage: '/images/sectionPromotions/third-box.jpg',
    thirdBoxTitle: 'SPECIAL',
    thirdBoxText: 'COLLECTION',
    thirdBoxContent: 'SAVE UP TO 50% OF FURNITURE',
  },
};

export default initialState;
