import React from 'react';
import classes from './Item.module.css';
import { Popover, Button } from 'antd';
import { useRef, useState } from 'react';

import { useContext } from 'react';
import CartContext from '../../../store/cartContext';

const Item = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountOfInput = useRef();
  const cartCtx = useContext(CartContext);

  const ingredients = props.recipe.split(',');

  const ing = (
    <>
      <div>
        {ingredients.map((ing) => {
          const arr = ing.split(' ');

          for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
          const captilizeIng = arr.join(' ');
          return <p>{captilizeIng}</p>;
        })}
      </div>
    </>
  );

  const addToCartHandler = (quantity) => {
    cartCtx.add({
      id: props.id,
      name: props.name,
      amount: quantity,
      price: props.price,
      quantity,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredQuantity = +amountOfInput.current.value.trim();

    if (enteredQuantity < 1) {
      alert('Please Enter Valid Anount of Quantity');
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);

    addToCartHandler(enteredQuantity);
  };
  return (
    <>
      <div className={classes.gridItem}>
        <div className={classes.imgContainer}>
          <img src={props.img} alt='Coffee' />
        </div>
        <div className={classes.item}>
          <div className={classes.itemHeading}>{props.name}</div>
          <div className={classes.itemPrice}>
            Item/${props.price.toFixed(2)}
          </div>
        </div>
        <div className={classes.itemData}>
          <div className={classes.childData}>
            <Popover content={ing} title='Ingredients'>
              <Button type='primary' shape='round'>
                INGREDIENTS
              </Button>
            </Popover>
          </div>
          <div className={classes.childData}>
            <input type='number' ref={amountOfInput} min='1' defaultValue='1' />
          </div>
        </div>
        {!amountIsValid && (
          <h2>
            <p>
              <b>Please Enter Valid Quantity</b>
            </p>
          </h2>
        )}
        <hr />
        <center>
          <div>
            <button className={classes.addToCart} onClick={submitHandler}>
              Add To Cart
            </button>
          </div>
        </center>
      </div>
    </>
  );
};

export default Item;
