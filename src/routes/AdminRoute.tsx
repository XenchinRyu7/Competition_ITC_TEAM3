import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { useAuth } from "../context/useAuth";

const AdminRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default AdminRoute;
