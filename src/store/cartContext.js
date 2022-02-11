import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  add: (item) => {},
  remove: (id) => {},
  deleteIndivisualItem: (id) => {},
  clearCartData: () => {},
});

export default CartContext;
