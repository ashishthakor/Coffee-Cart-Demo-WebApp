import React from 'react';
import classes from './Cart.module.css';

import { useContext, useState } from 'react';
import CartContext from '../../../store/cartContext';
import CartItem from './CartItem';
import AuthContext from '../../../store/AuthContext';
import { useHistory } from 'react-router-dom';

import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const Cart = () => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [placingOrder, setPlacingOrder] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const itemAvailable = cartCtx.items.length > 0; //or we can also check totalAmount>0
  const openNotificationWithIcon = (type, word) => {
    if (type === 'success') {
      notification[type]({
        message: `Cart Updated`,
        description: `Cart Updated SuccessFully`,
      });
    }
  };
  const addItemHandler = (item) => {
    console.log(item);
    item = { ...item, quantity: 1 };
    cartCtx.add(item);
    openNotificationWithIcon(`success`);
  };

  const removeItemHandler = (id) => {
    cartCtx.remove(id);
    openNotificationWithIcon(`success`);
  };
  const deleteItemHandler = (item) => {
    cartCtx.deleteIndivisualItem(item);
  };
  const orderData = {
    email: authCtx.email,
    orderDate: new Date().toLocaleDateString(),
    item: cartCtx.items,
  };
  const placeOrderHandler = async () => {
    console.log(orderData);
    if (orderData.item === []) {
      console.log('No Item Available');
      return;
    }
    setPlacingOrder(true);
    const res = await fetch(
      `https://coffee-cart-demo-project-default-rtdb.firebaseio.com/order.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      }
    );

    if (!res.ok) {
      alert(`Error occure! ${res.message}`);
      return;
    }
    console.log('everything perfect');

    cartCtx.clearCartData();
    setPlacingOrder(false);
    history.push('/order');
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;

  return (
    <>
      <div className={classes.title}>Cart Page</div>
      <div className={classes.control}>
        <div className={classes.total}>
          <span>Total Amount:&nbsp;</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.list}>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Item Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.amount}
                    price={item.price}
                    onAdd={addItemHandler.bind(null, item)}
                    onRemove={removeItemHandler.bind(null, item.id)}
                    onDeleteItem={deleteItemHandler.bind(null, item)}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        {placingOrder ? (
          <Spin indicator={antIcon} />
        ) : (
          <div className={`${classes.total} ${classes.order}`}>
            {itemAvailable && !placingOrder && (
              <span onClick={placeOrderHandler}>Place Order</span>
            )}

            {!itemAvailable && <p>No Coffee In your Cart</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
