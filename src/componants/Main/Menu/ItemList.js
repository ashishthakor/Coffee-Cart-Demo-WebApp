import React from 'react';
import classes from './ItemList.module.css';
import Item from './Item';
import { useContext } from 'react';
import CartContext from '../../../store/cartContext';
const ItemList = (props) => {
  // props.items.map((item) => {
  //   console.log(item.id);
  //   // console.log(item.name);
  //   // console.log(item.price);
  //   // console.log(item.recipe);
  // });
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  return (
    <>
      <div className={classes.gridContainer}>
        {props.items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              recipe={item.recipe}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
