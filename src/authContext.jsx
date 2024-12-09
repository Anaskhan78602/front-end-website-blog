import React, { createContext, useState, useContext } from "react";

// Create a Context for the authentication state
const AuthContext = createContext();

// Create a custom hook to use authentication state
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that provides authentication state to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user state to hold the logged-in user

  const login = (userData) => {
    setUser(userData); // Set user data on login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
