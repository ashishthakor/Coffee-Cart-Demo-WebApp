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
    recipe: 'espresso 30%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: espressoMacchiato,
    name: 'Espresso Macchiato',
    price: 12,
    recipe: 'espresso 30%, milk foam 15%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cappuccino,
    name: 'Cappuccino',
    price: 19,
    recipe: 'espresso 30%, steamed milk 20%, milk foam 25%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: mocha,
    name: 'Mocha',
    price: 8,
    recipe:
      'espresso 30%,chocolate syrup 20%, steamed milk 25%, whipped cream 25%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: flatWhite,
    name: 'Flat White',
    price: 18,
    recipe: 'espresso 30%, steamed milk 50%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: americano,
    name: 'Americano',
    price: 7,
    recipe: 'espresso 30%, water 70%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cafeLatte,
    name: 'Cafe Latte',
    price: 16,
    recipe: 'espresso 30%, steamed milk 50%, milk foam 20%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: espressoConPanna,
    name: 'Espresso Con Panna',
    price: 14,
    recipe: 'espresso 30%, whipped cream 15%',
  },
  {
    id: Math.random().toString().substring(2, 8),
    img: cafeBrave,
    name: 'Cafe Breve',
    price: 15,
    recipe: 'espresso 25%, steamed milk 30%, steamed cream 30%, milk foam 15%',
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
