import AuthContext from './AuthContext';
import React, { useState, useEffect, useCallback, useContext } from 'react';

const retrieveStoredData = () => {
  const storedToken = localStorage.getItem('token');
  const storedEmail = localStorage.getItem('email');
  return {
    token: storedToken,
    email: storedEmail,
  };
};

const AuthContextProvider = (props) => {
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

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    setEmail('');
    localStorage.removeItem('email');
  }, []);

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
  };

  const contextValue = {
    token: token,
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
