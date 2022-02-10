import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import DUMMY_DATA from './assets/Data';

import Navbar from './componants/header/NavBar/Navbar';
import ItemList from './componants/Main/Menu/ItemList';
import Cart from './componants/Main/Cart/Cart';
import Order from './componants/Main/Order/Order';
import CartProvider from './store/CartProvider';
import { useContext } from 'react';
import CartContext from './store/cartContext';
import AuthForm from './componants/Main/Auth/AuthForm';
import AuthContext from './store/AuthContext';

function App() {
  // DUMMY_DATA.map((data) => {
  //   console.log(data);
  // });
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  // console.log(cartCtx);
  return (
    <>
      <CartProvider>
        <div className='App'>
          <Navbar />
          <Switch>
            {!authCtx.isLoggedIn && (
              <Route path='/auth'>
                <AuthForm />
              </Route>
            )}
            <Route exact path='/'>
              {authCtx.isLoggedIn && <ItemList items={DUMMY_DATA} />}
              {!authCtx.isLoggedIn && <Redirect to='/auth' />}
            </Route>
            <Route exact path='/menu'>
              {authCtx.isLoggedIn && <ItemList items={DUMMY_DATA} />}
              {!authCtx.isLoggedIn && <Redirect to='/auth' />}
            </Route>
            <Route path='/order'>
              {authCtx.isLoggedIn && <Order />}
              {!authCtx.isLoggedIn && <Redirect to='/auth' />}
            </Route>
            <Route path='/cart'>
              {authCtx.isLoggedIn && <Cart />}
              {!authCtx.isLoggedIn && <Redirect to='/auth' />}
            </Route>
            <Route path='*'>
              {authCtx.isLoggedIn && <ItemList items={DUMMY_DATA} />}
              {!authCtx.isLoggedIn && <Redirect to='/auth' />}
            </Route>
          </Switch>
          {/* <main>
          <ItemList items={DUMMY_DATA} />
        </main> */}

          {/* <header>
        <h1>Brave Cafe By Ashish</h1>
        <CartBotton />
      </header> */}
          {/* <div className='grid-container'>
            <div class='grid-item'>1</div>
            <div class='grid-item'>2</div>
            <div class='grid-item'>3</div>
            <div class='grid-item'>4</div>
            <div class='grid-item'>5</div>
            <div class='grid-item'>6</div>
            <div class='grid-item'>7</div>
            <div class='grid-item'>8</div>
            <div class='grid-item'>9</div>
          </div> */}

          {/* {DUMMY_DATA.map((data) => {
            <ItemContainer items={data} />;
          })} */}
        </div>
      </CartProvider>
    </>
  );
}

export default App;
