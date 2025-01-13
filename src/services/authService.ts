// src/services/authService.ts
import axios from "../utils/axios";
import { User } from "../models/user";

interface AuthResponse {
  user: User;
  access_token: string;
}

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
}): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>("/users", data);
  return response.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>("/users/login", data);
  return response.data;
};
