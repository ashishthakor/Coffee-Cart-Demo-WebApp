import { ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';

import classes from './NavBar.module.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import AuthContext from '../../../store/AuthContext';

import { useContext } from 'react';
import CartContext from '../../../store/cartContext';
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    cartCtx.clearCartData();
  };
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <nav className='navbar navbar-expand-lg  navbar-light navbar- navbar-fixed-top'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink
              to='/'
              className={classes.links}
              activeClassName={classes.selected}
              // className={classes.links}
              // activeClassName={classes.selected}
            >
              Brave Cafe
            </NavLink>
          </li>
        </ul>
        <button
          className='navbar-toggler bg-light'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            {isLoggedIn && (
              <li className='nav-item active'>
                <NavLink
                  to='/menu'
                  className={classes.links}
                  activeClassName={classes.selected}
                >
                  Menu
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className='nav-item active'>
                <NavLink
                  to='/order'
                  className={classes.links}
                  activeClassName={classes.selected}
                >
                  Order
                </NavLink>
              </li>
            )}
          </ul>
          <ul className='navbar-nav ml-auto'>
            {isLoggedIn && (
              <li className='nav-item ' style={{ fontSize: '2.5rem' }}>
                <NavLink
                  to='/cart'
                  className={classes.links}
                  activeClassName={classes.selected}
                >
                  <ShoppingCartOutlined />
                  <span>{numberOfCartItems}</span>
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className='nav-item ' style={{ fontSize: '2rem' }}>
                <NavLink
                  to='/auth'
                  className={classes.links}
                  activeClassName={classes.selected}
                >
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className='nav-item ' style={{ fontSize: '2rem' }}>
                <NavLink
                  to='/auth'
                  className={classes.links}
                  activeClassName={classes.selected}
                  onClick={logoutHandler}
                >
                  LogOut
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
