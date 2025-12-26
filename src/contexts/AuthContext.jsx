import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prevUser = localStorage.getItem("user");
    if (prevUser) setUser(JSON.parse(prevUser));
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const userData = { email };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const isLoggedIn = typeof user === "object" && user !== null;
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: isLoggedIn,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
