import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/IdCard";
import Certificates from "./Pages/Certificates";
import PageNotFound from "./Pages/PageNotFound";
import Applications from "./features/Applications/Applications";
import CertificatesCharts from "./features/Certificates/CertificatesCharts";
import Deals from "./features/Deals/Deals";
import Posts from "./features/Posts/Posts";

import Reviews from "./features/Reviews/Reviews";
import Users from "./features/Users/Users";
import Workers from "./features/Workers/Workers";
import AppLayout from "./ui/AppLayout";
import Login from "./Pages/Auth/Login";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";
import Unauthorized from "./Pages/Auth/Unauthorized";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import IdCard from "./Pages/IdCard";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="unauthorized" element={<Unauthorized />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="dashboard" element={<Dashboard />}>
                  <Route
                    index
                    element={<Navigate replace to="applications" />}
                  />
                  <Route path="applications" element={<Applications />} />
                  <Route path="deals" element={<Deals />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="certificates" element={<CertificatesCharts />} />
                  <Route path="users" element={<Users />} />
                  <Route path="workers" element={<Workers />} />
                </Route>
                <Route path="idCard" element={<IdCard />} />
                <Route path="certificates" element={<Certificates />} />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "18px",
            maxWidth: "500px",
            padding: "18px 26px",
            backgroundColor: "#f1f5f9",
            color: "",
          },
        }}
      />
    </>
  );
}
