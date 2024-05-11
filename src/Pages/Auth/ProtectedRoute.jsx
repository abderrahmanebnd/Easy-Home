import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  const isAdmin = auth?.role?.toLowerCase() === "admin";

  if (auth?.token && !isAdmin) {
    return <Navigate to="unauthorized" replace />;
  }

  if (!auth?.token) {
    return <Navigate to="login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
