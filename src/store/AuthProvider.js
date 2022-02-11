import AuthContext from './AuthContext';
import React, { useState, useContext } from 'react';
import CartContext from './cartContext';
const retrieveStoredData = () => {
  const storedToken = localStorage.getItem('token');
  const storedEmail = localStorage.getItem('email');
  return {
    token: storedToken,
    email: storedEmail,
  };
};

const AuthContextProvider = (props) => {
  const cartCtx = useContext(CartContext);
  const tokenData = retrieveStoredData();

  let initialToken = '';
  let intitialEmail = '';
  if (tokenData.token && tokenData.email) {
    initialToken = tokenData.token;
    intitialEmail = tokenData.email;
  }

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(intitialEmail);

  const userIsLoggedIn = !!token && !!email;

  const logoutHandler = () => {
    cartCtx.clearCartData();
    console.log(cartCtx.items);

    setToken(null);
    localStorage.removeItem('token');
    setEmail('');
    localStorage.removeItem('email');
  };

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
