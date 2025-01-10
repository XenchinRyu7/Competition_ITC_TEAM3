// src/hooks/useAuth.ts
import { useState } from "react";
import { registerUser, loginUser } from "../services/authService";
import { User } from "../models/user";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("access_token")
  );

  const register = async (data: {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    role: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await registerUser(data);
      setUser(response.user);
      localStorage.setItem("access_token", response.access_token);
      setSuccess("User registered successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error registering");
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(data);
      setUser(response.user);
      localStorage.setItem("access_token", response.access_token);
      setSuccess("User logged in successfully");
      setIsAuthenticated(true);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    success,
    isAuthenticated,
  };
};
