import { createContext, useContext, useState } from "react";
import axios from "../services/axios/axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e, email, pwd) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      setAuth({
        email,
        pwd,
        role: response?.data?.user.role,
        token: response?.data?.token,
      });

      console.log(response.headers);
      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Network or Server Problems");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        console.error("Unauthorized");
      } else if (err.response?.status === 404) {
        console.log(err.response?.status);
        setErrMsg("Please Check Your Email or Password !");
      } else {
        console.error("Login Failed");
      }
      // if (errMsg) {
      //   errRef.current?.focus();
      // }
    } finally {
      setIsLoading(false);
    }
  }

  const value = { auth, setAuth, isLoading, errMsg, setErrMsg, handleLogin };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (value === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return value;
}

export default AuthProvider;
