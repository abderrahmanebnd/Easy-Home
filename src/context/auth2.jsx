import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axios/axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "/auth/login";
const VALIDATE_COOKIE_URL = "/auth/validate"; // Endpoint to validate authentication cookie
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Initially set to true to check authentication on app initialization
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuthentication() {
      try {
        // Send a request to validate the authentication cookie
        const response = await axios.get(VALIDATE_COOKIE_URL, {
          withCredentials: true, // Ensure cookies are sent with the request
        });

        // If the cookie is valid, set the user's authentication state
        setAuth({
          email: response?.data?.user.email,
          role: response?.data?.user.role,
          token: response?.data?.token,
        });
      } catch (error) {
        // If there's an error or the cookie is invalid, clear the authentication state
        setAuth({});
      } finally {
        // Set loading to false after checking authentication
        setIsLoading(false);
      }
    }

    checkAuthentication();
  }, []);

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
      // Handle login errors
    } finally {
      setIsLoading(false);
    }
  }

  // Add logout function if required
  // async function handleLogout() {
  //   // Clear authentication state and cookie
  //   setAuth({});
  //   // Navigate to logout route or perform any other necessary actions
  // }

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
