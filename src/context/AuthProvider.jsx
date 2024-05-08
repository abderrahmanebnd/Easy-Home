import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const value = { auth, setAuth };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (value === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return value;
}

export default AuthProvider;
