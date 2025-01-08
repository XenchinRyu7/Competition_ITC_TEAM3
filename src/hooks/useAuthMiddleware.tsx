import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthMiddleware = (
  isAuthenticated: boolean,
  redirectPath = "/login"
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, redirectPath]);
};

export default useAuthMiddleware;
