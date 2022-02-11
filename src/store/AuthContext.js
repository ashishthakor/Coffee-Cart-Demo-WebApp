import { createContext } from 'react';
const AuthContext = createContext({
  token: '',
  email: '',
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export default AuthContext;
