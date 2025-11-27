const _jsxFileName = "src\\context\\AuthContext.tsx";import React, { createContext, useContext, useState, useEffect } from 'react';









const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    React.createElement(AuthContext.Provider, { value: { user, login, logout, isAuthenticated }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}
      , children
    )
  );
};