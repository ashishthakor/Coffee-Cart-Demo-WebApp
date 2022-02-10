import React, { createContext } from 'react';
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export default AuthContext;
