import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useAuth } from "../context/useAuth";

const AuthRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/user/post-service" />
  ) : (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthRoute;
