import { useState } from "react";
import { getAllUsers, User } from "../services/userService";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllUsers();
      if (response && response.data) {
        setUsers(response.data);
        setSuccess("Users fetched successfully");
      } else {
        console.error("User data is missing or undefined");
      }
    } catch (err) {
      const apiError = err as ApiError;
      console.error("Error fetching users:", err);
      setError(apiError.response?.data?.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    loading,
    error,
    success,
    fetchUsers,
  };
};
