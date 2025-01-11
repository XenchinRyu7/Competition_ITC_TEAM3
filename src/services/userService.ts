import axiosInstance from "../utils/axios";

export interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string;
  role: string;
  status: string;
}

interface AllUsersResponse {
  data: User[];
}

export const getAllUsers = async (): Promise<AllUsersResponse> => {
  const response = await axiosInstance.get<AllUsersResponse>("/admin/users");
  return response.data;
};
