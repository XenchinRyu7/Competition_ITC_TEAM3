import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { useAuth } from "../hooks/useAuth";
import { OrderProvider } from "../context/OrderContext";

const AdminRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <OrderProvider>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </OrderProvider>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default AdminRoute;
