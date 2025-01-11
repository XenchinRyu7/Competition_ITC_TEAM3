// src/services/authService.ts
import { User } from "../models/user";
import axiosInstance from "../utils/axios";

interface AuthResponse {
  data: {
    id: string;
    token: string;
    role: string;
    user: User;
  };
}

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
}): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/users", data);
  return response.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/users/login", data);
  return response.data;
};

// src/services/user.ts
export const getUser = async (): Promise<User> => {
  const response = await axiosInstance.get<{ data: User }>("/users/current");
  return response.data.data;
};
