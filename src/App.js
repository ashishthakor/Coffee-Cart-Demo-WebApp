import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import DUMMY_DATA from './assets/Data';

import Navbar from './componants/header/NavBar/Navbar';
import ItemList from './componants/Main/Menu/ItemList';
import Cart from './componants/Main/Cart/Cart';
import Order from './componants/Main/Order/Order';
import CartProvider from './store/CartProvider';
import { useContext } from 'react';
import AuthForm from './componants/Main/Auth/AuthForm';
import AuthContext from './store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);

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
        </div>
      </CartProvider>
    </>
  );
}

export default App;
