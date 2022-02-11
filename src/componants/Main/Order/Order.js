import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Order.module.css';
import AuthContext from '../../../store/AuthContext';

const Order = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [responseData, setResponseData] = useState({});

  let history = useHistory();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchOrder = async () => {
      console.log('Fetching Order');

      try {
        const res = await fetch(
          `https://coffee-cart-demo-project-default-rtdb.firebaseio.com/order.json?orderBy="email"&equalTo="${authCtx.email}"`
        );
        if (!res.ok) {
          alert('We fail to fetch data please try again');
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        const data = await res.json();

        setResponseData(data);
      } catch (e) {
        alert('Please check your connection');
        history.push('/');
        console.log(e);
      }
    };
    fetchOrder();
  }, []);
  console.log(responseData);
  const fetchedOrders = [];

  for (const key in responseData) {
    fetchedOrders.push({ id: key, ...responseData[key] });
  }

  fetchedOrders.map((order) => {
    console.log(order);
  });
  let totalAmount = 0;
  return (
    <>
      <div>
        <div className={classes.title}>Order Page</div>
        <br />
        <br />
        {isLoading && (
          <b>
            <h1>Loading Orders....</h1>
          </b>
        )}
        {!isLoading && (
          <section>
            <center>
              {fetchedOrders.map((order) => (
                <>
                  <div className={classes.orderItem} key={order.id}>
                    <p>OrderID {order.id} </p>
                    <p>Date :- {`${order.orderDate}`}</p>
                  </div>
                  <div className={classes.coffee}>
                    {order.item.map((coffee) => (
                      <>
                        <div>* * * {coffee.name}</div>
                        <div>
                          * * * {coffee.amount} X ${coffee.price} = $
                          {coffee.amount * coffee.price}
                        </div>
                        <span hidden>
                          {
                            (totalAmount =
                              totalAmount + coffee.amount * coffee.price)
                          }
                        </span>
                      </>
                    ))}
                  </div>
                  <div className={classes.totalAmount}>
                    Total Amount = {totalAmount}
                  </div>

                  <hr />
                </>
              ))}
            </center>
          </section>
        )}
      </div>
    </>
  );
};

export default Order;
