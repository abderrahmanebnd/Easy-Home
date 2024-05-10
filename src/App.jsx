import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import Certificates from "./Pages/Certificates";
import PageNotFound from "./Pages/PageNotFound";
import Applications from "./features/Applications/Applications";
import CertificatesCharts from "./features/Certificates/CertificatesCharts";
import Deals from "./features/Deals/Deals";
import Posts from "./features/Posts/Posts";
import ReportsCharts from "./features/Reports/ReportsCharts";
import Reviews from "./features/Reviews/Reviews";
import Users from "./features/Users/Users";
import Workers from "./features/Workers/Workers";
import AppLayout from "./ui/AppLayout";
import Login from "./Pages/Login";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./ui/ProtectedRoute";
import Unauthorized from "./ui/Unauthorized";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route element={<Navigate replace to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route
                    index
                    element={<Navigate replace to="applications" />}
                  />
                  <Route path="applications" element={<Applications />} />
                  <Route path="deals" element={<Deals />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path="reports" element={<ReportsCharts />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="certificates" element={<CertificatesCharts />} />
                  <Route path="users" element={<Users />} />
                  <Route path="workers" element={<Workers />} />
                </Route>
                <Route path="reports" element={<Reports />} />
                <Route path="certificates" element={<Certificates />} />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
