import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import UserLayout from "../layout/UserLayout";

const UserRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <UserLayout>
      <Outlet />
    </UserLayout>
  ) : (
    <Navigate to="/auth/signin" />
  );
};

export default UserRoute;
