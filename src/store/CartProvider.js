import React from 'react';
import CartContext from './cartContext';
import { useReducer } from 'react';

const defaultCartState = {
  // items: JSON.parse(localStorage.getItem('cartItem')) || [],
  // totalAmount: parseInt(localStorage.getItem('totalAmount')) || 0,
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD-TO-CART') {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.quantity;

    const ItemAvailableInCartIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingItem = state.items[ItemAvailableInCartIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[ItemAvailableInCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE-FROM-CART') {
    const ItemAvailableInCartIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const existingItem = state.items[ItemAvailableInCartIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[ItemAvailableInCartIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'DELETE-ITEM') {
    const updatedItems = state.items.filter(
      (item) => item.id !== action.payload.id
    );

    const updatedTotalAmount =
      state.totalAmount - action.payload.amount * action.payload.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'CLEAR-CART') {
    // localStorage.removeItem('cartItem');
    // localStorage.removeItem('totalAmount');
    return {
      items: [],
      totalAmount: 0,
    };
  }
  // return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: 'ADD-TO-CART', payload: item });
  };
  const removeItemToCart = (id) => {
    dispatchCartAction({ type: 'REMOVE-FROM-CART', payload: id });
  };
  const deleteItem = (item) => {
    dispatchCartAction({ type: 'DELETE-ITEM', payload: item });
  };
  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR-CART' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    add: addItemToCart,
    remove: removeItemToCart,
    deleteIndivisualItem: deleteItem,
    clearCartData: clearCart,
  };

  // localStorage.setItem('cartItem', JSON.stringify(cartContext.items));
  // localStorage.setItem('totalAmount', cartContext.totalAmount);
  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
