import espresso from './espresso.png';
import espressoMacchiato from './espresso-macchiato.png';
import cappuccino from './cappuccino.png';
import mocha from './mocha.png';
import flatWhite from './flat-white.png';
import americano from './americano.png';
import cafeLatte from './cafe-latte.png';
import espressoConPanna from './espresso-con-panna.png';
import cafeBrave from './cafe-brave.png';
const DUMMY_DATA = [
  {
    id: Math.random().toString().substring(2, 8),
    img: espresso,
    name: 'Espresso',
    price: 10,
    recipe: 'espresso',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: espressoMacchiato,
    name: 'Espresso Macchiato',
    price: 12,
    recipe: 'espresso, milk foam',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cappuccino,
    name: 'Cappuccino',
    price: 19,
    recipe: 'espresso, steamed milk, milk foam',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: mocha,
    name: 'Mocha',
    price: 8,
    recipe: 'espresso ,chocolate syrup, steamed milk, whipped cream',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: flatWhite,
    name: 'Flat White',
    price: 18,
    recipe: 'espresso, steamed milk',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: americano,
    name: 'Americano',
    price: 7,
    recipe: 'espresso, water',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cafeLatte,
    name: 'Cafe Latte',
    price: 16,
    recipe: 'espresso, steamed milk, milk foam',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: espressoConPanna,
    name: 'Espresso Con Panna',
    price: 14,
    recipe: 'espresso, whipped cream',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cafeBrave,
    name: 'Cafe Breve',
    price: 15,
    recipe: 'espresso, steamed milk, steamed cream, milk foam',
  },
  // {
  //   id: Math.random().toString().substring(2, 8),
  //   img: '',
  //   name: '(Discounted) Mocha',
  //   price: 4,
  //   discounted: true,
  //   recipe: 'espresso ,chocolate syrup, steamed milk, whipped cream',
  // },
];

export default DUMMY_DATA;
