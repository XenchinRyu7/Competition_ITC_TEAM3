import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../context/useAuth";

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default PrivateRoute;
