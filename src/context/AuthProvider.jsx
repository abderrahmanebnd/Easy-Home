import { createContext, useContext, useEffect, useState } from "react";
import axios, { axiosPrivate } from "../services/axios/axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login";
const LOGOUT_URL = "/auth/logout";
const VALIDATE_COOKIE_URL = "/users/me"; // Endpoint to validate authentication cookie

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    // Load authentication state from localStorage if available
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : {};
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [errLogout, setErrLogout] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(auth).length === 0) {
      localStorage.removeItem("auth");
    } else {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  // useEffect(() => {
  //   async function checkAuthentication() {
  //     try {
  //       const response = await axiosPrivate.get(VALIDATE_COOKIE_URL);

  //       setAuth({
  //         email: response?.data?.user.email,
  //         role: response?.data?.user.role,
  //         token: response?.data?.token,
  //       });
  //     } catch (error) {
  //       // If there's an error or the cookie is invalid, clear the authentication state
  //       // setAuth({});
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   checkAuthentication();
  // }, []);

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
        role: response?.data?.user.role,
        token: response?.data?.token,
      });

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

  async function handleLogout() {
    setIsLoading(true);
    try {
      const response = axios.get(LOGOUT_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        withCredentials: true,
      });
      if ((response.status = "success")) {
        setAuth({});
        navigate("/login", { replace: true });
      }
    } catch (err) {
      // setErrLogout("Logout Failed"); // we can set it with toast
      console.log("Logout Failed");
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    auth,
    setAuth,
    isLoading,
    errMsg,
    setErrMsg,
    errLogout,
    setErrLogout,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (value === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return value;
}

export default AuthProvider;
